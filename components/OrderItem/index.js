import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

import { MaterialIcons, EvilIcons, FontAwesome5 } from "@expo/vector-icons";

const OrderItem = ({ item, price }) => {
	return (
		<View style={styles.orderItem}>
			<View style={styles.textContainer}>
				<Text style={{ fontSize: 22 }}>{item}</Text>
				<Text style={{ opacity: 0.7 }}>{price}</Text>
			</View>
			<View style={styles.quantityContainer}>
				<EvilIcons name="minus" size={24} color="black" />
				<Text>4</Text>
				<EvilIcons name="plus" size={24} color="black" />
			</View>
		</View>
	);
};

export default OrderItem;
