import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Linking,
	Image,
	Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { COLORS } from "../constants";

import { RadioButton } from "react-native-paper";

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
		<ScrollView style={styles.mainContainer}>
			<Text style={styles.mainHeader}>
				Hey! Skilled Person. {"\n\n"}Tell us the skill you have, we will create
				a new category for you here on this app 😉
			</Text>
			<Text style={styles.description}>
				You can reach us anytime via sqera@gmail.com
			</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.labels}> What do you want us to add ?</Text>

				<View
					style={{
						flexDirection: "column",
						justifyContent: "space-between",
						width: "60%",
					}}
				>
					<TouchableWithoutFeedback onPress={() => setRadio_Pro("Service")}>
						<View
							style={{
								flexDirection: "row",
								borderColor: "#000000",
								borderWidth: 1,
								borderRadius: 20,
								alignItems: "center",
								padding: 5,
								paddingLeft: 0,
							}}
						>
							<RadioButton
								value="Beginner"
								status={radio_Pro === "Beginner" ? "checked" : "unchecked"}
								onPress={() => setRadio_Pro("Service")}
							/>
							<Text style={{ fontSize: 19 }}>Service</Text>
						</View>
					</TouchableWithoutFeedback>

					<TouchableWithoutFeedback onPress={() => setRadio_Pro("SubService")}>
						<View
							style={{
								flexDirection: "row",
								borderColor: "#000000",
								borderWidth: 1,
								borderRadius: 20,
								alignItems: "center",
								padding: 5,
								paddingLeft: 0,
							}}
						>
							<RadioButton
								value="Intermediate"
								status={radio_Pro === "Intermediate" ? "checked" : "unchecked"}
								onPress={() => setRadio_Pro("SubService")}
							/>
							<Text style={{ fontSize: 19 }}>Sub Service</Text>
						</View>
					</TouchableWithoutFeedback>

					<TouchableWithoutFeedback onPress={() => setRadio_Pro("Other")}>
						<View
							style={{
								flexDirection: "row",
								borderColor: "#000000",
								borderWidth: 1,
								borderRadius: 20,
								alignItems: "center",
								padding: 5,
								paddingLeft: 0,
							}}
						>
							<RadioButton
								value="Expert"
								status={radio_Pro === "Expert" ? "checked" : "unchecked"}
								onPress={() => setRadio_Pro("Other")}
							/>
							<Text style={{ fontSize: 19 }}>Other</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>

				<Text style={styles.labels}> Describe the skill </Text>
				<TextInput
					style={[styles.inputStyle]}
					placeholder={""}
					value={message}
					onChangeText={(msg) => setMessage(msg)}
					multiline={true}
				/>
			</View>
			<View style={styles.wrapper}>
				<Checkbox
					value={agree}
					onValueChange={() => setAgree(!agree)}
					color={agree ? "#4630EB" : undefined}
				/>
				<Text style={styles.wrapperText}>
					Is this the legit service which is in demand of Customers ?
				</Text>
			</View>
			<TouchableOpacity
				style={[
					styles.buttonStyle,
					{
						backgroundColor: agree ? "#4630EB" : "grey",
					},
				]}
				disabled={!agree}
				onPress={() =>
					Linking.openURL(
						"whatsapp://send?text=" + message + "&phone=+919041504403"
					)
				}
			>
				<Text style={styles.buttonText}> Contact Us </Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 30,
		backgroundColor: "#fff",
	},
	mainHeader: {
		flex: 1,
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

	inputContainer: {
		marginTop: 2,
	},
	labels: {
		marginTop: 20,
		fontWeight: "bold",
		// fontSize: 15,
		color: "#7d7d7d",
		paddingBottom: 5,
		lineHeight: 25,
	},
	inputStyle: {
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.3)",
		paddingHorizontal: 15,
		paddingVertical: 6,
		borderRadius: 2,
		height: "40%",
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
