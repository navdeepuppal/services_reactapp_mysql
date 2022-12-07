import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ModalList = ({ onSearch }) => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const [isLoggedIn, setLoggedIn] = useState("");

	const [user, setUser] = useState("");
    AsyncStorage.getItem("PhoneNumber").then((user) => {
        setUser(user);
    });

	return (
		<SafeAreaView
			style={{
				backgroundColor: COLORS.white,
				flex: 1,
			}}
		>
			{ user ? <TouchableOpacity
				style={{
					alignSelf: "center",
				}}
				onPress={() => navigation.navigate("Profile")}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<View
						style={{
							backgroundColor: "silver",
							width: 50,
							height: 50,
							borderRadius: "100%",
							color: "white",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						
					</View>

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
			</TouchableOpacity> : 
            
            
            
            <TouchableOpacity style={
				styles.button2}
				onPress={() => navigation.navigate("Login")}><Text style = {styles.loginText}>Login</Text></TouchableOpacity>}

			<ScrollView
				style={{
					backgroundColor: COLORS.white,
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

				{user ? <TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("BookingsView")}
				>
					<Text style={styles.textBody}>My Bookings</Text>
				</TouchableOpacity> : null}

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Contact")}
				>
					<Text style={styles.textBody}>Contact Us</Text>
				</TouchableOpacity>
                <TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("RequestNewService")}
				>
					<Text style={styles.textBody}>Request New Service</Text>
				</TouchableOpacity>


				{user ? <TouchableOpacity
					onPress={() => {
						setModalVisible("false");
						AsyncStorage.setItem("isLoggedIn", "false");
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
				</TouchableOpacity> : null}
			</ScrollView>
			<TouchableOpacity
				style={[styles.modeButton1]}
				onPress={() => navigation.navigate("RegisterSubService1")}
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
		backgroundColor: "white",
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
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "white",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
        borderColor: "silver",
		margin: SIZES.base,
        borderWidth: 0.17,
		elevation: 2, // Android
        padding: 20,
		height: "8%",
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
