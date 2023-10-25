import { useNavigation } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	Image,
	StyleSheet,
	Modal,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useState, useEffect } from "react";
import { COLORS, assets, SIZES, SHADOWS } from "../../constants";
import { Snackbar } from "react-native-paper";

export default function HomeScreen() {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View
					style={{
						margin: "3%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<Text style={{ fontWeight: "700", fontSize: 24 }}>Hi, Genus</Text>
					<Image source={assets.menuIcon} style={{ width: 38, height: 38 }} />
				</View>
				<View
					style={{
						flexWrap: "wrap",
						flexDirection: "row",
						margin: "2%",
						justifyContent: "space-evenly",
					}}>
					<View
						style={{
							borderRadius: 7,
							margin: 5,
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							width: 160,
							height: 70,
							backgroundColor: COLORS.primary,
						}}
						onPress={() => navigation.navigate("Orders")}>
						<View
							style={{
								alignItems: "center",
							}}>
							<Text
								style={{
									fontSize: 24,
									color: COLORS.white,
								}}>
								₹120
							</Text>
							<Text
								style={{
									textAlign: "center",
									fontWeight: "bold",
									color: "gray",
								}}>
								TODAYS EARNING
							</Text>
						</View>
					</View>
					<View
						style={{
							borderRadius: 7,
							margin: 5,
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							width: 160,
							height: 70,
							backgroundColor: COLORS.primary,
						}}
						onPress={() => navigation.navigate("Orders")}>
						<View
							style={{
								alignItems: "center",
							}}>
							<Text
								style={{
									fontSize: 25,
									fontWeight: "900",
									color: "green",
								}}>
								ON
							</Text>
							<Text
								style={{
									textAlign: "center",
									fontWeight: "bold",
									color: "gray",
								}}>
								BROADCAST MODE
							</Text>
						</View>
					</View>

					<View
						style={{
							borderRadius: 7,
							margin: 5,
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							width: 160,
							height: 70,
							backgroundColor: COLORS.primary,
						}}
						onPress={() => navigation.navigate("Orders")}>
						<View
							style={{
								alignItems: "center",
							}}>
							<Text
								style={{
									fontSize: 25,
									fontWeight: "900",
									color: "green",
								}}>
								90
							</Text>
							<Text
								style={{
									textAlign: "center",
									fontWeight: "bold",
									color: "gray",
								}}>
								Orders Completed
							</Text>
						</View>
					</View>

					<View
						style={{
							borderRadius: 7,
							margin: 5,
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							width: 160,
							height: 70,
							backgroundColor: COLORS.primary,
						}}
						onPress={() => navigation.navigate("Orders")}>
						<View
							style={{
								alignItems: "center",
							}}>
							<Text
								style={{
									fontSize: 25,
									fontWeight: "900",
									color: "green",
								}}>
								Rs 4000
							</Text>
							<Text
								style={{
									textAlign: "center",
									fontWeight: "bold",
									color: "gray",
								}}>
								TOTAL EARNINGS
							</Text>
						</View>
					</View>
					<View
						style={{
							borderRadius: 7,
							margin: 5,
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							width: 160,
							height: 70,
							backgroundColor: COLORS.primary,
						}}
						onPress={() => navigation.navigate("Orders")}>
						<View
							style={{
								alignItems: "center",
							}}>
							<Text
								style={{
									fontSize: 25,
									fontWeight: "900",
									color: "green",
								}}>
								5 ⭐
							</Text>
							<Text
								style={{
									textAlign: "center",
									fontWeight: "bold",
									color: "gray",
								}}>
								AVERAGE RATING
							</Text>
						</View>
					</View>
					<View
						style={{
							margin: 5,
							borderRadius: 7,
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							width: 160,
							height: 70,
							backgroundColor: COLORS.white,
						}}
						onPress={() => navigation.navigate("Orders")}>
						<View
							style={{
								alignItems: "center",
							}}>
							<Text
								style={{
									fontSize: 25,
									fontWeight: "900",
									color: "green",
								}}>
								Rs 200
							</Text>
							<Text
								style={{
									textAlign: "center",
									fontWeight: "bold",
									color: "gray",
								}}>
								WALLET
							</Text>
						</View>
					</View>

					<TouchableOpacity style={styles.button3} onPress={() => navigation.navigate("Contact Us")}>
						<Text
							style={{
								fontWeight: "bold",
								fontSize: 20,
								textAlign: "center",
								color: "black",
							}}>
							Contact Us
						</Text>
					</TouchableOpacity>
					<View
						style={{
							marginTop: "5%",
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#cccccc",
						}}
					/>
				</View>
				<Text style={{ fontSize: 20, fontWeight: "400", margin: 5 }}> Orders </Text>
				<ScrollView
					style={{
						width: "100%",
						margin: 10,
						flexDirection: "row",
					}}>
					<TouchableOpacity
						style={{
							backgroundColor: COLORS.white,
							width: 120,
							height: 35,
							borderRadius: 10,
							elevation: 10,
							alignItems: "center",
							alignContent: "center",
							justifyContent: "center",
						}}>
						<Text
							style={{
								margin: "1%",
								fontSize: 18,
							}}>
							Pending (1)
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: COLORS.white,
							width: 120,
							height: 35,
							borderRadius: 10,
							elevation: 10,
							alignItems: "center",
							alignContent: "center",
							justifyContent: "center",
						}}>
						<Text
							style={{
								margin: "1%",
								fontSize: 18,
							}}>
							Completed (6)
						</Text>
					</TouchableOpacity>
				</ScrollView>

				<TouchableOpacity>
					<View style={{ margin: "4%" }}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "600",
								}}>
								{" "}
								AC Cleaning
							</Text>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "500",
								}}>
								Rs. 800
							</Text>
						</View>
						<View
							style={{
								marginTop: "2%",
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
							<Text
								style={{
									fontSize: 14,
									fontWeight: "400",
								}}>
								{" "}
								Details: Navdeep | Kothi 103, Phase 9, Mohali
							</Text>
						</View>
						<View
							style={{
								marginTop: "3%",
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
							<Text
								style={{
									fontSize: 14,
									color: COLORS.gray,
								}}>
								{" "}
								09/08/2023 | 10:26 AM
							</Text>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "500",
									color: "red",
								}}>
								Pending
							</Text>
						</View>
						<View
							style={{
								marginTop: "5%",
								height: 1,
								width: "95%",
								alignSelf: "center",
								backgroundColor: "#cccccc",
							}}
						/>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}
function OrdersScreen() {
	return (
		<View>
			<TouchableOpacity>
				<View style={{ margin: "4%" }}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "600",
							}}>
							{" "}
							AC Cleaning
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "500",
							}}>
							Rs. 800
						</Text>
					</View>
					<View
						style={{
							marginTop: "2%",
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "400",
							}}>
							{" "}
							Details: Navdeep | Kothi 103, Phase 9, Mohali
						</Text>
					</View>
					<View
						style={{
							marginTop: "3%",
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text
							style={{
								fontSize: 14,
								color: COLORS.gray,
							}}>
							{" "}
							09/08/2023 | 10:26 AM
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "500",
								color: "red",
							}}>
							Pending
						</Text>
					</View>
					<View
						style={{
							marginTop: "5%",
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#cccccc",
						}}
					/>
				</View>
			</TouchableOpacity>
			<TouchableOpacity>
				<View style={{ margin: "4%" }}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "600",
							}}>
							{" "}
							Bathroom Cleaning
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "500",
							}}>
							Rs. 250
						</Text>
					</View>
					<View
						style={{
							marginTop: "2%",
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "400",
							}}>
							{" "}
							Details: Navdeep | Kothi 103, Phase 9, Mohali
						</Text>
					</View>
					<View
						style={{
							marginTop: "3%",
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text
							style={{
								fontSize: 14,
								color: COLORS.gray,
							}}>
							{" "}
							09/08/2023 | 10:26 AM
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "500",
								color: "green",
							}}>
							Completed
						</Text>
					</View>
					<View
						style={{
							marginTop: "5%",
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#cccccc",
						}}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}
