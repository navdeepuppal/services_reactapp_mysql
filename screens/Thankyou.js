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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, config } from "../constants";

const Thankyou = ({ route, navigation }) => {
	const cartData = route.params.cartData;
	// const filtereddata = subSubServices.filter((item) => item.itemCount > 0);
	//console.log("\tfiltered");
	//console.log(cartData); // yeh nahi

	var totalPrice = 0;

	cartData.forEach((item) => {
		totalPrice += item.itemCount * item.SubSubS_Price;
	});

	useEffect(() => {
		AsyncStorage.getItem("Address").then((Address) => {
			if (Address != null) {
				Address = JSON.parse(Address);
				AsyncStorage.getItem("PhoneNumber").then((PhoneNumber) => {
					if (PhoneNumber != null) {
						fetch(config.domain + "/postBooking", {
							method: "POST",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								B_Address: JSON.stringify(Address),
								B_ExtraCost: 1,
								B_Flag: 1,
								B_PaymentMode: 1,
								B_Price: totalPrice,
								B_Status: 1,
								B_StatusDetails: 1,
								C_PhNo: PhoneNumber,
								Coup_ID: 1,
								SMan_PhNo: -1,
								SubS_ID: cartData[0].SubS_ID,
							}),
						})
							.then((response) => response.json())
							.then((responseJson) => {
								console.log("Order Succesfully Placed");
								cartData.forEach((item) => {
									fetch(
										config.domain +
											"/postBookingItem",
										{
											method: "POST",
											headers: {
												Accept: "application/json",
												"Content-Type":
													"application/json",
											},
											body: JSON.stringify({
												B_ID: responseJson.insertId,
												Item_Count:
													item.itemCount,
												Item_Price:
													item.SubSubS_Price,
												Item_Rating: 4,
												SubSubS_ID:
													item.SubSubS_ID,
											}),
										}
									)
										.then((response) =>
											response.json()
										)
										.then((responseJson) => {})
										.catch((error) =>
											alert(error)
										)
										.finally(() => {});
								});
							})
							.catch((error) => alert(error))
							.finally(() => {});
					}
				});
			}
		});
	}, []);

	return (
		<SafeAreaView
			style={{ backgroundColor: "rgba(0,50,65,255)", flex: 1 }}
		>
			<View style={styles.container}>
				<Image
					source={require("../assets/images/orderplaced.gif")}
					style={styles.image}
				/>
				<Text style={styles.textTitle}></Text>
				<Text style={styles.textTitle}>
					Your booking has been confirmed!{" "}
				</Text>
				<Text style={styles.subtextTitle}>
					{" "}
					Booking Updates will be sent to you via
					{"\n"}WhatsApp/SMS
				</Text>

				{/* 
                <Text style={styles.textBody}>Respective Person has been notified regarding the booking. No Worries! </Text>
                <Text style={styles.textBody}>Payment will be done by scanning the QR Code on Service man Sqera App </Text> */}
			</View>
			<TouchableOpacity
				style={{
					borderWidth: 1,
					borderColor: "rgba(0,0,0,0)",
					marginLeft: "auto",
					width: 85,
					height: 85,
					padding: 3,
					backgroundColor: "black",
					borderRadius: 80 / 2,
					marginRight: 10,
				}}
				onPress={() => navigation.navigate("Home")}
			>
				<Image
					source={require("../assets/rightarrow.png")}
					resizeMode="contain"
					style={{
						width: 60,
						marginHorizontal: 6,
						marginVertical: 10,
						height: 60,
						alignSelf: "flex-end",
					}}
				/>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 80,
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
		color: "white",
	},
	subtextTitle: {
		color: "silver",
		margin: 12,
		marginTop: 50,
		fontSize: 17,
		marginVertical: 10,
		textAlign: "center",
	},
	textBody: {
		color: "white",
		fontSize: 17,
		textAlign: "center",
	},
});

export default Thankyou;
