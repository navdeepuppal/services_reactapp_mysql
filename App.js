import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Login";
import Contact from "./screens/Contact";
import SubServices from "./screens/SubServices";
import LocationPage from "./screens/Location";
import SelectOnboard from "./screens/SelectOnboard";
import AboutUs from "./screens/AboutUs";
import SelectOnboardProfessional from "./screens/SelectOnboardProfessional";
import OrderConfirmed from "./screens/OrderConfirmed";
import Thankyou from "./screens/Thankyou";
import BookingsView from "./screens/BookingsView";
import SubSubService from "./screens/SubSubService";
import SignUpForm from "./screens/SignUpForm";
import BookingLogin from "./screens/BookingLogin";
import Cart from "./screens/Cart";

import Loc from "./screens/Loc";
import BookingOTP from "./screens/BookingOTP";

import ServiceManagementPage from "./screens/ServiceManagementPage";

import RegisterSubService1 from "./screens/Registration/RegisterSubService1";
import RegisterSubService2 from "./screens/Registration/RegisterSubService2";
import RegisterSubService3 from "./screens/Registration/RegisterSubService3";
import RegisterSubService4 from "./screens/Registration/RegisterSubService4";
import RegisterSubService5 from "./screens/Registration/RegisterSubService5";
import RegisterSubService6 from "./screens/Registration/RegisterSubService6";
import RegisterSubService7 from "./screens/Registration/RegisterSubService7";
import RegisterSubService8 from "./screens/Registration/RegisterSubService8";
import RegisterSubService9 from "./screens/Registration/RegisterSubService9";
import RegisterSubService10 from "./screens/Registration/RegisterSubService10";
import RegisterSubService11 from "./screens/Registration/RegisterSubService11";
import QRCode from "./screens/QRCode";
import RequestNewService from "./screens/RequestNewService";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "transparent",
	},
};

const Stack = createStackNavigator();

const App = () => {
	const [loaded] = useFonts({
		InterBold: require("./assets/fonts/Inter-Bold.ttf"),
		InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
		InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
		InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
		InterLight: require("./assets/fonts/Inter-Light.ttf"),
	});
	const [isLoading, setLoading] = useState(true);
	const [firstTime, setFirstTime] = useState(true);
	const [isLoggedIn, setLoggedIn] = useState(true);

	if (!loaded) return null;

	/* setValue = async (value) => {
		try {
			await AsyncStorage.setItem("firstTime", value);
		} catch (e) {
			// save error
		}
	};
	setValue("true"); */

	AsyncStorage.getItem("firstTime").then((res) => {
		setFirstTime(res != "false");
		//console.log(firstTime + "\tfirstTime");
		AsyncStorage.getItem("isLoggedIn").then((isLoggedIn) => {
			setLoggedIn(isLoggedIn != "false");

			console.log("isLoggedIn\t" + isLoggedIn);
			setLoading(false);
		});
	});
	/* {"firstTime":true,
	 "isLoggedIn":false} */

	//console.log(postQuery("INSERT INTO Customer VALUES (1234567891,\"Test1\",123456,NULL,\"https:\\\\www.google.co.in\",0,NULL);"));
	//console.log(getQuery("SELECT * FROM Customer;")+"like");

	return (
		<NavigationContainer theme={theme}>
			{isLoading ? (
				<></>
			) : (
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
					initialRouteName={
						firstTime
							? "Onboarding"
							: isLoggedIn
							? "Home"
							: "Login"
					}
				>
					<Stack.Screen
						options={{ gestureEnabled: false }}
						name="Home"
						component={Home}
					/>
					
					<Stack.Screen name="Profile" component={Profile} />
					<Stack.Screen
						name="Onboarding"
						component={Onboarding}
					/>
					<Stack.Screen options={{ gestureEnabled: false }} name="Login" component={Login} />
					<Stack.Screen name="Contact" component={Contact} />
					<Stack.Screen
						name="SubServices"
						component={SubServices}
					/>
					<Stack.Screen
						name="Location"
						component={LocationPage}
					/>
					<Stack.Screen
						name="SelectOnboard"
						component={SelectOnboard}
					/>
					<Stack.Screen
						name="SelectOnboardProfessional"
						component={SelectOnboardProfessional}
					/>
					<Stack.Screen name="AboutUs" component={AboutUs} />
					<Stack.Screen
						name="OrderConfirmed"
						component={OrderConfirmed}
					/>
					<Stack.Screen name="Thankyou" component={Thankyou} />
					<Stack.Screen
						name="BookingsView"
						component={BookingsView}
					/>
					<Stack.Screen
						name="SubSubService"
						component={SubSubService}
					/>
					<Stack.Screen name="Cart" component={Cart} />
					<Stack.Screen
						name="SignUpForm"
						component={SignUpForm}
					/>
					<Stack.Screen
						name="BookingLogin"
						component={BookingLogin}
					/>
					<Stack.Screen
						name="BookingOTP"
						component={BookingOTP}
					/>
					<Stack.Screen name="Loc" component={Loc} />
					<Stack.Screen name="QRCode" component={QRCode} />

					<Stack.Screen
						name="RequestNewService"
						component={RequestNewService}
					/>
					<Stack.Screen
						name="ServiceManagementPage"
						component={ServiceManagementPage}
					/>
					<Stack.Screen options={{ gestureEnabled: false }}
						name="RegisterSubService1"
						component={RegisterSubService1}
					/>
					<Stack.Screen
						name="RegisterSubService2"
						component={RegisterSubService2}
					/>
					<Stack.Screen
						name="RegisterSubService3"
						component={RegisterSubService3}
					/>
					<Stack.Screen
						name="RegisterSubService4"
						component={RegisterSubService4}
					/>
					<Stack.Screen
						name="RegisterSubService5"
						component={RegisterSubService5}
					/>
					<Stack.Screen
						name="RegisterSubService6"
						component={RegisterSubService6}
					/>
					<Stack.Screen
						name="RegisterSubService7"
						component={RegisterSubService7}
					/>
					<Stack.Screen
						name="RegisterSubService8"
						component={RegisterSubService8}
					/>
					<Stack.Screen
						name="RegisterSubService9"
						component={RegisterSubService9}
					/>
					<Stack.Screen
						name="RegisterSubService10"
						component={RegisterSubService10}
					/>
					<Stack.Screen
						name="RegisterSubService11"
						component={RegisterSubService11}
					/>
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default App;
