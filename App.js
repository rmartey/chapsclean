import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/HomeScreen";
import CartScreen from "./src/CartScreen";
import CheckoutScreen from "./src/CheckoutScreen";
import OrderScreen from "./src/OrdersScreen";
import ProfileScreen from "./src/ProfileScreen";
import ServiceScreen from "./src/ServiceScreen";
import SupportScreen from "./src/SupportScreen";

import BottomTabNav from "./navigation/bottomTabNav";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<BottomTabNav />
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
