import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		padding: 20,
		flex: 1,
	},
	//exitCart: {
	//	flexDirection: "row",
	//	width: "100%",
	//	justifyContent: "space-between",
	//},
	container: {
		width: "100%",
		borderBottomWidth: 1,
		padding: 10,
		borderBottomColor: "#d0d3d6",
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
	button: {
		position: "absolute",
		bottom: 10,
		width: "90%",
		height: "8%",
		backgroundColor: "#f5d533",
		borderRadius: 20,
		alignSelf: "center",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
});

export default styles;
