import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
//import Collapsible from "react-native-collapsible";

//import { MaterialIcons, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import CollapsibleItem from "../../components/CollapsibleItem";

//data
import data from "../../assets/data/data";

import styles from "./styles";

const ServiceScreen = () => {
	const navigation = useNavigation();
	const cartState = useState();
	return (
		<View style={styles.root}>
			<View style={styles.ScrollViewContainer}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ paddingHorizontal: 20 }}
				>
					{/*<CollapsibleItem header={data[0].header} cartState={cartState} />
					<CollapsibleItem header={data[1].header} cartState={cartState} />
					<CollapsibleItem header={data[2].header} cartState={cartState} />
					<CollapsibleItem header={data[3].header} cartState={cartState} />
					<CollapsibleItem header={data[4].header} cartState={cartState} />*/}

					{data.map((d) => (
						<CollapsibleItem
							header={d.header}
							//cartState={cartState}
							key={d.id}
							items={d.items}
						/>
					))}
				</ScrollView>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Cart")}
				>
					<Text style={{ fontSize: 20 }}>Add Item To Cart</Text>
					<Text style={{ fontSize: 20 }}>{"GHS 0.00"}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ServiceScreen;
