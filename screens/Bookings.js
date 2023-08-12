import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	KeyboardAvoidingView,
	Linking,
	Alert,
} from "react-native";
import React, { useState } from "react";

import { COLORS, config, SIZES, assets } from "../constants";

const Bookings = ({ navigation }) => {
	return (
		<View style={{ marginTop: "15%" }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					height: 43,
					borderBottomWidth: 0.2,
					borderColor: COLORS.gray,
				}}
			>
				<Text
					style={{
						fontSize: 25,
						fontWeight: "800",
						marginLeft: 20,
						marginTop: 3,
					}}
				>
					Bookings
				</Text>
			</View>
			<ScrollView
				style={{ height: "100%", backgroundColor: "#f2f2f2" }}
			>
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
								fontSize: 16,
								marginBottom: 10,
								fontWeight: "200",
							}}
						>
							{" "}
							Booking ID : #129130
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
								{" "}
								AC Cleaning
							</Text>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "500",
								}}
							>
								Rs. 800
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
								{" "}
								Details: Navdeep | Kothi 103, Phase 9,
								Mohali
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
								{" "}
								09/08/2023 | 10:26 AM
							</Text>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "500",
									color: "red",
								}}
							>
								Pending
							</Text>
						</View>
					</View>
				</TouchableOpacity>

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
								fontSize: 16,
								marginBottom: 10,
								fontWeight: "200",
							}}
						>
							{" "}
							Booking ID : #1292230
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
								{" "}
								Bathroom Cleaning
							</Text>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "500",
								}}
							>
								Rs. 250
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
								{" "}
								Place: Kothi 103, Phase 9, Mohali
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
								{" "}
								09/08/2023 | 10:26 AM
							</Text>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "500",
									color: "green",
								}}
							>
								Completed
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default Bookings;
