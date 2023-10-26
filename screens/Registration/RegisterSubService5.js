import React, { useState, useEffect } from "react";
import {
    View,
    ActivityIndicator,
    FlatList,
    Text,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NFTCard4, FocusedStatusBar, ExitHeader } from "../../components";

import { COLORS, config, SIZES } from "../../constants";

const RegisterSubService5 = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data2, setData] = useState([]);
    const [data2_backup, setDataBackup] = useState([]);
    console.log("\nPage\t" + "RegisterSubService5");

    /* const handleSearch = (value) => {
        if (value.length === 0) {
            setData(data2_backup);
        }

        const filteredData = data2_backup.filter((item) =>
            item.S_Name.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredData.length === 0) {
            setData(data2_backup);
        } else {
            setData(filteredData);
        }
    }; */
	
    const querystring = "SELECT * FROM service;";

    useEffect(() => {
        fetch(config.domain + "/get/" + querystring, {
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
    }, []);
    //console.log(nftData);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <FocusedStatusBar backgroundColor={COLORS.black} />
            {isLoading ? (
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        height: "100%",
                        width: "100%",
                        alignSelf: "center",
                        justifyContent: "center",
                    }}>
                    <Image
                        source={require("../../assets/sqera.png")}
                        resizeMode="center"
                        style={{
                            width: 50,
                            height: 50,
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
                        Looks like something is wrong!
                    </Text>
                    <Text
                        style={{
                            alignSelf: "center",
                            fontSize: 15,
                            marginBottom: 20,
                            justifyContent: "center",
                        }}>
                        {" "}
                        Please check again after some while.
                    </Text>
                    <ActivityIndicator />
                    <TouchableOpacity
                        style={{
                            width: 150,
                            height: 50,
                            marginTop: 90,
                            alignSelf: "center",
                            backgroundColor: COLORS.primary,
                            borderRadius: 10,
                            borderWidth: 0.2,
                            padding: 10,
                            opacity: 40,
                            alignContent: "center",
                            justifyContent: "center",
                        }}
                        onPress={() => {
                            navigation.navigate("Home");
                        }}>
                        <Text
                            style={{
                                alignSelf: "center",
                                fontSize: 16,
                                color: COLORS.white,
                            }}>
                            {" "}
                            Go to Home{" "}
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ flex: 1, alignSelf: "center" }}>
                    <ExitHeader></ExitHeader>

                    <Text
                        style={{
                            backgroundColor: COLORS.white,
                            alignSelf: "center",
                            fontWeight: "bold",
                            fontSize: 19,
                            color: COLORS.primary,
                            width: "100%",

                            textAlign: "center",
                            margin: SIZES.base,
                        }}>
                        Select the service which you can serve:
                    </Text>

                    <FlatList
                        nestedScrollEnabled
                        data={data2}
                        renderItem={({ item }) => <NFTCard4 data={item} />}
                        keyExtractor={(item) => item.S_ID}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={
                            <Text style={{ margin: 20, marginTop: "20%" }}>
                                Sorry for inconvinience, our servers are down for the moment. Our
                                best developers and backend-engineers are working to solve this
                                problem right now as you read this
                            </Text>
                        }
                    />

                    {/* <View
						style={{
							position: "absolute",
							top: 0,
							bottom: 0,
							right: 0,
							left: 0,
							zIndex: -1,
							flexWrap: "wrap",
						}}
					>
						<View style={{ height: 300, backgroundColor: COLORS.primary }} />
						<View style={{ flex: 1, backgroundColor: COLORS.white }} />
					</View> */}
                    <Pressable
                        onPress={() => {
                            navigation.navigate("RequestNewService");
                        }}>
                        <Text
                            style={{
                                fontWeight: "600",
                                fontSize: 18,
                                alignSelf: "center",
                            }}>
                            Can't find your service?
                        </Text>
                    </Pressable>
                </View>
            )}
        </SafeAreaView>
    );
};

export default RegisterSubService5;

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
    },
});
