import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";

const TermsCondition = ({ onSearch }) => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const [isLoggedIn, setLoggedIn] = useState("");

	return (
		<Text style={{ fontSize: 12, marginTop: -10 }}>
			{" "}
			By clicking you accept the Terms & Conditions
		</Text>
	);
};

export default TermsCondition;
