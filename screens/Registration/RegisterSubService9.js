import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	SafeAreaView,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	FlatList,
} from "react-native";

import { RadioButton } from "react-native-paper";

import { COLORS, SIZES, SHADOWS, assets } from "../../constants";

import { useNavigation } from "@react-navigation/native";

const RegisterSubService9 = ({ route }) => {
	const navigation = useNavigation();
	const subServices = route.params.subServices;
	const SMan_Details1 = route.params.SMan_Details1;
	const PhoneNumber = route.params.PhoneNumber;
	console.log("\nPage\t" + "RegisterSubService9");
	const [validity, setValidity] = useState("true");

	const [Experience, onChangeExperience] = useState(null);
	const [Story, onChangeStory] = useState(null);
	const [BasePrice, onChangeBasePrice] = useState(false);
	const [radio_Pro, setRadio_Pro] = useState("Beginner");
	const [radio_Team, setRadio_Team] = useState("No");
	const [radio_Equipments, setRadio_Equipments] = useState("Yes");

	const validation = () => {
		var validationtemp = null;
		if (Experience == null) {
			validationtemp = "Experience";
		} else if (Story == null) {
			validationtemp = "Story";
		} else if (BasePrice == null) {
			validationtemp = "Base Price";
		} else {
			validationtemp = "true";
		}

		return "true";
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<ScrollView
					style={{ backgroundColor: "white", width: "100%" }}
				>
					<View style={styles.container}>
						<Image
							source={require("../../assets/signup.png")}
							resizeMode="center"
							style={styles.image}
						/>
						<Text style={styles.textTitle}>
							Register as a Professional
						</Text>
						<Text style={styles.textBody}>
							Tell us a bit about yourself. {"\n"}This
							information will appear on your public
							profile, so that potential buyers can get to
							know you better.
						</Text>

						<TextInput
							style={styles.input}
							onChangeText={onChangeExperience}
							value={Experience}
							placeholder="How much years experience do you have in this particular service?"
							placeholderTextColor="#a0a0a0"
							keyboardType="phone-pad"
							multiline
							numberOfLines={2}
						/>

						<TextInput
							style={styles.input}
							onChangeText={onChangeStory}
							value={Story}
							placeholder="Share a bit of your work experience, cool projects you've completed in your area of expertise"
							placeholderTextColor="#a0a0a0"
							multiline
							numberOfLines={4}
						/>
						<Text
							style={{
								fontSize: 20,
								margin: 13.5,
								borderTopWidth: 1,
								borderTopColor: COLORS.gray,
							}}
						>
							What's the hourly rate for these services?
							Example: Rs.120/hr
						</Text>
						<ScrollView
							horizontal={true}
							contentContainerStyle={{ width: "100%" }}
						>
							<FlatList
								nestedScrollEnabled
								data={subServices}
								keyExtractor={(item) => item.SubS_ID}
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) => {
									return item.isSelected ===
										"true" ? (
										<TextInput
											style={styles.input}
											onChangeText={(
												value
											) => {
												item.SMan_BasePrice =
													value;
												onChangeBasePrice(
													!BasePrice
												);
											}}
											value={
												item.SMan_BasePrice
											}
											placeholder={
												item.SubS_Name
											}
											placeholderTextColor="#a0a0a0"
											keyboardType="phone-pad"
											multiline
											numberOfLines={2}
										/>
									) : null;
								}}
								contentContainerStyle={{
									width: "100%",
									flex: 1,
								}}
							/>
						</ScrollView>
						{/* {subServices.map((item) => {
							return (
								<TextInput
									key={item.SubS_ID}
									style={styles.input}
									onChangeText={(value) => {
										item.SMan_BasePrice = value;
										onChangeBasePrice(!BasePrice);
									}}
									value={item.SMan_BasePrice}
									placeholder={
										"Whats the base price you often take for " +
										item.SubS_Name +
										"?"
									}
									placeholderTextColor="#a0a0a0"
									keyboardType="phone-pad"
									multiline
									numberOfLines={2}
								/>
							);
						})} */}

						<Text
							style={{
								fontSize: 20,
								margin: 13.5,
							}}
						>
							How pro are you in this area?
						</Text>
						<View
							style={{
								flexDirection: "column",
								justifyContent: "space-between",
								width: "60%",
							}}
						>
							<TouchableWithoutFeedback
								onPress={() => setRadio_Pro("Beginner")}
							>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="Beginner"
										status={
											radio_Pro === "Beginner"
												? "checked"
												: "unchecked"
										}
										onPress={() =>
											setRadio_Pro("Beginner")
										}
									/>
									<Text style={{ fontSize: 19 }}>
										Beginner
									</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								onPress={() =>
									setRadio_Pro("Intermediate")
								}
							>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="Intermediate"
										status={
											radio_Pro ===
											"Intermediate"
												? "checked"
												: "unchecked"
										}
										onPress={() =>
											setRadio_Pro(
												"Intermediate"
											)
										}
									/>
									<Text style={{ fontSize: 19 }}>
										Intermediate
									</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								onPress={() => setRadio_Pro("Expert")}
							>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="Expert"
										status={
											radio_Pro === "Expert"
												? "checked"
												: "unchecked"
										}
										onPress={() =>
											setRadio_Pro("Expert")
										}
									/>
									<Text style={{ fontSize: 19 }}>
										Expert
									</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>

						<Text
							style={{
								fontSize: 20,
								margin: 13.5,
							}}
						>
							Do you have a team or you are single person
							to do this?
						</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								width: "50%",
							}}
						>
							<TouchableWithoutFeedback
								onPress={() => setRadio_Team("Yes")}
							>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="Yes"
										status={
											radio_Team === "Yes"
												? "checked"
												: "unchecked"
										}
										onPress={() =>
											setRadio_Team("Yes")
										}
									/>
									<Text style={{ fontSize: 19 }}>
										Yes
									</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								onPress={() => setRadio_Team("No")}
							>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="No"
										status={
											radio_Team === "No"
												? "checked"
												: "unchecked"
										}
										onPress={() =>
											setRadio_Team("No")
										}
									/>
									<Text style={{ fontSize: 19 }}>
										No
									</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>

						<Text
							style={{
								fontSize: 20,
								margin: 13.5,
							}}
						>
							Do you have all the equipments to serve the
							customers (Yes/No)
						</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								width: "50%",
							}}
						>
							<TouchableWithoutFeedback
								onPress={() =>
									setRadio_Equipments("Yes")
								}
							>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="Yes"
										status={
											radio_Equipments ===
											"Yes"
												? "checked"
												: "unchecked"
										}
										onPress={() =>
											setRadio_Equipments(
												"Yes"
											)
										}
									/>
									<Text style={{ fontSize: 19 }}>
										Yes
									</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback
								onPress={() =>
									setRadio_Equipments("No")
								}
							>
								<View
									style={{
										flexDirection: "row",
										borderColor: "#000000",
										borderWidth: 1,
										borderRadius: 20,
										alignItems: "center",
										padding: 5,
										paddingLeft: 0,
									}}
								>
									<RadioButton
										value="No"
										status={
											radio_Equipments === "No"
												? "checked"
												: "unchecked"
										}
										onPress={() =>
											setRadio_Equipments("No")
										}
									/>
									<Text style={{ fontSize: 19 }}>
										No
									</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
						{/* <Input name="Whats the minimum price you can charge for any of its kind service" icon="user" />
					<Input name="Whats the maximum price you can charge for any of its kind service" icon="user" /> 
					<Input name="Suppose you completed a single order of this service in 1 Hour. How much you will charge for this type of service?" icon="user" /> 
					<Input name="Have you done this service earlier before? (Yes/No)" icon="user" />
					<Input name="Mention the name of clients you worked before with (Eg. Any Organization) " icon="user" />*/}

						<Text style={styles.textBody}>
							Please Note: {"\n"}Screening will be done
							before the registration. All these inputs
							will be verified at the time of screening{" "}
							{"\n"}
							(Video Call/In-Person)
						</Text>

						{validity == "true" ? null : (
							<Text style={{ color: "#bb0000" }}>
								Please enter {validity} properly
							</Text>
						)}
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								const validationtemp = validation();
								if (validationtemp == "true") {
									const temp = {
										Experience: Experience,
										Story: Story,
										radio_Pro: radio_Pro,
										radio_Team: radio_Team,
										radio_Equipments:
											radio_Equipments,
									};
									navigation.navigate(
										"RegisterSubService10",
										{
											subServices,
											SMan_Details1,
											temp,
											PhoneNumber,
										}
									);
								} else {
									console.log(
										"Validation unsuccessful for input " +
											validationtemp
									);
								}
								setValidity(validationtemp);
							}}
						>
							<Text style={styles.buttontext}>
								Continue
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 20,
		margin: 16,
		padding: 4,
		borderColor: "silver",
		borderRadius: 9,
		borderWidth: 1,
		width: "90%",
	},
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
		flex: 1,
	},
	image: {
		width: 400,
		height: 250,
		marginVertical: 10,
	},
	button: {
		marginTop: 80,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "green",
		borderRadius: SIZES.font,
		marginBottom: SIZES.extraLarge,
		margin: SIZES.base,
		...SHADOWS.dark,
		elevation: 2, // Android
		height: 50,
		width: 200,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	textTitle: {
		fontWeight: "bold",

		marginTop: SIZES.large,
		fontSize: 40,
		marginVertical: 5,
	},

	textBody: {
		fontSize: 19,
		margin: 13,
		fontWeight: "bold",
		textAlign: "center",
		alignSelf: "center",
	},
	buttontext: {
		fontSize: 19,
		textAlign: "center",
		color: COLORS.white,
	},
});

export default RegisterSubService9;
