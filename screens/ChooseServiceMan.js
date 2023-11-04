import {
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    View,
    Image,
    TouchableWithoutFeedback,
    FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { BackButton } from "../components";
import { ScrollView } from "react-native-gesture-handler";

import { SliderBox } from "react-native-image-slider-box";

const ChooseServiceMan = ({ navigation, route }) => {
    const cartData = route.params.cartData;
    const [timeSlot, settimeSlot] = useState("Evening");

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <BackButton />

            <Text style={styles.inputText}>Select Professional</Text>
            <Text
                style={{
                    color: "gray",
                    marginLeft: 15,
                    fontSize: 15,
                    marginBottom: "10%",
                }}>
                Showing top-rated professionals near you based on their booking history and customer
                ratings
            </Text>

            <ScrollView
                style={{
                    borderRightColor: "gray",
                }}>
                <FlatList
                    data={[4.6, 4.3, 4.2, 3.5, 3.3]}
                    renderItem={() => (
                        <View
                            style={{
                                backgroundColor: "#f2f2f2",
                                margin: 10,
                                alignSelf: "center",
                                borderRadius: 15,
                                borderColor: "gray",
                                width: "90%",
                                padding: 15,
                            }}>
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <Image
                                        style={{
                                            width: 60,
                                            height: 60,
                                            alignSelf: "center",
                                        }}
                                        source={require("../assets/images/user.png")}
                                    />
                                    <Text style={{ textAlign: "center", fontWeight: "600" }}>
                                        {" "}
                                        Navdeep Singh{" "}
                                    </Text>
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            fontSize: 10,
                                            color: COLORS.gray,
                                        }}>
                                        {" "}
                                        Serving Locality: Mohali
                                    </Text>
                                </View>
                                <View style={{ alignSelf: "flex-end", justifyContent: "flex-end" }}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            marginLeft: 90,
                                            fontWeight: "800",
                                            color: COLORS.primary,
                                            textAlign: "right",
                                            alignSelf: "center",
                                        }}>
                                        ⭐ 4.5 (35k)
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "black",

                                            marginTop: 20,
                                            marginLeft: 30,
                                            fontSize: 16,
                                            color: COLORS.white,
                                            borderRadius: 10,
                                            height: 40,
                                            width: 200,
                                            padding: 10,
                                            textAlign: "center",
                                        }}
                                        onPress={() => {
                                            AsyncStorage.setItem("timeSlot", timeSlot);
                                            navigation.navigate("PaymentApi", {
                                                cartData,
                                            });
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 16,

                                                color: COLORS.white,
                                                borderRadius: 10,
                                                textAlign: "center",
                                                fontWeight: "700",
                                            }}>
                                            Select
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
            <View
                style={{
                    borderColor: "gray",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    width: 400,
                    alignSelf: "center",
                    padding: 10,
                }}>
                <Text style={styles.extraText}>
                    Sqera will not be taking any responsibility of the service man during the
                    duration of booking.
                </Text>
                <TouchableOpacity style={styles.disclaimer}>
                    <Text style={{ margin: 10 }}>Read Disclaimer </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    extraText: {
        textAlign: "center",
        paddingHorizontal: 10,

        alignSelf: "center",
        fontSize: 12,

        color: "gray",
    },
    disclaimer: {
        alignSelf: "center",

        fontSize: 12,
        color: "blue",
    },
    inputText: {
        fontSize: 28,
        margin: 16,
        marginTop: "5%",
        fontWeight: "600",
    },

    verifyButton: {
        alignSelf: "center",
        marginTop: 20,
        shadowColor: "rgba(0,0,0, 0.4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: "black",
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: 50,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },

    buttontext: {
        fontWeight: "bold",
        fontSize: 19,
        textAlign: "center",
        color: COLORS.white,
    },
});

export default ChooseServiceMan;
