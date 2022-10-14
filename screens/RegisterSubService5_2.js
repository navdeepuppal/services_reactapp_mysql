import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

import { NFTCard5, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS } from "../constants";
import { getQuery, postQuery } from "../mysqlConnect";

const RegisterSubService5_2 = ({ route }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	const { data } = route.params;

	const handleSearch = (value) => {
		if (value.length === 0) {
			setData(data2_backup);
		}

		const filteredData = data2_backup.filter((item) =>
			item.S_Name.toLowerCase().includes(value.toLowerCase())
		);

		if (filteredData.length === 0) {
			setData(data2_backup);
		} else {
			setData(filteredData);
		}
	};

	const querystring =
		"SELECT * FROM SubService WHERE S_ID = " + [data.S_ID] + ";";

	useEffect(() => {
		fetch("http://192.168.29.195:8080/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => {
				setData(responseJson);
				setDataBackup(responseJson);
			})
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);
	console.log(JSON.stringify(data2));
	//console.log(nftData);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
			<FocusedStatusBar backgroundColor={COLORS.black} />
			{isLoading ? (
				<View>
					<ActivityIndicator />
				</View>
			) : (
				<View style={{ flex: 1 }}>
					<FlatList
						data={data2}
						renderItem={({ item }) => <NFTCard5 data={item} />}
						keyExtractor={(item) => item.SubS_ID}
						numColumns={3}
						showsVerticalScrollIndicator={false}
					/>
					<View
						style={{
							position: "absolute",
							top: 0,
							bottom: 0,
							right: 0,
							left: 0,
							zIndex: -1,
							flexWrap: "wrap",
						}}
					>
						<View style={{ height: 300, backgroundColor: COLORS.primary }} />
						<View style={{ flex: 1, backgroundColor: COLORS.white }} />
					</View>

					<TouchableOpacity
						style={{
							borderWidth: 1,
							borderColor: "rgba(0,0,0,0)",
							alignItems: "center",

							alignSelf: "flex-end",
							justifyContent: "right",
							marginLeft: "auto",
							width: 60,
							height: 60,
							backgroundColor: "green",
							borderRadius: 50,
							marginTop: 10,
							marginRight: 10,
						}}
						onPress={() => navigation.navigate("RegisterSubService6")}
					>
						<Image
							source={require("../assets/rightarrow.png")}
							resizeMode="contain"
							style={{ width: "95%", height: "95%" }}
						/>
					</TouchableOpacity>
				</View>
			)}
		</SafeAreaView>
	);
};

export default RegisterSubService5_2;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
});
