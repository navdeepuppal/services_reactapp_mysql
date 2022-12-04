import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, assets } from "../constants";


const SubSubServicesHeader = ({ onSearch, SubS_Name }) => {
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
					justifyContent: "space-between",
				}}
			>
				<View
					style={{ 
						flexDirection: "row",
					}}
				>
					<TouchableOpacity
						style={{ width: 30, height: 30 }}
						onPress={() => navigation.goBack()}
					>
						<Image
							source={assets.left}
							resizeMode="contain"
							style={{ width: "100%", height: "100%" }}
						/>
					</TouchableOpacity>
					<Text style={{ marginLeft: 10, fontSize: 19}}>{SubS_Name}</Text>
				</View>

				<TouchableOpacity
					style={{ width: 20, height: 20, marginTop: 2 }}
					onPress={() => navigation.goBack()}
				>
					<Image
						source={assets.search}
						resizeMode="contain"
						style={{ width: "100%", height: "100%" }}
					/>
				</TouchableOpacity>
			</View>

			



			{/* 	<View style={{ marginVertical: SIZES.font }}>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 60,
						color: COLORS.primary,
						marginRight: SIZES.base / 99,
					}}
				></Text>
			</View> */}
		</View>
	);
};

export default SubSubServicesHeader;
