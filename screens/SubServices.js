import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	ActivityIndicator,
	StatusBar,
	FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, assets, SHADOWS, FONTS, config } from "../constants";
import {
	NFTCard2,
	RectButton,
	SubInfo,
	DetailsDesc,
	DetailsBid,
	FocusedStatusBar,
} from "../components";

const SubServices = ({ route, navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const { data } = route.params;

	const querystring =
		"SELECT * FROM subservice WHERE S_ID = " + [data.S_ID] + ";";

	useEffect(() => {
		fetch(config.domain + "/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson == 404) {
					responseJson = [];
				}
				setData(responseJson);
			})
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: "rgba(255,255,255,1)" }}
		>
			<FocusedStatusBar backgroundColor={COLORS.black} />
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<View style={{ flex: 1, height: "100%" }}>
					<FlatList
						nestedScrollEnabled
						data={data2}
						renderItem={({ item }) => (
							<NFTCard2 data={item} />
						)}
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
						<View
							style={{
								height: 300,
								backgroundColor: COLORS.primary,
							}}
						/>
						<View
							style={{
								flex: 1,
								backgroundColor: COLORS.white,
							}}
						/>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
};

export default SubServices;
