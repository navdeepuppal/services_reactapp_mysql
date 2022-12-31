import React from "react";
import { StatusBar, Text } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props) => {
	const isFocused = useIsFocused();
	<Text style={{ fontSize: 12, marginBottom: 2 }}>
		Showing Services Available in your location..
	</Text>;
	return isFocused ? <StatusBar animated={true} /> : null;
};

export default FocusedStatusBar;
