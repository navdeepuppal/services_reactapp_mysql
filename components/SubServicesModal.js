import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { COLORS, config } from "../constants";
import { NFTCard2 } from "./NFTCard";

const SubServicesModal = ({ data, setSubSModalVisible }) => {
    const [isLoading, setLoading] = useState(true);
    const [data2, setData] = useState([]);

    const querystring = "SELECT * FROM subservice WHERE S_ID = " + [data.S_ID] + ";";

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
            })
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }, []);
    return isLoading ? (
        <View style={{ margin: 20 }}>
            <ActivityIndicator />
        </View>
    ) : (
        <View style={{ width: "100%", height: 700 }}>
            <FlatList
                nestedScrollEnabled
                data={data2}
                renderItem={({ item }) => (
                    <NFTCard2 data={item} setSubSModalVisible={setSubSModalVisible} />
                )}
                keyExtractor={(item) => item.S_ID}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 10,
                }}
            />
        </View>
    );
};

export default SubServicesModal;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
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
	},
});
