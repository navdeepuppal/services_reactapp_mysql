import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	TouchableOpacity,
	FlatList,
	Text,
	Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NFTCard6, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, config, NFTData } from "../constants";
import SubSubServicesHeader from "../components/SubSubServicesHeader";
import { Colors } from "react-native-paper";

const SubSubService = ({ route, navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	const prevData = route.params.data;

	const handleSearch = (value) => {
		if (value.length === 0) {
			setData(data2_backup);
		}

		const filteredData = data2_backup.filter(
			(item) =>
				item.SubSubS_Name.toLowerCase().includes(value.toLowerCase()) ||
				item.SubSubS_Description.toLowerCase().includes(value.toLowerCase())
		);

		/* if (filteredData.length === 0) {
			setData(data2_backup);
		} else {
			setData(filteredData);
		} */
		setData(filteredData);
	};

	let totalPrice = 0;
	data2_backup.forEach((item) => {
		totalPrice += item.SubSubS_Price * item.itemCount;
	});
	/* const querystring =
		"SELECT subsubservice.*, subservice.S_ID, 0 as itemCount FROM subsubservice, subservice where subsubservice.SubS_ID = subservice.SubS_ID and subservice.S_ID = " +
		[prevData.S_ID] +
		";"; */

	const querystring =
		"SELECT subsubservice.*, " +
		prevData.S_ID +
		" as S_ID, 0 as itemCount FROM subsubservice where subsubservice.SubS_ID = " +
		[prevData.SubS_ID] +
		";";

	useEffect(() => {
		fetch(config.domain + "/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => {
				setDataBackup(responseJson);
				setData(responseJson);
			})
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
			<FocusedStatusBar backgroundColor={COLORS.gray} />
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<View style={{ flex: 1 }}>
					
					<FlatList
						data={data2}
						renderItem={({ item, index }) => (
							<NFTCard6
								data={item}
								data2={data2_backup}
								setData={setDataBackup}
								index={index}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
						numColumns={1}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={
							<SubSubServicesHeader
								onSearch={handleSearch}
								SubS_Name={prevData.SubS_Name}
							/>
						}
					/>
				</View>
			)}
			{totalPrice ? (
				<View style={{ flexDirection: "row", justifyContent: "space-between", alignContent : "center", alignItems : "center" }}>
					<Text
						style={{
							marginLeft: 25,
							marginVertical: 10,
							color: COLORS.primary,
							fontSize: 22,
						}}
					>
						₹ {totalPrice}
					</Text>
					<TouchableOpacity
						style={{
							backgroundColor: "#0E8D4D",
							borderRadius: 10,
							alignItems: "center",
							marginRight: "5%",
							padding: "1%",
							height: "85%",
							width:"40%"
						}}
						onPress={() => navigation.navigate("Cart", { data2_backup })}
					>
						<Text
							style={{ color: COLORS.white, fontSize: 20, fontWeight: "600" }}
						>
							View Cart
						</Text>
					</TouchableOpacity>
				</View>
			) : null}
		</SafeAreaView>
	);
};

export default SubSubService;
