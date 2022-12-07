import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";


const Profile = (props) => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
			<TouchableOpacity
				style={styles.button2}
				onPress={() => navigation.navigate("BookingsView")}
			>
				<Image style={styles.avatar} source={assets.person01} />
				<View>
					<Text style={styles.name}>John Doe </Text>
					<Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
					<Text style={styles.userInfo}>Florida </Text>
				</View>
			</TouchableOpacity>

			<ScrollView style={{ backgroundColor: COLORS.white, flex: 1 }}>
				<View style={styles.container}>
					<Text> Trying Pages </Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Loc")}
					>
						<Text style={styles.textBody}>Loc</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Notificationstry")}
					>
						<Text style={styles.textBody}>Notifications Try</Text>
					</TouchableOpacity>


					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("BookingOTP")}
					>
						<Text style={styles.textBody}>Booking OTP</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("QRCode")}
					>
						<Text style={styles.textBody}>Booking OTP</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("TabOneScreen")}
					>
						<Text style={styles.textBody}>TabOneScreen</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("TabTwoScreen")}
					>
						<Text style={styles.textBody}>TabTwoScreen</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.container}>
					<TouchableOpacity
						style={styles.button1}
						onPress={() => navigation.navigate("ServiceManagementPage")}
					>
						<Text style={styles.textBody1}>Service Management Page</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.container}>
					<TouchableOpacity
						style={styles.button1}
						onPress={() => navigation.navigate("ServiceManagementPage")}
					>
						<Text style={styles.textBody1}>Freelancer Management Page</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.container}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("BookingsView")}
					>
						<Text style={styles.textBody}>My Bookings</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("RegisterSubService1")}
					>
						<Text style={styles.textBody}>Register as a Professional</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("RequestNewService")}
					>
						<Text style={styles.textBody}>
							Request a new Skill or SubService
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("AboutUs")}
					>
						<Text style={styles.textBody}>About Sqera</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Contact")}
					>
						<Text style={styles.textBody}>Contact Us</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Contact")}>
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
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	header: {
		backgroundColor: "white",
	},
	container: {
		marginTop: 48,
		flex: 1,
		padding: 10,
		backgroundColor: "#E4E4E4",
	},
	headerContent: {
		padding: 30,
		alignItems: "center",
	},
	textBody: {
		padding: 20,
		alignSelf: "flex-start",
		fontSize: 20,
		color: COLORS.gray,
	},
	textBody1: {
		fontWeight: "bold",
		padding: 20,
		alignSelf: "center",
		fontSize: 20,
		color: COLORS.white,
	},
	cardTittle: {
		color: "#808080",
		fontSize: 20,
		marginBottom: 5,
	},
	button: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.white,
		borderRadius: SIZES.font,
		marginBottom: 1,
		elevation: 2, // Android
		height: "18%",
		width: 400,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "column",
		borderRadius: 10,
	},
	button1: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "#006b76",
		borderRadius: SIZES.font,
		marginBottom: 1,

		elevation: 2, // Android
		height: "100%",
		width: 400,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "column",
		borderRadius: 10,
	},
	button2: {
		height: 70,
		width: 300,
		margin: 28,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	avatar: {
		resizeMode: "cover",
		alignSelf: "flex-start",
	},
	card: {
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		padding: 10,
		height: 100,
		marginTop: 10,
	},
	profileCard: {
		height: 200,
		alignItems: "center",
		marginTop: 20,
	},
	name: {
		marginTop: 10,
		fontSize: 22,
		color: "#808080",
	},
	photosContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		height: "auto",
	},
	photosCard: {
		marginTop: 10,
	},
	photo: {
		width: 113,
		height: 113,
		marginTop: 5,
		marginRight: 5,
	},
});
