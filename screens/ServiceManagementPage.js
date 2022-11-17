import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	Text,
	Image,
	TouchableOpacity,
	ImageBackground,
	StyleSheet,
	Switch,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";

import { NFTCard, NFTCard2, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData, SIZES, assets, SHADOWS, config } from "../constants";

import { useNavigation } from "@react-navigation/native";

const ServiceManagementPage = () => {
	const [nftData, setNftData] = useState(NFTData);
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);

	const [isEnabled, setIsEnabled] = useState(false);
	const [isLocationSet, setisLocationSet] = useState("");
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const navigation = useNavigation();

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
	const querystring =
		"SELECT * FROM Booking WHERE SMan_PhNo = " + 1234567890 + ";";

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
			<ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
				<FocusedStatusBar backgroundColor={COLORS.black} />
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<View style={{ flex: 1 }}>
						<View
							style={{
								backgroundColor: COLORS.primary,
								flexDirection: "row",
								padding: 5,
							}}
						>
							<TouchableOpacity onPress={() => navigation.navigate("Home")}>
								<Image source={assets.icon} style={{ width: 48, height: 48 }} />
							</TouchableOpacity>
							<Text
								style={{
									flex: 1,
									alignSelf: "center",
									fontWeight: "bold",
									fontSize: 19,
									color: COLORS.white,
									width: "100%",
									textAlign: "center",
								}}
							>
								Professional Management Page
							</Text>
						</View>
						<View
							style={{
								fontWeight: "bold",
								fontSize: 30,
								color: COLORS.white,
								backgroundColor: isEnabled ? "#0ECC6D" : "#CC2030",
								width: "100%",
								height: "4%",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
									textAlign: "center",
									color: COLORS.white,
								}}
							>
								{isEnabled
									? "Your account is verified!"
									: "Your account is currently not verified"}
							</Text>
						</View>
						<Text style={{ fontSize: 18, marginTop: 10, margin: 7 }}>
							Please mark your availability days for a week
						</Text>
						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "space-evenly",
							}}
						>
							{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((item) => {
								return (
									<TouchableOpacity
										key={item}
										style={styles.button4}
										onPress={() => navigation.navigate(null)}
									>
										<Text
											style={{
												fontSize: 17,
												textAlign: "center",
												color: COLORS.primary,
											}}
										>
											{item}
										</Text>
									</TouchableOpacity>
								);
							})}
						</View>
						<View
							style={{
								backgroundColor: "#CACACA",
								alignSelf: "center",
								marginBottom: 20,
								marginTop: 15,
								height: 1,
								width: "95%",
							}}
						/>

						<TouchableOpacity
							style={styles.button}
							onPress={() => navigation.navigate(null)}
						>
							<Text
								style={{
									fontSize: 17,
									textAlign: "center",
									width: "80%",
									color: COLORS.primary,
								}}
							>
								Area Not Selected {"\n\n"} Click here to set your Location/City
								to find nearby services for you
							</Text>
							<Image
								source={assets.location_serviceManagement}
								style={{ width: 30, height: 30 }}
							/>
						</TouchableOpacity>

						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "space-evenly",
							}}
						>
							<TouchableOpacity
								style={styles.button2}
								onPress={() => navigation.navigate("")}
							>
								<View style={{ flexDirection: "column" }}>
									<Text
										style={{
											fontWeight: "bold",
											fontSize: 20,
											textAlign: "center",
											color: COLORS.primary,
										}}
									>
										Payments
									</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								style={styles.button2}
								onPress={() => navigation.navigate("")}
							>
								<Text
									style={{
										fontWeight: "bold",
										fontSize: 20,
										textAlign: "center",
										color: COLORS.primary,
									}}
								>
									Bookings
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button2}
								onPress={() => navigation.navigate("")}
							>
								<Text
									style={{
										fontWeight: "bold",
										fontSize: 20,
										textAlign: "center",
										color: COLORS.primary,
									}}
								>
									Profile
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button2}
								onPress={() => navigation.navigate("")}
							>
								<Text
									style={{
										fontWeight: "bold",
										fontSize: 20,
										textAlign: "center",
										color: COLORS.primary,
									}}
								>
									Wallet
								</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							style={styles.button3}
							onPress={() => navigation.navigate("RequestNewService")}
						>
							<Text style={styles.bottomButton}>
								Request for new Skill or Service
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button3}
							onPress={() => navigation.navigate("")}
						>
							<Text style={styles.bottomButton}>Contact Us</Text>
						</TouchableOpacity>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default ServiceManagementPage;

const styles = StyleSheet.create({
	button: {
		shadowColor: "rgb(255,255,0)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.white,
		borderRadius: SIZES.font,
		borderColor: "#F85B5D",
		borderWidth: 0.5,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 130,
		width: "95%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	button2: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.white,
		borderRadius: SIZES.font,
		marginVertical: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 100,
		width: "45.5%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	button3: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.white,
		borderRadius: SIZES.font,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: "94%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	button4: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.white,
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: "13%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
	},
	bottomButton: {
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
		color: COLORS.primary,
	},
});
