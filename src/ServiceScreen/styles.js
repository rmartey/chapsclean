import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		flex: 1,
		//padding: 20,
		backgroundColor: "#d7dcde",
	},
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
		backgroundColor: "yellow",
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
	buttonContainer: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: "15%",
		padding: 20,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		width: "90%",
		backgroundColor: "yellow",
		height: "80%",
		borderRadius: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
	},
	ScrollViewContainer: {
		width: "100%",
		height: "85%",
		paddingTop: 20,
	},
});

export default styles;
