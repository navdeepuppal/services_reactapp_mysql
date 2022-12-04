import React from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

import Input from "../components/Inputs";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const SignUpForm = ({ route, navigation }) => {
	const { subSubServices } = route.params;
	return (
		<SafeAreaView style={{ backgroundColor: "white" }}>
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<Image
						source={require("../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>
						Please Confirm Details for the Booking:
					</Text>

					<Input name="Name" icon="user" />
					<Input name="Pincode" icon="user" />
					<Input name="City" icon="user" />
					<Input name="Full Address" icon="user" />

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Thankyou", { subSubServices })}
					>
						<Text style={styles.buttontext}>Confirm</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
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
	container: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
	textTitle: {
		fontSize: 26,
		marginVertical: 5,
	},
	textBody: {
		fontSize: 16,
		textAlign: "center",
	},
});

export default SignUpForm;
