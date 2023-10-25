import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Linking,
	Alert,
	FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS, config, SIZES, assets } from "../constants";

const Bookings = ({ navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);

	useEffect(() => {
		AsyncStorage.getItem("PhoneNumber").then((PhoneNumber) => {
			if (PhoneNumber === null) {
				setLoading(false);
				return;
			}
			const querystring =
				"SELECT b.*, ss.SubS_Name, c.C_Name FROM booking as b, subservice as ss, customer as c WHERE b.C_PhNo = " +
				[PhoneNumber] +
				" AND b.SubS_ID = ss.SubS_ID AND b.C_PhNo = c.C_PhNo;";
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
		});
	}, []);

	return isLoading ? (
		<View
			style={{
				backgroundColor: "white",
				height: "100%",
				alignSelf: "center",
				justifyContent: "center",
			}}
		>
			<Image
				source={require("../assets/sqera.png")}
				style={{
					width: 60,
					height: 20,
					marginBottom: 10,
					alignSelf: "center",
				}}
			/>
			<Text
				style={{
					alignSelf: "center",
					fontSize: 18,
					marginTop: 8,
					justifyContent: "center",
				}}
			>
				Connecting to server..
			</Text>
			<Image
				source={require("../assets/images/loader.gif")}
				style={{ width: 100, height: 100, alignSelf: "center" }}
			/>
		</View>
	) : (
		<SafeAreaView
			style={{
				backgroundColor: "#f2f2f2",
			}}
		>
			<View
				style={{
					height: "7%",
					paddingVertical: SIZES.font,
					borderColor: COLORS.gray,
					backgroundColor: "#f2f2f2",
				}}
			>
				<Text
					style={{
						fontSize: 22,
						fontWeight: "700",
						marginLeft: 20,
						marginTop: 3,
						justifyContent: "center",
						alignContent: "center",
					}}
				>
					Bookings
				</Text>
			</View>
			<FlatList
				data={data2}
				renderItem={({ item, index }) => (
					<BookingCard key={item.index} data={item} />
				)}
				contentContainerStyle={{
					height: "100%",
					backgroundColor: "#f2f2f2",
				}}
				ListEmptyComponent={
					<View style={{ paddingHorizontal: 10 }}>
						<Text
							style={{
								alignSelf: "center",
								justifyContent: "center",
								fontWeight: "500",
								fontSize: 19,
								marginTop: 300,
							}}
						>
							No Recent Bookings Found
						</Text>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Home");
							}}
							style={{
								backgroundColor: COLORS.primary,
								width: 300,
								justifyContent: "center",
								alignSelf: "center",
								margin: 40,
								borderRadius: 10,
								height: 40,
							}}
						>
							<Text
								style={{
									fontSize: 17,
									fontWeight: "600",
									alignSelf: "center",
									color: COLORS.white,
								}}
							>
								Find Services Nearby
							</Text>
						</TouchableOpacity>
					</View>
				}
			/>
		</SafeAreaView>
	);
};

function BookingCard({ data }) {
	const date = data.B_DateTime.substring(8, 10);
	const month = data.B_DateTime.substring(5, 7);
	const year = data.B_DateTime.substring(0, 4);
	var hour = Number.parseInt(data.B_DateTime.substring(11, 13));
	const minute = data.B_DateTime.substring(14, 16);
	const day_half = hour > 12 ? "PM" : "AM";
	if (hour > 12) {
		hour = hour - 12;
	}

	return (
		<TouchableOpacity>
			<View
				style={{
					margin: "2%",
					backgroundColor: COLORS.white,
					borderRadius: 10,
					padding: 10,
					elevation: 20,
				}}
			>
				<Text
					style={{
						fontSize: 14,
						marginBottom: 10,

						fontWeight: "400",
						color: "gray",
					}}
				>
					{" "}
					ID : #{data.B_ID}
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "600",
						}}
					>
						{" " + data.SubS_Name}
					</Text>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "500",
						}}
					>
						{"Rs. " + data.B_Price}
					</Text>
				</View>
				<View
					style={{
						marginTop: "2%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontSize: 14,
							fontWeight: "400",
						}}
					>
						{" Details: " +
							data.C_Name +
							" | " +
							data.B_Address.AddressHouse +
							", " +
							data.B_Address.AddressArea +
							", " +
							data.B_Address.AddressCity +
							", " +
							data.B_Address.Pincode}
					</Text>
				</View>
				<View
					style={{
						marginTop: "3%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontSize: 14,
							color: COLORS.gray,
						}}
					>
						{" " +
							date +
							"/" +
							month +
							"/" +
							year +
							" | " +
							hour +
							":" +
							minute +
							" " +
							day_half}
					</Text>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "500",
							color: data.B_Status !== 2 ? "red" : "green",
						}}
					>
						{data.B_Status !== 2 ? "Pending" : "Completed"}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default Bookings;
