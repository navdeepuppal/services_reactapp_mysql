import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	StyleSheet,
	FlatList,
} from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS, config } from "../constants";
import { NFTCard2 } from "../components";

const SubServicesModal = ({ data, setSubSModalVisible }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);

	const querystring =
		"SELECT * FROM SubService WHERE S_ID = " + [data.S_ID] + ";";

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
	return isLoading ? (
		<ActivityIndicator />
	) : (
		<View style={{ width: "100%" }}>
			<FlatList
				nestedScrollEnabled
				data={data2}
				renderItem={({ item }) => (
					<NFTCard2
						data={item}
						setSubSModalVisible={setSubSModalVisible}
					/>
				)}
				keyExtractor={(item) => item.S_ID}
				numColumns={2}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default SubServicesModal;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});
