import React, { useState, useEffect } from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	Modal,
	FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES, SHADOWS, assets, FONTS, config } from "../constants";
import { NFTTitle } from "../components/SubInfo";
import { Colors, Snackbar } from "react-native-paper";

const Cart = ({ route, navigation }) => {
	const [subSubServices, setData] = useState(route.params.data2_backup);
	const [extraData, setExtraData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);

	const [visible, setVisible] = React.useState(true);

	const onToggleSnackBar = () => setVisible(!visible);

	const onDismissSnackBar = () => setVisible(false);

	const [isLoggedIn, setLoggedIn] = useState("");

	AsyncStorage.getItem("isLoggedIn").then((isLoggedIn) => {
		setLoggedIn(isLoggedIn);
	});

	const querystring =
		"SELECT service.S_MinCartPrice, service.S_Discount, service.S_MinCharges, service.S_PlatformFee FROM service WHERE service.S_ID = " +
		subSubServices[0].S_ID +
		";";

	useEffect(() => {
		fetch(config.domain + "/get/" + querystring, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson == 404) {
					responseJson = [];
				}
				setExtraData(responseJson[0]);
			})
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);

	/* const  = ({ item }) => {
		return (
			<View style={style.cartCard}>
				<View
					style={{
						height: 100,
						marginLeft: 10,
						paddingVertical: 20,
						flex: 1,
					}}
				>
					<Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.SubSubS_Name}</Text>
					<Text style={{ fontSize: 13, color: COLORS.grey }}>
						{item.SubSubS_Description}
					</Text>
					<Text style={{ fontSize: 17, fontWeight: "bold" }}>
						${item.SubSubS_Price}
					</Text>
				</View>
				<View
						style={{
							height: 40,
							flexDirection: "row",
							borderColor: "rgb(200, 10, 200)",
							borderRadius: SIZES.font,
							borderWidth: 1,
							alignItems: "center",
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
							onPress={() => {
								//setItemCount(Math.max(itemCount - 1, 0));
								//data.itemCount = itemCount;
								data3[index].itemCount = Math.max(data2[index].itemCount - 1, 0);
								setData(data3);
							}}
						>
							<Text style={{ fontSize: 25 }}> - </Text>
						</TouchableOpacity>

						<Text style={{ fontSize: 25 }}>{data2[index].itemCount}</Text>

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
								data3[index].itemCount = data2[index].itemCount + 1;
								setData(data3);
							}}
						>
							<Text style={{ fontSize: 25 }}> + </Text>
						</TouchableOpacity>
					</View>
			</View>
		);
	}; */
	const CartCard = ({ data, data2, setData, index }) => {
		var data3 = JSON.parse(JSON.stringify(data2));
		//const [itemCount, setItemCount] = React.useState(0);
		if (data.itemCount > 0) {
			return (
				<View
					style={{
						borderRadius: SIZES.font,
						padding: SIZES.medium,
						flex: 1,
					}}
				>
					<View
						style={{
							width: "100%",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<View
							style={{
								flex: 0,
								height: "95%",
								justifyContent: "space-evenly",
								alignItems: "flex-start",
							}}
						>
							<NFTTitle
								title={data.SubSubS_Name}
								titleSize={SIZES.large}
								fontColor={COLORS.primary}
							/>
							<Text
								style={{
									marginBottom: "3%",
									color: COLORS.gray,
								}}
							>
								{"•".repeat(
									data.SubSubS_Description.length
								)}
							</Text>
							<NFTTitle
								title={data.SubSubS_Description}
								titleSize={SIZES.font + 1}
								titleFont={FONTS.regular}
								fontColor={COLORS.primary}
							/>
							<View
								style={{
									marginBottom: "5%",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<NFTTitle
									title={
										"₹" + data.SubSubS_Price * 1
									}
									titleSize={SIZES.medium}
									fontColor={COLORS.primary}
								/>
								<View style={{ width: "3%" }} />
								{/* <NFTTitle
									title={
										"₹" +
										data.SubSubS_Price * 1.25
									}
									titleSize={SIZES.font}
									strike={1}
									titleFont={FONTS.regular}
								/>
								<View style={{ width: "7%" }} /> */}
								<NFTTitle
									title={
										"  •  " +
										data.SubSubS_Duration
									}
									titleSize={SIZES.font + 1}
								/>
							</View>
						</View>

						<View
							style={{
								flex: 0,
								flexDirection: "column",
								justifyContent: "space-evenly",
								alignItems: "flex-end",
							}}
						>
							{/* <Image
              source={14}
              style={{ height: "30%", width: "100%", alignSelf: "center" }}
              resizeMode={"cover"}
            /> */}
							<View
								style={{
									height: 40,
									flexDirection: "row",
									borderColor: "rgb(200, 10, 200)",
									borderRadius: SIZES.font,
									borderWidth: 1,
									alignItems: "center",
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
									onPress={() => {
										//setItemCount(Math.max(itemCount - 1, 0));
										//data.itemCount = itemCount;
										data3[index].itemCount =
											Math.max(
												data2[index]
													.itemCount - 1,
												0
											);
										setData(data3);
									}}
								>
									<Text style={{ fontSize: 25 }}>
										{" "}
										-{" "}
									</Text>
								</TouchableOpacity>

								<Text style={{ fontSize: 25 }}>
									{data2[index].itemCount}
								</Text>

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
										data3[index].itemCount =
											data2[index].itemCount +
											1;
										setData(data3);
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
					<View
						style={{
							marginTop: "5%",
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#cccccc",
						}}
					/>
				</View>
			);
		} else {
			return null;
		}
	};

	let itemTotal = 0;
	subSubServices.forEach((item) => {
		itemTotal += item.SubSubS_Price * item.itemCount;
	});

	if (!isLoading) {
		let discount = +extraData.S_Discount;
		let priceCut = +extraData.S_PlatformFee;
		let minCartValue = +extraData.S_MinCartPrice;
		let minCharges =
			itemTotal - discount >= minCartValue
				? 0
				: +extraData.S_MinCharges;
		let platformFee =
			Math.round(
				100 *
					(itemTotal - discount >= minCartValue
						? (itemTotal * priceCut) / 100
						: (minCartValue * priceCut) / 100)
			) / 100;
		let totalPrice = itemTotal - discount + platformFee + minCharges;
		const filteredData = subSubServices.filter(
			(item) => item.itemCount > 0
		);
		if (filteredData.length === 0) {
			return (
				<SafeAreaView
					style={{ backgroundColor: COLORS.white, flex: 1 }}
				>
					<View
						style={{
							alignItems: "center",
							flex: 1,
							justifyContent: "center",
						}}
					>
						<Image
							source={require("../assets/cart.png")}
							resizeMode="center"
							style={style.image}
						/>
						<Text style={style.bag}>Your Cart is Empty</Text>
						<TouchableOpacity
							style={style.back}
							onPress={() => navigation.goBack()}
						>
							<Text
								style={{ color: "white", fontSize: 23 }}
							>
								Go Back
							</Text>
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			);
		} else {
			return (
				<SafeAreaView
					style={{ backgroundColor: COLORS.white, flex: 1 }}
				>
					<View style={style.header}>
						<TouchableOpacity
							style={{ width: 30, height: 30 }}
							onPress={() => navigation.goBack()}
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
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
							}}
						>
							Checkout Bag
						</Text>
					</View>
					<View
						style={{
							backgroundColor: "#F8F8F8",
							height: "80%",
						}}
					>
						<FlatList
							nestedScrollEnabled
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{ paddingBottom: 70 }}
							data={subSubServices}
							renderItem={({ item, index }) => (
								<CartCard
									data={item}
									data2={subSubServices}
									setData={setData}
									index={index}
								/>
							)}
							keyExtractor={(item, index) =>
								index.toString()
							}
							ListFooterComponentStyle={{
								paddingHorizontal: 20,
								marginTop: 20,
							}}
							ListFooterComponent={() => (
								<View>
									<View
										style={{
											justifyContent:
												"space-between",
											marginVertical: 8,
										}}
									>
										<Text
											style={{
												fontSize: 18,
												fontWeight: "bold",
											}}
										>
											Payment Summary
										</Text>
									</View>

									<View
										style={{
											flexDirection: "row",
											justifyContent:
												"space-between",
											marginVertical: 8,
										}}
									>
										<Text
											style={{ fontSize: 18 }}
										>
											Item Total
										</Text>
										<Text
											style={{ fontSize: 18 }}
										>
											₹{itemTotal}
										</Text>
									</View>

									{discount > 0 ? (
										<View
											style={{
												flexDirection:
													"row",
												justifyContent:
													"space-between",
												marginVertical: 10,
											}}
										>
											<Text
												style={{
													fontSize: 18,
													color: "green",
												}}
											>
												Discount
											</Text>
											<Text
												style={{
													fontSize: 18,
													color: "green",
												}}
											>
												- ₹ {discount}
											</Text>
										</View>
									) : null}
									<View
										style={{
											flexDirection: "row",
											justifyContent:
												"space-between",
											marginVertical: 8,
										}}
									>
										<Text
											style={{ fontSize: 18 }}
										>
											Platform Fee
										</Text>
										<Text
											style={{ fontSize: 18 }}
										>
											₹{platformFee}
										</Text>
									</View>

									{itemTotal - discount <
									minCartValue ? (
										<View
											style={{
												flexDirection:
													"row",
												justifyContent:
													"space-between",
												marginVertical: 8,
											}}
										>
											<Text
												style={{
													fontSize: 18,
												}}
											>
												Minimum Charges
											</Text>
											<Text
												style={{
													fontSize: 18,
												}}
											>
												₹{minCharges}
											</Text>
										</View>
									) : null}

									<View
										style={{
											marginTop: "5%",
											height: 1,
											width: "95%",
											alignSelf: "center",
											backgroundColor:
												"#cccccc",
										}}
									/>
									<View
										style={{
											flexDirection: "row",
											justifyContent:
												"space-between",
											marginVertical: 15,
										}}
									>
										<Text
											style={{
												fontSize: 18,
												fontWeight: "bold",
											}}
										>
											Total
										</Text>
										<Text
											style={{
												fontSize: 18,
												fontWeight: "bold",
											}}
										>
											₹{totalPrice}
										</Text>
									</View>

									<View
										style={{
											marginHorizontal: 30,
										}}
									></View>
								</View>
							)}
						/>
					</View>
					<View>
						<Snackbar
							visible={visible}
							onDismiss={onDismissSnackBar}
						>
							We assure you that we will only apply the
							modest fees that are currently being
							requested for any service in the market.
						</Snackbar>
					</View>
					<View
						style={{
							marginTop: 23,
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								marginLeft: 25,
								marginVertical: 10,
								color: COLORS.primary,
								fontSize: 20,
							}}
						>
							Total: ₹ {Math.round(totalPrice)}
						</Text>
						<TouchableOpacity
							style={{
								backgroundColor:
									totalPrice > 50
										? "black"
										: "#cccccc",
								borderRadius: 10,
								alignItems: "center",
								padding: "2%",
								marginRight: "5%",
								width: "40%",

								height: "100%",
							}}
							onPress={() => {
								totalPrice > 50
									? navigation.navigate(
											isLoggedIn == "true"
												? "SelectAddress"
												: "BookingLogin",
											{
												filteredData,
											}
									  )
									: alert(
											"Order Value is below ₹50"
									  );
							}}
						>
							<Text
								style={{
									color: COLORS.white,
									fontSize: 22,
									fontWeight: "600",
									alignSelf: "center",
								}}
							>
								Proceed
							</Text>
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			);
		}
	} else {
		return null;
	}
};
const style = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "100%",
		height: "43%",
	},
	header: {
		paddingVertical: "5%",
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: "5%",
		width: "100%",
	},
	buttontext2: {
		fontSize: 19,
		color: COLORS.white,
	},
	button: {
		marginTop: 50,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		elevation: 2, // Android
		height: 50,
		width: 200,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	bag: {
		fontSize: 19,
		textAlign: "center",
	},
	centeredView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	back: {
		marginTop: 50,
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
		width: 200,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	cartCard: {
		height: 100,
		elevation: 15,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		marginVertical: 10,
		marginHorizontal: 20,
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	buttontext: {
		fontWeight: "bold",
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
	actionBtn: {
		width: 80,
		height: 30,
		backgroundColor: COLORS.primary,
		borderRadius: 30,
		paddingHorizontal: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
});

export default Cart;
