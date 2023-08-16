import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	Modal,
	StyleSheet,
	Pressable,
	SafeAreaView,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalList from "./ModalList";

const HomeHeader = ({ onSearch }) => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const [isLoggedIn, setLoggedIn] = useState("");

	return (
		<View
			style={{
				borderRadius: SIZES.large,
				backgroundColor: "#f2f2f2",

				height: 40,
				width: "90%",
				alignSelf: "center",
				flexDirection: "row",
				alignItems: "center",
				alignContent: "flex-start",
				marginTop: "2%",
				paddingHorizontal: SIZES.font,
			}}
		>
			<Image
				source={assets.search}
				style={{
					justifyContent: "flex-start",
					width: 16,
					height: 16,
					margin: 13,
				}}
			/>
			<TextInput
				placeholder="Search for Laundry, Gardener, Cook, Taxi"
				placeholderTextColor="#A0A0A0"
				style={{
					fontSize: SIZES.font + 1,
					backgroundColor: "#f2f2f2",
					color: COLORS.primary,
					borderRadius: 6,
				}}
				onChangeText={onSearch}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	loweredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	centeredView: {
		flex: 1,
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

export default HomeHeader;
