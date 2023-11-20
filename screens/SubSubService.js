import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SliderBox } from "react-native-image-slider-box";
import { NFTCard6, FocusedStatusBar, SubSubServicesHeader, NFTCard10 } from "../components";
import { COLORS, config, SIZES, assets } from "../constants";
import { Colors, Snackbar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const SubSubService = ({ route, navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data2, setData] = useState([]);
    const [data2_backup, setDataBackup] = useState([]);
    const prevData = route.params.data;
    const [visible, setVisible] = React.useState(true);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const handleSearch = (value) => {
        if (value.length === 0) {
            s;
            setData(data2_backup);
        }

        const filteredData = data2_backup.filter(
            (item) =>
                item.SubSubS_Name.toLowerCase().includes(value.toLowerCase()) ||
                item.SubSubS_Description.toLowerCase().includes(value.toLowerCase())
        );

        /* if (filteredData.length === 0) {
			setData(data2_backup);
		} else {
			setData(filteredData);
		} */
        setData(filteredData);
    };

    let totalPrice = 0;
    data2_backup.forEach((item) => {
        totalPrice += item.SubSubS_Price * item.itemCount;
    });
    /* const querystring =
		"SELECT subsubservice.*, subservice.S_ID, 0 as itemCount FROM subsubservice, subservice where subsubservice.SubS_ID = subservice.SubS_ID and subservice.S_ID = " +
		[prevData.S_ID] +
		";"; */

    const querystring =
        "SELECT subsubservice.*, " +
        prevData.S_ID +
        " as S_ID, 0 as itemCount FROM subsubservice where subsubservice.SubS_ID = " +
        [prevData.SubS_ID] +
        ";";

    useEffect(() => {
        fetch(config.domain + "/get/" + querystring, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 404) {
                    responseJson = [];
                }
                setDataBackup(responseJson);
                setData(responseJson);
            })
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "#f2f2f2", height: "100%" }}>
            <ScrollView style={{ flex: 1 }}>
                <View
                    style={{
                        alignSelf: "center",

                        width: "100%",
                    }}>
                    <TouchableOpacity
                        style={{
                            width: 35,
                            height: 35,
                            position: "absolute",
                            backgroundColor: COLORS.white,
                            alignItems: "center",
                            padding: 3,
                            borderRadius: 20,
                            zIndex: 3,
                            top: 60,
                            left: 20,
                        }}
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={assets.left}
                            resizeMode="contain"
                            style={{ width: "100%", height: "100%", marginRight: 3 }}
                        />
                    </TouchableOpacity>
                    <SliderBox
                        inactiveDotColor="#90A4AE"
                        alignSelf={"center"}
                        autoplay
                        imageLoadingColor="#2196F3"
                        circleLoop
                        autoplayInterval={5000}
                        paginationBoxStyle={{
                            bottom: 0,
                        }}
                        height={210}
                        shadow
                        width="100%"
                        images={[
                            "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=2000&t=st=1672688375~exp=1672688975~hmac=8416e203ce399ec68facdf58c3080d1db24be40cc787610e70880e32166d1d9f",
                            "https://img.freepik.com/free-photo/housewife-woking-home-lady-blue-shirt-woman-bathroom_1157-45526.jpg?w=2000&t=st=1672688038~exp=1672688638~hmac=d24482e0caf4b75f753a2435569d1c59b940371a9adf3ba4382d8c0d445c8d91",
                            "https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18256.jpg?w=2000&t=st=1672688457~exp=1672689057~hmac=8d5efa29abacc4dc73fef70cf4fbd600751fbb48465853c6b1170639fb45c73b", // Network image
                        ]}
                        /* onCurrentImagePressed={(index) =>
									console.log(
										`image ${index} pressed`
									)
								}
								currentImageEmitter={(index) =>
									console.log(
										`current pos is: ${index}`
									)
								} */
                    />
                </View>
                <SubSubServicesHeader onSearch={handleSearch} SubS_Name={prevData.SubS_Name} />

                <View
                    style={{
                        marginTop: 10,
                        justifyContent: "center",

                        alignItems: "center",
                        backgroundColor: COLORS.white,
                    }}>
                    <FlatList
                        nestedScrollEnabled
                        data={data2}
                        renderItem={({ item, index }) => (
                            <NFTCard6
                                data={item}
                                data2={data2_backup}
                                setData={setDataBackup}
                                index={index}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={1}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
            {totalPrice ? (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",

                        height: 90,
                        backgroundColor: "white",
                        paddingVertical: 10,
                    }}>
                    <Text
                        style={{
                            marginLeft: 25,
                            color: COLORS.primary,
                            fontSize: 20,
                            padding: 10,
                        }}>
                        ₹ {totalPrice}
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "black",
                            borderRadius: 10,
                            marginRight: "5%",
                            padding: "1%",
                            width: 140,
                            height: 45,
                            justifyContent: "center",
                        }}
                        onPress={() =>
                            navigation.navigate("Cart", {
                                data2_backup,
                            })
                        }>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: 18,
                                fontWeight: "600",
                                alignSelf: "center",
                            }}>
                            View Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    );
};

export default SubSubService;
