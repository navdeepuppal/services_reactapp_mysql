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
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <BackButton />

                <View>
                    <Text
                        style={{
                            justifyContent: "flex-end",
                            paddingHorizontal: 10,
                            marginTop: 15,
                            fontWeight: "300",
                            fontSize: 12,
                        }}>
                        Delievering service at
                    </Text>
                    <Text
                        style={{
                            justifyContent: "flex-end",
                            paddingHorizontal: 10,
                            fontWeight: "500",
                            fontSize: 12,
                            width: 180,
                        }}>
                        Kothi 103 Phase 9 Mohali
                    </Text>
                </View>
            </View>

            <Text style={styles.inputText}>Select Professional</Text>
            <Text
                style={{
                    color: "gray",
                    marginLeft: 15,
                    fontSize: 15,
                    width: "95%",
                    marginBottom: 18,
                }}>
                Showing top count(*) carpenters near you based on their booking history and customer
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
                                flexDirection: "row",
                                width: 420,

                                backfaceVisibility: "visible",
                                backgroundColor: "#f2f2f2",
                                marginBottom: 15,
                                borderColor: "silver",
                                borderRadius: 20,
                                margin: 5,
                            }}>
                            <View
                                style={{
                                    position: "absolute",
                                    top: -1,
                                    left: -1,
                                    width: 26,
                                    height: 25,
                                    zIndex: 3,
                                    alignSelf: "center",
                                    backgroundColor: COLORS.secondary,
                                    borderRadius: 200,
                                    justifyContent: "center",
                                }}>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontWeight: "700",
                                        fontSize: 15,
                                        color: COLORS.white,
                                    }}>
                                    1
                                </Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    margin: 6,

                                    borderRadius: 15,
                                    borderColor: "gray",
                                    width: 180,
                                    height: 240,
                                    padding: 9,
                                }}>
                                <View style={{}}>
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                alignSelf: "flex-end",
                                                fontWeight: "700",
                                                marginBottom: 13,
                                                color: COLORS.primary,
                                            }}>
                                            ⭐ 4.5 (35k)
                                        </Text>

                                        <View style={{ width: 70, alignSelf: "center" }}>
                                            <Image
                                                style={{
                                                    position: "absolute",
                                                    top: 2,
                                                    left: -6,
                                                    width: 23,
                                                    zIndex: 3,
                                                    height: 23,
                                                    alignSelf: "center",
                                                }}
                                                source={require("../assets/images/verified.png")}
                                            />
                                            <Image
                                                style={{
                                                    marginTop: 3,
                                                    width: 80,
                                                    height: 80,
                                                    alignSelf: "center",
                                                }}
                                                source={require("../assets/images/user.png")}
                                            />
                                        </View>

                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontWeight: "600",
                                                marginTop: 5,
                                            }}>
                                            Navdeep Singh
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 10,
                                                color: COLORS.gray,
                                            }}>
                                            Serving Locality: Mohali
                                        </Text>

                                        <Text
                                            style={{
                                                marginTop: 10,
                                                textAlign: "center",
                                                fontSize: 12,
                                            }}>
                                            Total Bookings: 43
                                        </Text>

                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 12,
                                                margin: 5,
                                            }}>
                                            Sqera AI Review: Good
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 12,
                                            }}>
                                            Skill: Intermediate
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    marginVertical: 6,

                                    borderRadius: 15,

                                    width: 220,
                                    height: 240,
                                    padding: 9,
                                }}>
                                <View
                                    style={{
                                        borderWidth: 0.2,
                                        borderColor: "silver",
                                        borderRadius: 10,
                                        padding: 9,
                                        height: 130,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            fontWeight: "600",
                                            marginBottom: 10,
                                        }}>
                                        Customer Reviews
                                    </Text>

                                    <Text
                                        style={{
                                            margin: 5,
                                            fontSize: 12,
                                            color: COLORS.primary,
                                            fontWeight: "400",
                                        }}>
                                        • Excellent Communication {"\n"}• Time Punctual
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {}}
                                    style={{
                                        marginTop: 10,
                                        alignSelf: "center",
                                        backgroundColor: "silver",
                                        width: 200,
                                        justifyContent: "center",
                                        borderRadius: 10,
                                        height: 35,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: "600",
                                            alignSelf: "center",
                                            color: COLORS.secondary,
                                        }}>
                                        View Profile
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        position: "absolute",
                                        bottom: 5,
                                        alignSelf: "center",
                                        backgroundColor: COLORS.primary,
                                        width: 200,
                                        justifyContent: "center",
                                        borderRadius: 10,
                                        height: 35,
                                    }}
                                    onPress={() => {
                                        AsyncStorage.setItem("timeSlot", timeSlot);
                                        navigation.navigate("PaymentApi", {
                                            cartData,
                                        });
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: "600",
                                            alignSelf: "center",
                                            color: COLORS.white,
                                        }}>
                                        Select
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ alignItems: "center" }}
                />
            </ScrollView>
            <View
                style={{
                    borderColor: "gray",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    width: 400,
                    alignSelf: "center",
                    padding: 2,
                    height: 40,
                }}>
                <TouchableOpacity style={styles.disclaimer}>
                    <Text style={{ margin: 10, fontWeight: "500" }}>Read Disclaimer </Text>
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
        fontSize: 26,
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
