import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';
import { SafeAreaView } from 'react-native-safe-area-context';


import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const Login = props => {
    
	const navigation = useNavigation();
    return (
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
            <View style={styles.container}>
                <Image 
                    source={require('../assets/login.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Welcome back</Text>
                <Text style={styles.textBody}>Log in to your existent account</Text>
                <View style={{marginTop: 20}} />
                <Inputs name="Enter your Phone Number" icon="user" />
                
                <TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Home")}
				>
						<Text style={styles.buttontext}>SEND OTP</Text>
           					
				</TouchableOpacity>
              

                <TouchableOpacity
					style={styles.button2}
					onPress={() => navigation.navigate("Home")}
				>
						<Text style={styles.buttontext2}>SKIP</Text>
           					
				</TouchableOpacity>
              
            </View>
        </ScrollView>      
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
    button: {
        marginTop: 50,
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
    button2: {
        marginTop: 25,
        shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: 'white',
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 40,
		width: 80,
        marginRight: 23,
        alignSelf: "flex-end",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	textTitle: {
        fontWeight: 'bold',

        marginTop: SIZES.large,
		fontSize: 40,
		marginVertical: 5,
	},
    
	textBody: {
        
		fontSize: 19,
		textAlign: "center"
	},
    buttontext: {
        fontWeight: 'bold',
		fontSize: 19,
		textAlign: "center",
color: COLORS.white
	},
    buttontext2: {
		fontSize: 19,
		textAlign: "center",
color: COLORS.primary
	},
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
    textTitle: {
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontSize: 16
    }
});

export default Login