import React, { useState } from "react";
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
					<Text style={{ fontSize: 25 }}>Cash On Delivery</Text>
				</View>
			</TouchableWithoutFeedback>

			<Text style={style.textInfo}>Default payment mode : COD</Text>
			<Text style={style.textInfo}>
				Other payment method options will be available soon.
			</Text>
			<Text style={style.textInfo}>
				You can also pay via UPI / Gpay / Paytm to the service man
				after completion of your service.
			</Text>

			<TouchableOpacity
				style={style.verifyButton}
				onPress={() => {
					navigation.navigate("Thankyou", { cartData });
				}}
			>
				<Text style={style.buttontext}>PROCEED</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	textInfo: {
		fontSize: 17,
		margin: 7,
		color: "gray",
	},
	verifyButton: {
		alignSelf: "center",
		marginTop: "25%",
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
		elevation: 2, // Android
		height: 50,
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
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
