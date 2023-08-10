import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	KeyboardAvoidingView,
	Linking,
	Alert,
} from "react-native";
import React, { useState } from "react";

import { COLORS, config, SIZES, assets } from "../constants";

const FruitsandVegetables = ({ navigation, onSearch }) => {
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
					justifyContent: "space-between",
					height: 43,
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "600",
						marginLeft: 20,
						marginTop: 3,
					}}
				>
					Discover Services
				</Text>

				<View
					style={{
						borderRadius: SIZES.small,
						backgroundColor: COLORS.primary,
						padding: 10,
						height: 35,
						width: 180,
						borderColor: COLORS.gray,
						flexDirection: "row",
					}}
				>
					<Image
						source={assets.search}
						style={{
							alignSelf: "center",
							width: 16,
							height: 16,
						}}
					/>
					<TextInput
						placeholder="Search services"
						placeholderTextColor="#A0A0A0"
						style={{
							alignSelf: "center",
							margin: "2%",
							marginLeft: 7,
							fontSize: SIZES.large - 2,
							color: COLORS.white,
							width: 320,
							height: 65,
						}}
						onChangeText={onSearch}
					/>
				</View>
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
						borderRightWidth: 0.2,
					}}
				>
					<ScrollView>
						<TouchableOpacity
							style={{
								backgroundColor: "white",
								margin: 10,
								borderRadius: 15,
								height: 140,
								width: 90,
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
									fontSize: 14,
									marginTop: 20,
									alignContent: "flex-end",
									justifyContent: "center",
									alignSelf: "center",
									textAlign: "center",
									fontWeight: "600",
									color: COLORS.gray,
								}}
							>
								Services
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: "black",
								margin: 10,
								borderRadius: 15,
								height: 140,
								width: 90,
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
									fontSize: 14,
									marginTop: 20,
									alignContent: "flex-end",
									justifyContent: "center",
									alignSelf: "center",
									textAlign: "center",
									fontWeight: "600",
									color: COLORS.gray,
								}}
							>
								Freelancers
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
		</SafeAreaView>
	);
};

export default FruitsandVegetables;

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
