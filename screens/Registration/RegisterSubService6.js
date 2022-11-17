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

import { NFTCard5, HomeHeader, FocusedStatusBar } from "../../components";
import { COLORS, SIZES, SHADOWS, config } from "../../constants";
import { NFTTitle } from "../../components/SubInfo";

import { useNavigation } from "@react-navigation/native";

const RegisterSubService6 = ({ route }) => {
	const navigation = useNavigation();
	console.log("\nPage\t" + "RegisterSubService6");

	/* const setSelected = (S_ID, isSelected) => {
		var data3 = data2;
		for (let i = 0; i < data2.length; i++) {
			if (data3[i] == S_ID) {
				data3[i].isSelected = isSelected;
				break;
			}
		}
		setData(data3);
	}; */
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	const { temp } = route.params;
	const prevData = temp;
	//const [isSelected, setSelected] = useState([]);

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
		'SELECT *, "false" as isSelected, null as SMan_BasePrice FROM SubService WHERE S_ID = ' +
		prevData +
		";";

	useEffect(() => {
		fetch(config.domain + "/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => {
				setData(responseJson);
				/* data2.map((item) => {
					item.isSelected = false;
				});
				console.log(JSON.stringify(data2) + "\t before"); */
				//console.log(responseJson.length);
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
				<ActivityIndicator />
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
						Select & Enroll into multiple sub-services in which you can serve:
					</Text>
					<Text
						style={{
							backgroundColor: COLORS.white,
							alignSelf: "center",
							fontSize: 12,
							color: COLORS.primary,
							width: "100%",

							textAlign: "center",
							margin: SIZES.base,
						}}
					>
						For Ex: If you are a Carpenter then your sub services will be
						Furniture Repair, Drilling, Window Repair, Full House Wood Work or
						any other.
					</Text>
					<FlatList
						data={data2}
						renderItem={({ item, index }) => (
							<NFTCard5
								data={item}
								data2={data2}
								setData={setData}
								index={index}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ height: "100%" }}
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
							position: "absolute",
							right: 0,
							bottom: 0,
							width: 60,
							height: 60,
							backgroundColor: "green",
							borderRadius: 50,
							marginBottom: 5,
							marginRight: 5,
						}}
						onPress={() =>
							navigation.navigate("RegisterSubService7", { data2 })
						}
					>
						<Image
							source={require("../../assets/rightarrow.png")}
							resizeMode="contain"
							style={{ width: "95%", height: "95%", top: 2, left: 4 }}
						/>
					</TouchableOpacity>
				</View>
			)}
		</SafeAreaView>
	);
};

export default RegisterSubService6;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
});
