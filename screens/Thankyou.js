import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, config } from "../constants";

const Thankyou = ({ route, navigation }) => {
	const filteredData = route.params.filteredData;
	// const filtereddata = subSubServices.filter((item) => item.itemCount > 0);
	console.log("\tfiltered");
	console.log(filteredData); // yeh nahi

	filteredData.foreach((item) => {
		console.log(
			JSON.stringify({ // yeh haan
				B_Address: 1,
				B_DateTime: 1,
				B_ExtraCost: 1,
				B_Flag: 1,
				B_ID: 1,
				B_PaymentMode: 1,
				B_Price: 1,
				B_Status: 1,
				B_StatusDetails: 1,
				C_PhNo: 1,
				Coup_ID: 1,
				SMan_PhNo: 1,
				SubS_ID: 1,
			})
		);
	});

	/* useEffect(() => {
		subServices.foreach((item) => {
			fetch(config.domain + "/postBooking", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					B_Address: 1,
					B_DateTime: 1,
					B_ExtraCost: 1,
					B_Flag: 1,
					B_ID: 1,
					B_PaymentMode: 1,
					B_Price: 1,
					B_Status: 1,
					B_StatusDetails: 1,
					C_PhNo: 1,
					Coup_ID: 1,
					SMan_PhNo: 1,
					SubS_ID: 1,
				}),
			})
				.then((response) => response.json())
				.then((responseJson) => {})
				.catch((error) => alert(error))
				.finally(() => {});
		});
	}, []); */

	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<View style={styles.container}>
				<Image
					source={require("../assets/signup.png")}
					resizeMode="center"
					style={styles.image}
				/>
				<Text style={styles.textTitle}>Wohoo! </Text>
				<Text style={styles.textTitle}>Thank You </Text>
				<Text style={styles.textTitle}>
					{" "}
					You will be soon contacted by our team to confirm the details.{" "}
				</Text>
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
					backgroundColor: "#1969A9",
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
		fontSize: 30,
		marginVertical: 10,
		textAlign: "center",
	},
	textBody: {
		fontSize: 17,
		textAlign: "center",
	},
});

export default Thankyou;
