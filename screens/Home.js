import React, { useState, useEffect, Component } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	Text,
	Image,
	StyleSheet,
	Alert,
	Modal,
	TouchableOpacity,
	ImageBackground,
	Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";

import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Location from "expo-location";
import { NFTCard1, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, config, SIZES, assets } from "../constants";
import SubServicesModal from "../components/SubServicesModal";
import { ScrollView } from "react-native-gesture-handler";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TabActions } from "@react-navigation/core";
import DeliverablesHeader from "../components/DelieverablesHeader";

let apiKey = "YOUR_API_KEY";

function ServicesScreen() {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	const [subSModalVisible, setSubSModalVisible] = useState(-1);
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [address, setAddress] = useState(null);
	const navigation = useNavigation();
	//vahan se utha le

	const getLocation = () => {
		(async () => {
			let { status } =
				await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
			}

			Location.setGoogleApiKey(apiKey);

			console.log(status);

			let { coords } = await Location.getCurrentPositionAsync();

			setLocation(coords);

			//console.log(coords);

			if (coords) {
				let { longitude, latitude } = coords;

				let regionName = await Location.reverseGeocodeAsync({
					longitude,
					latitude,
				});
				setAddress(regionName[0]);
				//console.log(regionName, "nothing");
			}

			// console.log();
		})();
	};

	if (!location) getLocation();

	const handleSearch = (value) => {
		if (value.length === 0) {
			setData(data2_backup);
		}

		const filteredData = data2_backup.filter((item) =>
			item.S_Name.toLowerCase().includes(value.toLowerCase())
		);

		/* if (filteredData.length === 0) {
			setData(data2_backup);
		} else {
			setData(filteredData);
		} */
		setData(filteredData);
	};

	useEffect(() => {
		const C_Lat = 30.697;
		const C_Lon = 76.7389;

		//const C_Lat = Location.latitude;
		//const C_Lon = Location.longitude;
		fetch(
			config.domain +
				"/getLocationBasedServices/" +
				C_Lat +
				"/" +
				C_Lon,
			{
				method: "GET",
			}
		)
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson == 404) {
					responseJson = [];
				}
				setData(responseJson);
				setDataBackup(responseJson);
			})
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<View style={{ flex: 1 }}>
			{isLoading ? (
				<View
					style={{
						backgroundColor: "white",
						height: "100%",
					}}
				>
					<Text
						style={{
							alignSelf: "center",
							margin: 40,
							marginTop: "30%",
							fontSize: 34,
							justifyContent: "center",
						}}
					>
						Finding services near your location..{" "}
					</Text>
					<Image
						source={require("../assets/images/findservice.gif")}
						style={styles.image}
					/>
				</View>
			) : (
				<View>
					<HomeHeader onSearch={handleSearch} />
					<ScrollView
						style={{
							backgroundColor: "white",
						}}
					>
						<View>
							<View
								style={{
									marginTop: "2%",
									height: 150,
								}}
							>
								<SliderBox
									inactiveDotColor="#90A4AE"
									sliderBoxHeight={300}
									resizeMethod={"resize"}
									resizeMode={"cover"}
									autoplay
									circleLoop
									autoplayInterval={3000}
									height={"100%"}
									width={"98%"}
									opacity={0.8}
									borderRadius={20}
									dotStyle={{
										width: 0,
										height: 0,
										borderRadius: 5,
										marginHorizontal: 0,
										padding: 0,
										backgroundColor:
											"rgba(128, 128, 128, 0.92)",
									}}
									images={[
										"https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=2000&t=st=1672688375~exp=1672688975~hmac=8416e203ce399ec68facdf58c3080d1db24be40cc787610e70880e32166d1d9f",
										"https://img.freepik.com/free-photo/housewife-woking-home-lady-blue-shirt-woman-bathroom_1157-45526.jpg?w=2000&t=st=1672688038~exp=1672688638~hmac=d24482e0caf4b75f753a2435569d1c59b940371a9adf3ba4382d8c0d445c8d91",
										"https://img.freepik.com/free-photo/maintenance-repair-works-renovation-concept_343059-3524.jpg?w=2000&t=st=1672688423~exp=1672689023~hmac=23284809561f25ae7ad531b9e57fa8351ab30ab35ce9853ba1abcbb3e8482bb1",
										"https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18256.jpg?w=2000&t=st=1672688457~exp=1672689057~hmac=8d5efa29abacc4dc73fef70cf4fbd600751fbb48465853c6b1170639fb45c73b", // Network image
									]}
									// onCurrentImagePressed={(
									// 	index
									// ) =>
									// 	console.log(
									// 		`image ${index} pressed`
									// 	)
									// }
									// currentImageEmitter={(
									// 	index
									// ) =>
									// 	console.log(
									// 		`current pos is: ${index}`
									// 	)
									// }
								/>
							</View>
							<View>
								<Text
									style={{
										marginTop: "6%",
										margin: 10,
										fontSize: 25,
										fontWeight: "600",
									}}
								>
									Found popular services near you
								</Text>
							</View>
							<FlatList
								horizontal
								data={data2}
								renderItem={({ item, index }) => (
									<NFTCard1
										data={item}
										index={index}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								)}
								keyExtractor={(index) =>
									index.toString()
								}
								contentContainerStyle={{
									height: 300,
								}}
							/>
						</View>

						<View style={styles.loweredView}>
							<Modal
								animationType="fade"
								transparent={true}
								visible={subSModalVisible > -1}
								onRequestClose={() => {
									setSubSModalVisible(-1);
								}}
							>
								<TouchableOpacity
									style={styles.loweredView}
									onPressOut={() =>
										setSubSModalVisible(-1)
									}
								>
									<View
										style={[
											styles.modalView,
											{ width: "100%" },
										]}
									>
										<TouchableOpacity
											style={styles.button}
											onPress={() =>
												setSubSModalVisible(
													-1
												)
											}
										>
											<Text> ✖</Text>
										</TouchableOpacity>
										<SubServicesModal
											data={
												data2[
													subSModalVisible
												]
											}
											setSubSModalVisible={
												setSubSModalVisible
											}
										/>
									</View>
								</TouchableOpacity>
							</Modal>
						</View>
					</ScrollView>
				</View>
			)}
		</View>
	);
}

