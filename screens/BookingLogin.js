import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	Pressable,
	KeyboardAvoidingView,
	Modal,
	TextInput,
	Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";
import TermsCondition from "../components/TermsCondition";
import BackButton from "../components/BackButton";

const BookingLogin = ({ navigation, route }) => {
	const filteredData = route.params.filteredData;

	const [validity, setValidity] = useState("true");

	const [PhoneNumber, onChangePhoneNumber] = React.useState(null);

	const [OTP, onChangeOTP] = React.useState(null);
	//const [value, setvalue] = useState("");
	const [isLoggedIn, setLoggedIn] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	const saveValue = () => {
		AsyncStorage.setItem("PhoneNumber", PhoneNumber);
		AsyncStorage.setItem("isLoggedIn", "true");
	};

	const validate = () => {
		if (PhoneNumber <= 1000000000 || PhoneNumber >= 10000000000) {
			return false;
		} else {
			return true;
		}
	};
	const getValue = () => {
		AsyncStorage.getItem("PhoneNumber").then((PhoneNumber) => {
			onChangePhoneNumber(PhoneNumber);
		});
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<View>
				<BackButton />
			</View>
			<ScrollView style={{ backgroundColor: "white" }}>
				<KeyboardAvoidingView
					behavior="padding"
					style={styles.container}
				>
					<View style={styles.container}>
						<Text style={{ fontSize: 27 }}>
							Enter your mobile {"\n"}number
						</Text>
						<View
							style={{
								flexDirection: "row",
								borderWidth: 1,
								borderRadius: 20,
								marginTop: 30,
							}}
						>
							<Text style={styles.countrycode}>+91</Text>

							<TextInput
								style={styles.input}
								onChangeText={onChangePhoneNumber}
								value={PhoneNumber}
								placeholder="Enter your number"
								keyboardType="number-pad"
								placeholderTextColor="#a0a0a0"
								maxLength={10}
								letterSpacing={1}
							/>
						</View>

						{validity == "true" ? null : (
							<Text style={{ color: "#bb0000" }}>
								Please enter {validity} properly
							</Text>
						)}

						<View
							style={{
								justifyContent: "flex-end",
								alignContent: "flex-end",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									color: "#cccccc",
									margin: "2%",
								}}
							>
								By proceeding, you agree with Sqera's
								terms and conditions and privacy policy.
							</Text>

							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									const validationtemp = validate();

									if (validationtemp == true) {
										setModalVisible(true);
										setValidity("true");
									} else {
										console.log(
											"Validation unsuccessful for input " +
												validationtemp
										);
										setValidity("Phone Number");
									}
								}}
							>
								<Text style={styles.buttontext}>
									Get OTP
								</Text>
							</TouchableOpacity>

							<View
								style={{
									flexDirection: "row",
									height: "20%",
									alignItems: "center",
								}}
							>
								<Image
									source={require("../assets/icons/trustshield.png")}
									style={{
										height: 30,
										width: 30,
									}}
								/>
								<Text style={{ color: "#cccccc" }}>
									{" "}
									Trusted by more than 10 lakh+
									Indians
								</Text>
							</View>
						</View>

						<View style={styles.centeredView}>
							<Modal
								animationType="slide"
								transparent={true}
								visible={modalVisible}
								onRequestClose={() => {
									setModalVisible(!modalVisible);
								}}
							>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<Text
											style={{
												fontWeight: "bold",
												fontSize: 25,
												alignSelf:
													"flex-start",
											}}
										>
											Enter your OTP
										</Text>

										<Text
											style={{
												marginTop: 20,
												alignSelf:
													"flex-start",
												fontSize: 18,
											}}
										>
											Sqera has sent a 4-digit
											OTP on your phone number
											+91 {PhoneNumber}
										</Text>

										<TextInput
											caretHidden={true}
											style={styles.otp}
											onChangeText={
												onChangeOTP
											}
											value={OTP}
											placeholder="••••"
											keyboardType="number-pad"
											placeholderTextColor="#a0a0a0"
											maxLength={4}
											letterSpacing={5}
										/>
										<View
											style={{
												flexDirection:
													"row",
											}}
										>
											<Text
												style={{
													marginTop: 10,

													fontSize: 16,
												}}
											>
												Didn't receive it?
											</Text>
											<TouchableOpacity
												onPress={() => {
													setModalVisible(
														false
													);
												}}
											>
												<Text
													style={{
														marginTop: 10,
														color: "blue",
														fontSize: 16,
													}}
												>
													{" "}
													Resend
												</Text>
											</TouchableOpacity>
										</View>
										<TouchableOpacity
											style={
												styles.verifyButton
											}
											onPress={() => {
												if (OTP == 1609) {
													setModalVisible(
														false
													);
													saveValue();
													navigation.navigate(
														"SelectAddress",
														{
															filteredData,
														}
													);
												} else {
													Alert.alert(
														"Incorrect OTP"
													);
													onChangeOTP(
														""
													);
												}
											}}
										>
											<Text
												style={
													styles.buttontext
												}
											>
												VERIFY AND PROCEED
											</Text>
										</TouchableOpacity>

										<TermsCondition />
									</View>
								</View>
							</Modal>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		height: "100%",
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
		elevation: 5,
		width: "100%",
		height: "60%",
	},

	countrycode: {
		fontSize: 24,
		borderColor: "silver",
		borderBottomWidth: 1,
		padding: 20,
		fontWeight: "bold",
		justifyContent: "center",
		alignSelf: "center",
	},
	button: {
		alignItems: "center",

		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
		borderRadius: SIZES.extraLarge,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: "22%",
		width: 400,
		justifyContent: "center",
		flexDirection: "row",
	},
	verifyButton: {
		marginTop: "10%",
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
		flexDirection: "row",
		borderRadius: 10,
	},
	input: {
		fontSize: SIZES.extraLarge - 4,
		height: 80,
		borderRadius: 9,
		width: "78%",
	},
	otp: {
		justifyContent: "center",
		textAlign: "center",
		marginTop: 20,
		fontSize: 40,
		height: 70,
		margin: 8,
		marginTop: "20%",
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 0.5,
		borderWidth: 1,
		width: "78%",
		padding: 13,
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
		alignSelf: "center",
		color: COLORS.white,
	},
	buttontext2: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.primary,
	},
	container: {
		margin: 10,
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

export default BookingLogin;
