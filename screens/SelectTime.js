import {
	StyleSheet,
	TouchableOpacity,
	Text,
	SafeAreaView,
	TextInput,
	View,
	TouchableWithoutFeedback,
} from "react-native";
import { RadioButton } from "react-native-paper";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import BackButton from "../components/BackButton";

const SelectTime = ({ navigation, route }) => {
	const cartData = route.params.cartData;
	const [timeSlot, settimeSlot] = useState("Evening");

	return (
		<SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
			<BackButton />

			<Text style={styles.inputText}>Select Preferred Time Slot </Text>
			<View
				style={{
					flexDirection: "column",
					width: "50%",
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
							borderColor: "gray",
							borderWidth: 1,
							borderRadius: 15,
							padding: 20,
							width: "150%",
							margin: 25,
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
						<Text style={{ fontSize: 23 }}>
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
							borderColor: "gray",
							borderWidth: 1,
							borderRadius: 15,
							padding: 20,
							width: "150%",
							margin: 25,
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
						<Text style={{ fontSize: 23 }}>
							Evening Slot: After 3 PM
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
			<Text style={styles.extraText}>
				Service Man will contact you before visiting your place
			</Text>
			<TouchableOpacity
				style={styles.verifyButton}
				onPress={() => {
					AsyncStorage.setItem("timeSlot", timeSlot);
					navigation.navigate("PaymentApi", { cartData });
				}}
			>
				<Text style={styles.buttontext}>PROCEED</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	extraText: {
		alignSelf: "center",
		fontSize: 15,
		margin: 12,
		color: "green",
	},
	inputText: {
		fontSize: 28,
		margin: 16,
		marginTop: "30%",
		fontWeight: "600",
	},

	verifyButton: {
		alignSelf: "center",
		marginTop: 20,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
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
