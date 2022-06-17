import React from "react";

import HomeStack from "./homeStack";
import SupportScreen from "../src/SupportScreen";
import OrderScreen from "../src/OrdersScreen";
import ProfileScreen from "../src/ProfileScreen";

import {
	MaterialIcons,
	MaterialCommunityIcons,
	FontAwesome5,
} from "@expo/vector-icons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const BottomTabNav = () => {
	const Tab = createMaterialBottomTabNavigator();
	return (
		<Tab.Navigator
			barStyle={{ backgroundColor: "white" }}
			activeColor="#1b7af2"
			inactiveColor="#71a4e3"
		>
			<Tab.Screen
				name="HomeStack"
				component={HomeStack}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name="local-laundry-service"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Orders"
				component={OrderScreen}
				options={{
					tabBarLabel: "Orders",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="clipboard-list-outline"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Support"
				component={SupportScreen}
				options={{
					tabBarLabel: "Support",
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="contact-support" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="user" size={24} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNav;
