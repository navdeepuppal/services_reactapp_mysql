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

const RegisterSubService2 = () => {
	const navigation = useNavigation();
	console.log("\nPage\t" + "RegisterSubService2");
	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<ExitHeader />
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<Image
						source={require("../../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>
						Here's Breakdown of Steps:
					</Text>

					<Text style={styles.textBody}>
						Learn what makes a successful people
					</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							navigation.navigate("RegisterSubService3")
						}
					>
						<View style={{ flexDirection: "column" }}>
							<Text style={styles.buttontext}>
								Continue
							</Text>
						</View>
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

		fontSize: 40,
		marginVertical: 5,
	},

	textBody: {
		margin: 40,
		fontSize: 19,
		textAlign: "center",
	},
	subtext: {
		margin: 40,
		textAlign: "center",
	},
	buttontext: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default RegisterSubService2;
