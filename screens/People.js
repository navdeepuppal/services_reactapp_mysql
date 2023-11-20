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

const People = ({ navigation }) => {
    const [timeSlot, settimeSlot] = useState("Evening");

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={{ flexDirection: "row", marginVertical: 2 }}>
                <BackButton />
                <Text style={styles.inputText}> Graphics & Design Professionals </Text>
            </View>

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
                                    <View
                                        style={{
                                            flexDirection: "row",

                                            justifyContent: "space-between",
                                            marginBottom: 10,
                                        }}>
                                        <Image
                                            style={{
                                                width: 20,
                                                height: 20,
                                                alignSelf: "center",
                                            }}
                                            source={require("../assets/images/verified.png")}
                                        />
                                        <View style={{ flexDirection: "row" }}>
                                            <Image
                                                style={{
                                                    width: 17,
                                                    height: 17,
                                                }}
                                                source={require("../assets/images/star.png")}
                                            />
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: "700",
                                                    color: "orange",
                                                }}>
                                                4.5
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 11,

                                                    fontWeight: "500",
                                                    color: COLORS.gray,

                                                    alignSelf: "center",
                                                }}>
                                                (35k)
                                            </Text>
                                        </View>
                                    </View>
                                    <Image
                                        style={{
                                            marginTop: 3,
                                            width: 80,
                                            height: 80,
                                            alignSelf: "center",
                                        }}
                                        source={require("../assets/images/user.png")}
                                    />
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            fontWeight: "600",
                                            marginTop: 5,
                                            fontSize: 15,
                                        }}>
                                        Navdeep
                                    </Text>
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            fontSize: 10,
                                            color: COLORS.gray,
                                        }}>
                                        Chandigarh
                                    </Text>

                                    <Text
                                        style={{
                                            marginTop: 10,
                                            color: "gray",
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
                                            color: "gray",
                                        }}>
                                        Sqera AI Review: Good
                                    </Text>
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            fontSize: 12,
                                            color: "gray",
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
                                <Text style={{ fontSize: 13, fontWeight: "600", marginBottom: 10 }}>
                                    Deliverable Tasks
                                </Text>

                                <Text
                                    style={{
                                        margin: 5,
                                        fontSize: 12,
                                        color: COLORS.primary,
                                        fontWeight: "400",
                                    }}>
                                    • Consultation {"\n"}• Design Website Pages
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
                                onPress={() => {}}
                                style={{
                                    position: "absolute",
                                    bottom: 5,
                                    alignSelf: "center",
                                    backgroundColor: COLORS.primary,
                                    width: 200,
                                    justifyContent: "center",
                                    borderRadius: 10,
                                    height: 35,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "700",
                                        alignSelf: "center",
                                        color: COLORS.white,
                                    }}>
                                    Book
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                contentContainerStyle={{ alignItems: "center" }}
            />
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
        fontSize: 17,
        marginVertical: 16,
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

export default People;
