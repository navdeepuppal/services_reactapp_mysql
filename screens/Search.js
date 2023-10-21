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

const Search = ({ navigation, onSearch }) => {
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
					height: 52,
					width: "95%",
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "600",
						marginLeft: 20,
						marginTop: 10,
					}}
				>
					Discover
				</Text>

				<View
					style={{
						borderRadius: 10,
						marginTop: 5,
						backgroundColor: "#f2f2f2",
						padding: 12,
						height: 40,
						width: 250,
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
						placeholder="Search"
						placeholderTextColor="#A0A0A0"
						style={{
							alignSelf: "center",
							margin: "2%",
							marginLeft: 9,
							fontSize: SIZES.large - 2,
							color: COLORS.primary,

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
						padding: 9,
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: COLORS.white,
					}}
				>
					<ScrollView
						style={{
							backgroundColor: COLORS.white,
							borderTopRightRadius: 10,
							height: "100%",
						}}
					>
						<TouchableOpacity
							style={{ marginBottom: 80 }}
							onPress={() => setButtonStatus("2")}
						>
							<View
								style={{
									backgroundColor: "#f2f2f2",

									borderRadius: 15,
									height: 70,
									width: 70,
									paddingTop: 15,
									justifyContent: "flex-start",
								}}
							>
								<Image
									source={require("../assets/images/homeservices.png")}
									resizeMode="center"
									style={styles.inventoryImage}
								/>
								<Text
									style={{
										fontSize: 14,
										marginTop: 10,
										alignContent: "flex-end",
										justifyContent: "center",
										alignSelf: "center",
										textAlign: "center",
										fontWeight: "400",
										color: COLORS.primary,
									}}
								>
									Home Services
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							style={{ marginBottom: 80 }}
							onPress={() => setButtonStatus("1")}
						>
							<View
								style={{
									backgroundColor: "#f2f2f2",

									borderRadius: 15,
									height: 70,
									width: 78,
									paddingTop: 15,
									justifyContent: "flex-start",
								}}
							>
								<Image
									source={require("../assets/images/freelancers.png")}
									resizeMode="center"
									style={styles.inventoryImage}
								/>
								<Text
									style={{
										fontSize: 14,
										marginTop: 10,
										alignContent: "flex-end",
										justifyContent: "center",
										alignSelf: "center",
										textAlign: "center",
										fontWeight: "400",
										color: COLORS.primary,
									}}
								>
									Freelancers
								</Text>
							</View>
						</TouchableOpacity>
					</ScrollView>
				</View>

				{/* Fruits Screen */}

				{state == 1 ? (
					<View style={{ width: "80%", height: "100%" }}>
						<ScrollView
							style={{
								marginLeft: 6,
								backgroundColor: COLORS.white,
								marginTop: 5,
								borderTopLeftRadius: 10,
								height: "100%",
							}}
						>
							<View
								style={{
									width: "90%",
									height: 90,
									padding: 10,
									flexDirection: "row",
									borderColor: "white",

									borderBottomWidth: 0.2,
									borderColor: COLORS.gray,
									alignContent: "center",
								}}
							>
								<Image
									source={require("../assets/images/graphicsdesign.png")}
									resizeMode="contain"
									style={{
										width: 52,
										height: 52,
										alignSelf: "center",
									}}
								/>
								<View style={{ margin: 10 }}>
									<Text
										style={{
											fontSize: 18,
											color: "black",
											fontWeight: "600",
										}}
									>
										Graphics & Design
									</Text>
									<Text
										style={{
											fontSize: 14,
											color: "black",
											width: "60%",
										}}
									>
										Logo & Brand Identity, Gaming
									</Text>
								</View>
							</View>
							<View
								style={{
									width: "90%",
									height: 90,
									padding: 10,
									flexDirection: "row",
									borderColor: "white",

									borderBottomWidth: 0.2,
									borderColor: COLORS.gray,
									alignContent: "center",
								}}
							>
								<Image
									source={require("../assets/images/digitalmarketing.png")}
									resizeMode="contain"
									style={{
										width: 52,
										height: 52,
										alignSelf: "center",
									}}
								/>
								<View style={{ margin: 10 }}>
									<Text
										style={{
											fontSize: 18,
											color: "black",
											fontWeight: "600",
										}}
									>
										Digital Marketing
									</Text>
									<Text
										style={{
											fontSize: 14,
											color: "black",
											width: "60%",
										}}
									>
										Social Media Marketing, Search
										Engine Optimization( SEO)
									</Text>
								</View>
							</View>
						</ScrollView>
					</View>
				) : state == "2" ? (
					<View style={{ width: "76%" }}>
						<ScrollView
							style={{
								marginLeft: 6,
								backgroundColor: COLORS.white,
								marginTop: 5,
								borderTopLeftRadius: 10,
								height: "100%",
							}}
						>
							<View
								style={{
									width: "90%",
									height: 90,
									padding: 10,
									flexDirection: "row",
									borderColor: "white",

									borderBottomWidth: 0.2,
									borderColor: COLORS.gray,
									alignContent: "center",
								}}
							>
								<Image
									source={require("../assets/images/carpenter.png")}
									resizeMode="contain"
									style={{
										width: 52,
										height: 52,
										alignSelf: "center",
									}}
								/>
								<View style={{ margin: 10 }}>
									<Text
										style={{
											fontSize: 18,
											color: "black",
											fontWeight: "600",
										}}
									>
										Carpenter
									</Text>
									<Text
										style={{
											fontSize: 14,
											width: "60%",
											color: "black",
										}}
									>
										Fix Furniture, Build
										Cupboards, Polishing Doors
									</Text>
								</View>
							</View>
							<View
								style={{
									width: "90%",
									height: 90,
									padding: 10,
									flexDirection: "row",
									borderColor: "white",

									borderBottomWidth: 0.2,
									borderColor: COLORS.gray,
									alignContent: "center",
								}}
							>
								<Image
									source={require("../assets/images/cleaning.png")}
									resizeMode="contain"
									style={{
										width: 52,
										height: 52,
										alignSelf: "center",
									}}
								/>
								<View style={{ margin: 10 }}>
									<Text
										style={{
											fontSize: 18,
											color: "black",
											fontWeight: "600",
										}}
									>
										Cleaning
									</Text>
									<Text
										style={{
											fontSize: 14,
											width: "60%",
											color: "black",
										}}
									>
										AC, Kitchen, Bathroom, Home
										Cleaning, Maid
									</Text>
								</View>
							</View>
						</ScrollView>
					</View>
				) : null}
			</View>
		</SafeAreaView>
	);
};

export default Search;

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
		width: 10,
		height: 10,
		backgroundColor: "white",
	},
	image2: {
		opacity: 0.8,
		width: 10,
		height: 10,
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
