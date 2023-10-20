import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	SafeAreaView,
	KeyboardAvoidingView,
	Linking,
	Image,
	Alert,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { COLORS } from "../constants";

const Wallet = ({ navigation }) => {
	const [state, setButtonStatus] = useState("1");
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#f2f2f2",
			}}
		>
			<View
				style={{
					flexDirection: "row",
				}}
			>
				<BackButton />
				<Text
					style={{
						fontSize: 30,
						fontWeight: "600",
						margin: 10,

						marginLeft: 120,
					}}
				>
					{" "}
					Wallet
				</Text>
			</View>
			<View>
				<View
					style={{
						padding: 10,
						width: "60%",
						height: 80,
						alignSelf: "center",
						borderRadius: 10,
						borderWidth: 0.2,
						backgroundColor: COLORS.white,
						borderColor: "gray",
					}}
				>
					<Text
						style={{
							textAlign: "center",
							marginTop: 5,
							marginBottom: 10,
							fontSize: 40,
							fontWeight: "500",
						}}
					>
						₹10
					</Text>
				</View>
			</View>
			<View
				style={{
					alignSelf: "center",
				}}
			>
				<TouchableOpacity>
					<View
						style={{
							borderColor: "gray",
							borderRadius: 10,

							backgroundColor: COLORS.white,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "green",
								borderBottomLeftRadius: 10,
								borderBottomRightRadius: 10,
							}}
						>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "500",
									margin: 11,
									color: COLORS.white,
									elevation: 30,
								}}
							>
								{" "}
								+ Add Balance
							</Text>
							<Text
								style={{
									fontSize: 19,
									fontWeight: "500",
								}}
							></Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	image: {
		alignSelf: "center",
		height: 70,
		width: 70,
	},
	image2: {
		alignSelf: "center",
		height: 100,
		width: 100,
	},
});

export default Wallet;
