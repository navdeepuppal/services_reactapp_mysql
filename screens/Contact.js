import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Linking, Alert } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { BackButton } from "../components";

const Contact = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [agree, setAgree] = useState(false);

	const submit = () => {
		if (!name && !email && !phone && !message) {
			Alert.alert("Plzz fill all the fields");
		} else {
			Alert.alert(`Thank You ${name}`);
			navigation.navigate("Home");
		}
	};

	return (
		<SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
			<BackButton />
			<ScrollView style={styles.mainContainer}>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<Text style={styles.mainHeader}>How can we help you ? </Text>

					<Text style={styles.description}>You can reach us anytime via {"\n"}sqera@gmail.com</Text>

					<View style={styles.inputContainer}>
						<Text style={styles.labels}> Please explain your concern here </Text>
						<TextInput style={[styles.inputStyle, styles.multilineStyle]} placeholder={""} value={message} onChangeText={(msg) => setMessage(msg)} numberOfLines={10} multiline={true} />
					</View>

					<TouchableOpacity
						style={[
							styles.buttonStyle,
							{
								backgroundColor: "#4630EB",
							},
						]}
						disabled={!message}
						onPress={() => {
							try {
								Linking.openURL("whatsapp://send?text=" + message + "&phone=+919041504403");
								Alert.alert("Opening Whatspp..");
							} catch (error) {
								Alert.alert("Make sure you have whatsapp installed on your phone. If non then you can send the details on 9041504403 via SMS or WhatsApp");
							}
						}}>
						<Text style={styles.buttonText}> Contact Us </Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>

				<TouchableOpacity
					style={{
						margin: 20,
						marginTop: "50%",
						alignSelf: "center",
					}}
					onPress={() => {
						navigation.navigate("RequestNewService");
					}}>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "600",
							marginBottom: 10,
						}}>
						Request for a new service ?
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		height: "100%",
		paddingHorizontal: 30,
		backgroundColor: "#fff",
	},
	mainHeader: {
		flex: 1,
		fontSize: 20,
		color: "#344055",
		fontWeight: "500",
		marginTop: 20,
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

	inputContainer: {
		marginTop: 20,
	},
	labels: {
		fontWeight: "bold",
		// fontSize: 15,
		color: "#7d7d7d",
		paddingBottom: 5,
		lineHeight: 25,
		fontSize: 18,
	},
	inputStyle: {
		fontSize: 23,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.3)",
		paddingHorizontal: 15,
		paddingVertical: 6,
		borderRadius: 8,
		height: "40%",
	},
	multiineStyle: {
		paddingVertical: 4,
	},
	buttonStyle: {
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 18,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
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

export default Contact;
