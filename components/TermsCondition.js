import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const TermsCondition = ({ onSearch }) => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const [isLoggedIn, setLoggedIn] = useState("");
	
	return (
	<Text style = {{marginTop: -10}}> By Clicking </Text>
	);
};

export default TermsCondition;
