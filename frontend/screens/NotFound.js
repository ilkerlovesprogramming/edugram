import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View >
					<View style={styles.column}>
						<Text style={styles.text}>
							{"Page not found"}
						</Text>
						<Text style={styles.text2}>
							{"The page you were looking for doesn't exist. Try restarting or updating the app."}
						</Text>
						<View style={styles.box}>
						</View>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.absoluteImage}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteImage: {
		position: "absolute",
		bottom: -15,
		right: 0,
		left: 0,
		borderRadius: 12,
		height: 715,
	},
	box: {
		height: 20,
		backgroundColor: "#1C1121",
	},
	column: {
		backgroundColor: "#331A1A",
		paddingTop: 25,
		paddingBottom: 700,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 22,
		marginBottom: 22,
		marginLeft: 17,
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 16,
		marginBottom: 7,
		marginHorizontal: 16,
	},
});