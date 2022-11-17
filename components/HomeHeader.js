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
import { COLORS, FONTS, SIZES, assets } from "../constants";

import StarRating from "react-native-star-rating";

const HomeHeader = ({ onSearch }) => {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View
			style={{
				backgroundColor: COLORS.white,
				padding: SIZES.font,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignSelf: "flex-end",
					width: "15%",
					justifyContent: "space-between",
				}}
			>
				
				<TouchableOpacity
					style={{ width: 45, height: 45 }}
					onPress={() => setModalVisible(true)}
				>
					<Image
						source={assets.menuIcon}
						resizeMode="contain"
						style={{ width: "100%", height: "100%" }}
					/>
					<Text>Location will appear here</Text> 
				</TouchableOpacity>

				<TouchableOpacity
					style={{ width: 45, height: 45 }}
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
					onRequestClose={() => {
						Alert.alert("Modal has been closed.");
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
								<TouchableOpacity
									style={{ alignSelf: "center" }}
									onPress={() => navigation.navigate("Profile")}
								>
									<View style={{ flexDirection: "row", alignItems: "center"}}>
										<View
											style={{
												backgroundColor: "silver",
												width: 50,
												height: 50,
												borderRadius: "100%",
												color: "white",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Text style={{ alignSelf: "center", fontSize: "20%" }}>
												N
											</Text>
										</View>

										
									
									<View style = {{flexDirection: "column", margin : 10}}>
									<Text style={{ fontSize: "20%" }}>Navi</Text>
									<Text style={{ fontSize: "15%" }}>5 ★</Text>
									</View>
									
									</View>
								</TouchableOpacity>

								<ScrollView style={{ backgroundColor: COLORS.white, flex: 1 }}>
									<View
										style={{
											marginTop: "5%",
											height: 1,
											width: "200%",

											alignSelf: "center",
											backgroundColor: "#cccccc",
										}}
									/>

									<TouchableOpacity
										style={styles.button}
										onPress={() => navigation.navigate("BookingsView")}
									>
										<Text style={styles.textBody}>My Bookings</Text>
									</TouchableOpacity>





									<TouchableOpacity
										style={styles.button}
										onPress={() => navigation.navigate("Contact")}
									>
										<Text style={styles.textBody}>Contact Us</Text>
									</TouchableOpacity>



									
							






									<TouchableOpacity
										onPress={() => setModalVisible(false )}
									>
										<View
											style={{
												marginTop: "5%",
												height: 1,
												width: "95%",
												alignSelf: "center",
												backgroundColor: "#cccccc",
											}}
										/>
										<Text
											style={{
												marginTop: 23,
												fontSize: 20,
												alignSelf: "center",
												color: "#E2000B",
											}}
										>
											Logout
										</Text>
									</TouchableOpacity>
								</ScrollView>
								<TouchableOpacity
								style={[styles.modeButton1]}
								onPress={() => navigation.navigate("RegisterSubService1")}
								
							>
								<Text style={styles.textStyle}>Professional Mode</Text>
								<Text style={styles.textStyle1}>Broadcast your skills!</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={[styles.modeButton]}
								onPress={() => navigation.navigate("Home")}
								
							>
								<Text style={styles.textStyle}>Customer Mode</Text>
								<Text style={styles.textStyle1}>Find Services Near Me</Text>
							</TouchableOpacity>


							</SafeAreaView>

							
						</View>
					</View>
				</Modal>

				
			</View>

			<View style={{ marginVertical: SIZES.font }}>
				<Text
					style={{
						fontWeight: "600",
						fontSize: 40,
						color: COLORS.primary,
						marginStart: SIZES.base,
					}}
				>Which service do you need</Text>
			</View>
				<View
					style={{
						width: "100%",
						borderRadius: SIZES.font,
						backgroundColor: "#F8F8F8",
						flexDirection: "row",
						alignItems: "center",
						paddingHorizontal: SIZES.font,
						paddingVertical: SIZES.small - 2,
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
						placeholder="Search Plumber, Cleaner, Consultant, Driver"
						placeholderTextColor="#A0A0A0"
						style={{ flex: 1, color: COLORS.primary }}
						onChangeText={onSearch}
					/>
				</View>
			</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		marginTop: 22,
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
		backgroundColor :"green"

	},
	modeButton: {
		borderRadius: 5,
		padding: 10,
		elevation: 2,
		backgroundColor :"blue"
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
		fontSize: "20%",
		margin: 5,
	},
	textStyle1: {
		color: "#F8F8F8",
		textAlign: "center",
		fontSize: "12%",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default HomeHeader;
