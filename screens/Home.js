import React, { useState, useEffect } from "react";
import {
    View,
    FlatList,
    Text,
    Image,
    StyleSheet,
    Share,
    Modal,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    TextComponent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Location from "expo-location";
import { NFTCard1, HomeHeader, NFTCard9, NFTCard10, SubServicesModal } from "../components";
import { COLORS, config, SIZES, assets } from "../constants";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Bookings from "./Bookings";
import Search from "./Search";
import Icon from "react-native-vector-icons/FontAwesome";
import Profile from "./Profile";

import { SliderBox } from "react-native-image-slider-box";
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/core";

let apiKey = "YOUR_API_KEY";

function ServicesScreen() {
    const isFocused = useIsFocused();
    const [isLoading, setLoading] = useState(true);
    const [data2, setData] = useState([]);
    const [data2_backup, setDataBackup] = useState([]);
    const [subSModalVisible, setSubSModalVisible] = useState(-1);
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState("");

    const [ratingModal, setratingModalVisible] = useState(false);

    console.log(address);
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "https://www.sqera.com",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    const getLocation = () => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.error("Permission to access location was denied");
            }

            Location.setGoogleApiKey(apiKey);

            console.log(status);

            let { coords } = await Location.getCurrentPositionAsync();

            setLocation(coords);

            //console.log(coords);

            if (coords) {
                // let { longitude, latitude } = coords;
                let latitude = 30.697;
                let longitude = 76.7389;

                let regionName = await Location.reverseGeocodeAsync({
                    longitude,
                    latitude,
                });
                setAddress(regionName[0]);
                console.log(regionName, "nothing");
            }

            // console.log();
        })();
    };

    if (!location) getLocation();

    const handleSearch = (value) => {
        if (value.length === 0) {
            setData(data2_backup);
        }

        const filteredData = data2_backup.filter((item) =>
            item.S_Name.toLowerCase().includes(value.toLowerCase())
        );

        /* if (filteredData.length === 0) {
			setData(data2_backup);
		} else {
			setData(filteredData);
		} */
        setData(filteredData);
    };

    useEffect(() => {
        const C_Lat = 30.6951;
        const C_Lon = 76.7355;

        //const C_Lat = Location.latitude;
        //const C_Lon = Location.longitude;
        fetch(config.domain + "/getLocationBasedServices/" + C_Lat + "/" + C_Lon, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 404) {
                    responseJson = [];
                }
                setData(responseJson);
                setDataBackup(responseJson);
            })
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }, [isFocused]);

    return (
        <ScrollView style={{ backgroundColor: COLORS.white }}>
            {isLoading ? (
                <SafeAreaView
                    style={{
                        backgroundColor: "white",

                        marginTop: "5%",
                    }}>
                    <Image
                        source={require("../assets/sqera.png")}
                        style={{
                            width: 63,
                            height: 24,
                            marginTop: "3%",
                            marginBottom: 10,
                            alignSelf: "center",
                        }}
                    />
                    <Text
                        style={{
                            alignSelf: "center",
                            fontSize: 15,
                            marginTop: 8,
                            justifyContent: "center",
                        }}>
                        Finding professionals nearby..
                    </Text>
                    <Image
                        source={require("../assets/images/loader.gif")}
                        style={{ width: 100, height: 100, alignSelf: "center" }}
                    />
                </SafeAreaView>
            ) : (
                <SafeAreaView
                    style={{
                        backgroundColor: COLORS.white,
                        height: "100%",
                    }}>
                    <View
                        style={{
                            backgroundColor: COLORS.white,

                            paddingVertical: SIZES.small - 3,
                            width: "100%",
                            flexDirection: "row",
                            paddingHorizontal: SIZES.large,
                            justifyContent: "space-between",
                        }}>
                        <View
                            style={{
                                backgroundColor: COLORS.white,
                            }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                }}>
                                <Image
                                    source={require("../assets/icons/location.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 16,
                                        height: 16,
                                        marginRight: 2,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontWeight: "700",
                                        fontSize: 13,
                                    }}>
                                    {address.name}
                                </Text>
                            </View>
                            <Text style={{ fontSize: 9, margin: "1%" }}>
                                {" "}
                                {address.subregion}, {address.city}, {address.postalCode}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                justifyContent: "flex-end",
                                backgroundColor: COLORS.white,
                                flexDirection: "row",
                                height: 35,
                            }}
                            onPress={() => {
                                setratingModalVisible(true);
                            }}>
                            <Image
                                source={require("../assets/icons/notifications.png")}
                                resizeMode="cover"
                                style={{
                                    alignContent: "center",
                                    alignSelf: "center",
                                    width: 20,
                                    height: 20,
                                    marginRight: 10,
                                    marginBottom: 5,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            backgroundColor: COLORS.white,
                            marginBottom: 12,
                        }}>
                        <HomeHeader onSearch={handleSearch} />
                    </View>
                    <View
                        style={{
                            backgroundColor: "#f2f2f2",
                        }}>
                        <View
                            style={{
                                backgroundColor: COLORS.white,

                                padding: 20,
                                marginBottom: 25,
                                backgroundColor: COLORS.white,
                            }}>
                            <FlatList
                                horizontal
                                data={data2}
                                renderItem={({ item, index }) => (
                                    <NFTCard1
                                        key={index}
                                        data={item}
                                        index={index}
                                        setSubSModalVisible={setSubSModalVisible}
                                    />
                                )}
                                contentContainerStyle={{
                                    alignSelf: "center",
                                    justifyContent: "center",

                                    width: "100%",
                                    backgroundColor: COLORS.white,
                                }}
                            />
                        </View>

                        <View
                            style={{
                                backgroundColor: COLORS.white,

                                padding: 10,
                                paddingVertical: 20,
                            }}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    marginLeft: 5,
                                    fontWeight: "500",
                                    marginBottom: 5,
                                }}>
                                {" "}
                                Quick home repairs
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    marginLeft: 5,
                                    color: COLORS.gray,
                                    fontWeight: "300",
                                    marginBottom: 5,
                                }}>
                                {" "}
                                Instant, Trustworthy
                            </Text>

                            <FlatList
                                numColumns={2}
                                data={data2}
                                renderItem={({ item, index }) => (
                                    <NFTCard9
                                        key={index}
                                        data={item}
                                        index={index}
                                        setSubSModalVisible={setSubSModalVisible}
                                    />
                                )}
                                contentContainerStyle={{
                                    alignSelf: "center",
                                    justifyContent: "center",

                                    width: "100%",
                                    backgroundColor: COLORS.white,
                                }}
                            />
                        </View>

                        <View
                            style={{
                                backgroundColor: COLORS.white,
                                marginTop: 20,
                                padding: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    marginLeft: 5,
                                    marginTop: 10,
                                    fontWeight: "500",
                                    marginBottom: 5,
                                }}>
                                {" "}
                                Spa for women
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    marginLeft: 5,
                                    color: COLORS.gray,
                                    fontWeight: "300",
                                    marginBottom: 5,
                                }}>
                                {" "}
                                Refresh, Rewind, Rejuvenate
                            </Text>

                            <FlatList
                                numColumns={2}
                                data={data2}
                                renderItem={({ item, index }) => (
                                    <NFTCard9
                                        key={index}
                                        data={item}
                                        index={index}
                                        setSubSModalVisible={setSubSModalVisible}
                                    />
                                )}
                                contentContainerStyle={{
                                    alignSelf: "center",
                                    justifyContent: "center",

                                    width: "100%",
                                    backgroundColor: COLORS.white,
                                }}
                            />
                        </View>

                        <View
                            style={{
                                backgroundColor: COLORS.white,
                                marginTop: 20,
                                padding: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    marginLeft: 5,
                                    fontWeight: "500",
                                    marginTop: 10,
                                    marginBottom: 5,
                                }}>
                                {" "}
                                Freelancers
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    marginLeft: 5,
                                    color: COLORS.gray,
                                    fontWeight: "300",
                                    marginBottom: 5,
                                }}>
                                {" "}
                                Hire a freelancer for any task
                            </Text>

                            <FlatList
                                numColumns={2}
                                data={data2}
                                renderItem={({ item, index }) => (
                                    <NFTCard9
                                        key={index}
                                        data={item}
                                        index={index}
                                        setSubSModalVisible={setSubSModalVisible}
                                    />
                                )}
                                contentContainerStyle={{
                                    alignSelf: "center",
                                    justifyContent: "center",

                                    width: "100%",
                                    backgroundColor: COLORS.white,
                                }}
                            />
                        </View>

                        <View
                            style={{
                                backgroundColor: COLORS.white,
                                marginTop: 20,
                                padding: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    marginLeft: 5,
                                    fontWeight: "500",
                                    marginTop: 10,
                                    marginBottom: 5,
                                }}>
                                {" "}
                                Cleaning
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    marginLeft: 5,
                                    color: COLORS.gray,
                                    fontWeight: "300",
                                    marginBottom: 5,
                                }}>
                                {" "}
                                Trustworthy cleaning at your place
                            </Text>

                            <View
                                style={{
                                    height: 0.5,
                                    width: "95%",
                                    margin: 5,
                                    alignSelf: "center",
                                    backgroundColor: "#cccccc",
                                }}
                            />

                            <FlatList
                                numColumns={2}
                                data={data2}
                                renderItem={({ item, index }) => (
                                    <NFTCard9
                                        key={index}
                                        data={item}
                                        index={index}
                                        setSubSModalVisible={setSubSModalVisible}
                                    />
                                )}
                                contentContainerStyle={{
                                    alignSelf: "center",
                                    justifyContent: "center",

                                    width: "100%",
                                    backgroundColor: COLORS.white,
                                }}
                            />
                        </View>

                        <TouchableOpacity
                            style={{
                                backgroundColor: "#EDF6FD",
                                marginTop: 20,
                                marginBottom: 20,
                                padding: 10,
                            }}
                            onPress={onShare}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    marginLeft: 5,
                                    fontWeight: "400",
                                    marginTop: 10,
                                }}>
                                More professionals, more life gets easier :)
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    marginLeft: 5,
                                    color: COLORS.gray,
                                    fontWeight: "300",
                                    marginBottom: 5,
                                }}>
                                Refer to your friends.
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.loweredView}>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={subSModalVisible > -1}
                                onRequestClose={() => {
                                    setSubSModalVisible(-1);
                                }}>
                                <TouchableOpacity
                                    style={styles.loweredView}
                                    onPressOut={() => setSubSModalVisible(-1)}>
                                    <View style={[styles.modalView, { width: "100%" }]}>
                                        <TouchableOpacity
                                            style={{
                                                position: "absolute",
                                                top: -50,
                                                right: 10,
                                                backgroundColor: COLORS.white,
                                                borderRadius: 110,
                                                width: 35,
                                                height: 35,
                                                justifyContent: "center",
                                            }}
                                            onPress={() => setSubSModalVisible(-1)}>
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    alignSelf: "center",
                                                    color: "gray",
                                                }}>
                                                X
                                            </Text>
                                        </TouchableOpacity>
                                        <SubServicesModal
                                            data={data2[subSModalVisible]}
                                            setSubSModalVisible={setSubSModalVisible}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </Modal>
                        </View>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={ratingModal}
                            onRequestClose={() => {
                                setratingModalVisible(!ratingModal);
                            }}>
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
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
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 19,
                                            color: COLORS.gray,
                                            fontWeight: "400",
                                            textAlign: "center",
                                        }}>
                                        How was the service you recieved?
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 13,

                                            marginTop: 20,

                                            fontWeight: "600",
                                            textAlign: "center",
                                        }}>
                                        Deep Cleaning, Kitchen Cleaning
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        borderWidth: 0.2,
                                        width: 350,
                                        borderColor: "silver",
                                        height: 440,
                                        margin: 20,
                                        borderRadius: 10,
                                        marginTop: 60,
                                        alignSelf: "center",
                                    }}>
                                    <Image
                                        style={{
                                            top: -20,
                                            position: "absolute",
                                            width: 80,
                                            height: 80,
                                            alignSelf: "center",
                                        }}
                                        source={require("../assets/images/user.png")}
                                    />
                                    <Text
                                        style={{
                                            margin: 20,
                                            marginTop: 70,
                                            alignSelf: "center",
                                            textAlign: "center",
                                            color: "gray",
                                        }}>
                                        Please rate Navdeep
                                    </Text>
                                    <Text
                                        style={{
                                            margin: 20,
                                            fontSize: 40,
                                            alignSelf: "center",
                                            textAlign: "center",
                                            color: "gray",
                                        }}>
                                        ⭐⭐⭐⭐⭐
                                    </Text>

                                    <Text
                                        style={{
                                            marginTop: 30,
                                            marginLeft: 20,
                                            fontWeight: "600",
                                            fontSize: 13,
                                        }}>
                                        Comments (optional)
                                    </Text>

                                    <TextInput
                                        placeholder="Enter your message"
                                        placeholderTextColor="#A0A0A0"
                                        style={{
                                            marginTop: 10,
                                            borderWidth: 2,
                                            padding: 10,
                                            marginLeft: 20,
                                            borderRadius: 7,

                                            fontSize: SIZES.font + 1,
                                            color: COLORS.primary,
                                            width: 300,
                                            height: 65,
                                        }}
                                        // onChangeText={}
                                    />

                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "black",
                                            borderRadius: 10,

                                            marginTop: 20,
                                            alignSelf: "center",
                                            width: 280,
                                            height: 40,
                                            justifyContent: "center",
                                        }}>
                                        <Text
                                            style={{
                                                color: COLORS.white,
                                                fontSize: 14,
                                                fontWeight: "600",
                                                alignSelf: "center",
                                            }}>
                                            Send
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </SafeAreaView>
            )}
        </ScrollView>
    );
}

