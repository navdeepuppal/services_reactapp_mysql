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
			<View
				style={{
					width: "100%",
					borderRadius: 10,
					marginBottom: 150,
				}}
			>
				<View>
					<View
						style={{
							marginLeft: 50,
							width: 380,
							flexWrap: "wrap",
							flexDirection: "row",
						}}
					>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
							}}
						></View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f2f2f2",
								borderRadius: 10,
							}}
						></View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f2f2f2",
								borderRadius: 10,
							}}
						></View>

						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f2f2f2",
								borderRadius: 10,
							}}
						></View>

						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f2f2f2",
								borderRadius: 10,
							}}
						></View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f2f2f2",
								borderRadius: 10,
							}}
						></View>
					</View>
					<View
						style={{
							width: 380,
							flexDirection: "row",
							marginLeft: 50,
							alignSelf: "center",
						}}
					>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f0f0f0",
								borderRadius: 10,
							}}
						></View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f2f2f2",
								borderRadius: 10,
							}}
						></View>
						<View
							style={{
								margin: 10,
								height: 90,
								width: 90,
								backgroundColor: "#f2f2f2",
								borderRadius: 10,
							}}
						></View>
					</View>
				</View>
			</View>
			<View
				style={{
					backgroundColor: COLORS.white,
					width: "100%",
					height: "25%",
					borderRadius: 70,
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
					<Text style={styles.textBody}>Find a Service</Text>
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "600",
						alignSelf: "center",
						margin: 20,
					}}
				>
					OR
				</Text>
				<TouchableOpacity
					style={styles.button2}
					onPress={() =>
						navigation.navigate("SelectOnboardProfessional")
					}
				>
					<View>
						<Text style={styles.textBody}>
							Register as a Professional
						</Text>
					</View>
				</TouchableOpacity>
			</View>
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
		fontSize: 15,
		color: COLORS.primary,
		textAlign: "center",
		fontStyle: "italic",
	},
	textBody: {
		fontSize: 20,
		color: COLORS.white,
		fontWeight: "700",
		textAlign: "center",
		alignSelf: "center",
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
		backgroundColor: "green",
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		marginTop: 80,
		height: 55,
		width: 300,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",

		flexDirection: "row",
		borderRadius: 10,
		padding: "2%",
	},
	button2: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.primary,
		borderRadius: SIZES.font,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 55,
		width: 300,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",

		flexDirection: "row",
		borderRadius: 10,
		padding: "2%",
	},
});

export default SelectOnboard;
