import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	TextInput,
} from "react-native";

import Inputs from "../../components/Inputs";
import Submit from "../../components/Submit";
import Account from "../../components/Account";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../../constants";

const RegisterSubService8 = ({ route }) => {
	const navigation = useNavigation();
	const subServices = route.params.prevData;
	const SMan_Details1 = route.params.temp;

	const [validity, setValidity] = useState("true");
	console.log("\nPage\t" + "RegisterSubService8");

	const [PhoneNumber, onChangePhoneNumber] = React.useState(null);

	const validation = () => {
		var validationtemp = null;
		if (PhoneNumber <= 1000000000 || PhoneNumber >= 10000000000) {
			validationtemp = "Phone Number";
		} else {
			validationtemp = "true";
		}

		return "true";
	};
	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<ScrollView style={{ backgroundColor: "white", flex: 1 }}>
				<View style={styles.container}>
					<Image
						source={require("../../assets/login.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>Please Login</Text>
					<Text style={styles.textBody}>
						Log in to verify your phone number
					</Text>
					<View style={{ marginTop: 20 }} />
					<TextInput
						style={styles.input}
						onChangeText={onChangePhoneNumber}
						value={PhoneNumber}
						placeholder="Phone Number"
						keyboardType="numeric"
						icon="user"
						placeholderTextColor="#a0a0a0"
					/>
					{validity == "true" ? null : (
						<Text style={{ color: "#bb0000" }}>
							Please enter {validity} properly
						</Text>
					)}
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							const validationtemp = validation();
							if (validationtemp == "true") {
								navigation.navigate("RegisterSubService9", {
									subServices,
									SMan_Details1,
									PhoneNumber,
								});
							} else {
								console.log(
									"Validation unsuccessful for input " + validationtemp
								);
							}
							setValidity(validationtemp);
						}}
					>
						<Text style={styles.buttontext}>SEND OTP</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	button: {
		marginTop: 50,
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
		width: 200,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	input: {
		fontSize: 20,
		height: 48,
		margin: 16,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 0.5,
		borderWidth: 1,
		width: "90%",
		padding: 4,
	},
	button2: {
		marginTop: 50,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "white",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 40,
		width: 80,
		marginRight: 23,
		alignSelf: "flex-end",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	textTitle: {
		fontWeight: "bold",

		marginTop: SIZES.large,
		fontSize: 40,
		marginVertical: 5,
	},

	textBody: {
		fontSize: 19,
		textAlign: "center",
	},
	buttontext: {
		fontWeight: "bold",
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
	buttontext2: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.primary,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
	textTitle: {
		fontSize: 40,
		marginVertical: 10,
	},
	textBody: {
		fontSize: 16,
	},
});

export default RegisterSubService8;
