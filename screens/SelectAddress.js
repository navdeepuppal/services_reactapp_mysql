import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	Modal,
	Image,
	Alert,
	SafeAreaView,
	TextInput,
} from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
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
								Service Man will visit this address for
								your booking
							</Text>

							<Text
								style={{
									fontSize: 25,
									margin: 10,
									marginTop: 60,
								}}
							>
								Saved Address:
							</Text>

							<Text style={{ fontSize: 22, margin: 20 }}>
								{AddressHouse}, {AddressArea}, Near{" "}
								{AddressLandmark}, {AddressCity}.
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
							Edit Address
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
								Delete Address
							</Text>
						</TouchableOpacity>
					)}
				</View>
				<TouchableOpacity
					style={styles.proceedButton}
					onPress={() => {
						navigation.navigate("SelectTime", { cartData });
					}}
				>
					<Text style={styles.confirmbuttontext}>Confirm</Text>
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
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<BackButton />
								<Text style={styles.inputText}>
									FILL ADDRESS
								</Text>
								<TextInput
									style={styles.input}
									onChangeText={setAddressHouse}
									value={AddressHouse}
									placeholder="HOUSE / FLAT / FLOOR NO. "
									placeholderTextColor="#a0a0a0"
									numberOfLines={4}
								/>
								<TextInput
									style={styles.input}
									onChangeText={setAddressArea}
									value={AddressArea}
									placeholder="AREA / ROAD / STREET "
									placeholderTextColor="#a0a0a0"
									numberOfLines={4}
								/>
								<TextInput
									style={styles.input}
									onChangeText={setAddressLandmark}
									value={AddressLandmark}
									placeholder="LANDMARK"
									placeholderTextColor="#a0a0a0"
									numberOfLines={4}
								/>
								<TextInput
									style={styles.input}
									onChangeText={setAddressCity}
									value={AddressCity}
									placeholder="CITY"
									placeholderTextColor="#a0a0a0"
									numberOfLines={4}
								/>

								<Text style={styles.pincodeText}>
									Pincode
								</Text>
								<TextInput
									style={styles.pincodeinput}
									onChangeText={setPincode}
									value={Pincode}
									placeholder=""
									keyboardType="numeric"
									placeholderTextColor="#a0a0a0"
									maxLength={6}
									letterSpacing={2}
								/>

								<TouchableOpacity
									style={styles.verifyButton}
									onPress={() => {
										const add = JSON.stringify({
											AddressHouse,
											AddressArea,
											AddressLandmark,
											AddressCity,
											Pincode,
										});
										if (
											add.search('""') == -1 &&
											Pincode >= 99999
										) {
											AsyncStorage.setItem(
												"Address",
												add
											);
											setModalVisible(false);
										} else {
											Alert.alert(
												"Detailed address will help our service man reach your doorstep easily."
											);
										}
									}}
								>
									<Text style={styles.buttontext}>
										Save Address
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
				</View>
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
		backgroundColor: "green",
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
		borderRadius: 20,
		padding: 35,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "110%",
		minHeight: "100%",
	},
	loweredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	extraText: {
		fontSize: 15,
		margin: 12,
		color: "green",
	},
	inputText: {
		fontSize: 28,
		margin: 16,
		fontWeight: "700",
	},
	pincodeText: {
		fontSize: 25,
		margin: 13,
	},
	pincodeinput: {
		fontSize: 38,
		margin: 16,
		padding: 4,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 1,
		width: "50%",
	},
	input: {
		fontSize: 20,
		margin: 10,
		padding: 5,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 1,
		width: "90%",
		height: "8%",
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
		backgroundColor: "maroon",
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
	proceedButton: {
		alignSelf: "center",
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
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
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
	confirmbuttontext: {
		fontWeight: "bold",
		fontSize: 21,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default SelectAddress;
