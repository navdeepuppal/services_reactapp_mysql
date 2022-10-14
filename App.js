import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";
import Profile from "./screens/Profile";
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Login";
import Contact from "./screens/Contact";
import SubServices from "./screens/SubServices";
import LocationPage from "./screens/Location";
import OTPVerification from "./screens/OTPVerification";
import { getQuery, postQuery } from "./mysqlConnect";
import SelectOnboard from "./screens/SelectOnboard";
import AboutUs from "./screens/AboutUs";
import SelectOnboardProfessional from "./screens/SelectOnboardProfessional";
import OrderConfirmed from "./screens/OrderConfirmed";
import Thankyou from "./screens/Thankyou";
import BookingsView from "./screens/BookingsView";
import SubSubService from "./screens/SubSubService";

import RegisterSubService from "./screens/RegisterSubService";
import RegisterSubService1 from "./screens/RegisterSubService1";
import RegisterSubService2 from "./screens/RegisterSubService2";
import RegisterSubService3 from "./screens/RegisterSubService3";
import RegisterSubService4 from "./screens/RegisterSubService4";
import RegisterSubService5 from "./screens/RegisterSubService5";

import RegisterSubService5_1 from "./screens/RegisterSubService5_1";

import RegisterSubService5_2 from "./screens/RegisterSubService5_2";
import RegisterSubService6 from "./screens/RegisterSubService6";
import RegisterSubService7 from "./screens/RegisterSubService7";

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

	if (!loaded) return null;

	//console.log(postQuery("INSERT INTO Customer VALUES (1234567891,\"Test1\",123456,NULL,\"https:\\\\www.google.co.in\",0,NULL);"));
	//console.log(getQuery("SELECT * FROM Customer;")+"like");

	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="Onboarding"
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Details" component={Details} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Onboarding" component={Onboarding} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Contact" component={Contact} />
				<Stack.Screen name="SubServices" component={SubServices} />
				<Stack.Screen name="Location" component={LocationPage} />
				<Stack.Screen name="OTPVerification" component={OTPVerification} />
				<Stack.Screen name="SelectOnboard" component={SelectOnboard} />
				<Stack.Screen
					name="SelectOnboardProfessional"
					component={SelectOnboardProfessional}
				/>
				<Stack.Screen name="AboutUs" component={AboutUs} />
				<Stack.Screen name="OrderConfirmed" component={OrderConfirmed} />
				<Stack.Screen name="Thankyou" component={Thankyou} />
				<Stack.Screen name="BookingsView" component={BookingsView} />
				<Stack.Screen name="SubSubService" component={SubSubService} />
				
				<Stack.Screen name="RegisterSubService5_1" component={RegisterSubService5_1} />

				<Stack.Screen name="RegisterSubService5_2" component={RegisterSubService5_2} />
				<Stack.Screen
					name="RegisterSubService"
					component={RegisterSubService}
				/>
				<Stack.Screen
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
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
