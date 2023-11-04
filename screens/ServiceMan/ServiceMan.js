import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Alert,
    TouchableOpacity,
    Modal,
    FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";

import { COLORS, assets, SIZES, SHADOWS, config } from "../../constants";
import { SMan_BookingCard, SMan_BookingDetailsModal } from "../../components/SMan_BookingCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ServiceMan = ({ navigation }) => {
    const [ratingModal, setratingModalVisible] = useState(false);
    const [todayEarnings, settodayEarningsVisible] = useState(false);
    const [ordersDetailsModal, setOrdersDetailsVisible] = useState(false);
    const [broadcastModal, setbroadcastModalVisible] = useState(false);
    const [statisticsModal, setstatisticsModalVisible] = useState(false);
    const [navigationDrawer, setnavigationDrawerVisible] = useState(false);
    const [pendingList, setPendingList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const [currentBookingOpen, setCurrentBooking] = useState(null);
    const [orderStatusFilter, setOrderStatusFilter] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem("PhoneNumber").then((PhoneNumber) => {
            if (PhoneNumber === null) {
				/* TODO: Handle Not Logged In */
                return;
            }
            fetch(
                config.domain +
                    `/get/Select b.*, ss.SubS_Name, s.S_Name from booking as b, subservice as ss, service as s
				 where (b.SMan_PhNo = ${PhoneNumber} and b.SubS_ID = ss.SubS_ID and ss.S_ID = s.S_ID)
				 order by b.B_Appointment ASC`,
                {
                    method: "GET",
                }
            )
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson == 404) {
                        responseJson = [];
                    }
                    setPendingList(responseJson.filter((item) => item.B_Status !== 3));
                    setCompletedList(responseJson.filter((item) => item.B_Status === 3));
                    // console.log(responseJson);
                })
                .catch((error) => alert(error))
                .finally(() => setLoading(false));
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
            <View
                style={{
                    width: "100%",
                    backgroundColor: "green",
                    height: "3%",
                    padding: 4,
                }}>
                <Text
                    style={{
                        textAlign: "center",
                        alignSelf: "center",
                        fontWeight: "600",
                        fontSize: 12,
                        color: COLORS.white,
                    }}>
                    Your service is currently getting broadcasted nearby
                </Text>
            </View>
            <ScrollView style={{ backgroundColor: "#f2f2f2" }}>
                <View
                    style={{
                        margin: "3%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <Text style={{ fontWeight: "700", fontSize: 20 }}>Hi, Navdeep</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={require("../../assets/sqera.png")}
                            style={{
                                width: 50,
                                height: 20,
                                marginRight: 10,
                                alignSelf: "center",
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setnavigationDrawerVisible(true);
                            }}>
                            <Image source={assets.menuIcon} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flexWrap: "wrap",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 7,
                            margin: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            width: 160,
                            height: 70,
                            backgroundColor: COLORS.white,
                        }}
                        onPress={() => {
                            settodayEarningsVisible(true);
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                            }}>
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: "600",
                                    color: COLORS.primary,
                                }}>
                                ₹120
                            </Text>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: 12,
                                    color: COLORS.gray,
                                }}>
                                TODAYS EARNING
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderRadius: 7,
                            margin: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            width: 160,
                            height: 70,
                            backgroundColor: "green",
                        }}
                        onPress={() => {
                            setbroadcastModalVisible(true);
                        }}>
                        <View
                            style={{
                                alignItems: "center",
                            }}>
                            <Text
                                style={{
                                    fontSize: 22,
                                    fontWeight: "900",
                                    color: COLORS.white,
                                }}>
                                ON
                            </Text>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: 12,
                                    color: COLORS.white,
                                }}>
                                BROADCAST MODE
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            marginTop: "5%",
                            height: 1,
                            width: "95%",
                            alignSelf: "center",
                            backgroundColor: "#cccccc",
                        }}
                    />
                </View>
                {isLoading ? (
                    <View
                        style={{
                            borderRadius: 10,
                        }}>
                        <View
                            style={{
                                backgroundColor: "#f2f2f2",
                                padding: 19,
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "500",
                                    marginBottom: 20,
                                }}>
                                Getting your orders...
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View
                        style={{
                            borderRadius: 10,
                        }}>
                        <View
                            style={{
                                backgroundColor: "#f2f2f2",
                                padding: 19,
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "500",
                                    marginBottom: 20,
                                }}>
                                Orders
                            </Text>
                            <View
                                style={{
                                    width: "100%",
                                    flexDirection: "row",
                                }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: orderStatusFilter
                                            ? COLORS.white
                                            : COLORS.primary,
                                        width: 120,
                                        height: 35,
                                        borderRadius: 10,
                                        elevation: 10,
                                        alignItems: "center",
                                        alignContent: "center",
                                        justifyContent: "center",
                                    }}
                                    onPress={() => setOrderStatusFilter(false)}>
                                    <Text
                                        style={{
                                            margin: "1%",
                                            fontSize: 15,
                                            color: !orderStatusFilter
                                                ? COLORS.white
                                                : COLORS.primary,
                                        }}>
                                        Pending ({pendingList.length})
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: !orderStatusFilter
                                            ? COLORS.white
                                            : COLORS.primary,
                                        width: 140,
                                        height: 35,
                                        borderRadius: 10,
                                        marginLeft: 10,
                                        elevation: 10,
                                        alignItems: "center",
                                        alignContent: "center",
                                        justifyContent: "center",
                                    }}
                                    onPress={() => setOrderStatusFilter(true)}>
                                    <Text
                                        style={{
                                            margin: "1%",
                                            fontSize: 15,
                                            color: orderStatusFilter
                                                ? COLORS.white
                                                : COLORS.primary,
                                        }}>
                                        Completed ({completedList.length})
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            data={orderStatusFilter ? completedList : pendingList}
                            renderItem={({ item, index }) => (
                                <SMan_BookingCard
                                    data={item}
                                    key={index}
                                    setOrdersDetailsVisible={setOrdersDetailsVisible}
                                    setCurrentBooking={setCurrentBooking}
                                />
                            )}
                            // TODO: Add Some Senseful Component Here
                            ListEmptyComponent={
                                <Text
                                    style={{
                                        textAlign: "center",
                                        marginTop: 90,
                                        fontWeight: "600",
                                        fontSize: 18,
                                        lineHeight: 40,
                                    }}>
                                    No orders yet. {"\n"} Please keep your Broadcast Mode ON.
                                </Text>
                            }
                        />
                    </View>
                )}
                <View style={{ flex: 1 }}>
                    <SafeAreaView>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={ratingModal}
                            onRequestClose={() => {
                                setratingModalVisible(!ratingModal);
                            }}>
                            <View
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    marginTop: "20%",
                                    padding: 25,
                                    borderTopStartRadius: 20,
                                    borderTopEndRadius: 20,
                                    shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    width: "100%",
                                    alignSelf: "flex-end",
                                    height: "100%",
                                }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        marginTop: "5%",
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}>
                                        <TouchableOpacity
                                            style={{
                                                width: 40,
                                                height: 40,
                                                marginTop: "15%",
                                            }}
                                            onPress={() => setratingModalVisible(false)}>
                                            <Image
                                                source={assets.left}
                                                resizeMode="contain"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        marginTop: 30,
                                        margin: 10,
                                        borderRadius: 20,
                                        backgroundColor: COLORS.white,
                                    }}></View>
                            </View>
                        </Modal>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={todayEarnings}
                            onRequestClose={() => {
                                settodayEarningsVisible(!todayEarnings);
                            }}>
                            <ScrollView
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    marginTop: "20%",

                                    borderTopStartRadius: 20,
                                    borderTopEndRadius: 20,
                                    shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    width: "100%",
                                    alignSelf: "flex-end",
                                    height: "100%",
                                }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            width: 40,
                                            height: 40,
                                            marginTop: "7%",
                                        }}
                                        onPress={() => settodayEarningsVisible(false)}>
                                        <Image
                                            source={assets.left}
                                            resizeMode="contain"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            margin: 10,
                                            marginTop: 30,
                                            borderRadius: 15,
                                            padding: 10,
                                            justifyContent: "center",

                                            height: 60,
                                            backgroundColor: COLORS.white,
                                        }}
                                        onPress={() => {
                                            navigation.navigate("Wallet"),
                                                settodayEarningsVisible(false);
                                        }}>
                                        <View
                                            style={{
                                                alignItems: "center",
                                            }}>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                }}>
                                                <Image
                                                    source={require("../../assets/images/wallet.png")}
                                                    style={{
                                                        width: 30,
                                                        height: 25,
                                                    }}
                                                />
                                                <View
                                                    style={{
                                                        marginLeft: 10,
                                                    }}>
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: "500",
                                                            color: COLORS.primary,
                                                        }}>
                                                        Wallet
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 12,
                                                            fontWeight: "700",
                                                            color: COLORS.gray,
                                                        }}>
                                                        Rs 400
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text
                                        style={{
                                            marginTop: 40,
                                            margin: 10,
                                            fontSize: 20,
                                            fontWeight: "600",
                                        }}>
                                        Today's Earnings
                                    </Text>
                                    <View>
                                        <View
                                            style={{
                                                height: 50,
                                                backgroundColor: "#EDF6FD",
                                                justifyContent: "center",
                                            }}>
                                            <Text
                                                style={{
                                                    justifyContent: "center",
                                                    color: COLORS.gray,
                                                    fontWeight: "600",
                                                    margin: 10,
                                                }}>
                                                {" "}
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
                                                source={require("../../assets/sqera.png")}
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
                                        <View
                                            style={{
                                                height: 1,
                                                width: "95%",
                                                marginTop: 10,
                                                alignSelf: "center",
                                                backgroundColor: "#cccccc",
                                            }}
                                        />
                                    </View>
                                </View>
                            </ScrollView>
                        </Modal>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={broadcastModal}
                            onRequestClose={() => {
                                setbroadcastModalVisible(!broadcastModal);
                            }}>
                            <View
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    marginTop: "20%",
                                    padding: 25,
                                    borderTopStartRadius: 20,
                                    borderTopEndRadius: 20,
                                    shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    width: "100%",
                                    alignSelf: "flex-end",
                                    height: "100%",
                                }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        marginTop: "5%",
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}>
                                        <TouchableOpacity
                                            style={{
                                                width: 40,
                                                height: 40,
                                                marginTop: "15%",
                                            }}
                                            onPress={() => setbroadcastModalVisible(false)}>
                                            <Image
                                                source={assets.left}
                                                resizeMode="contain"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        borderRadius: 7,
                                        margin: 5,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        alignSelf: "center",
                                        width: 160,
                                        height: 70,
                                        backgroundColor: "green",
                                    }}
                                    onPress={() => {
                                        setbroadcastModalVisible(true);
                                    }}>
                                    <View
                                        style={{
                                            alignItems: "center",
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 25,
                                                fontWeight: "900",
                                                color: COLORS.white,
                                            }}>
                                            ON
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontWeight: "bold",
                                                fontSize: 12,
                                                color: COLORS.white,
                                            }}>
                                            BROADCAST MODE
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontWeight: "500",
                                    }}>
                                    {" "}
                                    Click to Switch Mode (ON / OFF)
                                </Text>
                                <View
                                    style={{
                                        marginTop: 30,
                                        margin: 10,
                                        alignSelf: "center",
                                        width: "100%",
                                        borderRadius: 20,
                                        borderWidth: 0.2,
                                        borderColor: COLORS.gray,
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            alignSelf: "center",
                                            fontWeight: "500",
                                            fontSize: 18,
                                            lineHeight: 30,
                                            padding: 10,
                                        }}>
                                        Current Location:
                                    </Text>
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            alignSelf: "center",
                                            fontWeight: "500",
                                            fontSize: 20,
                                            lineHeight: 30,
                                            padding: 10,
                                            color: "green",
                                        }}>
                                        Kothi 103 Phase 9 Mohali
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginTop: 30,
                                        margin: 10,
                                        alignSelf: "center",
                                        width: "100%",
                                        borderRadius: 20,
                                        borderWidth: 0.2,
                                        borderColor: COLORS.gray,
                                    }}>
                                    <Text
                                        style={{
                                            alignSelf: "center",
                                            fontWeight: "300",
                                            fontSize: 15,
                                            lineHeight: 20,
                                            padding: 10,
                                        }}>
                                        • Customers can find you when your BROADCAST MODE IS ON.
                                        {"\n"}
                                        {"\n"}• Your service/skill is currently getting broadcasted
                                        to your customers from your above current location.
                                        {"\n\n"}• Minimum Balance of Rs 400 required in wallet to
                                        switch on the BROADCAST MODE. For more details please check
                                        Sqera pricing.
                                    </Text>
                                </View>
                            </View>
                        </Modal>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={statisticsModal}
                            onRequestClose={() => {
                                setstatisticsModalVisible(!statisticsModal);
                            }}>
                            <ScrollView
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    marginTop: "20%",
                                    padding: 25,
                                    borderTopStartRadius: 20,
                                    borderTopEndRadius: 20,
                                    shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    width: "100%",
                                    height: "100%",
                                }}>
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        height: 40,
                                    }}
                                    onPress={() => setstatisticsModalVisible(false)}>
                                    <Image
                                        source={assets.left}
                                        resizeMode="contain"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </TouchableOpacity>

                                <Text
                                    style={{
                                        marginTop: 20,

                                        fontWeight: "600",
                                        fontSize: 20,
                                        marginBottom: 10,
                                    }}>
                                    Service Man Statistics
                                </Text>

                                <View
                                    style={{
                                        borderRadius: 7,
                                        margin: 5,
                                    }}>
                                    <View
                                        style={{
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}>
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                color: "gray",
                                                marginLeft: 10,
                                            }}>
                                            Orders Completed:
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: "900",
                                                color: "green",
                                                margin: 3,
                                            }}>
                                            90
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderRadius: 7,
                                        margin: 5,
                                    }}>
                                    <View
                                        style={{
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}>
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                color: "gray",
                                                marginLeft: 10,
                                            }}>
                                            Total Earnings:
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: "900",
                                                color: "green",
                                                margin: 3,
                                            }}>
                                            Rs 4000
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderRadius: 7,
                                        margin: 5,
                                    }}>
                                    <View
                                        style={{
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}>
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                color: "gray",
                                                marginLeft: 10,
                                            }}>
                                            Average Rating:
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: "900",
                                                color: "green",
                                                margin: 3,
                                            }}>
                                            5 ⭐
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderRadius: 7,
                                        margin: 5,
                                    }}>
                                    <View
                                        style={{
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}>
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                color: "gray",
                                                marginLeft: 10,
                                            }}>
                                            Penalties Charged:
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: "900",
                                                color: "red",
                                                margin: 3,
                                            }}>
                                            5
                                        </Text>
                                    </View>
                                </View>

                                <Text
                                    style={{
                                        marginTop: 50,
                                        fontWeight: "600",
                                        fontSize: 20,
                                    }}>
                                    Find More Customers, Earn More
                                </Text>

                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "lightblue",
                                        margin: 10,
                                        elevation: 10,
                                        fontSize: 16,
                                        borderRadius: 10,
                                        height: 40,
                                        padding: 10,
                                        textAlign: "center",
                                    }}
                                    onPress={() => {
                                        navigation.navigate("Onboarding"),
                                            setstatisticsModalVisible(false);
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: COLORS.primary,
                                            fontWeight: "500",
                                            borderRadius: 10,
                                            textAlign: "center",
                                        }}>
                                        Instructions: How to use sqera efficiently
                                    </Text>
                                </TouchableOpacity>

                                <Text
                                    style={{
                                        marginTop: 50,
                                        marginBottom: 10,
                                        fontWeight: "600",
                                        fontSize: 20,
                                    }}>
                                    Settings
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: COLORS.white,
                                        margin: 10,

                                        elevation: 10,
                                        fontSize: 16,
                                        borderRadius: 10,
                                        height: 45,
                                        padding: 10,
                                    }}
                                    onPress={() => {
                                        {
                                            setstatisticsModalVisible(false),
                                                Alert.alert("Switch to Customer Mode?", "", [
                                                    {
                                                        text: "Cancel",
                                                        onPress: () =>
                                                            console.log("Cancel Pressed"),
                                                        style: "cancel",
                                                    },
                                                    {
                                                        text: "Yes",
                                                        onPress: () => {
                                                            setnavigationDrawerVisible(false),
                                                                navigation.navigate("Home");
                                                        },
                                                    },
                                                ]);
                                        }
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            color: COLORS.primary,
                                            fontWeight: "500",
                                            borderRadius: 10,
                                        }}>
                                        Switch to Customer Mode
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: COLORS.white,
                                        margin: 10,

                                        elevation: 10,
                                        fontSize: 16,
                                        borderRadius: 10,
                                        height: 45,
                                        padding: 10,
                                    }}
                                    x
                                    onPress={() => {
                                        setstatisticsModalVisible(false);
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            color: COLORS.primary,
                                            fontWeight: "500",
                                            borderRadius: 10,
                                        }}>
                                        Account
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </Modal>

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={navigationDrawer}
                            onRequestClose={() => {
                                setnavigationDrawerVisible(!navigationDrawer);
                            }}>
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    borderTopStartRadius: 10,
                                    borderBottomLeftRadius: 10,

                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    width: "45%",
                                    alignSelf: "flex-end",
                                    height: "100%",
                                }}>
                                <View
                                    style={{
                                        justifyContent: "space-between",
                                        marginTop: "5%",
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}>
                                        <TouchableOpacity
                                            style={{
                                                width: 40,
                                                height: 40,
                                                marginTop: "15%",
                                            }}
                                            onPress={() => setnavigationDrawerVisible(false)}>
                                            <Image
                                                source={assets.left}
                                                resizeMode="contain"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: COLORS.white,
                                            width: "100%",
                                            marginTop: 15,
                                            marginBottom: 40,
                                            height: 50,
                                            justifyContent: "center",
                                        }}
                                        onPress={() => {
                                            setnavigationDrawerVisible(false),
                                                setstatisticsModalVisible(true);
                                        }}>
                                        <Image
                                            source={require("../../assets/images/user.png")}
                                            style={{
                                                width: 50,
                                                height: 50,

                                                alignSelf: "center",
                                            }}
                                        />
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontWeight: "600",
                                                fontSize: 12,
                                            }}>
                                            +91 9041504403
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: COLORS.white,
                                            borderBottomWidth: 0.8,
                                            borderColor: "#cccccc",
                                            margin: 5,
                                            width: "100%",

                                            height: 50,
                                            justifyContent: "center",
                                        }}
                                        onPress={() => {
                                            setnavigationDrawerVisible(false),
                                                navigation.navigate("Wallet");
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 16,
                                                fontWeight: "600",
                                                color: COLORS.gray,
                                            }}>
                                            Wallet
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: COLORS.white,
                                            borderBottomWidth: 0.8,
                                            borderColor: "#cccccc",
                                            margin: 5,
                                            width: "100%",

                                            height: 50,
                                            justifyContent: "center",
                                        }}
                                        onPress={() => {
                                            setnavigationDrawerVisible(false),
                                                setstatisticsModalVisible(true);
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 16,
                                                fontWeight: "600",
                                                color: COLORS.gray,
                                            }}>
                                            Profile
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: COLORS.white,
                                            borderBottomWidth: 0.8,
                                            borderColor: "#cccccc",
                                            margin: 5,
                                            width: "100%",

                                            height: 50,
                                            justifyContent: "center",
                                        }}
                                        onPress={() => {
                                            setnavigationDrawerVisible(false),
                                                navigation.navigate("Contact");
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 16,
                                                fontWeight: "600",
                                                color: COLORS.gray,
                                            }}>
                                            Sqera Pricing
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: COLORS.white,
                                            width: "100%",
                                            margin: 5,
                                            height: 50,
                                            justifyContent: "center",
                                        }}
                                        onPress={() => {
                                            setnavigationDrawerVisible(false),
                                                navigation.navigate("Contact");
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 16,
                                                fontWeight: "600",
                                                color: COLORS.gray,
                                            }}>
                                            Support
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                        position: "absolute",
                                        bottom: 30,
                                        alignSelf: "center",
                                        left: 5,
                                    }}>
                                    {/*   <TouchableOpacity
                                        style={{
                                            margin: 5,
                                            marginTop: 30,
                                            borderRadius: 15,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            alignSelf: "center",
                                            width: 130,
                                            height: 70,
                                            marginBottom: 200,
                                            backgroundColor: "#f2f2f2",
                                        }}
                                        onPress={() => {
                                            navigation.navigate("Wallet"),
                                                setnavigationDrawerVisible(false);
                                        }}>
                                        <View
                                            onPress={() => navigation.navigate("Wallet")}
                                            style={{
                                                alignItems: "center",
                                            }}>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                }}>
                                                <Image
                                                    source={require("../../assets/images/wallet.png")}
                                                    style={{
                                                        width: 30,
                                                        height: 25,
                                                    }}
                                                />
                                                <View
                                                    style={{
                                                        marginLeft: 10,
                                                    }}>
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: "500",
                                                            color: COLORS.primary,
                                                        }}>
                                                        Wallet
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 14,
                                                            fontWeight: "900",
                                                            color: COLORS.gray,
                                                        }}>
                                                        Rs 200
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity> */}
                                    <TouchableOpacity
                                        style={{
                                            width: 180,
                                            height: 50,
                                            borderRadius: 10,
                                            backgroundColor: COLORS.primary,

                                            alignSelf: "center",
                                            justifyContent: "center",
                                        }}
                                        onPress={() => {
                                            Alert.alert("Switch to Customer Mode?", "", [
                                                {
                                                    text: "Cancel",
                                                    onPress: () => console.log("Cancel Pressed"),
                                                    style: "cancel",
                                                },
                                                {
                                                    text: "Yes",
                                                    onPress: () => {
                                                        setnavigationDrawerVisible(false),
                                                            navigation.navigate("Home");
                                                    },
                                                },
                                            ]);
                                        }}>
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: 16,
                                                textAlign: "center",
                                                color: "white",
                                            }}>
                                            Customer Mode
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                textAlign: "center",
                                                color: "white",
                                            }}>
                                            Find & book a service
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        marginTop: 30,
                                        margin: 10,
                                        borderRadius: 20,
                                        backgroundColor: COLORS.white,
                                    }}></View>
                            </View>
                        </Modal>

                        <SMan_BookingDetailsModal
                            ordersDetailsModal={ordersDetailsModal}
                            currentBookingOpen={currentBookingOpen}
                            setOrdersDetailsVisible={setOrdersDetailsVisible}
                            setCurrentBooking={setCurrentBooking}
                        />
                    </SafeAreaView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    upcomingOrderText: {
        margin: "2%",
        fontSize: 20,
        fontWeight: "bold",
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "100%",
        height: "62%",
    },

    button: {
        shadowColor: "rgb(255,255,0)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        borderColor: "#F85B5D",
        borderWidth: 0.5,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: 130,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    button2: {
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginVertical: SIZES.base,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: "30%",
        width: "47%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 5,
    },
    button3: {
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: 50,
        width: "94%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    button4: {
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: 50,
        width: "10%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
    },
    button5: {
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: "green",
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: "12%",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        margin: 8,
    },
    button6: {
        marginBottom: "8%",
        backgroundColor: "green",
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: "30%",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        margin: 8,
    },
    button7: {
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: "green",
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: "100%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        margin: 8,
    },
    button8: {
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: "maroon",
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        elevation: 2, // Android
        height: "100%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        margin: 8,
    },
    bottomButton: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        color: COLORS.primary,
    },
});

export default ServiceMan;
