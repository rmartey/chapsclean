import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		flex: 1,
		marginTop: 40,
	},
	contactContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: 30,
		marginRight: 30,
		backgroundColor: "#9cd7d9",
		padding: "2%",
		borderRadius: 10,
		marginTop: 20,
		paddingHorizontal: 20,
	},
	helpCases: {
		borderBottomColor: "#c7c5c1",
		marginLeft: 30,
		borderBottomWidth: 1,
		paddingVertical: "2%",
		marginRight: 30,
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default styles;
