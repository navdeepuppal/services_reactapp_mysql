import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, Image, Modal, ScrollView, Dimensions } from "react-native";
import { COLORS, assets, config } from "../constants";
import { FlatList } from "react-native-gesture-handler";

const SMan_BookingCard = ({ data, setOrdersDetailsVisible, setCurrentBooking }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                setCurrentBooking(data);
                setOrdersDetailsVisible(true);
            }}>
            <View
                style={{
                    marginTop: 14,
                    borderRadius: 20,
                    alignSelf: "center",
                    width: "96%",
                    padding: 16,
                    backgroundColor: COLORS.white,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "600",
                        }}>
                        {data.SubS_Name}
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Image
                            source={require("../assets/images/cleaning.png")}
                            style={{
                                width: 30,
                                height: 30,
                                marginRight: 10,
                                alignSelf: "center",
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: "500",
                            }}>
                            Rs. {data.B_Price}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 20,
                        height: 30,
                    }}>
                    <View
                        style={{
                            backgroundColor: "yellow",

                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                        }}>
                        <Text
                            style={{
                                fontSize: 13,
                                padding: 3,
                                margin: 3,
                                color: COLORS.gray,
                            }}>
                            Address
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#EDF6FD",
                            height: 35,
                            borderTopRightRadius: 10,
                            borderBottomEndRadius: 10,
                        }}>
                        <Text
                            style={{
                                padding: 3,
                                fontSize: 13,
                                margin: 3,
                                color: COLORS.gray,
                            }}>
                            Kothi 103, Phase 9 Mohali, Sector 63
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                    }}>
                    <View
                        style={{
                            backgroundColor: "yellow",
                            height: 35,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                        }}>
                        <Text
                            style={{
                                padding: 3,
                                fontSize: 13,
                                margin: 3,
                                color: COLORS.gray,
                            }}>
                            Booking Slot
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#EDF6FD",
                            height: 35,
                            borderTopRightRadius: 10,
                            borderBottomEndRadius: 10,
                        }}>
                        <Text
                            style={{
                                padding: 3,
                                margin: 3,
                                fontSize: 13,
                                color: COLORS.gray,
                            }}>
                            {" "}
                            {/* TODO: Date Format 09th October 2023 (Monday) */}
                            {data.B_Appointment.substring(0, 10)}
                            {"   at  "}
                            {data.B_Appointment.substring(12, 19)}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        justifyContent: "flex-end",
                        flexDirection: "row",
                        marginTop: 10,
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "500",
                            color: "gray",
                        }}>
                        Status:{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "500",
                            color: "red",
                        }}>
                        {data.B_Status == 1 && "Pending"}
                        {data.B_Status == 2 && "In Progress"}
                        {data.B_Status == 3 && "Completed"}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const SMan_BookingDetailsModal = ({
    ordersDetailsModal,
    currentBookingOpen,
    setOrdersDetailsVisible,
    setCurrentBooking,
}) => {
    if (currentBookingOpen === null) {
        return null;
    }
    const [isLoading, setLoading] = useState(true);
    const [subSubServiceList, setData] = useState([]);

    useEffect(() => {
        fetch(
            config.domain +
                "/get/select bi.* from bookingitems as bi where bi.B_ID = " +
                currentBookingOpen.B_ID,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 404) {
                    responseJson = [];
                }
                setData(responseJson);
                console.log(responseJson);
            })
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }, [currentBookingOpen]);
    return (
        <>
            {isLoading ? null : (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={ordersDetailsModal}
                    onRequestClose={() => {
                        setOrdersDetailsVisible(false);
                        setCurrentBooking(null);
                    }}>
                    <ScrollView
                        style={{
                            backgroundColor: "#f2f2f2",
                            padding: 23,
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
                                marginTop: 30,
                                borderRadius: 20,
                            }}>
                            <View
                                style={{
                                    paddingVertical: 20,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            width: 40,
                                            height: 40,
                                        }}
                                        onPress={() => {
                                            setOrdersDetailsVisible(false);
                                            setCurrentBooking(null);
                                        }}>
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
                                            color: COLORS.gray,
                                            fontSize: 22,
                                            fontWeight: "600",
                                        }}>
                                        Order Details
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                    }}>
                                    <Image
                                        source={require("../assets/images/cleaning.png")}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            marginRight: 10,
                                            alignSelf: "center",
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    padding: 10,
                                    alignItems: "center",
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    margin: 10,
                                }}>
                                <View
                                    style={{
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}>
                                    <View
                                        style={{
                                            borderRadius:
                                                Math.round(
                                                    Dimensions.get("window").width +
                                                        Dimensions.get("window").height
                                                ) / 2,
                                            width: Dimensions.get("window").width * 0.04,
                                            borderWidth: 0.2,
                                            borderColor: COLORS.gray,
                                            height: Dimensions.get("window").width * 0.04,
                                            backgroundColor:
                                                currentBookingOpen.B_Status > 0
                                                    ? "#00ff00"
                                                    : "#f2f2f2",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}></View>
                                    <Text
                                        style={{
                                            color: COLORS.gray,
                                            margin: 10,
                                            fontWeight: "600",
                                        }}>
                                        Booked
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}>
                                    <View
                                        style={{
                                            borderRadius:
                                                Math.round(
                                                    Dimensions.get("window").width +
                                                        Dimensions.get("window").height
                                                ) / 2,
                                            width: Dimensions.get("window").width * 0.04,
                                            borderWidth: 0.2,
                                            borderColor: COLORS.gray,
                                            height: Dimensions.get("window").width * 0.04,
                                            backgroundColor:
                                                currentBookingOpen.B_Status > 1
                                                    ? "#00ff00"
                                                    : "#f2f2f2",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}></View>
                                    <Text
                                        style={{
                                            color: COLORS.gray,
                                            margin: 10,
                                            fontWeight: "600",
                                        }}>
                                        In Progress
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}>
                                    <View
                                        style={{
                                            borderRadius:
                                                Math.round(
                                                    Dimensions.get("window").width +
                                                        Dimensions.get("window").height
                                                ) / 2,
                                            width: Dimensions.get("window").width * 0.04,
                                            borderWidth: 0.2,
                                            borderColor: COLORS.gray,
                                            height: Dimensions.get("window").width * 0.04,
                                            backgroundColor:
                                                currentBookingOpen.B_Status > 2
                                                    ? "#00ff00"
                                                    : "#f2f2f2",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}></View>
                                    <Text
                                        style={{
                                            color: COLORS.gray,
                                            margin: 10,
                                            fontWeight: "600",
                                        }}>
                                        Completed
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                marginTop: 10,
                                flexDirection: "row",
                                margin: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: COLORS.gray,
                                }}>
                                Booking ID:
                            </Text>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}>
                                {currentBookingOpen.B_ID}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                margin: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: COLORS.gray,
                                }}>
                                Service Name:
                            </Text>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}>
                                {currentBookingOpen.S_Name}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                margin: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: COLORS.gray,
                                }}>
                                Sub Service Name:
                            </Text>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}>
                                {currentBookingOpen.SubS_Name}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                margin: 10,
                                width: "60%",
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: COLORS.gray,
                                }}>
                                Payment Mode:
                            </Text>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontSize: 15,
                                    fontWeight: "600",
                                }}>
                                {currentBookingOpen.B_PaymentMode === "1" && "COD"}
                                {currentBookingOpen.B_PaymentMode === "2" && "Wallet"}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                margin: 10,
                                width: "60%",
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: COLORS.gray,
                                }}>
                                Total Charges:
                            </Text>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontSize: 15,
                                    fontWeight: "600",
                                }}>
                                {currentBookingOpen.B_Price}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                margin: 10,
                                width: "60%",
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: COLORS.gray,
                                }}>
                                Booking Slot:
                            </Text>
                            <Text
                                style={{
                                    backgroundColor: "yellow",
                                    marginLeft: 10,
                                    fontSize: 15,
                                    fontWeight: "600",
                                }}>
                                {/* TODO: DateTime Format Wednesday, 24th October 2023 at 09:00 AM */}
                                {currentBookingOpen.B_Appointment}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                margin: 10,
                                width: "80%",
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: COLORS.gray,
                                }}>
                                Deadline:
                            </Text>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontSize: 12,
                                    fontWeight: "500",
                                    color: "red",
                                }}>
                                Penalty fee will be charged if the service isn't finished during the
                                customer's scheduled time.
                            </Text>
                        </View>
                        <View
                            style={{
                                margin: 10,
                                borderWidth: 0.2,
                                borderColor: COLORS.gray,
                                borderRadius: 10,
                                padding: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: COLORS.gray,
                                }}>
                                Customer Address:
                            </Text>
                            <Text
                                style={{
                                    margin: 10,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}>
                                {/* TODO: Address Format - Kothi 103 Phase 9 Mohali */}
                                {JSON.stringify(currentBookingOpen.B_Address)}
                            </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "blue",
                                    margin: 10,
                                    fontSize: 16,
                                    color: COLORS.white,
                                    borderRadius: 10,
                                    height: 40,
                                    padding: 10,
                                    textAlign: "center",
                                }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: COLORS.white,
                                        borderRadius: 10,
                                        textAlign: "center",
                                    }}>
                                    Open on Google Maps
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={subSubServiceList}
                            renderItem={({ item, index }) => (
                                <Text key={index}>SubSubS_ID: {item.SubSubS_ID}</Text>
                            )}
                        />
                        <View
                            style={{
                                margin: 10,
                                borderWidth: 0.2,
                                borderColor: COLORS.gray,
                                borderRadius: 10,
                                padding: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: COLORS.gray,
                                    }}>
                                    Contact Customer:
                                </Text>
                                <Text
                                    style={{
                                        margin: 10,
                                        fontSize: 16,
                                        fontWeight: "600",
                                    }}>
                                    +91 {currentBookingOpen.C_PhNo}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.white,
                                    margin: 10,
                                    fontSize: 16,
                                    color: COLORS.white,
                                    borderRadius: 10,
                                    height: 40,
                                    width: 90,
                                    padding: 10,
                                    textAlign: "center",
                                }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: "green",
                                        borderRadius: 10,
                                        textAlign: "center",
                                    }}>
                                    Call
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                margin: 10,
                                borderWidth: 0.2,
                                borderColor: COLORS.gray,
                                backgroundColor: COLORS.white,
                                borderRadius: 10,
                                padding: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    color: COLORS.gray,
                                    fontWeight: "600",
                                }}>
                                Booking Started ?
                            </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "green",
                                    margin: 10,
                                    fontSize: 16,
                                    color: COLORS.white,
                                    borderRadius: 10,
                                    height: 40,
                                    padding: 5,
                                    textAlign: "center",
                                }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "700",
                                        color: COLORS.white,
                                        borderRadius: 10,
                                        textAlign: "center",
                                    }}>
                                    Started
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Modal>
            )}
        </>
    );
};

export { SMan_BookingCard, SMan_BookingDetailsModal };
