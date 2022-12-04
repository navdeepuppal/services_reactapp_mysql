import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	Text,
	StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { NFTCard4, HomeHeader, FocusedStatusBar } from "../../components";

import { COLORS, config, SIZES } from "../../constants";

const RegisterSubService5 = ({ navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	console.log("\nPage\t" + "RegisterSubService5");

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
	const querystring = "SELECT * FROM Service;";

	useEffect(() => {
		fetch(config.domain + "/get/" + querystring, {
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
					<Text
						style={{
							backgroundColor: COLORS.primary,
							alignSelf: "center",
							fontWeight: "bold",
							fontSize: 30,
							color: COLORS.white,
							width: "100%",
							textAlign: "center",
						}}
					>
						Sqera Registration
					</Text>

					<Text
						style={{
							backgroundColor: COLORS.white,
							alignSelf: "center",
							fontWeight: "bold",
							fontSize: 22,
							color: COLORS.primary,
							width: "100%",

							textAlign: "center",
							margin: SIZES.base,
						}}
					>
						Select the service which you can serve:
					</Text>
					<FlatList
						data={data2}
						renderItem={({ item }) => <NFTCard4 data={item} />}
						keyExtractor={(item) => item.S_ID}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ height: "100%" }}
					/>
					{/* <View
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
					</View> */}
				</View>
			)}
		</SafeAreaView>
	);
};

export default RegisterSubService5;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
});
