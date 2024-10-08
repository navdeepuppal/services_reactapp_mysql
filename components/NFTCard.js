import { useNavigation } from "@react-navigation/native";

import React from "react";

import { View, Image, TouchableOpacity, StyleSheet, Text, ImageBackground } from "react-native";

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import { NFTTitle } from "./SubInfo";
import * as Haptics from "expo-haptics";

const NFTCard = ({ data }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				width: "45%",
			}}
			onPress={() => navigation.navigate("Details", { data })}>
			<View
				style={{
					width: 50,
					height: 50,
				}}>
				<Image
					source={data.image}
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>
			</View>

			<View style={{ width: "100%", padding: SIZES.font }}>
				<NFTTitle title={data.name} titleSize={SIZES.large} />
				<NFTTitle title={data.creator} titleSize={SIZES.small} />

				<View
					style={{
						marginTop: SIZES.font,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}></View>
			</View>
		</TouchableOpacity>
	);
};

const NFTCard1 = ({ data, index, setSubSModalVisible }) => {
	const navigation = useNavigation();
	const ImageURL = [data.S_Image][0];
	return (
        <View>
            <TouchableOpacity
                style={{
                    backgroundColor:
                        data.isSelected != "false" ? "rgba(245,245,245,255)" : "#F8F8F8",
                    borderRadius: SIZES.small,

                    width: 155,
                    height: 120,
                    margin: 5,

                    padding: 20,
                }}
                onPress={() => {
                    setSubSModalVisible(index);
                    //navigation.navigate("SubServices" /* data.S_NextPage */, { data })
                }}>
                <View
                    style={{
                        alignSelf: "center",
                        height: 63,
                        width: 63,
                    }}>
                    <ImageBackground
                        resizeMode="cover"
                        source={{ uri: ImageURL }}
                        style={{
                            height: 82,
                            alignSelf: "center",

                            width: 82,
                        }}></ImageBackground>
                </View>
            </TouchableOpacity>
            <NFTTitle title={data.S_Name} titleSize={SIZES.font} />
        </View>
    );
};

const NFTCard2 = ({ data, setSubSModalVisible }) => {
    const navigation = useNavigation();
    return (
        <View style={{ marginBottom: SIZES.extraLarge }}>
            <TouchableOpacity
                style={{
                    backgroundColor: data.isSelected != "false" ? "#F2F2F2" : "#F8F8F8",
                    borderRadius: SIZES.small - 6,
                    marginBottom: 8,
                    margin: SIZES.base + 6,
                    width: 110,

                    height: 80,

                    borderColor: COLORS.primary,
                }}
                onPress={() => {
                    setSubSModalVisible(-1);
                    navigation.navigate("SubSubService", { data });
                }}>
                <Image
                    source={{ uri: data.SubS_Image }}
                    resizeMode="contain"
                    style={{
                        alignSelf: "center",
                        width: "98%",
                        height: "98%",
                    }}
                />
            </TouchableOpacity>
            <NFTTitle
                title={data.SubS_Name}
                titleSize={SIZES.medium - 3.5}
                titleFont={FONTS.medium}
                fontColor={COLORS.primary}
            />
        </View>
    );
};

const NFTCard3 = ({ data }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{
                backgroundColor: data.isSelected != "false" ? COLORS.white : "#F8F8F8",
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
                flex: 1,
            }}
            onPress={() => {}}>
            <View style={{ width: "100%", padding: SIZES.font }}>
                <NFTTitle title={data.SubSubS_Name} titleSize={SIZES.large} />
                <NFTTitle title={data.SubSubS_Description} titleSize={SIZES.small} />

                <View
                    style={{
                        marginTop: SIZES.font,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}></View>
            </View>
        </TouchableOpacity>
    );
};

const NFTCard4 = ({ data }) => {
    const navigation = useNavigation();
    const ImageURL = [data.S_Image][0];
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,

                width: 195,
                height: 170,
            }}
            onPress={() => {
                const temp = data.S_ID;
                navigation.navigate("RegisterSubService6", { temp });
            }}>
            <View
                style={{
                    alignItems: "center",
                    width: 200,
                    height: 140,
                }}>
                <Image
                    source={{ uri: ImageURL }}
                    resizeMode="cover"
                    style={{
                        marginTop: 10,
                        width: 120,
                        height: 120,
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
            </View>

            <View style={{ width: "100%" }}>
                <NFTTitle title={data.S_Name} titleSize={SIZES.large} />
            </View>
        </TouchableOpacity>
    );
};

