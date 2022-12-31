import React, { useState, useEffect } from "react";
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
} from "react-native";
import * as Location from "expo-location";
import { NFTCard1, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, config, SIZES } from "../constants";
import SubServicesModal from "../components/SubServicesModal";
import { ScrollView } from "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
		<SafeAreaView style={{ backgroundColor: "rgba(28, 137, 255, 0.8)" }}>
			{isLoading ? (
				<View style={{ backgroundColor: "white" }}>
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
						style={styles.image2}
					/>
				</View>
			) : (
				<View
					style={{
						backgroundColor: "rgba(217, 220, 223, 1)",
					}}
				>
					<HomeHeader onSearch={handleSearch} />
					<View
						style={{
							marginTop: "7%",
							margin: "3%",
						}}
					>
						<FlatList
							scrollEnabled
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
							keyExtractor={(index) => index.toString()}
							numColumns={2}
							columnWrapperStyle={styles.column}
							contentContainerStyle={{
								height: "100%",
							}}
							ListEmptyComponent={
								<View
									style={{
										alignSelf: "center",
									}}
								>
									<Text
										style={{
											fontSize:
												SIZES.extraLarge,
											margin: 65,
											marginTop: "15%",
											color: "gray",
											marginLeft: "16%",
										}}
									>
										Sorry! Currently we can't find
										{"\n"}any services in your
										location. {"\n"}
										Please revisit after a while.
									</Text>
									<Image
										source={require("../assets/images/searchLocation.jpg")}
										resizeMode={"cover"}
										style={styles.image}
									/>
								</View>
							}
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
											setSubSModalVisible(-1)
										}
									>
										<Text> ✖</Text>
									</TouchableOpacity>
									<SubServicesModal
										data={data2[subSModalVisible]}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								</View>
							</TouchableOpacity>
						</Modal>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
}

function DeliverablesScreen() {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	const [subSModalVisible, setSubSModalVisible] = useState(-1);
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [address, setAddress] = useState(null);
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
		<SafeAreaView style={{ backgroundColor: "orange" }}>
			<FocusedStatusBar />
			{isLoading ? (
				<View style={{ backgroundColor: "white" }}>
					<Text
						style={{
							alignSelf: "center",
							margin: 40,
							marginTop: "30%",
							fontSize: 34,
							justifyContent: "center",
						}}
					>
						Finding Delieverables near your location..{" "}
					</Text>
					<Image
						source={require("../assets/images/findservice.gif")}
						style={styles.image}
					/>
				</View>
			) : (
				<View
					style={{
						backgroundColor: "rgba(225,225,225,255)",
					}}
				>
					<DeliverablesHeader onSearch={handleSearch} />

					<View
						style={{
							marginTop: "10%",
						}}
					>
						<FlatList
							scrollEnabled
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
							keyExtractor={(index) => index.toString()}
							numColumns={3}
							columnWrapperStyle={styles.column}
							contentContainerStyle={{
								height: "100%",
							}}
							ListEmptyComponent={
								<View
									style={{
										alignSelf: "center",
									}}
								>
									<Text
										style={{
											fontSize:
												SIZES.extraLarge,
											margin: 65,
											marginTop: "15%",
											color: "gray",
											marginLeft: "16%",
										}}
									>
										Sorry! Currently we can't find
										{"\n"}any delieverables in
										your location. {"\n"}
										Please revisit after a while.
									</Text>
									<Image
										source={require("../assets/images/searchLocation.jpg")}
										resizeMode={"cover"}
										style={styles.image}
									/>
								</View>
							}
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
											setSubSModalVisible(-1)
										}
									>
										<Text> ✖</Text>
									</TouchableOpacity>
									<SubServicesModal
										data={data2[subSModalVisible]}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								</View>
							</TouchableOpacity>
						</Modal>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
}
const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<Tab.Navigator
			initialRouteName="DeliverablesScreen"
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen name="Services" component={ServicesScreen} />
			<Tab.Screen name="Deliverables" component={DeliverablesScreen} />
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
		minHeight: "57%",
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
		width: 500,
		height: 400,
		backgroundColor: "white",
	},
	image2: {
		opacity: 0.8,
		width: 500,
		height: 400,
		backgroundColor: "white",
	},

	container: {
		flex: 1,
	},
});
