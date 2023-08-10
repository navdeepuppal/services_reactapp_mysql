import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Image,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const OrdersDetailsModal = ({ setVisible }) => {
	const navigation = useNavigation();

	return <SafeAreaView></SafeAreaView>;
};

const styles = StyleSheet.create({
	modalView: {
		backgroundColor: "rgba(248,248,250,255)",
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
});

export default OrdersDetailsModal;
