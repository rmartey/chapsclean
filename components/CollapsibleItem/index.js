import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";

import { MaterialIcons, EvilIcons, FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";

import OrderItem from "../OrderItem";

const CollapsibleItem = ({ header, cartState }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const setCollapsed = () => {
		setIsCollapsed(!isCollapsed);
	};

	const checkBorder = () => {
		if (isCollapsed) {
			return {
				borderBottomLeftRadius: 20,
				borderBottomRightRadius: 20,
			};
		}
		return {};
	};

	return (
		<View style={styles.listContainer}>
			<Pressable
				style={[styles.listHeader, checkBorder()]}
				onPress={setCollapsed}
			>
				<Text style={{ fontSize: 22 }}>{header}</Text>
				<FontAwesome5 name="gripfire" size={24} color="red" />
			</Pressable>

			<Collapsible collapsed={isCollapsed} style={{ padding: 10 }}>
				<OrderItem item={"Jacket Down"} price={`GHS ` + 0.0} />
				<OrderItem item={"Jacket Down"} price={`GHS ` + 0.0} />
				<OrderItem item={"Jacket Down"} price={`GHS ` + 0.0} />
			</Collapsible>
		</View>
	);
};

export default CollapsibleItem;
