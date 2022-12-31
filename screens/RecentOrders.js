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
import { COLORS, SIZES } from "../constants";
import BackButton from "../components/BackButton";

const RecentOrders = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{
				backgroundColor: "rgba(242, 242, 242, 0.8)",
				flex: 1,
				flexDirection: "row",
				flexWrap: "wrap",
				alignItems: "flex-start",
			}}
		>
			<View
				style={{
					width: "30%",
					height: "95%",
					margin: 1,
					padding: 2,
					borderRightColor: "gray",
					borderRightWidth: 1,
				}}
			>
				<ScrollView>
					<TouchableOpacity
						style={{
							backgroundColor: "rgba(255, 231, 255, 1)",
							margin: 10,
							borderRadius: 15,
							height: 170,
							width: "90%",
							paddingTop: 15,
							justifyContent: "flex-start",
						}}
					>
						<Image
							source={require("../assets/images/icon.png")}
							resizeMode="center"
							style={styles.image}
						/>
						<Text
							style={{
								fontSize: 20,
								marginTop: 20,
								alignContent: "flex-end",
								justifyContent: "center",
								alignSelf: "center",
								textAlign: "center",
								color: "black",
							}}
						>
							Fresh Vegetables
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "rgba(255, 231, 255, 1)",
							margin: 10,
							borderRadius: 15,
							height: 170,
							width: "90%",
							paddingTop: 15,
							justifyContent: "flex-start",
						}}
					>
						<Image
							source={require("../assets/images/icon.png")}
							resizeMode="center"
							style={styles.image}
						/>
						<Text
							style={{
								fontSize: 20,
								marginTop: 20,
								alignContent: "flex-end",
								justifyContent: "center",
								alignSelf: "center",
								textAlign: "center",
								color: "black",
							}}
						>
							Fresh Fruits
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={{ width: "69%", height: "100%" }}>
				<ScrollView>
					<View
						style={{
							flexWrap: "wrap",
							flexDirection: "row",
						}}
					>
						<View
							style={{
								backgroundColor: COLORS.white,
								margin: 1,
								width: "49%",
								paddingTop: 15,
								justifyContent: "flex-start",
								borderColor: "white",
								borderWidth: 3,
							}}
						>
							<Image
								source={require("../assets/images/icon.png")}
								resizeMode="cover"
								style={styles.image2}
							/>
							<Text
								style={{
									fontSize: 20,
									marginTop: 20,
									alignContent: "flex-end",
									justifyContent: "center",
									alignSelf: "center",
									textAlign: "center",
									color: "black",
								}}
							>
								Fresh Fruits
							</Text>

							<View
								style={{
									width: 100,
									height: 40,
									flexDirection: "row",
									borderColor: "rgb(200, 10, 200)",
									borderRadius: SIZES.font,
									borderWidth: 1,
									alignItems: "center",
									backgroundColor: COLORS.white,
									marginTop: "3%",
									alignSelf: "center",
									position: "relative",
								}}
							>
								<TouchableOpacity
									style={{
										borderRadius: SIZES.font,
										width: 40,
										height: 40,
										alignItems: "center",
										justifyContent: "center",
									}}
									onPress={() => {}}
								>
									<Text style={{ fontSize: 25 }}>
										{" "}
										-{" "}
									</Text>
								</TouchableOpacity>

								<Text style={{ fontSize: 25 }}>11</Text>

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
									}}
								>
									<Text style={{ fontSize: 25 }}>
										{" "}
										+{" "}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={{
								backgroundColor: COLORS.white,
								margin: 1,
								width: "49%",
								paddingTop: 15,
								justifyContent: "flex-start",
								borderColor: "white",
								borderWidth: 3,
							}}
						>
							<Image
								source={require("../assets/images/icon.png")}
								resizeMode="cover"
								style={styles.image2}
							/>
							<Text
								style={{
									fontSize: 20,
									marginTop: 20,
									alignContent: "flex-end",
									justifyContent: "center",
									alignSelf: "center",
									textAlign: "center",
									color: "black",
								}}
							>
								Fresh Fruits
							</Text>

							<View
								style={{
									width: 100,
									height: 40,
									flexDirection: "row",
									borderColor: "rgb(200, 10, 200)",
									borderRadius: SIZES.font,
									borderWidth: 1,
									alignItems: "center",
									marginTop: "3%",
									backgroundColor: COLORS.white,
									alignSelf: "center",
									position: "relative",
								}}
							>
								<TouchableOpacity
									style={{
										borderRadius: SIZES.font,
										width: 40,
										height: 40,
										alignItems: "center",
										justifyContent: "center",
									}}
									onPress={() => {}}
								>
									<Text style={{ fontSize: 25 }}>
										{" "}
										-{" "}
									</Text>
								</TouchableOpacity>

								<Text style={{ fontSize: 25 }}>11</Text>

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
									}}
								>
									<Text style={{ fontSize: 25 }}>
										{" "}
										+{" "}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
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

export default RecentOrders;
