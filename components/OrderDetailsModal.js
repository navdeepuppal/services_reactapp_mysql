import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useState } from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const OrdersDetailsModal = ({ setVisible }) => {
	const navigation = useNavigation();


	const [ordersDetails, setordersDetailsVisible] = useState(false);

	return (
		<SafeAreaView>
			<View style={styles.centeredView}>
				<SafeAreaView>
					<Modal
						animationType="slide"
						transparent={true}
						visible={ordersDetails}
						onRequestClose={() => {
							setordersDetailsVisible(!ordersDetails);
						}}
					>
						<View style={styles.modalView}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: "5%",
								}}
							>
								<View
									style={{
										flexDirection: "row",
									}}
								>
									<TouchableOpacity
										style={{
											width: 40,
											height: 40,
											marginTop: "15%",
										}}
										onPress={() =>
											setordersDetailsVisible(
												false
											)
										}
									>
										<Image
											source={assets.left}
											resizeMode="contain"
											style={{
												width: "100%",
												height: "100%",
											}}
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View
								style={{
									marginTop: 30,
									margin: 10,
									borderRadius: 20,
									backgroundColor: COLORS.white,
								}}
							>
								<Text
									style={{
										fontSize: 23,
										fontWeight: "500",
									}}
								>
									{" "}
									Privacy Policy{" \n \n"}
									Open Sqera Privacy Policy Website
									Page here
								</Text>
							</View>
						</View>
					</Modal>
				</SafeAreaView>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	modalView: {
		backgroundColor: "rgba(248,248,250,255)",
		alignSelf: "flex-end",
		borderRadius: 5,
		padding: "2%",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 20,
		height: "100%",
	},
});

export default OrdersDetailsModal;
