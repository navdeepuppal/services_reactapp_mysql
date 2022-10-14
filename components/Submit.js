import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';

import { useNavigation } from "@react-navigation/native";

const Submit = props => {
    
	const navigation = useNavigation();
    return (
        <TouchableOpacity 
        style={[styles.container, {backgroundColor: props.color}]}
        onPress={() => navigation.navigate("RegisterSubService1") }>
            <Text style={styles.submitText}>{props.title}</Text>
        </TouchableOpacity>
     
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: 'center',
        borderWidth: 0,
    },
    submitText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10
    }
});

export default Submit;