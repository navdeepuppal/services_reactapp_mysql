import React, { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets, config } from "../../constants";

const RegisterSubService11 = ({ route }) => {
	const navigation = useNavigation();
	const subServices = route.params.subServices;
	const SMan_Details1 = route.params.SMan_Details1;
	const SMan_Details2 = route.params.SMan_Details2;
	const PhoneNumber = route.params.PhoneNumber;
	const AadharNumber = route.params.AadharNumber;
	const AadharImage = route.params.image;
	console.log("\nPage\t" + "RegisterSubService11");
	console.log("reached1\t" + JSON.stringify(subServices));
	//console.log("reached2\t" + JSON.stringify(SMan_Details1));
	//console.log("reached3\t" + JSON.stringify(SMan_Details2));
	//console.log("reached4\t" + JSON.stringify(PhoneNumber));
	//console.log("reached5\t" + JSON.stringify(AadharNumber));
	//console.log("reached6\t" + JSON.stringify(AadharImage));

	const [postStatus, setPostStatus] = useState(0);
	const saveValue = () => {
		AsyncStorage.setItem("ServiceMan", "1");
	};
	saveValue();

	subServices.forEach((item) => {
		console.log(
			JSON.stringify({
				S_ID: item.S_ID,
				SMan_PhNo: PhoneNumber,
				SMOff_BasePrice: item.SMan_BasePrice,
				SubS_ID: item.SubS_ID,
			})
		);
	});

	/* useEffect(() => {
		fetch(config.domain + "/postSMan", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				SMan_AadhaarNo: AadharNumber,
				SMan_AadhaarURL: "",
				SMan_Address: SMan_Details1.FullAddress,
				SMan_Age: SMan_Details1.Age,
				SMan_Allowed: 0,
				SMan_Character: "",
				SMan_City: SMan_Details1.City,
				SMan_CurrentLocation: "",
				SMan_DocVerifyStatus: "",
				SMan_Equipments: SMan_Details2.radio_Equipments == "Yes" ? 1 : 0,
				SMan_Experience: SMan_Details2.Experience,
				SMAN_Experience_Story: SMan_Details2.Story,
				SMan_Flag: 0,
				SMan_Images: "",
				SMan_LanguagesSpoken: SMan_Details1.Languages,
				SMan_Level: SMan_Details2.radio_Pro,
				SMan_Name: SMan_Details1.Name,
				SMan_OnlineStatus: 0,
				SMan_PhNo: PhoneNumber,
				SMan_Pincode: SMan_Details1.Pincode,
				SMan_PoliceVerification: "",
				SMan_ProfilePic: "",
				SMan_PTOs: "",
				SMan_Resume: "",
				SMan_Shop: SMan_Details1.Shop,
				SMan_Team: SMan_Details2.radio_Team == "Yes" ? 1 : 0,
				SMan_TotalBookings: 0,
				SMan_Website: SMan_Details1.Website,
				SMan_Weekdays: "",
			}),
		})
			.then((response) => response.json())
			.then((responseJson) => {})
			.catch((error) => alert(error))
			.finally(() => {});
	}, []); */

	/* useEffect(() => {
		subServices.foreach((item) => {
			fetch(config.domain + "/postSMOff", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					S_ID: item.S_ID,
					SMan_PhNo: PhoneNumber,
					SMOff_BasePrice: item.SMan_BasePrice,
					SubS_ID: item.SubS_ID,
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
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<Image
						source={require("../../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>
						Wohoo! Registration Complete
					</Text>
					<Text style={styles.textBody}>
						That's all we require from your side
					</Text>
					<Text style={styles.textBody}>
						We will contact you via WhatsApp and let you know
						that you're eligible to become a professional once
						we verify your document.
					</Text>
					<Text style={styles.textBody}>
						Verification status will be updated to you before
						24 hours via SMS/WhatsApp
					</Text>

					{/* <Input name="Password" icon="lock" pass={true} />
					<Input name="Confirm Password" icon="lock" pass={true} /> */}

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Home")}
					>
						<Text style={styles.buttontext}>Continue</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
	button: {
		marginTop: 80,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: COLORS.primary,
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: 200,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	textTitle: {
		fontWeight: "bold",
		textAlign: "center",
		marginTop: SIZES.large,
		fontSize: 38,
		marginVertical: 5,
	},

	textBody: {
		marginTop: SIZES.large,
		fontSize: 19,
		textAlign: "center",
	},
	buttontext: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default RegisterSubService11;
