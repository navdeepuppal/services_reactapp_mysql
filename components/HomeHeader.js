import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { color } from "react-native-elements/dist/helpers";
import { colors } from "react-native-elements";

const HomeHeader = ({ onSearch }) => {
	const navigation = useNavigation();
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
					width: 95,
					justifyContent: "space-between",
				}}
			>
				<TouchableOpacity
					style={{ width: 45, height: 45 }}
					onPress={() => navigation.navigate("RegisterSubService5_1")}
				>
					<Image
						source={assets.person01}
						resizeMode="contain"
						style={{ width: "100%", height: "100%" }}
					/>
					<Image
						source={assets.badge}
						resizeMode="contain"
						style={{
							position: "absolute",
							width: 15,
							height: 15,
							bottom: 0,
							right: 0,
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ width: 45, height: 45 }}
					onPress={() => navigation.navigate("Profile")}
				>
					<Image
						source={assets.menuIcon}
						resizeMode="contain"
						style={{ width: "100%", height: "100%" }}
					/>
				</TouchableOpacity>

			</View>

			<View style={{ marginVertical: SIZES.font }}>
				<Text
					style={{fontWeight: 'bold',
						fontSize: 40,
						color: COLORS.primary,
						marginRight: SIZES.base / 99,
					}}
				>
					Which service do you need?
				</Text>
			</View>

			<View style={{}}>
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
							marginRight: SIZES.base
						}}
					/>
					<TextInput
						placeholder="Search Plumber, Cleaner, Consultant, Driver"
						placeholderTextColor="#A0A0A0" 
						style={{ flex: 1, color: COLORS.primary}}
						onChangeText={onSearch}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeHeader;
