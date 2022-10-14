import React from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	SafeAreaView,
    TouchableOpacity,
} from "react-native";

import Input from "../components/Inputs";
import Submit from "../components/Submit";
import ModalDropdown from "react-native-modal-dropdown";
import { Button } from "react-native-elements";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

import { useNavigation } from "@react-navigation/native";
const RegisterSubService1 = (props) => {
    
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			<ScrollView style={{ backgroundColor: "white" }}>
				<View style={styles.container}>
					<Image
						source={require("../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>Here's Breakdown of Steps:</Text>


					<Text style={styles.textBody}>
						Learn what makes a successful people
					</Text>
					<Text style={styles.subtext}>
						Discover the do’s and don’ts to ensure you’re always on the right
						track.
					</Text>
					<Text style={styles.textBody}>Create your seller profile</Text>
					<Text style={styles.subtext}>
						Add your profile picture, description, and professional information.
					</Text>
					<Text style={styles.textBody}>Publish your Gig</Text>
					<Text style={styles.subtext}>
						Create a Gig of the service you’re offering and start selling
						instantly.
					</Text>

				
                    <TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("RegisterSubService2")}
				>
					<View style={{ flexDirection: "column" }}>
						<Text style={styles.buttontext}>Continue</Text>
           					
					</View>
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
        backgroundColor: "white", flex:1
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
		backgroundColor: 'green',
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
        fontWeight: 'bold',

        marginTop: SIZES.large,
		fontSize: 40,
		marginVertical: 5,
	},
    
	textBody: {
        
        marginTop: SIZES.large,
		fontSize: 19,
		textAlign: "center"
	},
    buttontext: {
		fontSize: 19,
		textAlign: "center",
color: COLORS.white
	},
});

export default RegisterSubService1;
