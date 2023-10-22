import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	SafeAreaView,
	KeyboardAvoidingView,
	Linking,
	Image,
	Alert,
	TouchableOpacity,
	Modal,
} from "react-native";
import React, { useState } from "react";

import { COLORS, assets, SIZES, SHADOWS } from "../../constants";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
const ServiceMan = ({ navigation }) => {
	const [ratingModal, setratingModalVisible] = useState(false);
	const [todayEarnings, settodayEarningsVisible] = useState(false);

	const [ordersDetails, setordersDetailsVisible] = useState(false);

	const [broadcastModal, setbroadcastModalVisible] = useState(false);

	const [statisticsModal, setstatisticsModalVisible] = useState(false);

	const [navigationDrawer, setnavigationDrawerVisible] = useState(false);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
			<View
				style={{
					width: "100%",
					backgroundColor: "green",
					height: "3%",
					padding: 4,
				}}
			>
				<Text
					style={{
						textAlign: "center",
						alignSelf: "center",
						fontWeight: "600",
						fontSize: 12,
						color: COLORS.white,
					}}
				>
					Your service is currently getting broadcasted
				</Text>
			</View>
			<ScrollView style={{ backgroundColor: "#f2f2f2" }}>
				<View
					style={{
						margin: "3%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text style={{ fontWeight: "700", fontSize: 20 }}>
						Hi, Genus
					</Text>

					<View style={{ flexDirection: "row" }}>
						<Image
							source={require("../../assets/sqera.png")}
							style={{
								width: 50,
								height: 20,
								marginRight: 10,
								alignSelf: "center",
							}}
						/>
						<TouchableOpacity
							onPress={() => {
								setnavigationDrawerVisible(true);
							}}
						>
							<Image
								source={assets.menuIcon}
								style={{ width: 40, height: 40 }}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						flexWrap: "wrap",
						flexDirection: "row",
						justifyContent: "space-evenly",
					}}
				>
					<TouchableOpacity
						style={{
							borderRadius: 7,
							margin: 5,
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							width: 160,
							height: 70,
							backgroundColor: COLORS.white,
						}}
						onPress={() => {
							settodayEarningsVisible(true);
						}}
					>
						<View
							style={{
								alignItems: "center",
							}}
						>
							<Text
								style={{
									fontSize: 24,
									fontWeight: "600",
									color: COLORS.primary,
								}}
							>
								₹120
							</Text>
							<Text
								style={{
									fontSize: "14%",
									textAlign: "center",
									fontWeight: "bold",
									color: "gray",
								}}
							>
								TODAYS EARNING
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderRadius: 7,
							margin: 5,
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
							width: 160,
							height: 70,
							backgroundColor: "green",
						}}
						onPress={() => {
							setbroadcastModalVisible(true);
						}}
					>
						<View
							style={{
								alignItems: "center",
							}}
						>
							<Text
								style={{
									fontSize: 22,
									fontWeight: "900",
									color: COLORS.white,
								}}
							>
								ON
							</Text>
							<Text
								style={{
									textAlign: "center",
									fontWeight: "bold",
									fontSize: 12,
									color: COLORS.white,
								}}
							>
								BROADCAST MODE
							</Text>
						</View>
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
				<View
					style={{
						backgroundColor: COLORS.white,
						borderRadius: 10,
						padding: 17,
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "500",
							marginBottom: 20,
						}}
					>
						Orders
					</Text>
					<View
						style={{
							width: "100%",
							flexDirection: "row",
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.primary,
								width: 120,

								height: 35,
								borderRadius: 10,
								elevation: 10,
								alignItems: "center",
								alignContent: "center",
								justifyContent: "center",
							}}
						>
							<Text
								style={{
									margin: "1%",
									fontSize: 18,
									color: "white",
								}}
							>
								Pending (1)
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: "#f2f2f2",
								width: 140,
								height: 35,
								borderRadius: 10,
								marginLeft: 10,
								elevation: 10,
								alignItems: "center",
								alignContent: "center",
								justifyContent: "center",
							}}
						>
							<Text
								style={{
									margin: "1%",
									fontSize: 18,
								}}
							>
								Completed (6)
							</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						onPress={() => setordersDetailsVisible(true)}
					>
						<View
							style={{
								marginTop: 30,
								backgroundColor: COLORS.white,
								borderRadius: 10,
							}}
						>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: "600",
									}}
								>
									AC Cleaning
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: "500",
									}}
								>
									Rs. 800
								</Text>
							</View>
							<View
								style={{
									marginTop: "2%",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 14,
										fontWeight: "400",
									}}
								>
									Details: Navdeep | Kothi 103, Phase
									9, Mohali
								</Text>
							</View>
							<View
								style={{
									marginTop: "3%",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 14,
										color: COLORS.gray,
									}}
								>
									09/08/2023 | 10:26 AM
								</Text>
								<View style={{ flexDirection: "row" }}>
									<Text
										style={{
											fontSize: 16,
											fontWeight: "500",
											color: "gray",
										}}
									>
										Status:{" "}
									</Text>
									<Text
										style={{
											fontSize: 16,
											fontWeight: "500",
											color: "red",
										}}
									>
										Pending
									</Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }}>
					<SafeAreaView>
						<Modal
							animationType="slide"
							transparent={true}
							visible={ratingModal}
							onRequestClose={() => {
								setratingModalVisible(!ratingModal);
							}}
						>
							<View
								style={{
									backgroundColor: "#f2f2f2",
									marginTop: "20%",
									padding: 25,
									borderTopStartRadius: 20,
									borderTopEndRadius: 20,
									shadowColor: "#000",
									shadowOpacity: 0.25,
									shadowRadius: 4,
									elevation: 5,
									width: "100%",
									alignSelf: "flex-end",
									height: "100%",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										justifyContent:
											"space-between",
										marginTop: "5%",
									}}
								>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<TouchableOpacity
											style={{
												width: 40,
												height: 40,
												marginTop: "15%",
											}}
											onPress={() =>
												setratingModalVisible(
													false
												)
											}
										>
											<Image
												source={assets.left}
												resizeMode="contain"
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View
									style={{
										marginTop: 30,
										margin: 10,
										borderRadius: 20,
										backgroundColor: COLORS.white,
									}}
								></View>
							</View>
						</Modal>

						<Modal
							animationType="slide"
							transparent={true}
							visible={todayEarnings}
							onRequestClose={() => {
								settodayEarningsVisible(!todayEarnings);
							}}
						>
							<View
								style={{
									backgroundColor: "#f2f2f2",
									marginTop: "20%",
									padding: 25,
									borderTopStartRadius: 20,
									borderTopEndRadius: 20,
									shadowColor: "#000",
									shadowOpacity: 0.25,
									shadowRadius: 4,
									elevation: 5,
									width: "100%",
									alignSelf: "flex-end",
									height: "100%",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										justifyContent:
											"space-between",
										marginTop: "5%",
									}}
								>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<TouchableOpacity
											style={{
												width: 40,
												height: 40,
												marginTop: "15%",
											}}
											onPress={() =>
												settodayEarningsVisible(
													false
												)
											}
										>
											<Image
												source={assets.left}
												resizeMode="contain"
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View
									style={{
										marginTop: 30,
										margin: 10,
										borderRadius: 20,
										backgroundColor: COLORS.white,
									}}
								></View>
							</View>
						</Modal>
						<Modal
							animationType="slide"
							transparent={true}
							visible={broadcastModal}
							onRequestClose={() => {
								setbroadcastModalVisible(
									!broadcastModal
								);
							}}
						>
							<View
								style={{
									backgroundColor: "#f2f2f2",
									marginTop: "20%",
									padding: 25,
									borderTopStartRadius: 20,
									borderTopEndRadius: 20,
									shadowColor: "#000",
									shadowOpacity: 0.25,
									shadowRadius: 4,
									elevation: 5,
									width: "100%",
									alignSelf: "flex-end",
									height: "100%",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										justifyContent:
											"space-between",
										marginTop: "5%",
									}}
								>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<TouchableOpacity
											style={{
												width: 40,
												height: 40,
												marginTop: "15%",
											}}
											onPress={() =>
												setbroadcastModalVisible(
													false
												)
											}
										>
											<Image
												source={assets.left}
												resizeMode="contain"
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<TouchableOpacity
									style={{
										borderRadius: 7,
										margin: 5,
										alignItems: "center",
										justifyContent: "center",
										alignSelf: "center",
										width: 160,
										height: 70,
										backgroundColor: "green",
									}}
									onPress={() => {
										setbroadcastModalVisible(
											true
										);
									}}
								>
									<View
										style={{
											alignItems: "center",
										}}
									>
										<Text
											style={{
												fontSize: 25,
												fontWeight: "900",
												color: COLORS.white,
											}}
										>
											ON
										</Text>
										<Text
											style={{
												textAlign: "center",
												fontWeight: "bold",
												fontSize: 12,
												color: COLORS.white,
											}}
										>
											BROADCAST MODE
										</Text>
									</View>
								</TouchableOpacity>
								<Text
									style={{
										textAlign: "center",
										fontWeight: "500",
									}}
								>
									{" "}
									Click to Switch Mode (ON / OFF)
								</Text>
								<View
									style={{
										marginTop: 30,
										margin: 10,
										alignSelf: "center",
										width: "100%",
										borderRadius: 20,
										borderWidth: 0.2,
										borderColor: COLORS.gray,
									}}
								>
									<Text
										style={{
											textAlign: "center",
											alignSelf: "center",
											fontWeight: "500",
											fontSize: 18,
											lineHeight: 30,
											padding: 10,
										}}
									>
										Customers can find you when
										your BROADCAST MODE IS ON
									</Text>
								</View>
								<View
									style={{
										marginTop: 30,
										margin: 10,
										alignSelf: "center",
										width: "100%",
										borderRadius: 20,
										borderWidth: 0.2,
										borderColor: COLORS.gray,
									}}
								>
									<Text
										style={{
											textAlign: "center",
											alignSelf: "center",
											fontWeight: "500",
											fontSize: 18,
											lineHeight: 30,
											padding: 10,
										}}
									>
										Your service/skill is
										currently getting broadcasted
										to your customers from your
										below current location.
									</Text>
								</View>

								<View
									style={{
										marginTop: 30,
										margin: 10,
										alignSelf: "center",
										width: "100%",
										borderRadius: 20,
										borderWidth: 0.2,
										borderColor: COLORS.gray,
									}}
								>
									<Text
										style={{
											textAlign: "center",
											alignSelf: "center",
											fontWeight: "500",
											fontSize: 18,
											lineHeight: 30,
											padding: 10,
										}}
									>
										Current Location:
									</Text>
									<Text
										style={{
											textAlign: "center",
											alignSelf: "center",
											fontWeight: "500",
											fontSize: 20,
											lineHeight: 30,
											padding: 10,
											color: "green",
										}}
									>
										Kothi 103 Phase 9 Mohali
									</Text>
								</View>
							</View>
						</Modal>

						<Modal
							animationType="slide"
							transparent={true}
							visible={statisticsModal}
							onRequestClose={() => {
								setstatisticsModalVisible(
									!statisticsModal
								);
							}}
						>
							<View
								style={{
									backgroundColor: "#f2f2f2",
									marginTop: "20%",
									padding: 25,
									borderTopStartRadius: 20,
									borderTopEndRadius: 20,
									shadowColor: "#000",
									shadowOpacity: 0.25,
									shadowRadius: 4,
									elevation: 5,
									width: "100%",
									height: "100%",
								}}
							>
								<View
									style={{
										marginTop: "5%",
										flexWrap: "wrap",
									}}
								>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<TouchableOpacity
											style={{
												width: 40,
												height: 40,
											}}
											onPress={() =>
												setstatisticsModalVisible(
													false
												)
											}
										>
											<Image
												source={assets.left}
												resizeMode="contain"
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
										</TouchableOpacity>
									</View>

									<TouchableOpacity
										style={{
											borderRadius: 7,
											margin: 5,
											alignItems: "center",
											justifyContent: "center",
											alignSelf: "center",
											width: 160,
											height: 70,
											backgroundColor:
												COLORS.white,
										}}
										onPress={() =>
											navigation.navigate(
												"Orders"
											)
										}
									>
										<View
											style={{
												alignItems:
													"center",
											}}
										>
											<Text
												style={{
													fontSize: 25,
													fontWeight:
														"900",
													color: "green",
												}}
											>
												90
											</Text>
											<Text
												style={{
													textAlign:
														"center",
													fontWeight:
														"bold",
													color: "gray",
												}}
											>
												Orders Completed
											</Text>
										</View>
									</TouchableOpacity>

									<TouchableOpacity
										style={{
											borderRadius: 7,
											margin: 5,
											alignItems: "center",
											justifyContent: "center",
											alignSelf: "center",
											width: 160,
											height: 70,
											backgroundColor:
												COLORS.white,
										}}
										onPress={() =>
											navigation.navigate(
												"Orders"
											)
										}
									>
										<View
											style={{
												alignItems:
													"center",
											}}
										>
											<Text
												style={{
													fontSize: 25,
													fontWeight:
														"900",
													color: "green",
												}}
											>
												Rs 4000
											</Text>
											<Text
												style={{
													textAlign:
														"center",
													fontWeight:
														"bold",
													color: "gray",
												}}
											>
												TOTAL EARNINGS
											</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											borderRadius: 7,
											margin: 5,
											alignItems: "center",
											justifyContent: "center",
											alignSelf: "center",
											width: 160,
											height: 70,
											backgroundColor:
												COLORS.white,
										}}
										onPress={() => {
											setratingModalVisible(
												true
											);
										}}
									>
										<View
											style={{
												alignItems:
													"center",
											}}
										>
											<Text
												style={{
													fontSize: 25,
													fontWeight:
														"900",
													color: "green",
												}}
											>
												5 ⭐
											</Text>
											<Text
												style={{
													fontSize:
														"13%",
													textAlign:
														"center",
													fontWeight:
														"bold",
													color: "gray",
												}}
											>
												AVERAGE RATING
											</Text>
										</View>
									</TouchableOpacity>
									<View
										style={{
											margin: 5,
											borderRadius: 7,
											alignItems: "center",
											justifyContent: "center",
											alignSelf: "center",
											width: 160,
											height: 70,
											backgroundColor:
												COLORS.white,
										}}
										onPress={() =>
											navigation.navigate(
												"Orders"
											)
										}
									>
										<View
											onPress={() =>
												navigation.navigate(
													"Wallet"
												)
											}
											style={{
												alignItems:
													"center",
											}}
										>
											<Image
												source={require("../../assets/images/wallet.png")}
												style={{
													width: 30,
													height: 25,
													alignSelf:
														"center",
													margin: 5,
												}}
											/>
											<Text
												style={{
													fontSize: 16,
													fontWeight:
														"900",
													color: "green",
												}}
											>
												Rs 200
											</Text>
										</View>
									</View>

									<TouchableOpacity
										style={styles.button3}
										onPress={() =>
											navigation.navigate(
												"Contact"
											)
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
									<TouchableOpacity
										style={{
											width: 200,
											height: 50,
											borderRadius: 10,
											backgroundColor:
												COLORS.primary,

											alignSelf: "center",
											justifyContent: "center",
										}}
										onPress={() =>
											navigation.navigate(
												"Home"
											)
										}
									>
										<Text
											style={{
												fontWeight: "bold",
												fontSize: 21,
												textAlign: "center",
												color: "white",
											}}
										>
											Customer Mode
										</Text>
										<Text
											style={{
												fontSize: 12,
												textAlign: "center",
												color: "white",
											}}
										>
											Find & book a service
										</Text>
									</TouchableOpacity>
								</View>
								<View
									style={{
										marginTop: 30,
										margin: 10,
										borderRadius: 20,
										backgroundColor: COLORS.white,
									}}
								></View>
							</View>
						</Modal>

						<Modal
							animationType="slide"
							transparent={true}
							visible={navigationDrawer}
							onRequestClose={() => {
								setnavigationDrawerVisible(
									!navigationDrawer
								);
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.white,
									borderTopStartRadius: 10,
									borderBottomLeftRadius: 10,
									shadowColor: "#000",
									shadowOpacity: 0.25,
									shadowRadius: 4,
									elevation: 5,
									width: "45%",
									alignSelf: "flex-end",
									height: "100%",
								}}
							>
								<View
									style={{
										justifyContent:
											"space-between",
										marginTop: "5%",
									}}
								>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<TouchableOpacity
											style={{
												width: 40,
												height: 40,
												marginTop: "15%",
											}}
											onPress={() =>
												setnavigationDrawerVisible(
													false
												)
											}
										>
											<Image
												source={assets.left}
												resizeMode="contain"
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
										</TouchableOpacity>
									</View>
									<TouchableOpacity
										style={{
											backgroundColor:
												COLORS.white,
											width: "100%",
											marginTop: 15,
											height: 50,
											justifyContent: "center",
										}}
									>
										<Text
											style={{
												textAlign: "center",
												fontSize: 20,
												fontWeight: "600",
												color: COLORS.gray,
											}}
										>
											Profile
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											backgroundColor:
												COLORS.white,
											width: "100%",
											marginTop: 15,
											height: 50,
											justifyContent: "center",
										}}
									>
										<Text
											style={{
												textAlign: "center",
												fontSize: 20,
												fontWeight: "600",
												color: COLORS.gray,
											}}
										>
											Wallet
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											backgroundColor:
												COLORS.white,
											width: "100%",
											marginTop: 15,
											height: 50,
											justifyContent: "center",
										}}
										onPress={() => {
											setnavigationDrawerVisible(
												false
											),
												setstatisticsModalVisible(
													true
												);
										}}
									>
										<Text
											style={{
												textAlign: "center",
												fontSize: 20,
												fontWeight: "600",
												color: COLORS.gray,
											}}
										>
											Statistics
										</Text>
									</TouchableOpacity>
								</View>

								<View
									style={{
										marginTop: 30,
										margin: 10,
										borderRadius: 20,
										backgroundColor: COLORS.white,
									}}
								></View>
							</View>
						</Modal>
					</SafeAreaView>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

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

export default ServiceMan;
