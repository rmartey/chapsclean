import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

import { Entypo } from "@expo/vector-icons";

const ProfileScreen = () => {
	return (
		<View style={styles.root}>
			<View style={styles.iconContainer}>
				<Entypo name="user" size={100} color="#b9bcbd" />
			</View>
			<View style={styles.infoContainer}>
				<Text style={{ color: "#b9bcbd", fontSize: 18 }}>Name</Text>
				<Text style={{ fontSize: 26 }}>Richmond Martey</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={{ color: "#b9bcbd", fontSize: 18 }}>Phone</Text>
				<Text style={{ fontSize: 26 }}>(+233) 508218112</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={{ color: "#b9bcbd", fontSize: 18 }}>Email</Text>
				<Text style={{ fontSize: 26 }}>richkidcypher1@gmail.com</Text>
			</View>
		</View>
	);
};

export default ProfileScreen;
