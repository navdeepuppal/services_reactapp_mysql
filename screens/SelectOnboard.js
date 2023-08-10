import React from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	Button,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const SelectOnboard = (props) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>
				How will you like to proceed ?
			</Text>

			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("Home");

						setValue = async (value) => {
							try {
								await AsyncStorage.setItem(
									"firstTime",
									value
								);
							} catch (e) {
								// save error
							}
						};
						setValue("false");
					}}
				>
					<View style={{ flexDirection: "column" }}>
						<Text style={styles.textBody}>
							Find a Service
						</Text>
						<Text style={styles.littleTitle}>
							Need Professional Services at your doorstep?{" "}
							{"\n"} Whether it's a Gardener, Business
							Consultant, or Painter for your home, find
							them nearby at any budget.
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button2}
					onPress={() =>
						navigation.navigate("SelectOnboardProfessional")
					}
				>
					<View style={{ flexDirection: "column" }}>
						<Text style={styles.textBody}>
							Register as a Professional
						</Text>
						<Text style={styles.littleTitle}>
							Join, Create, Earn – Be a Part of Something
							Big!
						</Text>
					</View>
				</TouchableOpacity>
			</View>

			<Button
				onPress={() => navigation.navigate("Login")}
				style={styles.button}
				title="Already have an account with us ? Login"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textTitle: {
		fontSize: 40,
		color: COLORS.gray,
		textAlign: "center",
	},
	subTitle: {
		fontWeight: "bold",
		fontSize: 20,
		color: COLORS.gray,
		marginRight: SIZES.base / 99,
		textAlign: "center",
	},
	littleTitle: {
		fontSize: 13,
		color: COLORS.white,
		textAlign: "center",
		fontStyle: "italic",
	},
	textBody: {
		marginBottom: SIZES.medium,
		fontSize: 28,
		color: COLORS.white,
		fontWeight: "700",
		textAlign: "center",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(248,248,250,255)",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},

	button: {
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
		height: "30%",
		width: "90%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
		padding: "2%",
	},
	button2: {
		padding: "2%",
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
		height: 130,
		width: 380,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
});

export default SelectOnboard;
