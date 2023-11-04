import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";

const TermsCondition = ({ onSearch }) => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const [isLoggedIn, setLoggedIn] = useState("");

	return (
        <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 12 }}> By clicking you accept the</Text>
            <TouchableOpacity style={{ fontSize: 12 }}>
                <Text style={{ fontSize: 12, color: "blue", fontWeight: "600" }}>
                    {" "}
                    Terms & Conditions
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default TermsCondition;
