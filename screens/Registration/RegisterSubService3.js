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

import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../../constants";
import ExitHeader from "../../components/ExitHeader";

const RegisterSubService3 = () => {
	const navigation = useNavigation();
	console.log("\nPage\t" + "RegisterSubService3");
	return (
		<SafeAreaView style = {{flex: 1}}> 
			<ExitHeader/>
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<Image
						source={require("../../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>
						What makes a successful Sqera profile?
					</Text>

					<Text style={styles.textBody}>
						Your first impression matters! Create a profile that will stand out
						from the crowd on Sqera.
					</Text>

					<Text style={styles.textBody}>
						Take your time in creating your profile so it’s exactly as you want
						it to be.
					</Text>

					

					<Text style={styles.textBody}>
						Accurately describe your professional skills to help you get more
						work.
					</Text>

					<Text style={styles.textBody}>
						Put a face to your name! Upload a profile picture that clearly shows
						your face.
					</Text>

					<Text style={styles.textBody}>
						To keep our community secure for everyone, we may ask you to verify
						your ID.
					</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("RegisterSubService4")}
					>
						<Text style={styles.buttontext}>Continue</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
		flex: 1,
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
	textTitle: {
		fontWeight: "bold",

		marginTop: SIZES.large,
		fontSize: 40,
		marginVertical: 5,
	},

	textBody: {
		marginTop: SIZES.large,
		fontSize: 19,
		textAlign: "center",
	},
	buttontext: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default RegisterSubService3;
