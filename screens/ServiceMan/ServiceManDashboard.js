import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	SafeAreaView,
	Image,
	StyleSheet,
	Modal,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { COLORS, assets, SIZES, SHADOWS } from "../../constants";

function HomeScreen() {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View
					style={{
						flex: 1,
						borderColor: "gray",
						borderBottomWidth: 1,
						backgroundColor: "",
					}}
				>
					<Text
						style={{
							margin: "2%",
							fontSize: 25,
							alignSelf: "center",
							color: "black",
							fontWeight: "600",
						}}
					>
						Please Confirm Your Schedule
					</Text>
					<Text
						style={{
							margin: "2%",
							fontSize: 15,
							color: "gray",
							alignSelf: "center",
							justifyContent: "center",
						}}
					>
						You will not recieve future orders unless you will
						confirm your schedule
					</Text>
					<TouchableOpacity
						style={styles.button6}
						onPress={() => navigation.navigate("Profile")}
					>
						<Text
							style={{
								fontWeight: "bold",
								fontSize: 25,
								textAlign: "center",
								color: "white",
							}}
						>
							Confirm Schedule
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						borderColor: "gray",

						padding: 1,
					}}
				>
					<Text
						style={{
							margin: "2%",
							fontSize: 27,
						}}
					>
						Ongoing Order
					</Text>
					<View
						style={{
							borderRadius: "10%",
							marginBottom: "20%",
							backgroundColor: "lightblue",
							flex: 1,
						}}
					>
						<View
							style={{
								flexWrap: "wrap",
								flexDirection: "row",
							}}
						>
							<Text style={styles.upcomingOrderText}>
								Service Name:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Slot Deadline:
							</Text>

							<Text style={styles.upcomingOrderText}>
								Order Details:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Address Details:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Payment Mode:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Other Details:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Customer Phone No:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Price:
							</Text>
						</View>
						<TouchableOpacity style={styles.button3}>
							<Text style={{ fontSize: 25 }}>
								Finish Order{" "}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Text
					style={{
						margin: "2%",
						fontSize: 27,
					}}
				>
					Pending Orders
				</Text>
				<View
					style={{
						borderColor: "gray",

						padding: 1,
					}}
				>
					<View
						style={{
							borderRadius: "10%",
							marginBottom: "5%",
							backgroundColor: "lightblue",
							flex: 1,
						}}
					>
						<View
							style={{
								flexWrap: "wrap",
								flexDirection: "row",
							}}
						>
							<Text style={styles.upcomingOrderText}>
								Service Name:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Slot Deadline:
							</Text>

							<Text style={styles.upcomingOrderText}>
								Payment Mode:
							</Text>
						</View>
						<TouchableOpacity style={styles.button3}>
							<Text style={{ fontSize: 25 }}>
								Start Order{" "}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						borderColor: "gray",

						padding: 1,
					}}
				>
					<View
						style={{
							borderRadius: "10%",
							marginBottom: "5%",
							backgroundColor: "lightblue",
							flex: 1,
						}}
					>
						<View
							style={{
								flexWrap: "wrap",
								flexDirection: "row",
							}}
						>
							<Text style={styles.upcomingOrderText}>
								Service Name:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Slot Deadline:
							</Text>

							<Text style={styles.upcomingOrderText}>
								Payment Mode:
							</Text>
						</View>
						<TouchableOpacity style={styles.button3}>
							<Text style={{ fontSize: 25 }}>
								Start Order{" "}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						borderColor: "gray",

						padding: 1,
					}}
				>
					<View
						style={{
							borderRadius: "10%",
							marginBottom: "5%",
							backgroundColor: "lightblue",
							flex: 1,
						}}
					>
						<View
							style={{
								flexWrap: "wrap",
								flexDirection: "row",
							}}
						>
							<Text style={styles.upcomingOrderText}>
								Service Name:
							</Text>
							<Text style={styles.upcomingOrderText}>
								Slot Deadline:
							</Text>

							<Text style={styles.upcomingOrderText}>
								Payment Mode:
							</Text>
						</View>
						<TouchableOpacity style={styles.button3}>
							<Text style={{ fontSize: 25 }}>
								Start Order{" "}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
