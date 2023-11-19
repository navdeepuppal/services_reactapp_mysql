import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, assets } from "../constants";


const SubSubServicesHeader = ({ onSearch, S_Name, SubS_Name }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                padding: SIZES.font,
            }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                <View
                    style={{
                        flexDirection: "row",
                    }}>
                    <Text style={{ marginLeft: 10, fontSize: 19 }}>{SubS_Name}</Text>
                </View>
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
