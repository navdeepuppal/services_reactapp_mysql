import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	Pressable,
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
			<ScrollView style={{ backgroundColor: "white", flex: 1 }}>
				<BackButton />
				<View style={styles.container}>
					<Image
						source={require("../assets/login.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>LOGIN</Text>
					<Text style={styles.textBody}>
						Enter your phone number to proceed
					</Text>
					<View
						style={{
							flexDirection: "row",
							width: "85%",
							alignSelf: "stretch",
						}}
					>
						<Text style={styles.countrycode}>+91</Text>

						<TextInput
							style={styles.input}
							onChangeText={onChangePhoneNumber}
							value={PhoneNumber}
							placeholder="Enter Phone Number"
							keyboardType="numeric"
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
						<Text style={styles.buttontext}>SEND OTP</Text>
					</TouchableOpacity>

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
											fontSize: 19,
											alignSelf: "flex-start",
										}}
									>
										VERIFY DETAILS
									</Text>

									<Text
										style={{
											marginTop: 20,
											alignSelf: "flex-start",
											fontSize: 18,
										}}
									>
										OTP has been sent to{" "}
										{PhoneNumber}
									</Text>
									<TextInput
										style={styles.otp}
										onChangeText={onChangeOTP}
										value={OTP}
										placeholder="••••"
										keyboardType="numeric"
										placeholderTextColor="#a0a0a0"
										maxLength={4}
										letterSpacing={5}
									/>
									<TouchableOpacity
										onPress={() => {
											setModalVisible(false);
										}}
									>
										<Text
											style={{
												marginTop: 10,
												color: "blue",
												fontSize: 16,
											}}
										>
											Resend OTP
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={styles.verifyButton}
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
													"Incorrect OTP, Please try again"
												);
												onChangeOTP("");
											}
										}}
									>
										<Text
											style={styles.buttontext}
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
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "100%",
		height: "43%",
	},
	loweredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},

	countrycode: {
		marginTop: 50,
		fontSize: 27,
		height: 70,
		marginLeft: 30,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 1,
		padding: 13,
	},
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
	verifyButton: {
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
		flexDirection: "row",
		borderRadius: 10,
	},
	input: {
		marginTop: 50,
		fontSize: 26,
		height: 70,
		margin: 8,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 0.5,
		borderWidth: 1,
		width: "78%",
		padding: 13,
	},
	otp: {
		justifyContent: "center",
		textAlign: "center",
		marginTop: 50,
		fontSize: 40,
		height: 70,
		margin: 8,
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

export default BookingLogin;
