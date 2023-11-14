import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Modal,
    TextInput,
} from "react-native";

import { COLORS, SIZES, SHADOWS } from "../constants";

import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TermsCondition, BackButton } from "../components";

const Login = ({ navigation, route }) => {
    const filteredData =
        route.params !== undefined && route.params.prev === "Cart" ? route.params.filteredData : [];

    const [validity, setValidity] = useState("true");
    const [PhoneNumber, onChangePhoneNumber] = React.useState(null);
    const [OTP, onChangeOTP] = useState(null);
    //const [value, setvalue] = useState("");
    // const [isLoggedIn, setLoggedIn] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const saveValue = () => {
        AsyncStorage.setItem("PhoneNumber", PhoneNumber);
        AsyncStorage.setItem("isLoggedIn", "true");
    };

    const validate = () => {
        if (PhoneNumber <= 1000000000 || PhoneNumber >= 10000000000) {
            return false;
        } else {
            return true;
        }
    };
    const getValue = () => {
        AsyncStorage.getItem("PhoneNumber").then((PhoneNumber) => {
            onChangePhoneNumber(PhoneNumber);
        });
    };

    return (
        <View
            style={{
                backgroundColor: "white",
                flex: 1,
                height: "100%",
                marginTop: "15%",
            }}>
            <View>
                <BackButton />
            </View>
            <SafeAreaView style={{ backgroundColor: "white" }}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.container}>
                        <Text style={{ fontSize: 30 }}>Enter your mobile {"\n"}number</Text>

                        <View
                            style={{
                                width: "95%",
                                flexDirection: "row",
                                borderWidth: 1,
                                borderColor: "silver",
                                borderRadius: 13,
                                marginTop: "10%",
                            }}>
                            <Text style={styles.countrycode}>+91</Text>

                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePhoneNumber}
                                value={PhoneNumber}
                                placeholder="Enter your number"
                                keyboardType="number-pad"
                                placeholderTextColor="#a0a0a0"
                                maxLength={10}
                            />
                        </View>

                        {validity == "true" ? null : (
                            <Text style={{ color: "#bb0000" }}>{validity} Incorrect!</Text>
                        )}

                        <View
                            style={{
                                justifyContent: "flex-end",
                                alignContent: "flex-end",
                                alignItems: "center",
                                marginTop: "70%",
                            }}>
                            <Text
                                style={{
                                    color: "#cccccc",
                                    margin: "2%",
                                }}>
                                By proceeding, you agree with Sqera's terms and conditions and
                                privacy policy.
                            </Text>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    const validationtemp = validate();

                                    if (validationtemp == true) {
                                        setModalVisible(true);
                                        setValidity("true");
                                    } else {
                                        console.log(
                                            "Validation unsuccessful for input " + validationtemp
                                        );
                                        setValidity("Phone Number");
                                    }
                                }}>
                                <Text style={styles.buttontext}>Get OTP</Text>
                            </TouchableOpacity>

                            <View
                                style={{
                                    flexDirection: "row",
                                    height: "20%",
                                    alignItems: "center",
                                }}>
                                <Image
                                    source={require("../assets/icons/trustshield.png")}
                                    style={{
                                        height: 30,
                                        width: 30,
                                    }}
                                />
                                <Text style={{ color: "#cccccc" }}>
                                    {" "}
                                    Trusted by more than 10 lakh+ Indians
                                </Text>
                            </View>
                        </View>

                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: 25,
                                                alignSelf: "flex-start",
                                            }}>
                                            Enter your OTP
                                        </Text>

                                        <Text
                                            style={{
                                                marginTop: 20,
                                                alignSelf: "flex-start",
                                                lineHeight: 30,
                                                fontSize: 16,
                                            }}>
                                            Sqera has sent a 4-digit OTP on your phone number +91{" "}
                                            {PhoneNumber}
                                        </Text>

                                        <TextInput
                                            caretHidden={true}
                                            style={styles.otp}
                                            onChangeText={onChangeOTP}
                                            value={OTP}
                                            placeholder="••••"
                                            keyboardType="number-pad"
                                            placeholderTextColor="#a0a0a0"
                                            maxLength={4}
                                            letterSpacing={20}
                                        />
                                        <View
                                            style={{
                                                flexDirection: "row",
                                            }}>
                                            <Text
                                                style={{
                                                    marginTop: 10,
                                                    fontWeight: "600",
                                                    color: COLORS.gray,
                                                    fontSize: 15,
                                                }}>
                                                OTP Not received ?
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setModalVisible(false);
                                                }}>
                                                <Text
                                                    style={{
                                                        marginTop: 10,

                                                        fontWeight: "600",
                                                        fontSize: 15,
                                                    }}>
                                                    {" "}
                                                    Resend
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity
                                            style={styles.verifyButton}
                                            onPress={() => {
                                                if (OTP == 1609) {
                                                    setModalVisible(false);
                                                    saveValue();
                                                    if (route.params !== undefined) {
                                                        if (route.params.prev === "Profile")
                                                            navigation.goBack();
                                                        else
                                                            navigation.navigate("SelectAddress", {
                                                                filteredData,
                                                            });
                                                    } else navigation.goBack();
                                                    alert("You are now logged in!");
                                                } else {
                                                    alert("Incorrect OTP");
                                                    onChangeOTP("");
                                                }
                                            }}>
                                            <Text style={styles.buttontext}>
                                                VERIFY AND PROCEED
                                            </Text>
                                        </TouchableOpacity>

                                        <TermsCondition />
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalView: {
        backgroundColor: "white",
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        padding: 35,
        alignItems: "center",
        elevation: 5,
        width: "100%",
        height: "85%",
    },

    countrycode: {
        fontSize: 24,
        borderColor: "silver",

        padding: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignSelf: "center",
    },
    button: {
        alignItems: "center",

        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: "green",
        borderRadius: SIZES.extraLarge,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: "22%",
        width: 300,
        justifyContent: "center",
        flexDirection: "row",
    },
    verifyButton: {
        marginTop: "15%",
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: "green",
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: 50,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    input: {
        fontSize: SIZES.extraLarge + 2,
        height: 80,
        borderRadius: 9,
        width: "100%",
        paddingVertical: 20,
    },
    otp: {
        textAlign: "center",

        fontSize: 50,
        height: 80,
        margin: 8,
        marginTop: 40,
        borderColor: "silver",
        borderRadius: 9,
        borderWidth: 0.7,

        width: "100%",
    },
    button2: {
        marginTop: 50,
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: "white",
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
        fontWeight: "bold",

        marginTop: SIZES.large,
        fontSize: 40,
        marginVertical: 5,
    },

    textBody: {
        fontSize: 19,
        textAlign: "center",
    },
    buttontext: {
        fontWeight: "bold",
        fontSize: 19,
        textAlign: "center",
        alignSelf: "center",
        color: COLORS.white,
    },
    buttontext2: {
        fontSize: 19,
        textAlign: "center",
        color: COLORS.primary,
    },
    container: {
        marginTop: 30,
        margin: 15,
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontSize: 16,
    },
});

export default Login;
