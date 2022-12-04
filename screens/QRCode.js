import React from "react";
import { Button, Text, Linking, SafeAreaView } from "react-native";
import { COLORS } from "../constants";

const QRCode = ({}) => {
	const upiURL =
		"upi://paypa=suyashvashishtha@axl&pn=Suyash%20Vashishtha&mc=0000&mode=02&purpose=00";

	const upiOpener = () => {
		Linking.openURL(upiURL);
	};

	return (
		<SafeAreaView style={{ flex:1, backgroundColor: "rgba(255, 255, 255, 1)" }}>
			<Text>This Button will open UPI apps for our url</Text>
			<Button title="Open Upi APP" onPress={upiOpener} />
		</SafeAreaView>
	);
};

export default QRCode;
