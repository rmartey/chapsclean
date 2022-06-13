import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
//import Collapsible from "react-native-collapsible";

//import { MaterialIcons, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import CollapsibleItem from "../../components/CollapsibleItem";

import styles from "./styles";

const ServiceScreen = () => {
	const cartState = useState();
	return (
		<View style={styles.root}>
			<View style={styles.ScrollViewContainer}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ paddingHorizontal: 20 }}
				>
					<CollapsibleItem header={"Popular"} cartState={cartState} />
					{/* try */}
					<CollapsibleItem header={"Business Clothes"} cartState={cartState} />
					<CollapsibleItem header={"Outerwear"} cartState={cartState} />
					<CollapsibleItem header={"Casual Wear"} cartState={cartState} />
					<CollapsibleItem header={"Footwear"} cartState={cartState} />
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
