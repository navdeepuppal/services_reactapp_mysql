import React from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
  SafeAreaView
} from "react-native";


import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import BackButton from "../components/BackButton";

const SelectOnboardProfessional = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<BackButton></BackButton>
			<Text style={styles.textTitle}>How do you want to start ?</Text>

			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={styles.subTitle}>
					Broadcast your skill/service to the world and earn
					money{" "}
				</Text>

				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("RegisterSubService1")
					}
				>
					<View style={{ flexDirection: "column" }}>
						<Text style={styles.textBody}>
							Register for a Service
						</Text>
						<Text style={styles.littleTitle}>
							I'm a Electrician, Building Constructor,
							Appliance Repairer, Seller, Barber,
							Carpenter, Cleaner and many more related to
							same..
						</Text>
					</View>
				</TouchableOpacity>

				<Text style={styles.subTitle}>
					Join our growing freelance community and get paid for
					your work{" "}
				</Text>

				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("RegisterSubService1")
					}
				>
					<View style={{ flexDirection: "column" }}>
						<Text style={styles.textBody}>
							Start as a Freelancer
						</Text>
						<Text style={styles.littleTitle}>
							I'm a Coder/ Software Engineer/ Consultant/
							Social Media Manager/ Marketing Specialist /
							any other..
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(248,248,250,255)",
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
	textTitle: {
		fontWeight: "bold",
		fontSize: 37,
		marginTop: 30,
		color: COLORS.gray,
		textAlign: "center",
	},
	subTitle: {
		marginTop: "10%",
		margin: "2%",
		fontSize: 22,
		color: COLORS.gray,
		textAlign: "center",
	},
	littleTitle: {
		fontSize: 13,
		color: COLORS.gray,
		margin: "2%",
		textAlign: "center",
		fontStyle: "italic",
	},
	textBody: {
		fontSize: 24,
		margin: "4%",
		color: COLORS.white,
		fontWeight: "700",
		textAlign: "center",
	},
	button: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "black",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: "22%",
		width: "90%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
});

export default SelectOnboardProfessional;
