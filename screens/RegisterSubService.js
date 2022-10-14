import React from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
    TouchableOpacity,
	SafeAreaView,
} from "react-native";

import Input from "../components/Inputs";
import Submit from "../components/Submit";
import ModalDropdown from "react-native-modal-dropdown";
import { Button } from "react-native-elements";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";


import { useNavigation } from "@react-navigation/native";


const RegisterSubService = (props) => {
    
	const navigation = useNavigation();
	return (
		<SafeAreaView style={{ backgroundColor: "white", flex:1 }}>
			<ScrollView style={{ backgroundColor: "white", flex:1 }}>
				<View style={styles.container}>
					<Image
						source={require("../assets/signup.png")}
						resizeMode="center"
						style={styles.image}
					/>
					<Text style={styles.textTitle}>Ready to be your own boss?</Text>
					<Text style={styles.textBody}>Work your way</Text>
					<Text style={styles.textBody}>
						You bring the skill. We'll make your earning easy.
					</Text>


                    <TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("RegisterSubService1")}
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

export default RegisterSubService;
