import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NFTCard6, FocusedStatusBar, SubSubServicesHeader } from "../components";
import { COLORS, config, SIZES } from "../constants";
import { Colors, Snackbar } from "react-native-paper";

const SubSubService = ({ route, navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	const prevData = route.params.data;
	const [visible, setVisible] = React.useState(true);

	const onToggleSnackBar = () => setVisible(!visible);

	const onDismissSnackBar = () => setVisible(false);

	const handleSearch = (value) => {
		if (value.length === 0) {
			s;
			setData(data2_backup);
		}

		const filteredData = data2_backup.filter((item) => item.SubSubS_Name.toLowerCase().includes(value.toLowerCase()) || item.SubSubS_Description.toLowerCase().includes(value.toLowerCase()));

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

	const querystring = "SELECT subsubservice.*, " + prevData.S_ID + " as S_ID, 0 as itemCount FROM subsubservice where subsubservice.SubS_ID = " + [prevData.SubS_ID] + ";";

	useEffect(() => {
		fetch(config.domain + "/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson == 404) {
					responseJson = [];
				}
				setDataBackup(responseJson);
				setData(responseJson);
			})
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<FocusedStatusBar backgroundColor={COLORS.gray} />

			<View style={{ flex: 1 }}>
				<FlatList
					nestedScrollEnabled
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
			{totalPrice ? (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						height: "7%",
						backgroundColor: "white",
						alignContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							marginLeft: 25,
							color: COLORS.primary,
							fontSize: 22,
						}}
					>
						₹ {totalPrice}
					</Text>
					<TouchableOpacity
						style={{
							backgroundColor: "black",
							borderRadius: 10,
							marginRight: "5%",
							padding: "1%",
							width: "35%",
							height: "80%",
							justifyContent: "center",
						}}
						onPress={() =>
							navigation.navigate("Cart", {
								data2_backup,
							})
						}
					>
						<Text
							style={{
								color: COLORS.white,
								fontSize: 20,
								fontWeight: "600",
								alignSelf: "center",
							}}
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