function ProfileScreen() {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const [visible, setVisible] = React.useState(true);

	const onToggleSnackBar = () => setVisible(!visible);

	const onDismissSnackBar = () => setVisible(false);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={{ flex: 1 }}>
					<View
						style={{
							backgroundColor: "black",
							flexDirection: "row",
							padding: 5,
						}}>
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
							}}>
							Professional Management Page
						</Text>
					</View>

					{/* <View style={{ margin: 12 }}>
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
 */}
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							setModalVisible(!modalVisible);
						}}>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text
									style={{
										fontSize: 20,
										marginTop: 10,
										margin: 7,
										color: "green",
									}}>
									Note: {"\n\n"}● You will get your orders at anytime of the above selected days.
									{"\n\n"}● Order must be completed in between the slot selected by customer {"\n\n"}● If by any chance the order can't be completed for any reason, then a penalty fee may be charged from your next order/wallet.
									{"\n\n"}● You need to confirm your schedule at every end of the week.
								</Text>

								<TouchableOpacity style={styles.button5} onPress={() => setModalVisible(false)}>
									<Text
										style={{
											fontWeight: "bold",
											fontSize: 25,
											textAlign: "center",
											color: "white",
										}}>
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
				</View>
			</ScrollView>
			<View>
				<Snackbar bodyStyle={{ backgroundColor: COLORS.white }} visible={visible} onDismiss={onDismissSnackBar}>
					Schedule has been confirmed for this week.
				</Snackbar>
			</View>
		</SafeAreaView>
	);
}
// const Tab = createBottomTabNavigator();
// export default function App() {
// 	return (
// 		<NavigationContainer independent={true}>
// 			<Tab.Navigator
// 				screenOptions={{
// 					headerShown: false,
// 				}}
// 				initialRouteName="Dashboard"
// 			>
// 				<Tab.Screen name="Dashboard" component={HomeScreen} />
// 			</Tab.Navigator>
// 		</NavigationContainer>
// 	);
// }

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
		marginBottom: "8%",
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
