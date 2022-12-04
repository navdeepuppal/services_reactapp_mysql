import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';

import { useNavigation } from "@react-navigation/native";


const OTPVerification = props => {
    
	const navigation = useNavigation();
    return (
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
       
            <View style={styles.container}>
                <Image 
                    source={require('../assets/signup.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Wohoo! </Text>
                <Text style={styles.textTitle}>Thank You </Text>
                <Text style={styles.textTitle}> You will be soon called by our team to confirm the details. </Text>{/* 
                <Text style={styles.textBody}>Respective Person has been notified regarding the booking. No Worries! </Text>
                <Text style={styles.textBody}>Payment will be done by scanning the QR Code on Service man Sqera App </Text> */}
            </View>
            <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0)',
       alignItems:'center',
       
					alignSelf: "flex-end",
                    justifyContent: 'right',
                    marginLeft: "auto",
       width:70,
       height:70,
       backgroundColor: "#1969A9",
       borderRadius:50,
       marginTop: 10,
       marginRight: 10
     }}

     
     onPress={() => navigation.navigate("Home")}>
	<Image
						source={require('../assets/rightarrow.png')}
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
    image2: {
        width: 10,
        height: 10,
        marginVertical: 10
    },
    textTitle: {
        fontSize: 30,
        marginVertical: 10,
        textAlign: "center"
    },
    textBody: {
        fontSize: 17,
        textAlign: "center"
    }
});

export default OTPVerification;