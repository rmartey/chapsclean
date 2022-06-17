import {
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from "react-native";
import React from "react";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

//images
import laundaryimage1 from "../../assets/laundary-image1.jpg";
import cleaningimage from "../../assets/cleaningImage.jpg";

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.root}>
			<View style={styles.locationContainer}>
				<Entypo name="location-pin" size={24} color="#1779d4" />
				<Text style={styles.locationText}>Assin Fosu</Text>
			</View>
			<Text style={styles.serivicesText}>Services</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Service");
					}}
				>
					<View style={styles.servicesContainer}>
						<ImageBackground
							source={laundaryimage1}
							resizeMode="cover"
							style={styles.servicesImage}
							imageStyle={{ borderRadius: 25 }}
						>
							<Text
								style={[
									styles.serivicesText,
									{ marginLeft: 20, marginTop: 20 },
								]}
							>
								Laundary
							</Text>
							<Text style={{ color: "yellow", marginLeft: 20 }}>
								{"Dress & shine"}
							</Text>
							<View style={styles.minPriceContainer}>
								<Text style={{ color: "yellow", fontSize: 18, opacity: 0.9 }}>
									GHS 12.00
								</Text>
								<Text style={{ color: "yellow", fontSize: 16, opacity: 0.6 }}>
									min.
								</Text>
							</View>
						</ImageBackground>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.servicesContainer}>
						<ImageBackground
							source={cleaningimage}
							resizeMode="cover"
							style={styles.servicesImage}
							imageStyle={{ borderRadius: 25 }}
						>
							<Text
								style={[
									styles.serivicesText,
									{ marginLeft: 20, marginTop: 20 },
								]}
							>
								Cleaning
							</Text>
							<Text style={{ color: "yellow", marginLeft: 20 }}>
								{"Dress & shine"}
							</Text>
							<View style={styles.minPriceContainer}>
								<Text style={{ color: "yellow", fontSize: 18, opacity: 0.9 }}>
									GHS 6.00
								</Text>
								<Text style={{ color: "yellow", fontSize: 16, opacity: 0.6 }}>
									min.
								</Text>
							</View>
						</ImageBackground>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
