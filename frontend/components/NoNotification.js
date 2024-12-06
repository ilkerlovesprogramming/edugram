import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";

export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.column}>
					<View style={styles.row}>
						<Text style={styles.text}>
							{"Notifications"}
						</Text>
					</View>

					<Text style={styles.text2}>
						{"All caught up!"}
					</Text>

					<Text style={styles.text3}>
						{"You have no new notifications.\n Grab some connection!"}
					</Text>

					<TouchableOpacity style={styles.buttonRow} onPress={() => alert('Pressed!')}>
						<Text style={styles.text4}>
							{"Explore"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#A30CF2",
		borderRadius: 20,
		paddingVertical: 8,
		marginHorizontal: 119,
	},
	column: {
		backgroundColor: "#191121",
		paddingBottom: 56,
		flexGrow: 1,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#191121",
		paddingVertical: 28,
		paddingHorizontal: 16,
		marginBottom: 43,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	scrollViewContent: {
		flexGrow: 1,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 18,
		flex: 1,
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 22,
		marginBottom: 33,
		marginLeft: 16,
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 16,
		marginBottom: 41,
		marginHorizontal: 17,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 14,
	},
	view: {
		backgroundColor: "#191121",
		paddingHorizontal: 16,
		marginBottom: 234,
	},
});