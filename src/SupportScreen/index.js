import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import * as Linking from "expo-linking";

import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const SupportScreen = () => {
	const phoneCall = () => {
		Linking.openURL("tel:0508218112");
	};

	const sendMail = () => {
		Linking.openURL("mailto:example@email.com");
	};

	const sendSMS = () => {
		Linking.openURL("sms:0508218112");
	};
	return (
		<View style={styles.root}>
			<View
				style={{
					marginTop: 40,
					marginLeft: 20,
					marginBottom: 10,
				}}
			>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>
					How can we help you?
				</Text>
			</View>
			<View
				style={{
					// width: "100%",
					marginLeft: 30,
					borderBottomWidth: 1,
					paddingVertical: "2%",
					marginRight: 30,
					flexDirection: "row",
					justifyContent: "space-between",
					borderBottomColor: "#c7c5c1",
				}}
			>
				<Text style={{ fontSize: 18 }}>App and features?</Text>
				{/* <MaterialIcons name="keyboard-arrow-right" size={24} color="#c7c5c1" /> */}
			</View>
			<View style={styles.helpCases}>
				<Text style={{ fontSize: 18 }}>Account and data?</Text>
				{/* <MaterialIcons name="keyboard-arrow-right" size={24} color="#c7c5c1" /> */}
			</View>
			<View style={styles.helpCases}>
				<Text style={{ fontSize: 18 }}>Payments and pricing?</Text>
				{/* <MaterialIcons name="keyboard-arrow-right" size={24} color="#c7c5c1" /> */}
			</View>
			<View style={styles.helpCases}>
				<Text style={{ fontSize: 18 }}>Need help booking appointment?</Text>
				{/* <MaterialIcons name="keyboard-arrow-right" size={24} color="#c7c5c1" /> */}
			</View>

			<View>
				<TouchableOpacity style={styles.contactContainer} onPress={sendSMS}>
					<View style={{ flexDirection: "row" }}>
						<FontAwesome5
							name="sms"
							size={24}
							color="#636363"
							style={{ alignSelf: "center" }}
						/>
						<View style={{ marginLeft: 18 }}>
							<Text style={{ fontSize: 16, fontWeight: "bold" }}>Inbox</Text>
							<Text>Send message</Text>
						</View>
					</View>
					<View style={{ marginTop: "2%" }}>
						<MaterialIcons
							name="keyboard-arrow-right"
							size={24}
							color="#636363"
						/>
					</View>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.contactContainer} onPress={phoneCall}>
					<View style={{ flexDirection: "row" }}>
						<Feather
							name="phone-call"
							size={24}
							color="#636363"
							style={{ alignSelf: "center" }}
						/>
						<View style={{ marginLeft: 18 }}>
							<Text style={{ fontSize: 16, fontWeight: "bold" }}>Call</Text>

							<Text>Phone call</Text>
						</View>
					</View>
					<View style={{ marginTop: "2%" }}>
						<MaterialIcons
							name="keyboard-arrow-right"
							size={24}
							color="#636363"
						/>
					</View>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.contactContainer} onPress={sendMail}>
					<View style={{ flexDirection: "row" }}>
						<MaterialIcons
							name="email"
							size={24}
							color="#636363"
							style={{ alignSelf: "center" }}
						/>
						<View style={{ marginLeft: 18 }}>
							<Text style={{ fontSize: 16, fontWeight: "bold" }}>Mail</Text>

							<Text>Send Email</Text>
						</View>
					</View>
					<View style={{ marginTop: "2%" }}>
						<MaterialIcons
							name="keyboard-arrow-right"
							size={24}
							color="#636363"
						/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SupportScreen;
