import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { BackButton } from "../components";

const Contact = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);

    const submit = () => {
        if (!name && !email && !phone && !message) {
            alert("Plzz fill all the fields");
        } else {
            alert(`Thank You ${name}`);
            navigation.navigate("Home");
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <BackButton />
            <ScrollView style={styles.mainContainer}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <Text style={styles.mainHeader}>How can we help you ? </Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.labels}> Please explain your concern here </Text>
                        <TextInput
                            style={[styles.inputStyle, styles.multilineStyle]}
                            placeholder={""}
                            value={message}
                            onChangeText={(msg) => setMessage(msg)}
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.buttonStyle,
                            {
                                backgroundColor: "#4630EB",
                            },
                        ]}
                        disabled={!message}
                        onPress={() => {
                            try {
                                Linking.openURL(
                                    "whatsapp://send?text=" + message + "&phone=+919041504403"
                                );
                                alert("Opening Whatspp..");
                            } catch (error) {
                                alert(
                                    "Make sure you have whatsapp installed on your phone. If non then you can send the details on 9041504403 via SMS or WhatsApp"
                                );
                            }
                        }}>
                        <Text style={styles.buttonText}> Contact Us </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <Text style={styles.description}>
                    You can reach us anytime via {"\n"}sqera@gmail.com
                </Text>
                <TouchableOpacity
                    style={{
                        margin: 20,
                        marginTop: "50%",
                        alignSelf: "center",
                    }}
                    onPress={() => {
                        navigation.navigate("RequestNewService");
                    }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "400",
                        }}>
                        Request for a new service ?
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    mainHeader: {
        flex: 1,
        fontSize: 21,
        color: "#344055",
        fontWeight: "500",
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
    },
    description: {
        marginTop: 10,
        fontSize: 15,
        color: "#7d7d7d",

        paddingBottom: 20,
        lineHeight: 25,
    },

    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontWeight: "500",
        // fontSize: 15,
        color: "#7d7d7d",
        paddingBottom: 5,
        lineHeight: 25,
        fontSize: 15,
    },
    inputStyle: {
        fontSize: 23,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 8,
        height: 90,
        marginBottom: 30,
    },
    multiineStyle: {
        paddingVertical: 4,
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    buttonText: {
        color: "#eee",
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
    },
    wrapperText: {
        marginLeft: 10,
        color: "#7d7d7d",
    },
});

export default Contact;
