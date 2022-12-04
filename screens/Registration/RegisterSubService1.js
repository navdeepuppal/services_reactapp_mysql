import React from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../../constants";

const RegisterSubService1 = () => {
	const navigation = useNavigation();
	console.log("\nPage\t" + "RegisterSubService1");
	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<ScrollView style={{ backgroundColor: "white", flex: 1 }}>
				<View style={styles.container}>
					<Image
						source={require("../../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>Ready to be your own boss?</Text>
					<Text style={styles.textBody}>
						Work your way. {"\n\n"}You bring the skill. {"\n"}We'll make your
						earning easy.
					</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("RegisterSubService2")}
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
		margin: 20,
		marginTop: SIZES.large,
		fontSize: 40,
		marginVertical: 5,
	},

	textBody: {
		margin: 20,
		marginTop: SIZES.large,
		fontSize: 25,
		textAlign: "center",
	},
	buttontext: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default RegisterSubService1;
