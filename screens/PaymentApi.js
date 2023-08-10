import React, { useState } from "react";
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { RadioButton } from "react-native-paper";
import BackButton from "../components/BackButton";

const PaymentApi = ({ navigation, route }) => {
	const cartData = route.params.cartData;
	const [Payment, setPayment] = useState("Payment");

	return (
		<SafeAreaView
			style={{ backgroundColor: "white", flex: 1, margin: 10 }}
		>
			<BackButton />

			<Text
				style={{
					fontSize: 30,
					marginTop: "15%",
					fontWeight: "500",
				}}
			>
				{" "}
				PAYMENT PAGE{" "}
			</Text>

			<TouchableWithoutFeedback onPress={() => setPayment("Payment")}>
				<View
					style={{
						alignSelf: "center",
						marginTop: "10%",
						flexDirection: "row",
						borderColor: "gray",
						borderWidth: 1,
						borderRadius: 15,
						padding: 20,
						width: "70%",
						margin: 25,
					}}
				>
					<RadioButton
						value="Payment"
						status={
							Payment === "Payment"
								? "checked"
								: "unchecked"
						}
						onPress={() => setPayment("Payment")}
					/>
					<Text style={{ fontSize: 22 }}>Cash On Delivery</Text>
				</View>
			</TouchableWithoutFeedback>

			<Text style={style.textInfo}>
				Other payment method options will be available soon.
			</Text>
			<Text style={style.textInfo}>
				Upon the completion of your service, you have the option to
				make payment to the service provider using UPI, Gpay, or
				Paytm.
			</Text>

			<TouchableOpacity
				style={style.verifyButton}
				onPress={() => {
					navigation.navigate("Thankyou", { cartData });
					Haptics.notificationAsync(
						Haptics.NotificationFeedbackType.Success
					);
				}}
			>
				<Text style={style.buttontext}>PLACE ORDER</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	textInfo: {
		fontSize: 16,
		margin: 7,
		color: "gray",
	},
	verifyButton: {
		alignSelf: "center",
		marginTop: "17%",
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "black",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	buttontext: {
		fontWeight: "bold",
		fontSize: 19,
		textAlign: "center",
		color: "white",
	},
});

export default PaymentApi;