function OrdersScreen() {
	return (
		<View>
			<Text style={{ fontSize: 30, margin: 12 }}>Recent Orders</Text>
		</View>
	);
}
function ProfileScreen() {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={{ flex: 1 }}>
					<View
						style={{
							backgroundColor: "black",
							flexDirection: "row",
							padding: 5,
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.navigate("Home")}
						>
							<Image
								source={assets.icon}
								style={{ width: 48, height: 48 }}
							/>
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

					<View style={{ margin: 12 }}>
						<Text
							style={{
								fontSize: 18,
								marginTop: 10,
								margin: 7,
							}}
						>
							On which days of the week, do you want to
							recieve your order from your customer?
						</Text>
						<Text
							style={{
								fontSize: 14,
								marginTop: 10,
								margin: 7,
								color: "green",
							}}
						>
							💡 You will get your orders on below selected
							days only
						</Text>
						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "space-evenly",
							}}
						>
							{[
								"Mon",
								"Tue",
								"Wed",
								"Thu",
								"Fri",
								"Sat",
								"Sun",
							].map((item) => {
								return (
									<TouchableOpacity
										key={item}
										style={styles.button4}
										onPress={() =>
											navigation.navigate(null)
										}
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
					</View>
					<TouchableOpacity
						style={styles.button5}
						onPress={() => setModalVisible(true)}
					>
						<Text
							style={{
								fontWeight: "bold",
								fontSize: 25,
								textAlign: "center",
								color: "white",
							}}
						>
							Confirm Schedule
						</Text>
					</TouchableOpacity>

					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							setModalVisible(!modalVisible);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text
									style={{
										fontSize: 20,
										marginTop: 10,
										margin: 7,
										color: "green",
									}}
								>
									Note: {"\n\n"}● You will get your
									orders at anytime of the above
									selected days.
									{"\n\n"}● Order must be completed
									in between the slot selected by
									customer {"\n\n"}● If by any chance
									the order can't be completed for
									any reason, then a penalty fee may
									be charged from your next
									order/wallet.
									{"\n\n"}● You need to confirm your
									schedule at every end of the week.
								</Text>

								<TouchableOpacity
									style={styles.button5}
									onPress={() =>
										setModalVisible(false)
									}
								>
									<Text
										style={{
											fontWeight: "bold",
											fontSize: 25,
											textAlign: "center",
											color: "white",
										}}
									>
										OKAY
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>

					{/* <View style={{ margin: 12 }}>
						<Text
							style={{
								fontSize: 18,
								marginTop: 10,
								margin: 7,
							}}
						>
							Set your timings of the day in which you want
							your order to recieve
						</Text>
						<View
							style={{
								flexDirection: "row",
								margin: 12,
								flexWrap: "wrap",
								justifyContent: "space-evenly",
							}}
						>
							{[
								"9AM to 12PM",
								"12PM to 3PM",
								"3PM to 6PM",
								"6PM to 9PM",
								"9PM to 12AM",
								"12AM to 9AM",
							].map((item) => {
								return (
									<TouchableOpacity
										key={item}
										style={styles.button5}
										onPress={() =>
											navigation.navigate(null)
										}
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
					</View>  */}
					<View
						style={{
							backgroundColor: "#CACACA",
							alignSelf: "center",
							marginTop: "5%",

							marginBottom: "5%",
							width: "90%",
							height: 1,
						}}
					/>

					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-evenly",
							borderColor: "gray",
							borderBottomWidth: 1,
						}}
					>
						<TouchableOpacity
							style={styles.button2}
							onPress={() => navigation.navigate("Orders")}
						>
							<View
								style={{
									flexWrap: "wrap",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										textAlign: "center",
										fontWeight: "bold",
										color: "gray",
									}}
								>
									Total Earnings:
								</Text>
								<Text style={{ fontSize: 35 }}>
									₹890
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("Orders")}
							style={styles.button2}
						>
							<View
								style={{
									flexWrap: "wrap",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										textAlign: "center",
										fontWeight: "bold",
										color: "gray",
									}}
								>
									Average Rating:
								</Text>
								<Text style={{ fontSize: 35 }}>
									5 ⭐
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("Orders")}
							style={styles.button2}
						>
							<View
								style={{
									flexWrap: "wrap",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 20,
										textAlign: "center",
										fontWeight: "bold",
										color: "gray",
									}}
								>
									Orders Completed:
								</Text>
								<Text style={{ fontSize: 35 }}>27</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button2}
							onPress={() =>
								navigation.navigate("Contact Us")
							}
						>
							<View
								style={{
									flexWrap: "wrap",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										textAlign: "center",
										fontWeight: "bold",
										color: "gray",
									}}
								>
									Wallet:
								</Text>
								<Text style={{ fontSize: 35 }}>
									₹100
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-evenly",
						}}
					>
						<TouchableOpacity
							style={styles.button3}
							onPress={() =>
								navigation.navigate("Contact Us")
							}
						>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 20,
									textAlign: "center",
									color: "black",
								}}
							>
								Contact Us
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator initialRouteName="Dashboard">
				<Tab.Screen name="Dashboard" component={HomeScreen} />
				<Tab.Screen name="Orders" component={OrdersScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	upcomingOrderText: {
		margin: "2%",
		fontSize: 20,
		fontWeight: "bold",
	},
	centeredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 15,
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
		width: "100%",
		height: "62%",
	},
	walletImage: {
		width: 25,
		height: 25,
		marginVertical: 10,
	},
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
		height: "30%",
		width: "47%",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		borderRadius: 5,
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
		width: "10%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
	},
	button5: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: "12%",
		width: "60%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
		margin: 8,
	},
	button6: {
		marginBottom: "15%",
		backgroundColor: "green",
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: "30%",
		width: "60%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
		margin: 8,
	},
	button7: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: "100%",
		width: "40%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
		margin: 8,
	},
	button8: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "maroon",
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: "100%",
		width: "40%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
		margin: 8,
	},
	bottomButton: {
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
		color: COLORS.primary,
	},
});