const NFTCard5 = ({ data, data2, setData, index }) => {
    var data3 = JSON.parse(JSON.stringify(data2));
    return (
        <TouchableOpacity
            style={{
                backgroundColor: data.isSelected != "false" ? "#cccccc" : "#F8F8F8",
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
                width: "45.5%",
                height: "100%",
                flex: 1,
            }}
            onPress={() => {
                data.isSelected = JSON.stringify(!(data.isSelected != "false"));
                data3[index].isSelected = data.isSelected;
                setData(data3);
            }}>
            <View style={{ width: "100%", padding: SIZES.font }}>
                <NFTTitle title={data.SubS_Name} titleSize={SIZES.large} />

                <View
                    style={{
                        marginTop: SIZES.font,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}></View>
            </View>
        </TouchableOpacity>
    );
};

const NFTCard6 = ({ data, data2, setData, index }) => {
    var data3 = JSON.parse(JSON.stringify(data2));
    var ImageURL = data.SubSubS_Image;
    let temp = data.SubSubS_RatingNOP;
    temp = temp >= 1000 ? Math.round(temp / 100) / 10 + "K" : temp;
    //const [itemCount, setItemCount] = React.useState(0);
    return (
        <View
            style={{
                marginBottom: SIZES.large,
                padding: SIZES.medium,
                width: "100%",
                flex: 1,
                paddingRight: SIZES.extraLarge + 10,
            }}>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                <View
                    style={{
                        justifyContent: "space-evenly",
                        alignItems: "flex-start",
                    }}>
                    <NFTTitle
                        title={data.SubSubS_Name}
                        titleSize={SIZES.large - 2}
                        fontColor={COLORS.primary}
                    />
                    <View
                        style={{
                            marginTop: 3,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        <Image
                            source={assets.heart}
                            style={{
                                alignSelf: "flex-end",
                                height: "100%",
                                width: "10%",
                            }}
                            resizeMode={"contain"}
                        />
                        <NFTTitle
                            title={Math.round(data.SubSubS_Rating * 10) / 10 + " "}
                            titleSize={SIZES.font - 2}
                        />
                        <NFTTitle title={"(" + temp + ")"} titleSize={SIZES.font - 2} />
                    </View>
                    <Text
                        style={{
                            marginBottom: "3%",
                            color: COLORS.gray,
                        }}>
                        {"•".repeat(data.SubSubS_Description.length)}
                    </Text>
                    <NFTTitle
                        title={data.SubSubS_Description}
                        titleSize={SIZES.font - 1}
                        titleFont={FONTS.regular}
                        fontColor={COLORS.primary}
                    />
                    <View
                        style={{
                            marginBottom: "5%",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                        <NFTTitle
                            title={"₹" + data.SubSubS_Price * 1}
                            titleSize={SIZES.large - 2}
                            fontColor={COLORS.primary}
                        />
                        <View style={{ width: "2%" }} />
                        {/*  	<NFTTitle
							title={"₹" + data.SubSubS_Price * 1.25}
							titleSize={SIZES.font}
							strike={1}
							titleFont={FONTS.regular}
						/>
						<View style={{ width: "1%" }} />*/}
                        <NFTTitle title={"  • " + data.SubSubS_Duration} titleSize={SIZES.font} />
                    </View>
                    <View style={{ width: 240 }}>
                        <NFTTitle
                            title={data.SubSubS_Summary}
                            titleSize={SIZES.small - 1}
                            titleFont={FONTS.regular}
                            fontColor={COLORS.gray}
                            textAlign={"left"}
                        />
                    </View>
                </View>

                <View
                    style={{
                        width: 200,
                        marginRight: 20,
                        justifyContent: "flex-end",
                    }}>
                    <Image
                        source={{ uri: ImageURL }}
                        style={{
                            height: 120,
                            width: 120,
                            alignSelf: "center",
                            justifyContent: "flex-end",
                        }}
                        resizeMode={"cover"}
                    />

                    <View
                        style={{
                            width: 100,
                            height: 40,
                            flexDirection: "row",
                            borderColor: "rgb(200, 10, 200)",
                            borderRadius: SIZES.font,
                            borderWidth: 1,
                            alignItems: "center",
                            marginTop: 20,
                            alignSelf: "center",
                        }}>
                        <TouchableOpacity
                            style={{
                                borderRadius: SIZES.font,

                                width: 40,
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => {
                                //setItemCount(Math.max(itemCount - 1, 0));
                                //data.itemCount = itemCount;
                                data3[index].itemCount = Math.max(data2[index].itemCount - 1, 0);
                                setData(data3);
                            }}>
                            <Text style={{ fontSize: 25 }}> - </Text>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 25 }}>{data2[index].itemCount}</Text>

                        <TouchableOpacity
                            style={{
                                borderRadius: SIZES.font,
                                width: 40,
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => {
                                //setItemCount(itemCount + 1);
                                //data.itemCount = itemCount;
                                data3[index].itemCount = data2[index].itemCount + 1;
                                setData(data3);

                                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                            }}>
                            <Text style={{ fontSize: 25 }}> + </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View
                style={{
                    marginTop: "8%",
                    height: 1,
                    width: "100%",
                    alignSelf: "center",
                    backgroundColor: "#cccccc",
                }}
            />
        </View>
    );
};

const NFTCard7 = ({ data, data2, setData }) => {
    var data3 = JSON.parse(JSON.stringify(data2));
    const [itemCount, setItemCount] = React.useState(0);
    return (
        <View
            style={{
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
                width: "45.5%",
                height: "100%",
                flex: 1,
            }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}>
                <View style={{ justifyContent: "center" }}>
                    <NFTTitle title={data.SubSubS_Name} titleSize={SIZES.extraLarge} />
                    <NFTTitle title={data.SubSubS_Duration} titleSize={SIZES.font} />
                    <NFTTitle title={data.SubSubS_Description} titleSize={SIZES.medium} />
                    <Text>{"\n"}</Text>
                    <NFTTitle title={"₹" + data.SubSubS_Price} titleSize={SIZES.medium} />
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        justifyContent: "space-between",
                    }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#F8F8F8",
                            borderRadius: SIZES.font,
                            width: 50,
                            height: "50%",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}>
                        <Text style={{ fontSize: 25 }}> - </Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 27.5 }}>{itemCount}</Text>

                    <TouchableOpacity
                        style={{
                            backgroundColor: "#F8F8F8",
                            borderRadius: SIZES.font,
                            width: 50,
                            height: "50%",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            setItemCount(itemCount + 1);
                        }}>
                        <Text style={{ fontSize: 25 }}> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text
                style={{
                    color: "#bbbbbb",
                    alignItems: "center",
                    alignSelf: "center",
                }}>
                {" "}
                _______________________________________{" "}
            </Text>
        </View>
    );
};

const NFTCard8 = ({ data, data2, setData }) => {
    var data3 = JSON.parse(JSON.stringify(data2));
    const [itemCount, setItemCount] = React.useState(0);
    return (
        <View
            style={{
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
                width: "45.5%",
                height: "100%",
                flex: 1,
            }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}>
                <View style={{ justifyContent: "center" }}>
                    <NFTTitle title={data.SubSubS_Name} titleSize={SIZES.extraLarge} />
                    <NFTTitle title={data.SubSubS_Description} titleSize={SIZES.medium} />
                </View>
                <NFTTitle title={"₹" + data.SubSubS_Price} titleSize={SIZES.medium} />
                <View
                    style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        justifyContent: "space-between",
                    }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#F8F8F8",
                            borderRadius: SIZES.font,
                            width: 50,
                            height: "50%",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}>
                        <Text style={{ fontSize: 25 }}> - </Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 27.5 }}>{itemCount}</Text>

                    <TouchableOpacity
                        style={{
                            backgroundColor: "#F8F8F8",
                            borderRadius: SIZES.font,
                            width: 50,
                            height: "50%",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            setItemCount(itemCount + 1);
                        }}>
                        <Text style={{ fontSize: 25 }}> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text
                style={{
                    color: "#bbbbbb",
                    alignItems: "center",
                    alignSelf: "center",
                }}>
                {" "}
                _______________________________________{" "}
            </Text>
        </View>
    );
};

