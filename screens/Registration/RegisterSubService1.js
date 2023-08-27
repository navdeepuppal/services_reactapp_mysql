import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	Modal,
	TouchableOpacity,
	SafeAreaView,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES, SHADOWS, assets } from "../../constants";
import ExitHeader from "../../components/ExitHeader";
import BackButton from "../../components/BackButton";

const RegisterSubService1 = () => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState("");
	const [HoldModalVisible, setHoldModalVisible] = useState("");
	const [isServiceMan, setServiceMan] = useState("");
	const [user, setUser] = useState("");

	console.log("\nPage\t" + "RegisterSubService1");

	const getValue = () => {
		AsyncStorage.getItem("ServiceMan").then((isServiceMan) => {
			console.log("isServiceMan::", isServiceMan);
			if (isServiceMan == "2") {
				setModalVisible(true);
			}
			if (isServiceMan == "1") {
				setHoldModalVisible(true);
			}
		});
	};
	const redirect = () => {
		AsyncStorage.getItem("PhoneNumber").then((user) => {
			setUser(user);
		});
		console.log(user);
		if (user == null) {
			navigation.navigate("Login");
		} else {
			console.log("HJejkn");
			getValue();
		}
	};
	redirect();
	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<BackButton></BackButton>
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<Image
						source={require("../../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>
						Ready to be your own boss?
					</Text>
					<Text style={styles.textBody}>
						Work your way. {"\n\n"}You bring the skill. {"\n"}
						We'll make your earning easy.
					</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							navigation.navigate("RegisterSubService5")
						}
					>
						<Text style={styles.buttontext}>Continue</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.centeredView}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<SafeAreaView style={styles.container}>
									<Image
										source={require("../../assets/servicemanLogin.png")}
										resizeMode="contain"
										style={styles.image}
									/>
									<Text style={styles.textTitle}>
										Welcome Back!
									</Text>
									<Text style={styles.textBody}>
										Taking you to your Dashboard..
									</Text>
									<TouchableOpacity
										style={styles.dashboardbutton}
										onPress={() => {
											navigation.navigate(
												"ServiceManDashboard"
											),
												setModalVisible(
													false
												);
										}}
									>
										<Text
											style={{
												fontSize: 25,
												color: "white",
											}}
										>
											Open My Dashboard
										</Text>
									</TouchableOpacity>
								</SafeAreaView>
							</View>
						</View>
					</Modal>
				</View>
				<View style={styles.centeredView}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={HoldModalVisible}
						onRequestClose={() => {
							setHoldModalVisible(!HoldModalVisible);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.holdmodalView}>
								<SafeAreaView style={styles.container}>
									<Image
										source={require("../../assets/holdaccountServiceMan.png")}
										resizeMode="contain"
										style={styles.image}
									/>
									<Text style={styles.textTitle}>
										Your account is on HOLD
									</Text>
									<Text style={styles.textBody}>
										We are reviewing your profile
										yet.{"\n\n"} We will confirm
										your application status to you
										after verification within a
										week. Thank you for being
										patient
									</Text>
									<TouchableOpacity
										style={styles.dashboardbutton}
										onPress={() => {
											setHoldModalVisible(
												false
											),
												setModalVisible(
													true
												);
										}}
									>
										<Text
											style={{
												fontSize: 25,
												color: "white",
											}}
										>
											Go Back to Home
										</Text>
									</TouchableOpacity>
								</SafeAreaView>
							</View>
						</View>
					</Modal>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		alignItems: "center",
	},
	modalView: {
		backgroundColor: "rgba(254,244,232,255)",
		padding: 25,
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "100%",
		height: "100%",
	},
	holdmodalView: {
		backgroundColor: "rgba(243,230,221,255)",
		padding: 25,
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "100%",
		height: "100%",
	},
	container: {
		flex: 1,
		alignItems: "center",
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
		width: "70%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	dashboardbutton: {
		marginTop: 80,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "rgba(253,79,106,255)",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: "70%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	textTitle: {
		fontWeight: "bold",
		marginTop: SIZES.extraLarge + 10,
		fontSize: 29,
		marginVertical: 5,
	},

	textBody: {
		margin: 20,
		marginTop: SIZES.large,
		fontSize: 23,
		textAlign: "center",
	},
	buttontext: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default RegisterSubService1;
