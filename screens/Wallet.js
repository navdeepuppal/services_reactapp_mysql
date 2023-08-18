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
						fontSize: 23,
						alignSelf: "center",
						paddingHorizontal: 75,
						justifyContent: "center",
					}}
				>
					{" "}
					Wallet Transactions{" "}
				</Text>
			</View>
			<View>
				<View
					style={{
						padding: 10,
						margin: 10,
						width: "60%",
						alignSelf: "center",
						borderRadius: 10,
						backgroundColor: COLORS.white,
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
						{" "}
						Rs 10
					</Text>
				</View>
			</View>
			<View
				style={{
					padding: 10,
					margin: 10,

					borderRadius: 20,
					flexDirection: "row",
				}}
			>
				<TouchableOpacity>
					<View
						style={{
							margin: "1%",
							borderColor: "gray",
							borderRadius: 10,

							backgroundColor: COLORS.white,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								backgroundColor: "green",
								borderRadius: 10,
							}}
						>
							<Text
								style={{
									fontSize: 25,
									fontWeight: "500",
									margin: 15,
									color: COLORS.white,
									marginLeft: 30,
								}}
							>
								{" "}
								Add Money
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
