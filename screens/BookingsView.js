import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	Text,
} from "react-native";

import { NFTCard, NFTCard2, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, config, NFTData } from "../constants";

const BookingsView = () => {
	const [nftData, setNftData] = useState(NFTData);
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);

	const handleSearch = (value) => {
		if (value.length === 0) {
			setNftData(NFTData);
		}

		const filteredData = NFTData.filter((item) =>
			item.name.toLowerCase().includes(value.toLowerCase())
		);

		if (filteredData.length === 0) {
			setNftData(NFTData);
		} else {
			setNftData(filteredData);
		}
	};
	const querystring = "SELECT * FROM Booking WHERE C_PhNo = "+1234567890+";";

	useEffect(() => {
		fetch(config.domain + "/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => setData(responseJson))
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);
	console.log(JSON.stringify(data2[0]));
	//console.log(nftData);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
			<FocusedStatusBar backgroundColor={COLORS.black} />
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<View style={{ flex: 1 }}>
					<FlatList
						data={data2}
						renderItem={({ item }) => <NFTCard2 data={item} />}
						keyExtractor={(item) => item.S_ID}
						numColumns={2}
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
				</View>
			)}
		</SafeAreaView>
	);
};

export default BookingsView;
