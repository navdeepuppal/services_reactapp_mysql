import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import React from "react";

import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet,
	Text,
	ImageBackground,
} from "react-native";

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import { NFTTitle } from "./SubInfo";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";

const NFTCard = ({ data }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				width: "45%",
			}}
			onPress={() => navigation.navigate("Details", { data })}
		>
			<View
				style={{
					width: 50,
					height: 50,
				}}
			>
				<Image
					source={data.image}
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>
			</View>

			<View style={{ width: "100%", padding: SIZES.font }}>
				<NFTTitle title={data.name} titleSize={SIZES.large} />
				<NFTTitle title={data.creator} titleSize={SIZES.small} />

				<View
					style={{
						marginTop: SIZES.font,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				></View>
			</View>
		</TouchableOpacity>
	);
};

const NFTCard1 = ({ data, index, setSubSModalVisible }) => {
	const navigation = useNavigation();
	const ImageURL = [data.S_Image][0];
	return (
		<TouchableOpacity
			style={{
				backgroundColor:
					data.isSelected != "false"
						? "rgba(245,245,245,255)"
						: "#F8F8F8",
				borderRadius: SIZES.small,

				width: 113,
				height: 128,
				margin: "1.5%",
				padding: "4%",
				justifyContent: "flex-end",
				alignSelf: "center",
			}}
			onPress={() => {
				setSubSModalVisible(index);
				//navigation.navigate("SubServices" /* data.S_NextPage */, { data })
			}}
		>
			<View
				style={{ height: "75%", width: "100%", marginBottom: "6%" }}
			>
				<ImageBackground
					resizeMode="cover"
					source={{ uri: ImageURL }}
					style={{
						height: "100%",
						alignSelf: "center",
						width: "96%",
					}}
				></ImageBackground>
			</View>
			<NFTTitle title={data.S_Name} titleSize={SIZES.large} />
		</TouchableOpacity>
	);
};

