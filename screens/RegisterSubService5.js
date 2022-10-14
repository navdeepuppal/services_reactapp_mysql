import React from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	
    TouchableOpacity,
	Image,
	SafeAreaView,
} from "react-native";

import Input from "../components/Inputs";
import Submit from "../components/Submit";
import ModalDropdown from "react-native-modal-dropdown";
import { Button } from "react-native-elements";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";



import { useNavigation } from "@react-navigation/native";

const RegisterSubService5 = (props) => {
    
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
					<Text style={styles.textTitle}>Register as a Professional</Text>
					<Text style={styles.textBody}>Join Sqera to change your life.</Text>
					<Text style={styles.textBody}>Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.
					</Text>
					<Input name="Choose Category in which your Service lies" icon="user" />
					<Input name="Choose Service (Ex. Appliance Repair, Cleaning) " icon="user" />
					<Input name="Choose Sub-Service (Ex. Air Conditioner, Bathroom & Kitchen Cleaning)" icon="user" />
					<Input name="How much years experience do you have?" icon="envelope" />
                    <Input name="Did you ever provide this service before" icon="envelope" />
                    <Input name="Share a bit of your work experience, cool projects you've completed in your area of expertise" icon="envelope" />
                    <Input name="How pro you are in this area? (Beginner\ Intermediate\ Expert\ Super Pro)" icon="envelope" />
					<Input name="Whats the base price you often take for this service?" icon="phone" />
					<Input name="Whats the minimum price you can charge for any of its kind service" icon="user" />
					<Input name="Whats the maximum price you can charge for any of its kind service" icon="user" />
					<Input name="Suppose you completed single order in 1 Hour. How much you will charge for this type of service?" icon="user" />
					<Input name="Did you have done this service earlier before? (Yes/No)" icon="user" />
					<Input name="Do you have a team or you are single person to do this?" icon="user" />
                    <Input name="Do you have a team or you are single person to do this?" icon="user" />
					<Input name="Mention the name of clients you worked before with (Eg. Any Organization) " icon="user" />
                    <Input name="Do you have all the equipments to serve the customers (Yes/No) " icon="user" />


<Text style={styles.textBody}>Please Note: All these inputs will be verified at the time of screening (Video Call/In-Person)</Text>

					

<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("RegisterSubService6")}
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

export default RegisterSubService5;
