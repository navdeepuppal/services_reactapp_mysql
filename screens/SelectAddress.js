import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	Modal,
	Image,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import React, { useState } from "react";
import { BackButton } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const SelectAddress = ({ navigation, route }) => {
	const cartData = route.params.filteredData;
	const [AddressHouse, setAddressHouse] = useState("");
	const [AddressLandmark, setAddressLandmark] = useState("");
	const [AddressArea, setAddressArea] = useState("");
	const [AddressCity, setAddressCity] = useState("");
	const [Pincode, setPincode] = useState("");

	const [isAddressNull, setAddressNull] = useState(null);

	const [modalVisible, setModalVisible] = useState(false);

	const getValue = () => {
		AsyncStorage.getItem("Address").then((Address) => {
			if (Address != null) {
				Address = JSON.parse(Address);
				setAddressHouse(Address.AddressHouse);
				setAddressArea(Address.AddressArea);
				setAddressLandmark(Address.AddressLandmark);
				setAddressCity(Address.AddressCity);
				setPincode(Address.Pincode);
				setAddressNull(false);
			} else {
				setModalVisible(true);
				setAddressNull(true);
			}
		});
	};

	if (modalVisible == false) getValue();

	return (
		<SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
			<ScrollView>
				<BackButton />
				<KeyboardAvoidingView
					behavior="padding"
					style={styles.container}
				>
					<View style={{ alignItems: "center", margin: 10 }}>
						{modalVisible ? (
							<View style={{ height: "100%" }} />
						) : (
							<View>
								<Text
									style={{
										fontSize: 30,
										fontWeight: "600",
										marginTop: 70,
										color: "gray",
									}}
								>
									CONFIRM ADDRESS
								</Text>
								<Text
									style={{
										fontSize: 15,
										marginTop: 10,
										color: "gray",
									}}
								>
									Service Man will visit this address
									for your booking
								</Text>

								<Text
									style={{
										fontSize: 25,
										margin: 10,
										marginTop: 60,
										color: "gray",
									}}
								>
									Saved Address:
								</Text>

								<Text
									style={{
										fontSize: 18,
										margin: 14,
										fontWeight: "bold",
										color: COLORS.primary,
									}}
								>
									{AddressHouse}, {AddressArea},{" "}
									{"\n"}Near {AddressLandmark},{" "}
									{AddressCity}. {"\n"}
									Pincode: {Pincode}
								</Text>
							</View>
						)}
					</View>
					<View
						style={{
							flexDirection: "row",
							alignSelf: "center",
						}}
					>
						<TouchableOpacity
							style={styles.editAddressButton}
							onPress={() => {
								setModalVisible(true);
							}}
						>
							<Text style={styles.buttontext}>
								Change Address
							</Text>
						</TouchableOpacity>
						{isAddressNull ? null : (
							<TouchableOpacity
								style={styles.deleteAddressButton}
								onPress={() => {
									AsyncStorage.removeItem("Address");
									setAddressHouse("");
									setAddressArea("");
									setAddressLandmark("");
									setAddressCity("");
									setPincode("");
									setAddressNull(true);
								}}
							>
								<Text style={styles.buttontext}>
									Delete
								</Text>
							</TouchableOpacity>
						)}
					</View>
					<TouchableOpacity
						style={styles.proceedButton}
						onPress={() => {
							navigation.navigate("SelectTime", {
								cartData,
							});
						}}
					>
						<Text style={styles.confirmbuttontext}>
							Confirm
						</Text>
					</TouchableOpacity>
					<View style={styles.centeredView}>
						<Modal
							animationType="slide"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<ScrollView>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<View
											style={{
												marginTop: "15%",
											}}
										></View>
										<BackButton />

										<Text
											style={styles.inputText}
										>
											FILL ADDRESS
										</Text>
										<Text
											style={{
												fontSize: 12,
												marginLeft: 13,
												color: COLORS.secondary,
											}}
										>
											Enter the address of your
											current location
										</Text>
										<TextInput
											style={styles.input}
											onChangeText={
												setAddressHouse
											}
											value={AddressHouse}
											placeholder="HOUSE / FLAT / FLOOR NO. "
											placeholderTextColor="#a0a0a0"
											numberOfLines={4}
										/>
										<TextInput
											style={styles.input}
											onChangeText={
												setAddressArea
											}
											value={AddressArea}
											placeholder="AREA / ROAD / STREET "
											placeholderTextColor="#a0a0a0"
											numberOfLines={4}
										/>
										<TextInput
											style={styles.input}
											onChangeText={
												setAddressLandmark
											}
											value={AddressLandmark}
											placeholder="LANDMARK"
											placeholderTextColor="#a0a0a0"
											numberOfLines={4}
										/>
										<TextInput
											style={styles.input}
											onChangeText={
												setAddressCity
											}
											value={AddressCity}
											placeholder="CITY"
											placeholderTextColor="#a0a0a0"
											numberOfLines={4}
										/>
										<Text
											style={
												styles.pincodeText
											}
										>
											Pincode
										</Text>

										<TextInput
											style={
												styles.pincodeinput
											}
											onChangeText={setPincode}
											value={Pincode}
											placeholder=""
											keyboardType="phone-pad"
											placeholderTextColor="#a0a0a0"
											maxLength={6}
											letterSpacing={2}
										/>

										<TouchableOpacity
											style={
												styles.verifyButton
											}
											onPress={() => {
												const add =
													JSON.stringify(
														{
															AddressHouse,
															AddressArea,
															AddressLandmark,
															AddressCity,
															Pincode,
														}
													);
												if (
													add.search(
														'""'
													) == -1 &&
													Pincode >=
														99999
												) {
													AsyncStorage.setItem(
														"Address",
														add
													);
													setModalVisible(
														false
													);
												} else {
													alert(
														"Look's address not correct. Please check your address"
													);
												}
											}}
										>
											<Text
												style={
													styles.buttontext
												}
											>
												Save Address
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</ScrollView>
						</Modal>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		alignItems: "center",
	},
	verifyButton: {
		alignSelf: "center",
		marginTop: 20,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "black",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	modalView: {
		backgroundColor: "white",
		padding: 25,
		shadowColor: "#000",
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "100%",
		height: "140%",
	},
	extraText: {
		fontSize: 15,
		margin: 12,
		color: "green",
	},
	inputText: {
		fontSize: 28,
		margin: 13,
		fontWeight: "700",
	},
	pincodeText: {
		fontSize: 25,
		margin: 13,
		marginTop: 30,
		color: COLORS.gray,
	},
	pincodeinput: {
		fontSize: 38,
		margin: 16,
		padding: 4,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 1,
		width: 250,
	},
	input: {
		fontSize: 17,
		margin: 10,
		padding: 5,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 1,
		width: 350,
		height: 55,
	},
	editAddressButton: {
		marginTop: 2,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "gray",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,

		...SHADOWS.dark,
		elevation: 2, // Android
		height: "28%",
		width: "40%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	deleteAddressButton: {
		marginTop: 2,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "rgba(252, 122, 122, 1)",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: "28%",
		width: "20%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	proceedButton: {
		alignSelf: "center",
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "black",
		borderRadius: SIZES.font,
		marginBottom: 100,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},

	buttontext: {
		fontSize: 16,
		textAlign: "center",
		color: COLORS.white,
		fontWeight: "700",
	},
	confirmbuttontext: {
		fontWeight: "bold",
		fontSize: 21,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default SelectAddress;
