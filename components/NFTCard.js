import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CheckBox from "@react-native-community/checkbox";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

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
				<NFTTitle
					title={data.name}
					subTitle={data.creator}
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
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

const NFTCard1 = ({ data }) => {
	const navigation = useNavigation();
	const ImageURL = [data.S_Image][0];
	console.log(ImageURL);
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
			onPress={() => navigation.navigate("SubServices", { data })}
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
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>
			</View>

			<View style={{ width: "100%" }}>
				<NFTTitle
					title={data.S_Name}
					subTitle={data.S_ID}
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
				/>
			</View>
		</TouchableOpacity>
	);
};

const NFTCard2 = ({ data }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={{
				backgroundColor: "#F8F8F8",
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				width: "45%",
			}}
			onPress={() => navigation.navigate("SubSubService", { data })}
		>
			<View style={{ width: "100%", padding: SIZES.font }}>
				<NFTTitle
					title={data.SubS_Name}
					subTitle={data.SubS_ID}
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
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

const NFTCard3 = ({ data }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				...SHADOWS.dark,
				width: "100%",
			}}
			onPress={() => {}}
		>
			<View style={{ width: "100%", padding: SIZES.font }}>
				<NFTTitle
					title={data.SubSubS_Name}
					subTitle={data.SubSubS_Description}
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
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
	console.log(ImageURL);
	return (
		<TouchableOpacity
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
				width: "45%",
				height: "110%",
			}}
			onPress={() => navigation.navigate("RegisterSubService5_2", { data })}
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
						width: "110%",
						height: "110%",
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>
			</View>

			<View style={{ width: "100%" }}>
				<NFTTitle
					title={data.S_Name}
					subTitle={data.S_ID}
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
				/>
			</View>
		</TouchableOpacity>
	);
};

const NFTCard5 = ({ data }) => {
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity
				style={{
					backgroundColor: "#F8F8F8",
					borderRadius: SIZES.font,
					marginBottom: SIZES.extraLarge,
					margin: SIZES.base,
					...SHADOWS.dark,
					width: "100%",
					height: "100%",
				}}
			>
				<View style={{ width: "100%", padding: SIZES.font }}>
					<NFTTitle
						title={data.SubS_Name}
						subTitle={data.SubS_ID}
						titleSize={SIZES.large}
						subTitleSize={SIZES.small}
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
		</View>
	);
};

const styles = StyleSheet.create({
	checkbox: {
		alignSelf: "center",
	},
});

export { NFTCard1, NFTCard2, NFTCard3, NFTCard4, NFTCard5 };
