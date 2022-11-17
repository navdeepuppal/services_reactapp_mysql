import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	TextInput,
} from "react-native";

import Input from "../../components/Inputs";

import { COLORS, SIZES, SHADOWS, assets } from "../../constants";

import { RadioButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

const RegisterSubService7 = ({ route }) => {
	const navigation = useNavigation();
	const prevData = route.params.data2;
	console.log("\nPage\t" + "RegisterSubService7");
	const [validity, setValidity] = useState("true");

	const [Name, onChangeName] = React.useState(null);
	const [Email, onChangeEmail] = React.useState(null);
	const [Age, onChangeAge] = React.useState(null);
	const [City, onChangeCity] = React.useState(null);
	const [FullAddress, onChangeFullAddress] = React.useState(null);
	const [Pincode, onChangePincode] = React.useState(null);
	const [Shop, setShop] = useState("No");
	const [Languages, onChangeLanguages] = React.useState(null);
	const [Website, onChangeWebsite] = React.useState(null);

	const validation = () => {
		var validationtemp = null;
		if (Name == null || Name.toString().length < 5) {
			validationtemp = "Name";
		} else if (
			Email == null ||
			Email.toString().length <= 8 ||
			!Email.toString().includes("@")
		) {
			validationtemp = "Email";
		} else if (Age == null || Age < 18) {
			validationtemp = "Age";
		} else if (City == null || City < 3) {
			validationtemp = "City";
		} else if (FullAddress == null || FullAddress < 8) {
			validationtemp = "Address";
		} else if (Pincode == null || Pincode < 7) {
			validationtemp = "Pincode";
		} else if (Languages == null || Languages.toString().length <= 4) {
			validationtemp = "Languages";
		} else {
			validationtemp = "true";
		}

		return "true";
	};

	return (
		<SafeAreaView>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<ScrollView style={{ backgroundColor: "white" }}>
					<View style={styles.container}>
						<Image
							source={require("../../assets/signup.png")}
							resizeMode="center"
							style={styles.image}
						/>
						<Text style={styles.textTitle}>Register as a Professional</Text>
						<Text style={styles.textBody}>Join Sqera to change your life.</Text>
						<Text style={styles.textBody}>
							Share your details and we'll reach out with next steps.
						</Text>

						<TextInput
							style={styles.input}
							onChangeText={onChangeName}
							value={Name}
							placeholder="Full Name (Ex. John Doe)"
							placeholderTextColor="#a0a0a0"
						/>

						<TextInput
							style={styles.input}
							onChangeText={onChangeEmail}
							value={Email}
							placeholder="Email"
							placeholderTextColor="#a0a0a0"
						/>
						<TextInput
							style={styles.input}
							onChangeText={onChangeAge}
							value={Age}
							placeholder="Age"
							keyboardType="numeric"
							placeholderTextColor="#a0a0a0"
						/>
						<TextInput
							style={styles.input}
							onChangeText={onChangeCity}
							value={City}
							placeholder="City"
							placeholderTextColor="#a0a0a0"
						/>
						<TextInput
							style={styles.input}
							onChangeText={onChangeFullAddress}
							value={FullAddress}
							placeholder="Full Address"
							placeholderTextColor="#a0a0a0"
						/>
						<TextInput
							style={styles.input}
							onChangeText={onChangePincode}
							value={Pincode}
							placeholder="Pincode"
							keyboardType="numeric"
							placeholderTextColor="#a0a0a0"
						/>

						<Text style={{ fontSize: 20, margin: 13.5 }}>
							Do you own any Shop?
						</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								width: "50%",
							}}
						>
							<TouchableWithoutFeedback onPress={() => setShop("Yes")}>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="Yes"
										status={Shop === "Yes" ? "checked" : "unchecked"}
										onPress={() => setShop("Yes")}
									/>
									<Text style={{ fontSize: 19 }}>Yes</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => setShop("No")}>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="No"
										status={Shop === "No" ? "checked" : "unchecked"}
										onPress={() => setShop("No")}
									/>
									<Text style={{ fontSize: 19 }}>No</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>

						<TextInput
							style={styles.input}
							onChangeText={onChangeLanguages}
							value={Languages}
							placeholder="Languages you can speak? Eg.Hindi"
							placeholderTextColor="#a0a0a0"
						/>
						<TextInput
							style={styles.input}
							onChangeText={onChangeWebsite}
							value={Website}
							placeholder="Website Link: (if any)"
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
									const temp = {
										Name: Name,
										Email: Email,
										Age: Age,
										City: City,
										FullAddress: FullAddress,
										Pincode: Pincode,
										Shop: Shop,
										Languages: Languages,
										Website: Website,
									};
									navigation.navigate("RegisterSubService8", {
										prevData,
										temp,
									});
								} else {
									console.log(
										"Validation unsuccessful for input " + validationtemp
									);
								}
								setValidity(validationtemp);
							}}
						>
							<Text style={styles.buttontext}>Continue</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
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
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
	button: {
		marginTop: 80,
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
	textTitle: {
		fontWeight: "bold",

		marginTop: SIZES.large,
		fontSize: 40,
		marginVertical: 5,
	},

	textBody: {
		marginTop: SIZES.large,
		fontSize: 19,
		textAlign: "center",
	},
	buttontext: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default RegisterSubService7;
