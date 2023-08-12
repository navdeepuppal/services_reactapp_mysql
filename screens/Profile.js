import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	KeyboardAvoidingView,
	Linking,
	Alert,
} from "react-native";
import React, { useState } from "react";

import { COLORS, config, SIZES, assets } from "../constants";
import BackButton from "../components/BackButton";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
	return (
		<View style={{ marginTop: "10%", backgroundColor: COLORS.white }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					margin: 10,
					alignItems: "center",
					height: 50,
					borderColor: COLORS.gray,
				}}
			>
				<BackButton></BackButton>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "800",
					}}
				>
					Edit Profile
				</Text>
				<Image
					style={{ width: 40, height: 40, alignSelf: "center" }}
					source={require("../assets/images/user.png")}
				/>
			</View>
			<ScrollView
				style={{ height: "100%", backgroundColor: COLORS.white }}
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
									fontSize: 20,
									fontWeight: "500",
									margin: 15,
									marginLeft: 30,
								}}
							>
								{" "}
								Edit personal details
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
									fontSize: 20,
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
									fontSize: 20,
									fontWeight: "500",
									margin: 15,
									marginLeft: 30,
								}}
							>
								{" "}
								Sqera Wallet
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
									fontSize: 20,
									fontWeight: "500",
									margin: 15,
									marginLeft: 30,
								}}
							>
								{" "}
								Become a professional
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
									fontSize: 20,
									fontWeight: "500",
									margin: 15,
									marginLeft: 30,
								}}
							>
								{" "}
								Share app
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
						marginTop: "5%",
						height: 1,
						width: "100%",
						alignSelf: "center",
						backgroundColor: "#cccccc",
					}}
				/>
				<TouchableOpacity
					onPress={() => {
						AsyncStorage.clear();
						Alert.alert("Logged out");
						navigation.navigate("SelectOnboard");
					}}
				>
					<Text
						style={{
							marginTop: 23,
							fontSize: 17,
							alignSelf: "center",
							color: "#E2000B",
						}}
					>
						Logout
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default Profile;