const Tab = createMaterialBottomTabNavigator();
export default function App() {
    {
        /* <ServicesScreen /> */
    }
    return (
        <Tab.Navigator
            initialRouteName="Services"
            screenOptions={{ headerShown: false }}
            barStyle={{
                backgroundColor: "white",
                height: 90,
            }}>
            <Tab.Screen
                name="Services"
                component={ServicesScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} size={22} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: "Discover",
                    tabBarIcon: ({ color }) => <Icon name="search" color={color} size={22} />,
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={Bookings}
                options={{
                    tabBarLabel: "Bookings",
                    tabBarIcon: ({ color }) => <Icon name="book" color={color} size={22} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} size={22} />,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    column: { margin: 3, height: "24%" },
    loweredView: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 1,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "70%",
        minHeight: "50%",
    },
    ratingbutton: {
        flexDirection: "row",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {},
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        fontSize: 23,
        marginBottom: 15,
        textAlign: "center",
    },
    image: {
        width: 150,
        height: 100,
        backgroundColor: "white",
        alignSelf: "center",
        justifyContent: "center",
    },
    image2: {
        opacity: 0.8,
        width: 500,
        height: 400,
        backgroundColor: "white",
    },
    inventoryImage: {
        alignSelf: "center",
        height: 70,
        width: 70,
    },
    container: {
        flex: 1,
    },

    image2: {
        alignSelf: "center",
        height: 100,
        width: 100,
    },
    heading: {
        marginTop: 10,
        margin: 20,
        fontSize: 25,
        fontWeight: "600",
    },
});
