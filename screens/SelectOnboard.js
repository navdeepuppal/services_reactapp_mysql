import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	Button,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const SelectOnboard = (props) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View
				style={{
					width: "100%",
					borderRadius: 10,
					marginBottom: 150,
				}}
			>
				<View>
					<View
						style={{
							marginLeft: 50,
							width: 380,
							flexWrap: "wrap",
							flexDirection: "row",
						}}
					>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/maid.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Maid
							</Text>
						</View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/cleaning.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Cleaning
							</Text>
						</View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/painter.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Painter
							</Text>
						</View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/coder.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Coder
							</Text>
						</View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/carpenter.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Carpenter
							</Text>
						</View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/plumber.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Plumber
							</Text>
						</View>
					</View>
					<View
						style={{
							width: 380,
							flexDirection: "row",
							marginLeft: 50,
							alignSelf: "center",
						}}
					>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/consultant.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Consultant
							</Text>
						</View>

						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/driver.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Driver
							</Text>
						</View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
								justifyContent: "center",
							}}
						>
							<Image
								source={require("../assets/icons/gardener.png")}
								style={{
									width: 40,
									height: 40,
									alignSelf: "center",
								}}
							/>
							<Text
								style={{
									marginTop: 5,
									alignSelf: "center",
									fontSize: 13,
									fontWeight: "300",
								}}
							>
								Gardener
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View
				style={{
					backgroundColor: COLORS.white,
					width: "100%",
					height: "25%",
					borderRadius: 70,
				}}
			>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						setValue = async (value) => {
							try {
								await AsyncStorage.setItem(
									"firstTime",
									value
								);
							} catch (e) {
								console.error(e);
								// save error
							}
						};
						setValue("false");
						navigation.navigate("Home");
					}}
				>
					<Text style={styles.textBody}>Find a Service</Text>
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "600",
						alignSelf: "center",
						margin: 20,
					}}
				>
					OR
				</Text>
				<TouchableOpacity
					style={styles.button2}
					onPress={() =>
						navigation.navigate("SelectOnboardProfessional")
					}
				>
					<View>
						<Text style={styles.textBody}>
							Register as a Professional
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	textTitle: {
		fontSize: 40,
		color: COLORS.gray,
		textAlign: "center",
	},
	subTitle: {
		fontWeight: "bold",
		fontSize: 20,
		color: COLORS.gray,
		marginRight: SIZES.base / 99,
		textAlign: "center",
	},
	littleTitle: {
		fontSize: 15,
		color: COLORS.primary,
		textAlign: "center",
		fontStyle: "italic",
	},
	textBody: {
		fontSize: 20,
		color: COLORS.white,
		fontWeight: "600",
		textAlign: "center",
		alignSelf: "center",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(248,248,250,255)",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},

	button: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		marginTop: 80,
		height: 55,
		width: 300,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",

		flexDirection: "row",
		borderRadius: 10,
		padding: "2%",
	},
	button2: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.primary,
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 55,
		width: 300,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",

		flexDirection: "row",
		borderRadius: 10,
		padding: "2%",
	},
});

export default SelectOnboard;
