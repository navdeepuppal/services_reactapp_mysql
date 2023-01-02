import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	Modal,
	StyleSheet,
	Pressable,
	SafeAreaView,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalList from "./ModalList";

const HomeHeader = ({ onSearch }) => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const [isLoggedIn, setLoggedIn] = useState("");

	return (
		<View
			style={{
				marginTop: "10%",
				borderRadius: SIZES.medium,
				backgroundColor: "rgba(245,245,245,255)",
				elevation: 200,
				...SHADOWS.dark,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-evenly",
				paddingHorizontal: SIZES.font,
				alignContent: "center",
			}}
		>
			<Image
				source={assets.search}
				resizeMode="contain"
				style={{
					width: 20,
					height: 20,
					marginRight: SIZES.base,
				}}
			/>
			<TextInput
				placeholder="Search Laundry, Cleaning, Gardener, Cook, Maid"
				placeholderTextColor="#A0A0A0"
				style={{
					fontSize: SIZES.font + 1,
					color: COLORS.primary,
					width: 290,
					height: 65,
				}}
				onChangeText={onSearch}
			/>

			<TouchableOpacity
				style={{ width: 45, height: 60 }}
				onPress={() => setModalVisible(true)}
			>
				<Image
					source={assets.menuIcon}
					resizeMode="contain"
					style={{ width: "100%", height: "100%" }}
				/>
			</TouchableOpacity>

			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				close={() => {
					toggleModal(false);
				}}
			>
				<Pressable
					style={styles.loweredView}
					onPress={() => {
						setModalVisible(false);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<ModalList setVisible={setModalVisible} />
						</View>
					</View>
				</Pressable>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	loweredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	centeredView: {
		flex: 1,
	},
	modalView: {
		backgroundColor: "white",
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
	modeButton1: {
		borderRadius: 5,
		padding: 10,
		elevation: 2,
		backgroundColor: "green",
	},
	modeButton: {
		borderRadius: 5,
		padding: 10,
		elevation: 2,
		backgroundColor: "blue",
	},

	textBody: {
		padding: 20,
		alignSelf: "flex-start",
		fontSize: 20,
		color: COLORS.primary,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},

	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		margin: 5,
	},
	textStyle1: {
		color: "#F8F8F8",
		textAlign: "center",
		fontSize: 12,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default HomeHeader;
