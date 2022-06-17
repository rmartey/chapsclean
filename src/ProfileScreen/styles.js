import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		padding: 20,
		flex: 1,
		marginTop: 40,
		alignItems: "center",
		//justifyContent: "center",
	},
	iconContainer: {
		width: 200,
		height: 200,
		justifyContent: "center",
		alignItems: "center",
		//backgroundColor: "red",
		borderWidth: 1,
		borderRadius: 100,
		alignSelf: "center",
		borderColor: "#b9bcbd",
		marginVertical: 30,
	},
	infoContainer: {
		borderBottomWidth: 1,
		width: "100%",
		borderBottomColor: "#b9bcbd",
		padding: 10,
	},
});

export default styles;
