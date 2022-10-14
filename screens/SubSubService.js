import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	Text,
} from "react-native";

import { NFTCard3, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";
import { getQuery, postQuery } from "../mysqlConnect";

const SubSubService = ({ route }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const { data } = route.params;
	const querystring =
		"SELECT * FROM SubSubService WHERE SubS_ID = " + [data.SubS_ID] + ";";

	useEffect(() => {
		fetch("http://192.168.29.195:8080/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => setData(responseJson))
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);
	console.log(JSON.stringify(data2));
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
						renderItem={({ item }) => <NFTCard3 data={item} />}
						keyExtractor={(item) => item.SubSubs_description}
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

export default SubSubService;
