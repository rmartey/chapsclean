import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/HomeScreen";
import CartScreen from "./src/CartScreen";
import CheckoutScreen from "./src/CheckoutScreen";
import OrderScreen from "./src/OrdersScreen";
import ProfileScreen from "./src/ProfileScreen";
import ServiceScreen from "./src/ServiceScreen";
import SupportScreen from "./src/SupportScreen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<SupportScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
