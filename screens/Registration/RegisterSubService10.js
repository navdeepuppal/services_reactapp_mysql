import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	SafeAreaView,
	KeyboardAvoidingView,
	Button,
	TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as ImagePicker from "expo-image-picker";

const RegisterSubService10 = ({ route }) => {
	const navigation = useNavigation();
	const subServices = route.params.subServices;
	const SMan_Details1 = route.params.SMan_Details1;
	const SMan_Details2 = route.params.temp;
	const PhoneNumber = route.params.PhoneNumber;
	const [validity, setValidity] = useState("true");
	console.log("reached1\t" + JSON.stringify(subServices));

	const [AadharNumber, onChangeAadharNumber] = useState(null);
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	const saveValue = () => {
		AsyncStorage.setItem("ServiceMan", "1");
	};
	saveValue();
	const validation = () => {
		var validationtemp = null;
		if (AadharNumber >= 100000000000) {
			validationtemp = "true";
		} else {
			validationtemp = "Aadhar Number";
		}
		return "true";
	};

	return (
		<SafeAreaView
			style={{ backgroundColor: "white", flex: 1, margin: 12 }}
		>
			<ScrollView>
				<View style={styles.container}>
					<Image
						source={require("../../assets/images/octoloader.gif")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>
						Privacy & Security
					</Text>
					<Text style={styles.textBody}>
						You're Almost There, Boss!
					</Text>
					<Text style={styles.textBody}>
						We need to protect our community.{"\n"} For that
						need to do verification of your documents before
						you register as a professional
					</Text>

					<Text style={{ fontSize: 20, margin: "4%" }}>
						Please enter your aadhar number
					</Text>

					<TextInput
						style={styles.input}
						onChangeText={onChangeAadharNumber}
						value={AadharNumber}
						placeholder=""
						placeholderTextColor="#a0a0a0"
						keyboardType="phone-pad"
						multiline
						numberOfLines={2}
						maxLength={12}
					/>

					<Text style={{ fontSize: 20, margin: 16 }}>
						Please upload front side of your Aadhar card
						showing your name, address, phone number & with
						your picture.
					</Text>

					<Button
						title="Pick an image from camera roll"
						onPress={pickImage}
					/>
					{image && (
						<Image
							source={{ uri: image }}
							style={{ width: 200, height: 200 }}
						/>
					)}
					{validity == "true" ? null : (
						<Text style={{ color: "#bb0000" }}>
							Please enter {validity} properly
						</Text>
					)}
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							const temp = validation();
							if (temp == "true") {
								navigation.navigate(
									"RegisterSubService11",
									{
										subServices,
										SMan_Details1,
										SMan_Details2,
										PhoneNumber,
										AadharNumber,
										image,
									}
								);
							} else {
								console.log(
									"Validation unsuccessful for input " +
										temp
								);
							}
							setValidity(temp);
						}}
					>
						<Text style={styles.buttontext}>Continue</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 20,
		alignItems: "center",
		margin: 16,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 0.5,
		borderWidth: 1,
		width: "90%",
	},
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
		flex: 1,
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
		backgroundColor: COLORS.primary,
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

export default RegisterSubService10;
