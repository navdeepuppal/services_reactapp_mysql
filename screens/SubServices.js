import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	ActivityIndicator,
	StatusBar,
	FlatList,
} from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS, config } from "../constants";
import {
	CircleButton,
	NFTCard2,
	RectButton,
	SubInfo,
	DetailsDesc,
	DetailsBid,
	FocusedStatusBar,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
	<View style={{ width: "100%", height: 373 }}>
		<Image
			source={data.image}
			resizeMode="cover"
			style={{ width: "100%", height: "100%" }}
		/>

		<CircleButton
			imgUrl={assets.left}
			handlePress={() => navigation.goBack()}
			left={15}
			top={StatusBar.currentHeight + 10}
		/>

		<CircleButton
			imgUrl={assets.heart}
			right={15}
			top={StatusBar.currentHeight + 10}
		/>
	</View>
);

const SubServices = ({ route, navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const { data } = route.params;

	const querystring =
		"SELECT * FROM SubService WHERE S_ID = " + [data.S_ID] + ";";

	useEffect(() => {
		fetch(config.domain + "/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => setData(responseJson))
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "rgba(255,255,255,1)" }}>
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

export default SubServices;