const NFTCard2 = ({ data, setSubSModalVisible }) => {
	const navigation = useNavigation();
	console.log("SubS_Image", data.SubS_Image);
	return (
		<TouchableOpacity
			style={{
				backgroundColor:
					data.isSelected != "false" ? "#F2F2F2" : "#F8F8F8",
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				width: "45%",
				flex: 1,
				height: 100,
				borderColor: COLORS.primary,
			}}
			onPress={() => {
				setSubSModalVisible(-1);
				navigation.navigate("SubSubService", { data });
			}}
		>
			<View style={{ width: "100%", height: "100%", marginBottom: 5 }}>
				<Image
					source={{ uri: data.SubS_Image }}
					resizeMode="contain"
					style={{
						width: "100%",
						height: "100%",

						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>
			</View>

			<NFTTitle
				title={data.SubS_Name}
				titleSize={SIZES.medium}
				titleFont={FONTS.medium}
				fontColor={COLORS.primary}
			/>
		</TouchableOpacity>
	);
};

const NFTCard3 = ({ data }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={{
				backgroundColor:
					data.isSelected != "false" ? COLORS.white : "#F8F8F8",
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				flex: 1,
			}}
			onPress={() => {}}
		>
			<View style={{ width: "100%", padding: SIZES.font }}>
				<NFTTitle
					title={data.SubSubS_Name}
					titleSize={SIZES.large}
				/>
				<NFTTitle
					title={data.SubSubS_Description}
					titleSize={SIZES.small}
				/>

				<View
					style={{
						marginTop: SIZES.font,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				></View>
			</View>
		</TouchableOpacity>
	);
};

const NFTCard4 = ({ data }) => {
	const navigation = useNavigation();
	const ImageURL = [data.S_Image][0];
	return (
		<TouchableOpacity
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				width: "45.5%",
				height: "65%",
			}}
			onPress={() => {
				const temp = data.S_ID;
				navigation.navigate("RegisterSubService6", { temp });
			}}
		>
			<View
				style={{
					alignItems: "center",
					width: "100%",
					height: "82%",
				}}
			>
				<Image
					source={{ uri: ImageURL }}
					resizeMode="contain"
					style={{
						width: "100%",
						height: "100%",
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>
			</View>

			<View style={{ width: "100%" }}>
				<NFTTitle title={data.S_Name} titleSize={SIZES.large} />
			</View>
		</TouchableOpacity>
	);
};

const NFTCard5 = ({ data, data2, setData, index }) => {
	var data3 = JSON.parse(JSON.stringify(data2));
	return (
		<TouchableOpacity
			style={{
				backgroundColor:
					data.isSelected != "false" ? "#cccccc" : "#F8F8F8",
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				width: "45.5%",
				height: "100%",
				flex: 1,
			}}
			onPress={() => {
				data.isSelected = JSON.stringify(
					!(data.isSelected != "false")
				);
				data3[index].isSelected = data.isSelected;
				setData(data3);
			}}
		>
			<View style={{ width: "100%", padding: SIZES.font }}>
				<NFTTitle title={data.SubS_Name} titleSize={SIZES.large} />

				<View
					style={{
						marginTop: SIZES.font,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				></View>
			</View>
		</TouchableOpacity>
	);
};

const NFTCard6 = ({ data, data2, setData, index }) => {
	var data3 = JSON.parse(JSON.stringify(data2));
	var ImageURL = data.SubSubS_Image;
	let temp = data.SubSubS_RatingNOP;
	temp = temp >= 1000 ? Math.round(temp / 100) / 10 + "K" : temp;
	//const [itemCount, setItemCount] = React.useState(0);
	return (
		<View
			style={{
				marginBottom: SIZES.extraLarge + 20,
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
						height: "100%",
						justifyContent: "space-evenly",
						alignItems: "flex-start",
					}}
				>
					<NFTTitle
						title={data.SubSubS_Name}
						titleSize={SIZES.large}
						fontColor={COLORS.primary}
					/>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Image
							source={assets.heart}
							style={{
								alignSelf: "flex-end",
								height: "100%",
								width: "10%",
							}}
							resizeMode={"contain"}
						/>
						<NFTTitle
							title={
								Math.round(data.SubSubS_Rating * 10) /
									10 +
								" "
							}
							titleSize={SIZES.font}
						/>
						<NFTTitle
							title={"(" + temp + ")"}
							titleSize={SIZES.font}
						/>
					</View>
					<Text
						style={{
							marginBottom: "3%",
							color: COLORS.gray,
						}}
					>
						{"•".repeat(data.SubSubS_Description.length)}
					</Text>
					<NFTTitle
						title={data.SubSubS_Description}
						titleSize={SIZES.font - 1}
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
							title={"₹" + data.SubSubS_Price * 1}
							titleSize={SIZES.large}
							fontColor={COLORS.primary}
						/>
						<View style={{ width: "2%" }} />
						{/*  	<NFTTitle
							title={"₹" + data.SubSubS_Price * 1.25}
							titleSize={SIZES.font}
							strike={1}
							titleFont={FONTS.regular}
						/>
						<View style={{ width: "1%" }} />*/}
						<NFTTitle
							title={"  • " + data.SubSubS_Duration}
							titleSize={SIZES.font + 1}
						/>
					</View>
					<View style={{ width: "70%" }}>
						<NFTTitle
							title={data.SubSubS_Summary}
							titleSize={SIZES.small}
							titleFont={FONTS.regular}
							fontColor={COLORS.gray}
							textAlign={"left"}
						/>
					</View>
				</View>

				<View
					style={{
						width: "25%",
						height: "90%",
						justifyContent: "flex-end",
					}}
				>
					<Image
						source={{ uri: ImageURL }}
						style={{
							height: 120,
							width: 120,
							alignSelf: "center",
							justifyContent: "flex-end",
						}}
						resizeMode={"cover"}
					/>

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
							onPress={() => {
								//setItemCount(Math.max(itemCount - 1, 0));
								//data.itemCount = itemCount;
								data3[index].itemCount = Math.max(
									data2[index].itemCount - 1,
									0
								);
								setData(data3);
							}}
						>
							<Text style={{ fontSize: 25 }}> - </Text>
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
									data2[index].itemCount + 1;
								setData(data3);

								Haptics.notificationAsync(
									Haptics.NotificationFeedbackType
										.Success
								);
							}}
						>
							<Text style={{ fontSize: 25 }}> + </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View
				style={{
					marginTop: "8%",
					height: 1,
					width: "95%",
					alignSelf: "center",
					backgroundColor: "#cccccc",
				}}
			/>
		</View>
	);
};

const NFTCard7 = ({ data, data2, setData }) => {
	var data3 = JSON.parse(JSON.stringify(data2));
	const [itemCount, setItemCount] = React.useState(0);
	return (
		<View
			style={{
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				width: "45.5%",
				height: "100%",
				flex: 1,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
				}}
			>
				<View style={{ justifyContent: "center" }}>
					<NFTTitle title={data.SubSubS_Name} titleSize={SIZES.extraLarge} />
					<NFTTitle title={data.SubSubS_Duration} titleSize={SIZES.font} />
					<NFTTitle title={data.SubSubS_Description} titleSize={SIZES.medium} />
					<Text>{"\n"}</Text>
					<NFTTitle title={"₹" + data.SubSubS_Price} titleSize={SIZES.medium} />
				</View>

				<View
					style={{
						flexDirection: "row",
						alignSelf: "center",
						justifyContent: "space-between",
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "#F8F8F8",
							borderRadius: SIZES.font,
							width: 50,
							height: "50%",
							alignItems: "center",
						}}
						onPress={() => {
							setItemCount(Math.max(itemCount - 1, 0));
						}}
					>
						<Text style={{ fontSize: 25 }}> - </Text>
					</TouchableOpacity>

					<Text style={{ fontSize: 27.5 }}>{itemCount}</Text>

					<TouchableOpacity
						style={{
							backgroundColor: "#F8F8F8",
							borderRadius: SIZES.font,
							width: 50,
							height: "50%",
							alignItems: "center",
						}}
						onPress={() => {
							setItemCount(itemCount + 1);
						}}
					>
						<Text style={{ fontSize: 25 }}> + </Text>
					</TouchableOpacity>
				</View>
			</View>
			<Text
				style={{ color: "#bbbbbb", alignItems: "center", alignSelf: "center" }}
			>
				{" "}
				_______________________________________{" "}
			</Text>
		</View>
	);
};

const NFTCard8 = ({ data, data2, setData }) => {
	var data3 = JSON.parse(JSON.stringify(data2));
	const [itemCount, setItemCount] = React.useState(0);
	return (
		<View
			style={{
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				width: "45.5%",
				height: "100%",
				flex: 1,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
				}}
			>
				<View style={{ justifyContent: "center" }}>
					<NFTTitle title={data.SubSubS_Name} titleSize={SIZES.extraLarge} />
					<NFTTitle title={data.SubSubS_Description} titleSize={SIZES.medium} />
				</View>
				<NFTTitle title={"₹" + data.SubSubS_Price} titleSize={SIZES.medium} />
				<View
					style={{
						flexDirection: "row",
						alignSelf: "center",
						justifyContent: "space-between",
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "#F8F8F8",
							borderRadius: SIZES.font,
							width: 50,
							height: "50%",
							alignItems: "center",
						}}
						onPress={() => {
							setItemCount(Math.max(itemCount - 1, 0));
						}}
					>
						<Text style={{ fontSize: 25 }}> - </Text>
					</TouchableOpacity>

					<Text style={{ fontSize: 27.5 }}>{itemCount}</Text>

					<TouchableOpacity
						style={{
							backgroundColor: "#F8F8F8",
							borderRadius: SIZES.font,
							width: 50,
							height: "50%",
							alignItems: "center",
						}}
						onPress={() => {
							setItemCount(itemCount + 1);
						}}
					>
						<Text style={{ fontSize: 25 }}> + </Text>
					</TouchableOpacity>
				</View>
			</View>
			<Text
				style={{ color: "#bbbbbb", alignItems: "center", alignSelf: "center" }}
			>
				{" "}
				_______________________________________{" "}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	checkbox: {
		alignSelf: "center",
	},
});

export {
	NFTCard1,
	NFTCard2,
	NFTCard3,
	NFTCard4,
	NFTCard5,
	NFTCard6,
	NFTCard7,
	NFTCard8,
};
