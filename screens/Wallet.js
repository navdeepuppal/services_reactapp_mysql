import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,

    Image,
    TouchableOpacity,
} from "react-native";

import { COLORS, SIZES } from "../constants";
import React, { useState } from "react";
import { BackButton } from "../components";

const Wallet = ({ navigation }) => {
    // const [state, setButtonStatus] = useState("1");
    const [amount, setAmount] = useState(1000);

    const handleChange = (e) => {
        setAmount(e);
        /* TODO : Verify as a number */
    };

    return (
        <ScrollView
            style={{
                marginTop: "12%",
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",

                    paddingVertical: SIZES.small,

                    paddingHorizontal: SIZES.large - 3,
                }}>
                <BackButton />

                <Image
                    source={require("../assets/sqera.png")}
                    style={{
                        width: 70,
                        height: 25,
                        marginTop: 18,
                        marginRight: 230,
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Contact");
                    }}
                    style={{
                        margin: 10,

                        marginTop: 15,
                        justifyContent: "flex-end",
                    }}>
                    <Text
                        style={{
                            color: "green",
                            fontSize: 17,
                            fontWeight: "600",
                        }}>
                        Help
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
                <View
                    style={{
                        padding: 20,
                        width: 400,
                        height: 130,
                        alignSelf: "center",
                        borderRadius: 10,
                        borderWidth: 0.2,
                        backgroundColor: COLORS.white,
                        borderColor: "gray",
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        <Text
                            style={{
                                fontWeight: "700",
                                fontSize: 20,
                            }}>
                            Total Wallet Balance
                        </Text>

                        <Image
                            source={require("../assets/images/wallet.png")}
                            style={{
                                width: 43,
                                height: 43,
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "500",
                        }}>
                        ₹ 0
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <View
                    style={{
                        padding: 20,
                        width: 400,
                        height: 220,
                        alignSelf: "center",
                        borderRadius: 10,
                        borderWidth: 0.2,
                        backgroundColor: COLORS.white,
                        borderColor: "gray",
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        <Text
                            style={{
                                fontWeight: "700",
                                fontSize: 20,
                            }}>
                            Add Money to Sqera Wallet
                        </Text>
                    </View>
                    <View
                        style={{
                            borderColor: COLORS.gray,
                            borderWidth: 1,
                            flexDirection: "row",
                            marginTop: 20,
                            borderRadius: 10,
                            padding: 10,
                            alignItems: "center",
                            height: 70,
                        }}>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 30,
                                fontWeight: "500",
                            }}>
                            ₹
                        </Text>
                        <TextInput
                            defaultValue={"1000"}
                            keyboardType="numeric"
                            numberOfLines={1}
                            style={{
                                marginLeft: 10,
                                marginTop: 10,
                                fontSize: 30,
                                width: "90%",
                                fontWeight: "500",
                            }}
                            value={amount}
                            onChangeText={handleChange}></TextInput>
                    </View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            borderColor: "gray",
                            borderRadius: 10,
                            height: 50,
                            backgroundColor: COLORS.white,
                            backgroundColor: "green",
                            borderRadius: 10,
                            padding: 10,
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "600",
                                color: COLORS.white,
                                textAlign: "center",
                            }}>
                            Proceed to add ₹{amount}
                        </Text>
                        <Text
                            style={{
                                fontSize: 19,
                                fontWeight: "500",
                            }}></Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text
                    style={{
                        margin: 15,
                        marginTop: 40,
                        fontSize: 20,
                        fontWeight: "600",
                    }}>
                    Recent Transactions
                </Text>
                <View>
                    <View
                        style={{
                            padding: 10,
                            height: 50,
                            backgroundColor: "#EDF6FD",
                            justifyContent: "center",
                        }}>
                        <Text
                            style={{
                                justifyContent: "center",
                                color: COLORS.gray,
                                fontWeight: "600",
                            }}>
                            02 Oct 2023
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                        <Image
                            source={require("../assets/sqera.png")}
                            style={{
                                alignSelf: "center",
                                width: 50,
                                height: 20,
                            }}
                        />
                        <View
                            style={{
                                margin: 20,
                            }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>
                                <Text
                                    style={{
                                        fontWeight: "500",
                                        fontSize: 13,
                                    }}>
                                    Paid for Home Kitchen Cleaning
                                </Text>
                                <Text
                                    style={{
                                        alignSelf: "flex-end",
                                        fontSize: 14,
                                        marginLeft: 50,
                                    }}>
                                    -₹122.55
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>
                                <Text
                                    style={{
                                        fontSize: 11,
                                        marginTop: 10,
                                        color: COLORS.gray,
                                    }}>
                                    06:28 PM
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 11,
                                        marginTop: 10,
                                        alignSelf: "flex-end",
                                        color: COLORS.gray,
                                    }}>
                                    Sqera Wallet Closing Balance: ₹4.00
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        alignSelf: "center",
        height: 70,
        width: 70,
    },
    image2: {
        alignSelf: "center",
        height: 100,
        width: 100,
    },
});

export default Wallet;
