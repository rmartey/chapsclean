import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "../src/HomeScreen";
import ServiceScreen from "../src/ServiceScreen";
import CartScreen from "../src/CartScreen";
import CheckoutScreen from "../src/CheckoutScreen";

const HomeStack = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Service"
				component={ServiceScreen}
				options={{
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name="Cart"
				component={CartScreen}
				options={{
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name="Checkout"
				component={CheckoutScreen}
				options={{
					headerTitleAlign: "center",
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
