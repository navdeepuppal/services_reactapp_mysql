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

import { COLORS, config, SIZES, assets } from "../constants";
import React, { useState } from "react";
import BackButton from "../components/BackButton";

const Wallet = ({ navigation }) => {
	const [state, setButtonStatus] = useState("1");
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",

					paddingVertical: SIZES.small,

					paddingHorizontal: SIZES.large - 3,
				}}
			>
				<BackButton />

				<Image
					source={require("../assets/sqera.png")}
					style={{
						width: 70,
						height: 25,
						marginTop: 18,
						marginRight: 230,
					}}
				/>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Contact");
					}}
					style={{
						margin: 10,

						marginTop: 15,
						justifyContent: "flex-end",
					}}
				>
					<Text
						style={{
							color: "green",
							fontSize: 17,
							fontWeight: "600",
						}}
					>
						Help
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ marginTop: 20 }}>
				<View
					style={{
						padding: 20,
						width: 400,
						height: 130,
						alignSelf: "center",
						borderRadius: 10,
						borderWidth: 0.2,
						backgroundColor: COLORS.white,
						borderColor: "gray",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text
							style={{
								fontWeight: "700",
								fontSize: 20,
							}}
						>
							Total Wallet Balance
						</Text>

						<Image
							source={require("../assets/images/wallet.png")}
							style={{
								width: 43,
								height: 43,
							}}
						/>
					</View>
					<Text
						style={{
							fontSize: 30,
							fontWeight: "500",
						}}
					>
						₹ 10
					</Text>
				</View>
			</View>

			<View style={{ marginTop: 20 }}>
				<View
					style={{
						padding: 20,
						width: 400,
						height: 220,
						alignSelf: "center",
						borderRadius: 10,
						borderWidth: 0.2,
						backgroundColor: COLORS.white,
						borderColor: "gray",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text
							style={{
								fontWeight: "700",
								fontSize: 20,
							}}
						>
							Add Money to Sqera Wallet
						</Text>
					</View>
					<View
						style={{
							borderColor: COLORS.gray,
							borderWidth: 1,
							flexDirection: "row",
							marginTop: 20,
							borderRadius: 10,
							padding: 10,
							alignItems: "center",
							height: 70,
						}}
					>
						<Text
							style={{
								marginTop: 10,
								fontSize: 30,
								fontWeight: "500",
							}}
						>
							₹
						</Text>
						<TextInput
							defaultValue="1000"
							keyboardType="numeric"
							style={{
								marginLeft: 10,
								marginTop: 10,
								fontSize: 30,
								fontWeight: "500",
							}}
						></TextInput>
					</View>
					<TouchableOpacity
						style={{
							marginTop: 20,
							borderColor: "gray",
							borderRadius: 10,
							height: 50,
							backgroundColor: COLORS.white,
							backgroundColor: "green",
							borderRadius: 10,
							padding: 10,
						}}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "600",
								color: COLORS.white,
								textAlign: "center",
							}}
						>
							Proceed to add Rs 1000
						</Text>
						<Text
							style={{
								fontSize: 19,
								fontWeight: "500",
							}}
						></Text>
					</TouchableOpacity>
				</View>
			</View>
			<View
				style={{
					alignSelf: "center",
				}}
			></View>

			<View>
				<Text
					style={{
						margin: 10,
						marginTop: 40,
						fontSize: 20,
						fontWeight: "600",
					}}
				>
					{" "}
					Transactions
				</Text>
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
