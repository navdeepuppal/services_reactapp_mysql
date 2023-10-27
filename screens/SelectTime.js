import {
	StyleSheet,
	TouchableOpacity,
	Text,
	TextInput,
	View,
	TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { BackButton } from "../components";
import { ScrollView } from "react-native-gesture-handler";

const SelectTime = ({ navigation, route }) => {
	const cartData = route.params.cartData;
	const [timeSlot, settimeSlot] = useState("Evening");

	return (
		<SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
			<BackButton />

			<Text style={styles.inputText}>Select Preferred Time Slot </Text>
			<Text
				style={{
					color: "gray",
					marginLeft: 15,
					fontSize: 27,
					marginBottom: "10%",
				}}
			>
				for your Booking{" "}
			</Text>

			<View
				style={{
					width: "100%",
					height: "10%",
					padding: 2,
					borderRightColor: "gray",
					flexDirection: "row",
				}}
			>
				<ScrollView
					horizontal
					style={{
						flexDirection: "row",
					}}
				>
					<TouchableOpacity style={{ marginBottom: 40 }}>
						<View
							style={{
								backgroundColor: "#f2f2f2",
								margin: 10,
								borderRadius: 15,
								height: 60,
								width: 100,

								justifyContent: "center",
							}}
						>
							<Text
								style={{
									fontSize: 18,
									alignSelf: "center",
									fontWeight: "400",
									color: COLORS.primary,
								}}
							>
								Today
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={{ marginBottom: 40 }}>
						<View
							style={{
								backgroundColor: "#f2f2f2",
								margin: 10,
								borderRadius: 15,
								height: 60,
								width: 120,

								justifyContent: "center",
							}}
						>
							<Text
								style={{
									fontSize: 18,
									alignSelf: "center",
									fontWeight: "400",
									color: COLORS.primary,
								}}
							>
								Tomorrow
							</Text>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View
				style={{
					flexDirection: "column",
					width: "100%",
					alignItems: "center",
					alignSelf: "center",
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => settimeSlot("Morning")}
				>
					<View
						style={{
							flexDirection: "row",
							borderColor: COLORS.gray,
							borderWidth: 0.2,
							borderRadius: 15,
							marginTop: 70,
							padding: 16,
							margin: 10,
							width: 330,
							height: 70,
						}}
					>
						<RadioButton
							value="Morning"
							status={
								timeSlot === "Morning"
									? "checked"
									: "unchecked"
							}
							onPress={() => settimeSlot("Morning")}
						/>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "600",
								alignSelf: "center",
							}}
						>
							Morning Slot: After 7 AM{" "}
						</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => settimeSlot("Evening")}
				>
					<View
						style={{
							flexDirection: "row",
							borderColor: COLORS.gray,
							borderWidth: 0.2,
							borderRadius: 15,
							padding: 16,
							margin: 10,
							width: 330,
							height: 70,
						}}
					>
						<RadioButton
							value="Evening"
							status={
								timeSlot === "Evening"
									? "checked"
									: "unchecked"
							}
							onPress={() => settimeSlot("Evening")}
						/>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "600",
								alignSelf: "center",
							}}
						>
							Evening Slot: After 2 PM
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
			<Text style={styles.extraText}>
				Service man will contact you before visiting your location
				to confirm the exact timing of the visit.
			</Text>
			<TouchableOpacity
				style={styles.verifyButton}
				onPress={() => {
					AsyncStorage.setItem("timeSlot", timeSlot);
					navigation.navigate("ChooseServiceMan", { cartData });
				}}
			>
				<Text style={styles.buttontext}>
					Find Available Professionals
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	extraText: {
		paddingHorizontal: 3,
		marginTop: "15%",
		alignSelf: "center",
		fontSize: 15,
		margin: 12,
		color: "gray",
	},
	inputText: {
		fontSize: 28,
		margin: 16,
		marginTop: "10%",
		fontWeight: "600",
	},

	verifyButton: {
		alignSelf: "center",
		marginTop: 20,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "black",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},

	buttontext: {
		fontWeight: "bold",
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default SelectTime;
