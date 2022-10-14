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

const Profile = (props) => {
	const navigation = useNavigation();
	return (
		<ScrollView style={{ backgroundColor: "white", flex: 1 }}>
			<View style={styles.header}>
				<View style={styles.headerContent}>
					<Image
						style={styles.avatar}
						source={{
							uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
						}}
					/>

					<Text style={styles.name}>John Doe </Text>
					<Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
					<Text style={styles.userInfo}>Florida </Text>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.cardTittle}>Title</Text>
					<Text> - Lorem ipsum dolor sit amet</Text>
					<Text> - Lorem ipsum dolor sit amet</Text>
					<Text> - Lorem ipsum dolor sit amet</Text>
				</View>

				<View style={styles.card}>
					<Text style={styles.cardTittle}>Title</Text>
					<Text> - Lorem ipsum dolor sit amet</Text>
					<Text> - Lorem ipsum dolor sit amet</Text>
					<Text> - Lorem ipsum dolor sit amet</Text>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("AboutUs")}
				>
					<Text style={styles.textBody}>AboutUs</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Contact")}
				>
					<Text style={styles.textBody}>Contact</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Login")}
				>
					<Text style={styles.textBody}>Login</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Onboarding")}
				>
					<Text style={styles.textBody}>Onboarding</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("OrderConfirmed")}
				>
					<Text style={styles.textBody}>OrderConfirmed</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("SignUpForm")}
				>
					<Text style={styles.textBody}>SignUpForm</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("OTPVerification")}
				>
					<Text style={styles.textBody}>OTPVerification</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Details")}
				>
					<Text style={styles.textBody}>Details</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("BookingsView")}
				>
					<Text style={styles.textBody}>BookingsView</Text>
				</TouchableOpacity>

				<View style={styles.photosCard}>
					<Text style={styles.cardTittle}>Photos</Text>
					<View style={styles.photosContainer}>
						<Image
							style={styles.photo}
							source={{
								uri: "https://bootdey.com/img/Content/avatar/avatar1.png",
							}}
						/>
						<Image
							style={styles.photo}
							source={{
								uri: "https://bootdey.com/img/Content/avatar/avatar2.png",
							}}
						/>
						<Image
							style={styles.photo}
							source={{
								uri: "https://bootdey.com/img/Content/avatar/avatar3.png",
							}}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	header: {
		backgroundColor: "white",
	},
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "#DCDCDC",
	},
	headerContent: {
		padding: 30,
		alignItems: "center",
	},

	cardTittle: {
		color: "#808080",
		fontSize: 22,
		marginBottom: 5,
	},
	button: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.white,
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 100,
		width: 300,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: "white",
		marginBottom: 10,
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
