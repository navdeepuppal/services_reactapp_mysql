import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	Text,
	Image,
	StyleSheet,
} from "react-native";

import { NFTCard1, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS } from "../constants";
import { getQuery, postQuery } from "../mysqlConnect";

const Home = () => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	//vahan se utha le

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
		"SELECT * FROM Service WHERE S_ID IN (SELECT S_ID FROM SubService);";

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
					<Image
						source={require("../assets/login.png")}
						resizeMode="center"
						style={styles.image}
					/>
				</View>
			) : (
				<View style={{ flex: 1 }}>
					<FlatList
						data={data2}
						renderItem={({ item }) => <NFTCard1 data={item} />}
						keyExtractor={(item) => item.S_ID}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
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
				</View>
			)}
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
});
