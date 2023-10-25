import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, KeyboardAvoidingView, Linking, Image, Alert } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { COLORS } from "../constants";

import { RadioButton } from "react-native-paper";
import { BackButton } from "../components";

const RequestNewService = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [agree, setAgree] = useState(false);

	const [radio_Pro, setRadio_Pro] = useState(null);

	const submit = () => {
		if (!name && !email && !phone && !message) {
			Alert.alert("Plzz fill all the fields");
		} else {
			Alert.alert(`Thank You ${name}`);
			navigation.navigate("Home");
		}
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1, margin: 18 }}>
			<BackButton />
			<ScrollView>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<Text style={styles.mainHeader}>Hey! Skilled Person.</Text>
					<Text style={styles.mainHeader1}>
						Tell us the skill you have, {"\n"}we will create a new category for you, And broadcast to your customers 😉 {"\n\n"}
					</Text>

					<View style={styles.inputContainer}>
						<Text style={styles.labels}>Describe your skill which you want us to broadcast </Text>

						<Text style={styles.description2}>Example: "Service: Consultation. Skill: I'm a doctor and can help people to get cure from normal virals or fever"</Text>
						<TextInput style={[styles.inputStyle]} placeholder={"Write Here.."} value={message} onChangeText={(msg) => setMessage(msg)} multiline={true} />
					</View>
					<View style={styles.wrapper}>
						<Checkbox value={agree} onValueChange={() => setAgree(!agree)} color={agree ? "#4630EB" : undefined} />
						<Text style={styles.wrapperText}>Is this the legit service which can be in demand for the Customers ?</Text>
					</View>
					<TouchableOpacity
						style={[
							styles.buttonStyle,
							{
								backgroundColor: agree ? "#4630EB" : "grey",
							},
						]}
						disabled={!agree}
						onPress={() => {
							try {
								Linking.openURL("whatsapp://send?text=" + message + "&phone=+919041504403");
								Alert.alert("Opening Whatspp..");
							} catch (error) {
								Alert.alert("Make sure you have whatsapp installed on your phone. If non then you can send the details on 9041504403 via SMS or WhatsApp");
							}
						}}>
						<Text style={styles.buttonText}> Submit </Text>
					</TouchableOpacity>
					<Text style={styles.description}>You can reach us anytime via {"\n"}sqera@gmail.com</Text>
				</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 30,
		backgroundColor: "#fff",
	},
	mainHeader: {
		fontSize: 29,
		color: "#344055",
		fontWeight: "500",
		paddingTop: 20,
		paddingBottom: 15,
		textTransform: "capitalize",
	},
	mainHeader1: {
		fontSize: 20,
		color: "#344055",
		fontWeight: "500",
		paddingTop: 20,
		paddingBottom: 15,
		textTransform: "capitalize",
	},
	description: {
		fontSize: 20,
		color: "#7d7d7d",
		paddingBottom: 20,
		lineHeight: 25,
	},
	description2: {
		fontSize: 16,
		color: "#7d7d7d",
		paddingBottom: 20,
		lineHeight: 25,
	},

	inputContainer: {
		marginTop: 2,
	},
	labels: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#7d7d7d",
		paddingBottom: 5,
		lineHeight: 25,
	},
	inputStyle: {
		marginTop: 10,
		fontSize: 26,
		height: 70,
		margin: 8,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 0.5,
		borderWidth: 1,
		width: "95%",
		padding: 13,
	},
	buttonStyle: {
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 18,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 30,
	},
	buttonText: {
		color: "#eee",
	},
	wrapper: {
		display: "flex",
		flexDirection: "row",
		marginTop: 20,
	},
	wrapperText: {
		marginLeft: 10,
		color: "#7d7d7d",
	},
});

export default RequestNewService;
