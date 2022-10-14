import React from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	SafeAreaView,
} from "react-native";

import Input from "../components/Inputs";
import Submit from "../components/Submit";
import ModalDropdown from "react-native-modal-dropdown";
import { Button } from "react-native-elements";

const SignUpForm = (props) => {
	return (
		<SafeAreaView>
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<Image
						source={require("../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>
						Please Enter Details for the Booking:
					</Text>
					
					<Input name="Name" icon="user" />
					<Input name="Phone Number" icon="user" />
					<Input name="Pincode" icon="user" />
					<Input name="City" icon="user" />
					<Input name="Full Address" icon="user" />

					<Submit color="#0251ce" title="CREATE" />
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.textBody}>Aiready have an account? </Text>
						<Text
							style={[styles.textBody, { color: "blue" }]}
							onPress={() => props.navigation.navigate("Login")}
						>
							{" "}
							Login here
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
	textTitle: {
		fontSize: 30,
		marginVertical: 5,
	},
	textBody: {
		fontSize: 16,
		textAlign: "center",
	},
});

export default SignUpForm;
