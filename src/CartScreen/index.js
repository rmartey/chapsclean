import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";

const CartScreen = () => {
	return (
		<View style={styles.root}>
			<View style={styles.exitCart}>
				<MaterialIcons name="clear" size={18} color="black" />
				<Text style={{ color: "blue", fontSize: 18 }}>clear</Text>
			</View>
			<Text style={{ fontSize: 36, marginVertical: 30 }}>
				2 items in the cart for GHS 80.89
			</Text>
			<View style={styles.container}>
				<Text style={{ fontSize: 20, opacity: 0.7 }}>Dry cleaning</Text>
			</View>
			<View style={styles.container}>
				<View style={styles.orderItem}>
					<View style={styles.textContainer}>
						<Text style={{ fontSize: 22 }}>Jacket Down</Text>
						<Text style={{ opacity: 0.7 }}>GHS 10.00</Text>
					</View>
					<View style={styles.quantityContainer}>
						<EvilIcons name="minus" size={24} color="black" />
						<Text>4</Text>
						<EvilIcons name="plus" size={24} color="black" />
					</View>
				</View>
				<View style={styles.orderItem}>
					<View style={styles.textContainer}>
						<Text style={{ fontSize: 22 }}>Jacket Down</Text>
						<Text style={{ opacity: 0.7 }}>GHS 10.00</Text>
					</View>
					<View style={styles.quantityContainer}>
						<EvilIcons name="minus" size={24} color="black" />
						<Text>1</Text>
						<EvilIcons name="plus" size={24} color="black" />
					</View>
				</View>
			</View>
			<View style={styles.container}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text style={{ fontSize: 22, opacity: 0.7, padding: 10 }}>
						{"Pick up & Drop off"}
					</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={{ fontSize: 20, opacity: 0.5 }}>In Person</Text>
						<MaterialIcons
							name="keyboard-arrow-right"
							size={24}
							color="#afb1b3"
						/>
					</View>
				</View>
			</View>
			<View style={styles.container}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text style={{ fontSize: 22, opacity: 0.7, padding: 10 }}>
						{"Pants creased"}
					</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={{ fontSize: 20, opacity: 0.5 }}>No</Text>
						<MaterialIcons
							name="keyboard-arrow-right"
							size={24}
							color="#afb1b3"
						/>
					</View>
				</View>
			</View>

			<View style={styles.container}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text style={{ fontSize: 22, opacity: 0.7, padding: 10 }}>
						{"Level starch"}
					</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={{ fontSize: 20, opacity: 0.5 }}>No</Text>
						<MaterialIcons
							name="keyboard-arrow-right"
							size={24}
							color="#afb1b3"
						/>
					</View>
				</View>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={{ fontSize: 28, color: "white" }}>Order</Text>
				<Text style={{ fontSize: 18, color: "white", opacity: 0.7 }}>
					GHS 80.89
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CartScreen;
