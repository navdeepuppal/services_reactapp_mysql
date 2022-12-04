import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

// You can import from local files

let apiKey = "YOUR_API_KEY";

export default function LocationPage() {
	const navigation = useNavigation();
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [address, setAddress] = useState(null);
	// const [getLocation, setGetLocation] = useState(false);

	const getLocation = () => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
			}

			Location.setGoogleApiKey(apiKey);

			console.log(status);

			let { coords } = await Location.getCurrentPositionAsync();

			setLocation(coords);

			console.log(coords);

			if (coords) {
				let { longitude, latitude } = coords;

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
	return (
		<SafeAreaView>
			{!location ? (
				<View style={styles.container}>
					<Text style={styles.big}>'Waiting'</Text>
				</View>
			) : (
				navigation.navigate("Home")
			)}
		</SafeAreaView>
	);
}
/* {!location
    ? 
    : `Lat: ${location.latitude} \nLong: ${
        location.longitude
      } \n${JSON.stringify(address?.['subregion'])}`} */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	big: {
		fontSize: 18,
		color: "black",
		fontWeight: "bold",
	},
	btnText: {
		fontWeight: "bold",
		fontSize: 25,
		color: "white",
	},
});
