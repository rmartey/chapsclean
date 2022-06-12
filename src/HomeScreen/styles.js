import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		marginTop: 50,
		padding: 20,
		flex: 1,
		backgroundColor: "#ffffff",
	},
	locationContainer: {
		flexDirection: "row",
		widthL: "100%",
		alignItems: "center",
	},
	locationText: {
		fontSize: 18,
		marginLeft: 10,
		color: "#afd6ed",
	},
	serivicesText: {
		fontSize: 32,
		color: "#1779d4",
		marginTop: 10,
		fontWeight: "bold",
	},
	servicesContainer: {
		width: "100%",
		height: 400,
		//backgroundColor: "blue",
		borderRadius: 25,
		marginVertical: 10,
		//padding: 10,
	},
	servicesImage: {
		height: "100%",
		width: "100%",
		//overflow: "hidden",
	},
	minPriceContainer: {
		width: "25%",
		height: "25%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "blue",
		alignSelf: "flex-end",
		position: "absolute",
		bottom: 20,
		right: 20,
		borderTopLeftRadius: 40,
		borderBottomRightRadius: 40,
	},
});

export default styles;
