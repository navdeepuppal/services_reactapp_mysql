import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TextInput,
	Modal,
	TouchableOpacity,
	SafeAreaView,
	KeyboardAvoidingView,
	Linking,
	Alert,
} from "react-native";
import React, { useState } from "react";

import { COLORS, config, SIZES, assets } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
	const [user, setUser] = useState("");
	const [visible, setVisible] = React.useState(true);

	const [modalVisible, setModalVisible] = useState(false);

	AsyncStorage.getItem("PhoneNumber").then((user) => {
		setUser(user);
	});

	return (
		<SafeAreaView style={{ backgroundColor: "#EDF6FD" }}>
			<View
				style={{
					marginTop: "2%",
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: SIZES.large,
					alignItems: "center",
					height: 50,
					borderColor: COLORS.gray,
				}}
			>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "800",
					}}
				>
					Profile
				</Text>
				{user ? (
					<View
						style={{
							flexDirection: "row",
							justifyContent: "flex-end",
						}}
					>
						<View
							style={{
								backgroundColor: COLORS.primary,
								width: 70,
								margin: 10,
								borderRadius: 10,
								height: "100%",
								padding: 7,

								alignSelf: "center",
							}}
						>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate("Wallet"),
										setVisible(false);
								}}
							>
								<Text
									style={{
										color: COLORS.white,
										fontSize: 16,
										alignSelf: "center",
										justifyContent: "center",
										fontWeight: "700",
									}}
								>
									Rs 10
								</Text>
								<Text
									style={{
										color: COLORS.white,
										fontSize: 12,
										alignSelf: "center",
										justifyContent: "center",
									}}
								>
									Wallet
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				) : (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Login");
						}}
						style={{
							backgroundColor: COLORS.primary,
							width: 80,
							justifyContent: "center",
							borderRadius: 10,
							height: 40,
						}}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "900",
								alignSelf: "center",
								color: COLORS.white,
							}}
						>
							{" "}
							Login{" "}
						</Text>
					</TouchableOpacity>
				)}
			</View>
			<ScrollView
				style={{
					height: "88%",
					width: "93%",
					alignSelf: "center",
				}}
			>
				{user ? (
					<View
						style={{
							padding: 10,
							margin: 10,
							borderRadius: 20,
							backgroundColor: COLORS.white,
						}}
					>
						<Image
							style={{
								width: 70,
								height: 70,
								alignSelf: "center",
							}}
							source={require("../assets/images/user.png")}
						/>
						<Text
							style={{
								textAlign: "center",
								marginTop: 5,
								marginBottom: 10,
								fontSize: 17,
								fontWeight: "500",
							}}
						>
							{" "}
							{user}
						</Text>
						<TouchableOpacity>
							<View
								style={{
									margin: "1%",
									borderColor: "gray",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										justifyContent:
											"space-between",
									}}
								>
									<Text
										style={{
											fontSize: 18,
											fontWeight: "500",
											margin: 15,
											marginLeft: 30,
										}}
									>
										{" "}
										Edit Profile
									</Text>
									<Text
										style={{
											fontSize: 19,
											fontWeight: "500",
										}}
									></Text>
								</View>
							</View>
						</TouchableOpacity>
						<View
							style={{
								height: 1,
								width: "95%",
								alignSelf: "center",
								backgroundColor: "#cccccc",
							}}
						/>
						<TouchableOpacity>
							<View
								style={{
									margin: "1%",
									borderColor: "gray",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										justifyContent:
											"space-between",
									}}
								>
									<Text
										style={{
											fontSize: 18,
											fontWeight: "500",
											margin: 15,
											marginLeft: 30,
										}}
									>
										{" "}
										Change Address
									</Text>
									<Text
										style={{
											fontSize: 19,
											fontWeight: "500",
										}}
									></Text>
								</View>
							</View>
						</TouchableOpacity>
					</View>
				) : (
					<Text></Text>
				)}
				<View
					style={{
						margin: 10,
						borderRadius: 20,
						backgroundColor: COLORS.white,
					}}
				>
					<TouchableOpacity>
						<View
							style={{
								margin: "1%",
								borderColor: "gray",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										margin: 15,
										marginLeft: 30,
									}}
								>
									{" "}
									Share App
								</Text>
								<Text
									style={{
										fontSize: 19,
										fontWeight: "500",
									}}
								></Text>
							</View>
						</View>
					</TouchableOpacity>

					<View
						style={{
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#cccccc",
						}}
					/>

					<TouchableOpacity>
						<View
							style={{
								margin: "1%",
								borderColor: "gray",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										margin: 15,
										marginLeft: 30,
									}}
								>
									{" "}
									Send Feedback
								</Text>
								<Text
									style={{
										fontSize: 19,
										fontWeight: "500",
									}}
								></Text>
							</View>
						</View>
					</TouchableOpacity>

					<View
						style={{
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#cccccc",
						}}
					/>

					<TouchableOpacity>
						<View
							style={{
								margin: "1%",
								borderColor: "gray",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										margin: 15,
										marginLeft: 30,
									}}
								>
									{" "}
									Terms of Use
								</Text>
								<Text
									style={{
										fontSize: 19,
										fontWeight: "500",
									}}
								></Text>
							</View>
						</View>
					</TouchableOpacity>

					<View
						style={{
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#cccccc",
						}}
					/>

					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Contact");
						}}
					>
						<View
							style={{
								margin: "1%",
								borderColor: "gray",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										margin: 15,
										marginLeft: 30,
									}}
								>
									{" "}
									Contact Support
								</Text>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
									}}
								></Text>
							</View>
						</View>
					</TouchableOpacity>

					<View
						style={{
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#cccccc",
						}}
					/>
					<TouchableOpacity>
						<View
							style={{
								margin: "1%",
								borderColor: "gray",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										margin: 15,
										marginLeft: 30,
									}}
								>
									{" "}
									Privacy Policy
								</Text>
							</View>
						</View>
					</TouchableOpacity>

					{user ? (
						<View>
							<View
								style={{
									height: 1,
									width: "95%",
									alignSelf: "center",
									backgroundColor: "#cccccc",
								}}
							/>
							<TouchableOpacity
								onPress={() => {
									setModalVisible(true);
								}}
							>
								<View
									style={{
										margin: "1%",
										borderColor: "gray",
									}}
								>
									<View
										style={{
											flexDirection: "row",
											justifyContent:
												"space-between",
										}}
									>
										<Text
											style={{
												fontSize: 18,
												fontWeight: "500",
												margin: 15,
												marginLeft: 30,
											}}
										>
											{" "}
											Account
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					) : (
						<Text></Text>
					)}
				</View>

				<Text
					style={{
						margin: 30,
						alignSelf: "center",
						color: "silver",
						fontSize: 13,
					}}
				>
					{" "}
					Version 1.0.1{" "}
				</Text>

				<View style={styles.centeredView}>
					<SafeAreaView>
						<Modal
							animationType="slide"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<View style={styles.modalView}>
								<View
									style={{
										flexDirection: "row",
										justifyContent:
											"space-between",
										marginTop: "5%",
									}}
								>
									<View
										style={{
											flexDirection: "row",
										}}
									>
										<TouchableOpacity
											style={{
												width: 40,
												height: 40,
												marginTop: "15%",
											}}
											onPress={() =>
												setModalVisible(
													false
												)
											}
										>
											<Image
												source={assets.left}
												resizeMode="contain"
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View
									style={{
										marginTop: 30,
										margin: 10,
										borderRadius: 20,
										backgroundColor: COLORS.white,
									}}
								>
									<TouchableOpacity
										onPress={() => {
											setModalVisible(false);
											AsyncStorage.clear();
											Alert.alert(
												"Logged out"
											);
											navigation.navigate(
												"SelectOnboard"
											);
										}}
									>
										<View
											style={{
												margin: "1%",
												borderColor: "gray",
											}}
										>
											<View
												style={{
													flexDirection:
														"row",
													justifyContent:
														"space-between",
												}}
											>
												<Text
													style={{
														fontSize: 18,
														fontWeight:
															"500",
														margin: 15,
														marginLeft: 30,
														color: "red",
													}}
												>
													{" "}
													Logout
												</Text>
												<Text
													style={{
														fontSize: 19,
														fontWeight:
															"500",
													}}
												></Text>
											</View>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</Modal>
					</SafeAreaView>
				</View>
			</ScrollView>
			<View
				style={{
					width: "100%",
					alignSelf: "flex-end",
					height: "20%",
				}}
			>
				<TouchableOpacity
					style={[styles.modeButton1]}
					onPress={() => {
						navigation.navigate("RegisterSubService1");
					}}
				>
					<Text style={styles.textStyle}>Professional Mode</Text>
					<Text style={styles.textStyle1}>
						Broadcast your skills!
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
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
	},
	modalView: {
		backgroundColor: "#f2f2f2",
		marginTop: "20%",
		padding: 25,
		borderTopStartRadius: 20,
		borderTopEndRadius: 20,
		shadowColor: "#000",
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "100%",
		alignSelf: "flex-end",
		height: "100%",
	},
	modeButton1: {
		borderTopStartRadius: 10,
		borderTopEndRadius: 10,
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
export default Profile;


