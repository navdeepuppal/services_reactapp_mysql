import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { COLORS, SIZES } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ModalList = ({ setVisible }) => {
	const navigation = useNavigation();

	const [isLoggedIn, setLoggedIn] = useState("");

	const [user, setUser] = useState("");
	AsyncStorage.getItem("PhoneNumber").then((user) => {
		setUser(user);
	});
	return (
		<View
			style={{
				marginTop: "20%",
				height: "100%",
				width: 210,
				backgroundColor: "white",
				padding: 15,
			}}>
			{user ? (
				<View>
					<TouchableOpacity
						onPress={() => {
							setVisible(false),
								setTimeout(function () {
									//Put All Your Code Here, Which You Want To Execute After Some Delay Time.
									navigation.navigate("Profile");
								}, 200);
						}}
						style={{
							alignSelf: "center",
							alignItems: "center",
							width: "100%",
						}}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image style={{ width: 50, height: 50 }} source={require("../assets/images/user.png")} />

							<View
								style={{
									flexDirection: "column",
									margin: 10,
								}}>
								<Text
									style={{
										fontSize: 20,
									}}>
									{user}
								</Text>

								<Text
									style={{
										fontSize: 15,
									}}>
									5 ★
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<View
						style={{
							backgroundColor: COLORS.primary,
							width: 120,
							borderRadius: 10,
							padding: 7,
							margin: 20,
							alignSelf: "center",
						}}>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("RecentOrders"), setVisible(false);
							}}>
							<Text
								style={{
									color: COLORS.white,
									fontSize: 19,
									alignSelf: "center",
									justifyContent: "center",
									fontWeight: "700",
								}}>
								Rs 10
							</Text>
							<Text
								style={{
									color: COLORS.white,
									fontSize: 14,
									alignSelf: "center",
									justifyContent: "center",
								}}>
								Wallet Balance
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => {
						setVisible(false);
						navigation.navigate("Login");
					}}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<Image source={require("../assets/icons/in.png")} style={styles.image} />
						<Text style={styles.loginText}> Log In</Text>
					</View>
				</TouchableOpacity>
			)}

			<ScrollView>
				<View
					style={{
						marginTop: "5%",
						height: 0.2,
						width: "95%",
						alignSelf: "center",
						backgroundColor: "#cccccc",
					}}
				/>
				<TouchableOpacity
					onPress={() => {
						setVisible(false), navigation.navigate("Contact");
					}}>
					<Text style={styles.textBody}>Support</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("RequestNewService"), setVisible(false);
					}}>
					<Text style={styles.textBody}>Privacy Policy</Text>
				</TouchableOpacity>

				<View
					style={{
						marginTop: "5%",
						height: 0.5,
						width: "95%",
						alignSelf: "center",
						backgroundColor: "#cccccc",
					}}
				/>

				<Text
					style={{
						margin: 30,
						alignSelf: "center",
						color: "silver",
						fontSize: 13,
					}}>
					{" "}
					Version 1.0.1{" "}
				</Text>
				{/* 	<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("Deliverables"),
							setVisible(false);
					}}
				>
					<Text style={styles.textBody}>Deliverables</Text>
				</TouchableOpacity> */}
			</ScrollView>
			<TouchableOpacity
				style={[styles.modeButton1]}
				onPress={() => {
					setVisible(false), navigation.navigate("RegisterSubService1");
				}}>
				<Text style={styles.textStyle}>Professional Mode</Text>
				<Text style={styles.textStyle1}>Broadcast your skills!</Text>
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
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 30,
		height: 30,
		marginVertical: 10,
	},
	walletImage: {
		width: 20,
		height: 20,
		marginVertical: 10,
	},
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
		height: 65,
		elevation: 2,
		backgroundColor: "green",
		width: "100%",
		marginBottom: 100,
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
		fontSize: 17,
		color: COLORS.primary,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	loginButton: {
		alignSelf: "center",
		shadowColor: "rgba(0,0,0, .1)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "#f2f2f2",
		borderColor: COLORS.primary,
		margin: SIZES.base,
		height: 50,
		elevation: 20,
		width: 200,
		borderRadius: SIZES.small - 5,
		alignItems: "center",
		justifyContent: "center",
	},

	button2: {
		shadowColor: "rgba(0,0,0, .1)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "rgba(240,240,240,240)",
		borderColor: COLORS.primary,
		margin: SIZES.base,
		height: "23%",
		elevation: 20,
		borderRadius: SIZES.small,
		alignItems: "center",
		justifyContent: "center",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 16,
		margin: 5,
	},
	textStyle1: {
		color: "#F8F8F8",
		textAlign: "center",
		fontSize: 12,
	},
	loginText: {
		marginLeft: 7,
		textAlign: "center",
		fontSize: 20,
		justifyContent: "center",
		color: COLORS.primary,
		fontWeight: "600",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default ModalList;
