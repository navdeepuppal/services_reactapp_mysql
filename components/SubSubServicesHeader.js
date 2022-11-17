import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { ImageSlider } from "react-native-image-slider-banner";


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

			<ImageSlider 
    data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    autoPlay={false}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
/>



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
