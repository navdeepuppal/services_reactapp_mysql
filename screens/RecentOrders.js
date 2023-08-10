import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	SafeAreaView,
	KeyboardAvoidingView,
	Linking,
	Image,
	Alert,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";

const RecentOrders = ({ navigation }) => {
	const [state, setButtonStatus] = useState("1");
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<BackButton />
			<Text> Recent Orders</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	image: {
		alignSelf: "center",
		height: 70,
		width: 70,
	},
	image2: {
		alignSelf: "center",
		height: 100,
		width: 100,
	},
});

export default RecentOrders;
