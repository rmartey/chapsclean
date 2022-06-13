import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {},
	orderItem: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 5,
		marginVertical: 10,
	},
	textContainer: {},
	quantityContainer: {
		flexDirection: "row",
	},
	listContainer: {
		flexDirection: "column",
		width: "100%",
		backgroundColor: "white",
		marginBottom: 10,
		borderRadius: 20,
	},
	listHeader: {
		flexDirection: "row",
		width: "100%",
		height: 60,
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
		backgroundColor: "blue",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
});

export default styles;
