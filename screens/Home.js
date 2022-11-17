import React, { useState, useEffect } from "react";
import {
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	Text,
	Image,
	StyleSheet,
	Alert,
	Modal,
	Pressable,
	TouchableOpacity,
} from "react-native";

import { NFTCard1, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, config, SIZES } from "../constants";
import StarRating from "react-native-star-rating";
import SubServicesModal from "../components/SubServicesModal";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Home = () => {
	const [isLoading, setLoading] = useState(true);
	const [data2, setData] = useState([]);
	const [data2_backup, setDataBackup] = useState([]);
	const [starCount, setStarCount] = useState(0);
	const [ratingModalVisible, setRatingModalVisible] = useState(false);
	const [subSModalVisible, setSubSModalVisible] = useState(-1);
	//vahan se utha le

	const handleSearch = (value) => {
		if (value.length === 0) {
			setData(data2_backup);
		}

		const filteredData = data2_backup.filter((item) =>
			item.S_Name.toLowerCase().includes(value.toLowerCase())
		);

		/* if (filteredData.length === 0) {
			setData(data2_backup);
		} else {
			setData(filteredData);
		} */
		setData(filteredData);
	};

	const C_Lat = 30.697;
	const C_Lon = 76.7389;
	const Radius = 10;

	// const querystring =
	// 	"SELECT * FROM service where S_ID in (select S_ID from subservice where SubS_ID in (select SubS_ID from servicemanofferings where SMan_PhNo in (select SMan_PhNo from serviceman where 2*6371*ASIN(SQRT(POWER(SIN((PI()/180*(" +
	// 	C_Lat +
	// 	"-SMan_CurrentLocation->>'$.latitude'))/2),2)+(COS(PI()/180*" +
	// 	C_Lat +
	// 	")*COS(PI()/180*SMan_CurrentLocation->>'$.latitude')*POWER(SIN((PI()/180*(" +
	// 	C_Lon +
	// 	"-SMan_CurrentLocation->>'$.longitude'))/2),2)))) < 10)))";
	//https://sqera.loca.lt
	useEffect(() => {
		fetch(
			config.domain +
				"/getLocationBasedServices/" +
				C_Lat +
				"/" +
				C_Lon +
				"/" +
				Radius,
			{
				method: "GET",
			}
		)
			.then((response) => response.json())
			.then((responseJson) => {
				setData(responseJson);
				setDataBackup(responseJson);
			})
			.catch((error) => alert(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#F3F3F3",
			}}
		>
			<FocusedStatusBar backgroundColor={COLORS.gray} />
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<View>
					<FlatList
						data={data2}
						renderItem={({ item, index }) => (
							<NFTCard1
								data={item}
								index={index}
								setSubSModalVisible={setSubSModalVisible}
							/>
						)}
						keyExtractor={(index) => index.toString()}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
						contentContainerStyle={{ height: "100%" }}
						ListFooterComponent={
							<View>
								{/* <Pressable
									style={[styles.button, styles.buttonOpen]}
									onPress={() => setRatingModalVisible(true)}
								>
									<Text style={styles.textStyle}>Rating Modal</Text>
								</Pressable> */}
								{/* <Pressable
									style={[styles.button, styles.buttonClose]}
									onPress={() => setSubSModalVisible(true)}
								>
									<Text style={styles.textStyle}>Show SubS</Text>
								</Pressable> */}
							</View>
						}
					/>

					<View style={styles.centeredView}>
						<Modal
							animationType="slide"
							transparent={true}
							visible={ratingModalVisible}
							onRequestClose={() => {
								Alert.alert("Modal has been closed.");
								setRatingModalVisible(!ratingModalVisible);
							}}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Text style={styles.modalText}>
										How did you like the service
									</Text>
									<View style={styles.ratingbutton}>
										<StarRating
											disabled={false}
											emptyStar={"ios-star-outline"}
											fullStar={"ios-star"}
											halfStar={"ios-star-half"}
											iconSet={"Ionicons"}
											maxStars={5}
											rating={starCount}
											selectedStar={(rating) => {
												setStarCount(rating);
												setTimeout(() => setRatingModalVisible(false), 350);
											}}
											fullStarColor={"red"}
										/>
									</View>
									<View style={styles.ratingbutton}>
										{[1, 2, 3, 4, 5].map((item) => {
											return <RatingStar key={item} />;
										})}
									</View>
									{/* <View style={{ height: "20%" }}>
										<FlatList
											data={[1, 2, 3, 4, 5]}
											renderItem={({ item }) => <Text>{item}</Text>}
											keyExtractor={(index) => index.toString()}
											numColumns={5}
											showsVerticalScrollIndicator={false}
										/>
									</View> */}
								</View>
							</View>
						</Modal>
					</View>
					<View style={styles.loweredView}>
						<Modal
							animationType="fade"
							transparent={true}
							visible={subSModalVisible > -1}
							onRequestClose={() => {
								Alert.alert("Modal has been closed.");
								setSubSModalVisible(-1);
							}}
						>
							<Pressable
								style={styles.loweredView}
								onPressOut={() => setSubSModalVisible(-1)}
							>
								<View style={[styles.modalView, { width: "100%" }]}>
									<Pressable
										style={styles.button}
										onPress={() => setSubSModalVisible(-1)}
									>
										<Text> ✖</Text> 
									</Pressable>
									<SubServicesModal
										data={data2[subSModalVisible]}
										setSubSModalVisible={setSubSModalVisible}
									/>
								</View>
							</Pressable>
						</Modal>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},
	loweredView: {
		
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	},
	modalView: {
		backgroundColor: "white",
		borderRadius: 15,
		padding: 1,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "70%",
		minHeight: "45%"
	},
	ratingbutton: {
		flexDirection: "row",
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		fontSize: 23,
		marginBottom: 15,
		textAlign: "center",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},

	container: {
		flex: 1,
		backgroundColor: "#000000",
	},
});

const RatingStar = ({ key }) => {
	return (
		<TouchableOpacity>
			<Text>{key}</Text>
		</TouchableOpacity>
	);
};