function DeliverablesScreen() {
	let totalPrice = 3;
	const [state, setButtonStatus] = useState("1");
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					margin: 20,
					justifyContent: "space-between",
				}}
			>
				<Text style={{ fontSize: 20, marginLeft: 20 }}>
					Fruits and Vegetables
				</Text>
				<Image
					source={assets.search}
					resizeMode="contain"
					style={{
						width: 20,
						height: 20,
						marginRight: SIZES.base,
					}}
				/>
			</View>
			<View
				style={{
					flexDirection: "row",
					flex: 1,
					backgroundColor: "rgba(245,245,245,255)",
				}}
			>
				<View
					style={{
						width: "24%",
						padding: 2,
						borderRightColor: "gray",
						borderRightWidth: 1,
					}}
				>
					<ScrollView>
						<TouchableOpacity
							style={{
								backgroundColor: "#ffded9",
								margin: 10,
								borderRadius: 15,
								height: 150,
								width: "90%",
								paddingTop: 15,
								justifyContent: "flex-start",
							}}
							onPress={() => setButtonStatus("2")}
						>
							<Image
								source={require("../assets/images/icon.png")}
								resizeMode="center"
								style={styles.inventoryImage}
							/>
							<Text
								style={{
									fontSize: 16,
									marginTop: 20,
									alignContent: "flex-end",
									justifyContent: "center",
									alignSelf: "center",
									textAlign: "center",
									color: COLORS.primary,
								}}
							>
								Fresh Vegetables
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: "#d9ffde",
								margin: 10,
								borderRadius: 15,
								height: 150,
								width: "90%",
								paddingTop: 15,
								justifyContent: "flex-start",
							}}
							onPress={() => setButtonStatus("1")}
						>
							<Image
								source={require("../assets/images/icon.png")}
								resizeMode="center"
								style={styles.inventoryImage}
							/>
							<Text
								style={{
									fontSize: 16,
									marginTop: 20,
									alignContent: "flex-end",
									justifyContent: "center",
									alignSelf: "center",
									textAlign: "center",
									color: "black",
								}}
							>
								Fresh Fruits
							</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>

				{/* Fruits Screen */}

				{state == 1 ? (
					<View style={{ width: "76%" }}>
						<ScrollView>
							<View
								style={{
									flexWrap: "wrap",
									flexDirection: "row",
								}}
							>
								<View
									style={{
										width: "49%",
										height: 220,
										paddingTop: 15,
										justifyContent: "flex-start",
										borderColor: "white",
										borderWidth: 1,
									}}
								>
									<Image
										source={require("../assets/images/icon.png")}
										resizeMode="cover"
										style={styles.image2}
									/>
									<Text
										style={{
											fontSize: 20,
											marginTop: 20,
											alignContent: "flex-end",
											justifyContent: "center",
											alignSelf: "center",
											textAlign: "center",
											color: "black",
										}}
									>
										Fresh Fruits
									</Text>

									<View
										style={{
											width: 100,
											height: 40,
											flexDirection: "row",
											borderColor:
												"rgb(200, 10, 200)",
											borderRadius: SIZES.font,
											borderWidth: 1,
											alignItems: "center",
											marginTop: "3%",
											alignSelf: "center",
											position: "relative",
										}}
									>
										<TouchableOpacity
											style={{
												borderRadius:
													SIZES.font,
												width: 40,
												height: 40,
												alignItems:
													"center",
												justifyContent:
													"center",
											}}
											onPress={() => {}}
										>
											<Text
												style={{
													fontSize: 25,
												}}
											>
												{" "}
												-{" "}
											</Text>
										</TouchableOpacity>

										<Text
											style={{ fontSize: 25 }}
										>
											11
										</Text>

										<TouchableOpacity
											style={{
												borderRadius:
													SIZES.font,
												width: 40,
												height: 40,
												alignItems:
													"center",
												justifyContent:
													"center",
											}}
											onPress={() => {
												//setItemCount(itemCount + 1);
												//data.itemCount = itemCount;
											}}
										>
											<Text
												style={{
													fontSize: 25,
												}}
											>
												{" "}
												+{" "}
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</ScrollView>
					</View>
				) : state == "2" ? (
					<View style={{ width: "69%" }}>
						<ScrollView>
							<View
								style={{
									flexWrap: "wrap",
									flexDirection: "row",
								}}
							>
								<View
									style={{
										margin: 1,
										width: "49%",
										paddingTop: 15,
										justifyContent: "flex-start",
										borderColor: "white",
										borderWidth: 3,
									}}
								>
									<Image
										source={require("../assets/images/icon.png")}
										resizeMode="cover"
										style={styles.image2}
									/>
									<Text
										style={{
											fontSize: 20,
											marginTop: 20,
											alignContent: "flex-end",
											justifyContent: "center",
											alignSelf: "center",
											textAlign: "center",
											color: "black",
										}}
									>
										Fresh Vegetables
									</Text>
									<Text
										style={{
											fontSize: 25,
											marginTop: 5,
											alignContent: "flex-end",
											justifyContent: "center",
											alignSelf: "center",
											textAlign: "center",
											color: "black",
										}}
									>
										₹100
									</Text>
									<Text
										style={{
											fontSize: 25,
											marginTop: 5,
											alignContent: "flex-end",
											justifyContent: "center",
											alignSelf: "center",
											textAlign: "center",
											color: "black",
										}}
									>
										₹100
									</Text>
									<View
										style={{
											width: 100,
											height: 40,
											flexDirection: "row",
											borderColor:
												"rgb(200, 10, 200)",
											borderRadius: SIZES.font,
											borderWidth: 1,
											alignItems: "center",
											marginTop: "3%",
											alignSelf: "center",
											position: "relative",
										}}
									>
										<TouchableOpacity
											style={{
												borderRadius:
													SIZES.font,
												width: 40,
												height: 40,
												alignItems:
													"center",
												justifyContent:
													"center",
											}}
											onPress={() => {}}
										>
											<Text
												style={{
													fontSize: 25,
												}}
											>
												{" "}
												-{" "}
											</Text>
										</TouchableOpacity>

										<Text
											style={{ fontSize: 25 }}
										>
											11
										</Text>

										<TouchableOpacity
											style={{
												borderRadius:
													SIZES.font,
												width: 40,
												height: 40,
												alignItems:
													"center",
												justifyContent:
													"center",
											}}
											onPress={() => {
												//setItemCount(itemCount + 1);
												//data.itemCount = itemCount;
											}}
										>
											<Text
												style={{
													fontSize: 25,
												}}
											>
												{" "}
												+{" "}
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</ScrollView>
					</View>
				) : null}
			</View>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
					height: "8%",
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
						height: "60%",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("Cart")}
				>
					<Text
						style={{
							color: COLORS.white,
							fontSize: 22,
							fontWeight: "600",
							alignSelf: "center",
						}}
					>
						View Cart
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
const Tab = createMaterialBottomTabNavigator();
export default function App() {
	return (
		<Tab.Navigator
			initialRouteName="DeliverablesScreen"
			screenOptions={{ headerShown: false }}
			barStyle={{ backgroundColor: "white" }}
		>
			<Tab.Screen
				name="Deliverables"
				component={DeliverablesScreen}
				options={{
					tabBarLabel: "Deliverables",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="cart"
							color={color}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Services"
				component={ServicesScreen}
				options={{
					tabBarLabel: "Services",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="account-group-outline"
							color={color}
							size={26}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},
	column: { margin: 3, height: "24%" },
	loweredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	modalView: {
		backgroundColor: "white",
		borderRadius: 15,
		padding: 1,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "70%",
		minHeight: "50%",
	},
	ratingbutton: {
		flexDirection: "row",
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		fontSize: 23,
		marginBottom: 15,
		textAlign: "center",
	},
	image: {
		opacity: 0.2,
		width: 700,
		height: 800,
		backgroundColor: "white",
	},
	image2: {
		opacity: 0.8,
		width: 500,
		height: 400,
		backgroundColor: "white",
	},
	inventoryImage: {
		alignSelf: "center",
		height: 70,
		width: 70,
	},
	container: {
		flex: 1,
	},

	image2: {
		alignSelf: "center",
		height: 100,
		width: 100,
	},
	heading: {
		marginTop: 10,
		margin: 20,
		fontSize: 25,
		fontWeight: "600",
	},
});
