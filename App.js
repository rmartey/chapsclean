import { StyleSheet, SafeAreaView } from "react-native";

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
