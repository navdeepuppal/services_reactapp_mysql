import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
const Loc = () => {
	const imageURL =
		"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png";
	const [mapRegion, setmapRegion] = useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	return (
		<View style={styles.container}>
			<MapView
				style={{ alignSelf: "stretch", height: "100%" }}
				region={mapRegion}
			>
				<Marker coordinate={mapRegion}>
					<Image source={{ uri: imageURL }} />
				</Marker>
			</MapView>
		</View>
	);
};
export default Loc;
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