const NFTCard9 = ({ data, index, setSubSModalVisible }) => {
    const navigation = useNavigation();
    const ImageURL = [data.S_Image][0];
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.white,
                borderWidth: 0.17,
                elevation: 300,
                borderColor: "silver",
                borderRadius: SIZES.font,

                width: 120,
                height: 90,
                margin: "2%",
                padding: 10,
            }}
            onPress={() => {
                setSubSModalVisible(index);
                //navigation.navigate("SubServices" /* data.S_NextPage */, { data })
            }}>
            <View
                style={{
                    alignSelf: "center",
                    height: 85,
                    width: 85,
                    marginBottom: 2,
                }}>
                <ImageBackground
                    resizeMode="cover"
                    source={{ uri: ImageURL }}
                    style={{
                        height: 55,
                        alignSelf: "center",
                        width: 55,
                        marginBottom: 3,
                    }}></ImageBackground>

                <NFTTitle title={data.S_Name} titleSize={SIZES.large - 5} />
            </View>
        </TouchableOpacity>
    );
};

const NFTCard10 = ({ data, index, setSubSModalVisible }) => {
    const navigation = useNavigation();
    const ImageURL = [data.S_Image][0];
    return (
        <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
                style={{
                    backgroundColor:
                        data.isSelected != "false" ? "rgba(245,245,245,255)" : "#F8F8F8",
                    borderRadius: SIZES.small - 6,

                    width: 95,
                    height: 90,
                    margin: 5,
                    marginHorizontal: 15,

                    padding: 7,
                }}
                onPress={() => {
                    setSubSModalVisible(index);
                    //navigation.navigate("SubServices" /* data.S_NextPage */, { data })
                }}>
                <View
                    style={{
                        alignSelf: "center",
                        height: 63,
                        width: 63,
                    }}>
                    <ImageBackground
                        resizeMode="cover"
                        source={{ uri: ImageURL }}
                        style={{
                            height: 65,
                            alignSelf: "center",

                            width: 65,
                        }}></ImageBackground>
                </View>
            </TouchableOpacity>
            <NFTTitle title={data.S_Name} titleSize={SIZES.font} />
        </View>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "center",
    },
});

export {
    NFTCard1,
    NFTCard2,
    NFTCard3,
    NFTCard4,
    NFTCard5,
    NFTCard6,
    NFTCard7,
    NFTCard8,
    NFTCard9,
    NFTCard10,
};
