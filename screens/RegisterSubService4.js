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



const RegisterSubService4 = (props) => {
	
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
					<Text style={styles.textBody}>
						Share your details and we'll reach out with next steps.
					</Text>
					<Input name="Full Name (Ex. Genus Uppal)" icon="user" />
					
					<Input name="Profile Picture" icon="user" />
					<Input name="Email" icon="envelope" />
					<Input name="Phone" icon="phone" />
					<Input name="Age" icon="user" />
					<Input name="City" icon="user" />
					<Input name="Full Address" icon="user" />
					<Input name="Pincode" icon="user" />
					<Input name="Do you own any Shop? Yes/No" icon="user" />
					<Input name="Languages you can speak? Eg.Hindi" icon="user" />
					<Input name="Website Link: (if any)" icon="user" />

					<ModalDropdown
						options={["option 1", "option 2"]}
						defaultValue={"option 1"}
					>
						<Text style={styles.textTitle}>Hello</Text>
					</ModalDropdown>


					<ModalDropdown
						options={["option 1", "option 2"]}
						onSelect={(index) => this.toggleLanguage(index)}
					/>

					{/* <Input name="Password" icon="lock" pass={true} />
					<Input name="Confirm Password" icon="lock" pass={true} /> */}

<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("RegisterSubService5")}
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

export default RegisterSubService4;
