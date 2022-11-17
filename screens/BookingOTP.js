import React, { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";

import { useNavigation } from "@react-navigation/native";

const BookingOTP = (props) => {
	const [algo, setAlgo] = useState([]);
	const navigation = useNavigation();

	useEffect(() => {
		var date = new Date().getDate();
		var month = new Date().getMonth() + 1;
		var year = new Date().getFullYear();
		var hours = new Date().getHours();
		var min = new Date().getMinutes();

		setAlgo((1609 % min) + (2592 % min) + date * 160 * 2);
	}, []);

	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<View style={styles.container}>
				<Image
					source={require("../assets/BookingOTP.jpg")}
					resizeMode="center"
					style={styles.image}
				/>
				<Text style={styles.textTitle}>
					After Your Service is completed, Show this OTP to Service Man{" "}
				</Text>
				<Text>{algo}</Text>
				{/* 
                <Text style={styles.textBody}>Respective Person has been notified regarding the booking. No Worries! </Text>
                <Text style={styles.textBody}>Payment will be done by scanning the QR Code on Service man Sqera App </Text> */}
			</View>
			<TouchableOpacity
				style={{
					borderWidth: 1,
					borderColor: "rgba(0,0,0,0)",
					alignItems: "center",

					alignSelf: "flex-end",
					justifyContent: "right",
					marginLeft: "auto",
					width: 70,
					height: 70,
					backgroundColor: "green",
					borderRadius: 50,
					marginTop: 10,
					marginRight: 10,
				}}
				onPress={() => navigation.navigate("Home")}
			>
				<Image
					source={require("../assets/rightarrow.png")}
					resizeMode="contain"
					style={{ width: "95%", height: "95%" }}
				/>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
	image2: {
		width: 10,
		height: 10,
		marginVertical: 10,
	},
	textTitle: {
		fontSize: 27,
		marginVertical: 10,
		textAlign: "center",
	},
});

export default BookingOTP;
