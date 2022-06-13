import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";

import { MaterialIcons, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import CollapsibleItem from "../../components/CollapsibleItem";

import styles from "./styles";

const ServiceScreen = () => {
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
		<View style={styles.root}>
			<View style={styles.ScrollViewContainer}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ padding: 20 }}
				>
					<CollapsibleItem header={"Popular"} />
					{/* try */}
					<CollapsibleItem header={"Business Clothes"} />
					<CollapsibleItem header={"Outerwear"} />
					<CollapsibleItem header={"Casual Wear"} />
					<CollapsibleItem header={"Footwear"} />
					{/* try end */}
				</ScrollView>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button}>
					<Text style={{ fontSize: 20 }}>Add Item To Cart</Text>
					<Text style={{ fontSize: 20 }}>{"GHS 0.00"}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ServiceScreen;
