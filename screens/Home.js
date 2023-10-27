import React, { useState, useEffect } from "react";
import {
	View,
	FlatList,
	Text,
	Image,
	StyleSheet,
	Modal,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Location from "expo-location";
import { NFTCard1, HomeHeader, NFTCard9, SubServicesModal } from "../components";
import { COLORS, config, SIZES } from "../constants";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Bookings from "./Bookings";
import Search from "./Search";
import Icon from "react-native-vector-icons/FontAwesome";
import Profile from "./Profile";

import { SliderBox } from "react-native-image-slider-box";
import { ScrollView } from "react-native-gesture-handler";

let apiKey = "YOUR_API_KEY";

function ServicesScreen() {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	const [subSModalVisible, setSubSModalVisible] = useState(-1);
	const [location, setLocation] = useState(null);
	const [address, setAddress] = useState("");

	console.log(address);

	const getLocation = () => {
		(async () => {
			let { status } =
				await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				console.error("Permission to access location was denied");
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
				// console.log(regionName, "nothing");
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
		const C_Lat = 30.6951;
		const C_Lon = 76.7355;

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
		<ScrollView
			style={{ backgroundColor: COLORS.white, marginTop: "5%" }}
		>
			{isLoading ? (
				<SafeAreaView
					style={{
						backgroundColor: "white",
						height: "100%",
						alignSelf: "center",
						justifyContent: "center",
					}}
				>
					<Image
						source={require("../assets/sqera.png")}
						style={{
							width: 63,
							height: 24,
							marginBottom: 10,
							alignSelf: "center",
						}}
					/>

					<Text
						style={{
							alignSelf: "center",
							fontSize: 15,
							marginTop: 8,
							justifyContent: "center",
						}}
					>
						Finding services nearby..
					</Text>
					<Image
						source={require("../assets/images/loader.gif")}
						style={styles.image}
					/>
				</SafeAreaView>
			) : (
				<View
					style={{
						marginTop: 35,
						backgroundColor: COLORS.white,
					}}
				>
					<View
						style={{
							backgroundColor: COLORS.white,

							paddingVertical: SIZES.small - 3,
							width: "100%",
							flexDirection: "row",
							paddingHorizontal: SIZES.large,
							justifyContent: "space-between",
						}}
					>
						<View
							style={{
								backgroundColor: COLORS.white,
							}}
						>
							<View
								style={{
									flexDirection: "row",
								}}
							>
								<Image
									source={require("../assets/icons/location.png")}
									resizeMode="contain"
									style={{
										width: 16,
										height: 16,
										marginRight: 2,
									}}
								/>
								<Text
									style={{
										fontWeight: "700",
										fontSize: 13,
									}}
								>
									{address.name}
								</Text>
							</View>
							<Text style={{ fontSize: 9, margin: "1%" }}>
								{" "}
								{address.district}, {address.city},{" "}
								{address.postalCode}
							</Text>
						</View>
						<View
							style={{
								justifyContent: "flex-end",
								backgroundColor: COLORS.white,
								flexDirection: "row",
								height: 35,
							}}
						>
							<Image
								source={require("../assets/icons/notifications.png")}
								resizeMode="cover"
								style={{
									alignContent: "center",
									alignSelf: "center",
									width: 20,
									height: 20,
									marginRight: 10,
									marginBottom: 5,
								}}
							/>
							<Image
								source={require("../assets/sqera.png")}
								resizeMode="cover"
								style={{
									alignContent: "center",
									alignSelf: "center",
									width: 45,
									height: 18,
									marginRight: 4,
								}}
							/>
						</View>
					</View>
					<View
						style={{
							backgroundColor: COLORS.white,
							marginBottom: 12,
						}}
					>
						<HomeHeader onSearch={handleSearch} />
					</View>
					<View
						style={{
							backgroundColor: "#f2f2f2",
							height: "100%",
						}}
					>
						{/* <View
							style={{
								backgroundColor: COLORS.white,

								marginLeft: 7,
							}}
						>
							<View
								style={{
									flexDirection: "row",
									marginTop: 1,
								}}
							>
								<Text
									style={{
										fontSize: 14,
										marginLeft: 5,
										fontWeight: "500",
										alignSelf: "center",
									}}
								>
									{" "}
									Frequently booked
								</Text>
								<Image
									source={require("../assets/icons/frequent.png")}
									style={{
										marginLeft: 5,

										width: 14,
										height: 14,
										alignSelf: "center",
									}}
								/>
							</View>

							<FlatList
								horizontal
								data={data2}
								renderItem={({ item, index }) => (
									<NFTCard1
										key={index}
										data={item}
										index={index}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								)}
								contentContainerStyle={{
									width: "100%",
									backgroundColor: COLORS.white,
								}}
							/>
						</View> */}
						<View
							style={{
								backgroundColor: COLORS.white,
								padding: 5,
							}}
						>
							<Text
								style={{
									fontSize: 17,
									marginLeft: 5,
									fontWeight: "500",
									marginBottom: 10,
								}}
							>
								{" "}
								Popular services near you
							</Text>

							<FlatList
								scrollEnabled
								numColumns={2}
								data={data2}
								renderItem={({ item, index }) => (
									<NFTCard9
										key={index}
										data={item}
										index={index}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								)}
								contentContainerStyle={{
									alignSelf: "center",
									justifyContent: "center",

									width: "100%",
									backgroundColor: COLORS.white,
								}}
							/>
						</View>
						<View
							style={{
								marginBottom: 20,
								alignSelf: "center",
								marginTop: 20,
								width: "100%",
							}}
						>
							<SliderBox
								inactiveDotColor="#90A4AE"
								alignSelf={"center"}
								borderRadius={20}
								autoplay
								imageLoadingColor="#2196F3"
								circleLoop
								parentWidth={410}
								autoplayInterval={5000}
								ImageComponentStyle={{
									borderRadius: 15,
									marginRight: 20,
								}}
								paginationBoxStyle={{
									position: "absolute",
									bottom: 0,
									padding: 70,
									alignItems: "center",
									alignSelf: "center",
									justifyContent: "center",
									paddingVertical: 10,
								}}
								height={170}
								width={430}
								opacity={1}
								images={[
									"https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=2000&t=st=1672688375~exp=1672688975~hmac=8416e203ce399ec68facdf58c3080d1db24be40cc787610e70880e32166d1d9f",
									"https://img.freepik.com/free-photo/housewife-woking-home-lady-blue-shirt-woman-bathroom_1157-45526.jpg?w=2000&t=st=1672688038~exp=1672688638~hmac=d24482e0caf4b75f753a2435569d1c59b940371a9adf3ba4382d8c0d445c8d91",
									"https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18256.jpg?w=2000&t=st=1672688457~exp=1672689057~hmac=8d5efa29abacc4dc73fef70cf4fbd600751fbb48465853c6b1170639fb45c73b", // Network image
								]}
								/* onCurrentImagePressed={(index) =>
									console.log(
										`image ${index} pressed`
									)
								}
								currentImageEmitter={(index) =>
									console.log(
										`current pos is: ${index}`
									)
								} */
							/>
						</View>

						<View
							style={{
								backgroundColor: COLORS.white,
								paddingVertical: 20,
								padding: 5,
							}}
						>
							<Text
								style={{
									fontSize: 17,
									marginLeft: 5,
									fontWeight: "500",
									marginBottom: 10,
								}}
							>
								{" "}
								Most booked home services
							</Text>

							<FlatList
								numColumns={2}
								data={data2}
								renderItem={({ item, index }) => (
									<NFTCard9
										key={index}
										data={item}
										index={index}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								)}
								contentContainerStyle={{
									alignSelf: "center",
									justifyContent: "center",

									width: "100%",
									backgroundColor: COLORS.white,
								}}
							/>
						</View>

						<View
							style={{
								backgroundColor: COLORS.white,
								marginTop: 20,
								padding: 10,
								paddingVertical: 20,
							}}
						>
							<Text
								style={{
									fontSize: 17,
									marginLeft: 5,
									fontWeight: "500",
									marginBottom: 5,
								}}
							>
								{" "}
								Quick home repairs
							</Text>
							<Text
								style={{
									fontSize: 14,
									marginLeft: 5,
									color: COLORS.gray,
									fontWeight: "300",
									marginBottom: 5,
								}}
							>
								{" "}
								Instant, Trustworthy
							</Text>

							<FlatList
								numColumns={2}
								data={data2}
								renderItem={({ item, index }) => (
									<NFTCard9
										key={index}
										data={item}
										index={index}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								)}
								contentContainerStyle={{
									alignSelf: "center",
									justifyContent: "center",

									width: "100%",
									backgroundColor: COLORS.white,
								}}
							/>
						</View>
						<View
							style={{
								alignSelf: "center",
								marginTop: 20,
								width: "100%",
							}}
						>
							<SliderBox
								inactiveDotColor="#90A4AE"
								alignSelf={"center"}
								borderRadius={20}
								autoplay
								imageLoadingColor="#2196F3"
								circleLoop
								parentWidth={410}
								autoplayInterval={5000}
								ImageComponentStyle={{
									borderRadius: 15,
									marginRight: 20,
								}}
								paginationBoxStyle={{
									position: "absolute",
									bottom: 0,
									padding: 70,
									alignItems: "center",
									alignSelf: "center",
									justifyContent: "center",
									paddingVertical: 10,
								}}
								height={170}
								width={430}
								opacity={1}
								images={[
									"https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=2000&t=st=1672688375~exp=1672688975~hmac=8416e203ce399ec68facdf58c3080d1db24be40cc787610e70880e32166d1d9f",
									"https://img.freepik.com/free-photo/housewife-woking-home-lady-blue-shirt-woman-bathroom_1157-45526.jpg?w=2000&t=st=1672688038~exp=1672688638~hmac=d24482e0caf4b75f753a2435569d1c59b940371a9adf3ba4382d8c0d445c8d91",
									"https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18256.jpg?w=2000&t=st=1672688457~exp=1672689057~hmac=8d5efa29abacc4dc73fef70cf4fbd600751fbb48465853c6b1170639fb45c73b", // Network image
								]}
								/* onCurrentImagePressed={(index) =>
									console.log(
										`image ${index} pressed`
									)
								}
								currentImageEmitter={(index) =>
									console.log(
										`current pos is: ${index}`
									)
								} */
							/>
						</View>
						<View
							style={{
								backgroundColor: COLORS.white,
								marginTop: 20,
								padding: 10,
							}}
						>
							<Text
								style={{
									fontSize: 17,
									marginLeft: 5,
									marginTop: 10,
									fontWeight: "500",
									marginBottom: 5,
								}}
							>
								{" "}
								Spa for women
							</Text>
							<Text
								style={{
									fontSize: 14,
									marginLeft: 5,
									color: COLORS.gray,
									fontWeight: "300",
									marginBottom: 5,
								}}
							>
								{" "}
								Refresh, Rewind, Rejuvenate
							</Text>

							<FlatList
								numColumns={2}
								data={data2}
								renderItem={({ item, index }) => (
									<NFTCard9
										key={index}
										data={item}
										index={index}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								)}
								contentContainerStyle={{
									alignSelf: "center",
									justifyContent: "center",

									width: "100%",
									backgroundColor: COLORS.white,
								}}
							/>
						</View>
						<View
							style={{
								backgroundColor: COLORS.white,
								marginTop: 20,
								padding: 10,
							}}
						>
							<Text
								style={{
									fontSize: 17,
									marginLeft: 5,
									fontWeight: "500",
									marginTop: 10,
									marginBottom: 10,
								}}
							>
								{" "}
								Other popular services
							</Text>

							<FlatList
								numColumns={2}
								data={data2}
								renderItem={({ item, index }) => (
									<NFTCard9
										key={index}
										data={item}
										index={index}
										setSubSModalVisible={
											setSubSModalVisible
										}
									/>
								)}
								contentContainerStyle={{
									alignSelf: "center",
									justifyContent: "center",

									width: "100%",
									backgroundColor: COLORS.white,
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
					</View>
				</View>
			)}
		</ScrollView>
	);
}

const Tab = createMaterialBottomTabNavigator();
export default function App() {
	{
		/* <ServicesScreen /> */
	}
	return (
		<Tab.Navigator
			initialRouteName="Services"
			screenOptions={{ headerShown: false }}
			barStyle={{
				backgroundColor: "white",
				height: 85,
			}}
		>
			<Tab.Screen
				name="Services"
				component={ServicesScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<Icon name="home" color={color} size={22} />
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarLabel: "Discover",
					tabBarIcon: ({ color }) => (
						<Icon name="search" color={color} size={22} />
					),
				}}
			/>
			<Tab.Screen
				name="Bookings"
				component={Bookings}
				options={{
					tabBarLabel: "Bookings",
					tabBarIcon: ({ color }) => (
						<Icon name="book" color={color} size={22} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color }) => (
						<Icon name="user" color={color} size={22} />
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
		width: 150,
		height: 100,
		backgroundColor: "white",
		alignSelf: "center",
		justifyContent: "center",
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
