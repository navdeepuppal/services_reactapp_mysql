import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Image,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ModalList = ({ setVisible }) => {
	const navigation = useNavigation();

	const [isLoggedIn, setLoggedIn] = useState("");

	const [user, setUser] = useState("");
	AsyncStorage.getItem("PhoneNumber").then((user) => {
		setUser(user);
	});

	return (
		<SafeAreaView
			style={{
				backgroundColor: "rgba(248,248,250,255)",
				flex: 1,
			}}
		>
			{user ? (
				<TouchableOpacity
					style={{
						alignSelf: "center",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Image
							style={{ width: 50, height: 50 }}
							source={require("../assets/images/user.png")}
						/>

						<View
							style={{
								flexDirection: "column",
								margin: 10,
							}}
						>
							<Text
								style={{
									fontSize: 20,
								}}
							>
								{user}
							</Text>
							<Text
								style={{
									fontSize: 15,
								}}
							>
								5 ★
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={styles.button2}
					onPress={() => {
						setVisible(false);
						navigation.navigate("Login");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						<Text style={styles.loginText}> Log In</Text>
					</View>
				</TouchableOpacity>
			)}

			<ScrollView
				style={{
					backgroundColor: "rgba(248,248,250,255)",
					flex: 1,
				}}
			>
				<View
					style={{
						marginTop: "5%",
						height: 1,
						width: "200%",

						alignSelf: "center",
						backgroundColor: "#cccccc",
					}}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						setVisible(false), navigation.navigate("Contact");
					}}
				>
					<Text style={styles.textBody}>Contact Us</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("RequestNewService"),
							setVisible(false);
					}}
				>
					<Text style={styles.textBody}>
						Request New Service
					</Text>
				</TouchableOpacity>

				{user ? (
					<TouchableOpacity
						onPress={() => {
							setVisible(false);
							AsyncStorage.setItem("isLoggedIn", "false");
							AsyncStorage.setItem("Address", "");
							AsyncStorage.setItem("PhoneNumber", "");
							navigation.navigate("Login");
						}}
					>
						<View
							style={{
								marginTop: "5%",
								height: 1,
								width: "95%",
								alignSelf: "center",
								backgroundColor: "#cccccc",
							}}
						/>
						<Text
							style={{
								marginTop: 23,
								fontSize: 20,
								alignSelf: "center",
								color: "#E2000B",
							}}
						>
							Logout
						</Text>
					</TouchableOpacity>
				) : null}
			</ScrollView>
			<TouchableOpacity
				style={[styles.modeButton1]}
				onPress={() => {
					setVisible(false),
						navigation.navigate("RegisterSubService1");
				}}
			>
				<Text style={styles.textStyle}>Professional Mode</Text>
				<Text style={styles.textStyle1}>
					Broadcast your skills!
				</Text>
			</TouchableOpacity>

			{/* <TouchableOpacity
									style={[styles.modeButton]}
									onPress={() =>
										navigation.navigate("Home")
									}
								>
									<Text style={styles.textStyle}>
										Customer Mode
									</Text>
									<Text style={styles.textStyle1}>
										Find Services Near Me
									</Text>
								</TouchableOpacity> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		marginTop: 22,
	},
	modalView: {
		backgroundColor: "rgba(248,248,250,255)",
		alignSelf: "flex-end",
		borderRadius: 5,
		padding: "2%",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 20,
		height: "100%",
	},
	modeButton1: {
		borderRadius: 5,
		padding: 10,
		elevation: 2,
		backgroundColor: "green",
	},
	modeButton: {
		borderRadius: 5,
		padding: 10,
		elevation: 2,
		backgroundColor: "blue",
	},

	textBody: {
		padding: 20,
		alignSelf: "flex-start",
		fontSize: 20,
		color: COLORS.primary,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	button2: {
		shadowColor: "rgba(0,0,0, .1)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "rgba(255,255,255,255)",
		borderColor: COLORS.primary,
		margin: SIZES.base,
		height: "7%",
		elevation: 20,
		borderRadius: SIZES.small,
		alignItems: "center",
		justifyContent: "center",
	},

	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		margin: 5,
	},
	textStyle1: {
		color: "#F8F8F8",
		textAlign: "center",
		fontSize: 12,
	},
	loginText: {
		textAlign: "center",
		fontSize: 20,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default ModalList;
