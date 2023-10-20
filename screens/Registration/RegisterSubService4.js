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

const RegisterSubService4 = () => {
	const navigation = useNavigation();
	console.log("\nPage\t" + "RegisterSubService4");
	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<Image
						source={require("../../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>
						Now, let’s talk about the things you want to steer
						clear of.
					</Text>

					<Text style={styles.textBody}>
						Your success on Sqera is important to us.
					</Text>
					<Text style={styles.textBody}>
						Avoid the following to keep in line with our
						community standards:
					</Text>

					<Text style={styles.littleTitle}>
						1. Providing any misleading or inaccurate
						information about your identity.
					</Text>

					<Text style={styles.littleTitle}>
						2. Opening duplicate accounts. Remember, you can
						always create more Gigs.
					</Text>

					<Text style={styles.littleTitle}>
						3. Soliciting other community members for work on
						Sqera.
					</Text>

					<Text style={styles.littleTitle}>
						4. Requesting to take communication and payment
						outside of Sqera.
					</Text>

					<Text style={styles.littleTitle}>
						5. To keep our community secure for everyone, we
						may ask you to verify your ID.
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
		backgroundColor: COLORS.primary,
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
		margin: SIZES.base,
		textAlign: "center",
		marginTop: SIZES.large,
		fontSize: 40,
		marginVertical: 5,
	},
	littleTitle: {
		margin: SIZES.base,
		marginTop: SIZES.large,
		fontSize: 19,
		textAlign: "center",
	},

	textBody: {
		margin: SIZES.base,
		textAlign: "center",
		marginTop: SIZES.large,
		fontSize: 30,
		marginVertical: 5,
	},
	buttontext: {
		textAlign: "center",
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default RegisterSubService4;
