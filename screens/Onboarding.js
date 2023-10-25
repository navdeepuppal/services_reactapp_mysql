import React from 'react';
import {
	Image,
	StyleSheet,
	FlatList,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
	{
		id: "1",
		image: require("../assets/image1.png"),
		title: "Empowering Skills, Connecting Dreams",
		subtitle: "Sqera: Your Pocket Service Marketplace! ",
	},
	{
		id: "2",
		image: require("../assets/image2.png"),
		title: "Unleash Your Skills to the World ",
		subtitle: "Now showcase your skills from your pocket ",
	},
	{
		id: "3",
		image: require("../assets/image3.png"),
		title: "Unlock Boundless Possibilities",
		subtitle: "Discover Services On-Demand",
	},
];

const Slide = ({ item }) => {
	return (
		<View style={{ alignItems: "center" }}>
			<Image
				source={item?.image}
				style={{ height: "75%", width, resizeMode: "contain" }}
			/>
			<View>
				<Text style={styles.title}>{item?.title}</Text>
				<Text style={styles.subtitle}>{item?.subtitle}</Text>
			</View>
		</View>
	);
};

const Onboarding = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
	const ref = React.useRef();
	const updateCurrentSlideIndex = (e) => {
		const contentOffsetX = e.nativeEvent.contentOffset.x;
		const currentIndex = Math.round(contentOffsetX / width);
		setCurrentSlideIndex(currentIndex);
	};

	const goToNextSlide = () => {
		const nextSlideIndex = currentSlideIndex + 1;
		if (nextSlideIndex != slides.length) {
			const offset = nextSlideIndex * width;
			ref?.current.scrollToOffset({ offset });
			setCurrentSlideIndex(currentSlideIndex + 1);
		}
	};

	const skip = () => {
		const lastSlideIndex = slides.length - 1;
		const offset = lastSlideIndex * width;
		ref?.current.scrollToOffset({ offset });
		setCurrentSlideIndex(lastSlideIndex);
	};

	const Footer = () => {
		const navigation = useNavigation();
		return (
			<View
				style={{
					height: height * 0.25,
					justifyContent: "space-between",
					paddingHorizontal: 20,
				}}
			>
				{/* Indicator container */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						marginTop: 20,
					}}
				>
					{/* Render indicator */}
					{slides.map((_, index) => (
						<View
							key={index}
							style={[
								styles.indicator,
								currentSlideIndex == index && {
									backgroundColor: COLORS.white,
									width: 25,
								},
							]}
						/>
					))}
				</View>

				{/* Render buttons */}
				<View style={{ marginBottom: 20 }}>
					{currentSlideIndex == slides.length - 1 ? (
						<View style={{ height: 50 }}>
							<TouchableOpacity
								style={styles.btn}
								onPress={() =>
									navigation.replace("SelectOnboard")
								}
							>
								<Text
									style={{
										fontWeight: "bold",
										fontSize: 15,
									}}
								>
									GET STARTED
								</Text>
							</TouchableOpacity>
						</View>
					) : (
						<View style={{ flexDirection: "row" }}>
							<TouchableOpacity
								activeOpacity={0.8}
								style={[
									styles.btn,
									{
										borderColor: COLORS.white,
										borderWidth: 1,
										backgroundColor:
											"transparent",
									},
								]}
								onPress={skip}
							>
								<Text
									style={{
										fontWeight: "bold",
										fontSize: 15,
										color: COLORS.white,
									}}
								>
									SKIP
								</Text>
							</TouchableOpacity>
							<View style={{ width: 15 }} />
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={goToNextSlide}
								style={styles.btn}
							>
								<Text
									style={{
										fontWeight: "bold",
										fontSize: 15,
									}}
								>
									NEXT
								</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
			</View>
		);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
			<StatusBar backgroundColor={COLORS.primary} />
			<FlatList
				nestedScrollEnabled
				ref={ref}
				onMomentumScrollEnd={updateCurrentSlideIndex}
				contentContainerStyle={{ height: height * 0.75 }}
				showsHorizontalScrollIndicator={false}
				horizontal
				data={slides}
				pagingEnabled
				renderItem={({ item }) => <Slide item={item} />}
			/>
			<Footer />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	subtitle: {
		color: COLORS.white,
		fontSize: 15,
		marginTop: 10,
		maxWidth: "70%",
		textAlign: "center",
		alignSelf: "center",
		lineHeight: 30,
	},
	title: {
		color: COLORS.white,
		fontSize: 22,
		fontWeight: "bold",
		marginTop: 20,
		textAlign: "center",
	},
	image: {
		height: "100%",
		width: "100%",
		resizeMode: "contain",
	},
	indicator: {
		height: 2.5,
		width: 10,
		backgroundColor: "grey",
		marginHorizontal: 3,
		borderRadius: 2,
	},
	btn: {
		flex: 1,
		height: 50,
		borderRadius: 5,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
});
export default Onboarding;