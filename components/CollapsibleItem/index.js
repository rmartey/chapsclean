import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";

import { MaterialIcons, EvilIcons, FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";

const CollapsibleItem = ({ header }) => {
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
			</Collapsible>
		</View>
	);
};

export default CollapsibleItem;
