import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { COLORS, SIZES } from "../constants";

const ExitHeader = ({ onSearch }) => {
	const navigation = useNavigation();

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				height: 60,
			}}
		>
			<Image
				source={require("../assets/sqera.png")}
				resizeMode="center"
				style={{ width: 50, height: 50, marginLeft: 15 }}
			/>
			<TouchableOpacity
				style={styles.button2}
				onPress={() => {
					navigation.navigate("Home");
				}}
			>
				<Text
					style={{
						fontSize: 17,
						fontWeight: "300",
						color: COLORS.primary,
					}}
				>
					{" "}
					Exit{" "}
				</Text>
			</TouchableOpacity>
		</View>
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
		shadowRadius: 1, //IOS
		borderWidth: 0.2,
		borderColor: "silver",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		height: 30,
		width: 60,
		alignSelf: "flex-end",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
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
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default ExitHeader;
