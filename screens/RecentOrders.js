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
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../constants";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DelieverablesHeader, HomeHeader } from "../components";

const RecentOrders = ({ navigation }) => {
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
					flex: 1,
				}}
			>
				<View
					style={{
						width: "30%",
						margin: 1,
						padding: 2,
						borderRightColor: "gray",
						borderRightWidth: 1,
					}}
				>
					<ScrollView>
						<TouchableOpacity
							style={{
								backgroundColor:
									"rgba(255, 231, 255, 1)",
								margin: 10,
								borderRadius: 15,
								height: 170,
								width: "90%",
								paddingTop: 15,
								justifyContent: "flex-start",
							}}
							onPress={() => setButtonStatus("2")}
						>
							<Image
								source={require("../assets/images/icon.png")}
								resizeMode="center"
								style={styles.image}
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
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor:
									"rgba(255, 231, 255, 1)",
								margin: 10,
								borderRadius: 15,
								height: 170,
								width: "90%",
								paddingTop: 15,
								justifyContent: "flex-start",
							}}
							onPress={() => setButtonStatus("1")}
						>
							<Image
								source={require("../assets/images/icon.png")}
								resizeMode="center"
								style={styles.image}
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
						</TouchableOpacity>
					</ScrollView>
				</View>

				{/* Fruits Screen */}

				{state == 1 ? (
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
						height: "55%",
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
};

const styles = StyleSheet.create({
	image: {
		alignSelf: "center",
		height: 70,
		width: 70,
	},
	image2: {
		alignSelf: "center",
		height: 100,
		width: 100,
	},
});

export default RecentOrders;
