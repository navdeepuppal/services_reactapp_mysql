import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({
    title,
    titleSize,
    titleFont = FONTS.font,
    fontColor = COLORS.primary,
    textAlign = "center",
}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: titleFont,
                    fontSize: titleSize,
                    color: fontColor,
                    textAlign: textAlign,
                }}>
                {title}
            </Text>
        </View>
    );
};

export const EthPrice = ({ price }) => {
	return (
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			<Image
				source={assets.eth}
				resizeMode="contain"
				style={{ width: 20, height: 20, marginRight: 2 }}
			/>
			<Text
				style={{
					fontFamily: FONTS.medium,
					fontSize: SIZES.font,
					color: COLORS.gray,
				}}
			>
				{price}
			</Text>
		</View>
	);
};

const ImageCmp = ({ imgUrl, index }) => {
	return (
		<Image
			source={imgUrl}
			resizeMode="contain"
			style={{
				width: 48,
				height: 48,
				marginLeft: index === 0 ? 0 : -SIZES.font,
			}}
		/>
	);
};

export const People = () => {
	return (
		<View style={{ flexDirection: "row" }}>
			{[assets.person02, assets.person03, assets.person04].map(
				(imgUrl, index) => (
					<ImageCmp
						key={`People-${index}`}
						imgUrl={imgUrl}
						index={index}
					/>
				)
			)}
		</View>
	);
};

export const EndDate = () => {
	return (
		<View
			style={{
				paddingHorizontal: SIZES.font,
				paddingVertical: SIZES.base,
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				justifyContent: "center",
				alignItems: "center",
				...SHADOWS.light,
				elevation: 1,
				maxWidth: "50%",
			}}
		>
			<Text
				style={{
					fontFamily: FONTS.regular,
					fontSize: SIZES.small,
					color: COLORS.gray,
				}}
			>
				Ending in
			</Text>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.medium,
					color: COLORS.gray,
				}}
			>
				12h 30m
			</Text>
		</View>
	);
};

export const SubInfo = () => {
	return (
		<View
			style={{
				width: "100%",
				paddingHorizontal: SIZES.font,
				marginTop: -SIZES.extraLarge,
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<People />
			<EndDate />
		</View>
	);
};
