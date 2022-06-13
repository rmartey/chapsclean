import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

import { MaterialIcons, EvilIcons, FontAwesome5 } from "@expo/vector-icons";

const OrderItem = ({ itemName, price }) => {
	return (
		<View style={styles.orderItem}>
			<View style={styles.textContainer}>
				<Text style={{ fontSize: 22 }}>{itemName}</Text>
				<Text style={{ opacity: 0.7 }}>{"GHS " + price.toFixed(2)}</Text>
			</View>
			<View style={styles.quantityContainer}>
				<EvilIcons name="minus" size={24} color="black" />
				<Text>0</Text>
				<EvilIcons name="plus" size={24} color="black" />
			</View>
		</View>
	);
};

export default OrderItem;
