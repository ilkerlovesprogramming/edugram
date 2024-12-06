import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";

export default (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {"Notifications"}
                        </Text>
                    </View>

                    <Text style={styles.text2}>
                        {"Today"}
                    </Text>

                    <View style={styles.row2}>
                        <View style={styles.column2}>
                            <View style={styles.row3}>
                                <Text style={styles.text3}>
                                    {"Avery "}
                                </Text>
                            </View>
                            <Text style={styles.text4}>
                                {"blocked and removed you"}
                            </Text>
                        </View>
                        <Text style={styles.text4}>
                            {"1m"}
                        </Text>
                    </View>

                    <View style={styles.row4}>
                        <View style={styles.column2}>
                            <View style={styles.row5}>
                                <Text style={styles.text3}>
                                    {"Avery "}
                                </Text>
                            </View>
                            <Text style={styles.text4}>
                                {"liked your post"}
                            </Text>
                        </View>
                        <Text style={styles.text4}>
                            {"5m"}
                        </Text>
                    </View>

                    <View style={styles.row6}>
                        <View style={styles.column2}>
                            <Text style={styles.text5}>
                                {"Ella "}
                            </Text>
                            <Text style={styles.text4}>
                                {"shared your post"}
                            </Text>
                        </View>
                        <Text style={styles.text4}>
                            {"5m"}
                        </Text>
                    </View>

                    <View style={styles.row7}>
                        <View style={styles.column2}>
                            <Text style={styles.text6}>
                                {"Ava "}
                            </Text>
                            <Text style={styles.text4}>
                                {"replied to your comment: \"I agree\""}
                            </Text>
                        </View>
                        <Text style={styles.text4}>
                            {"8m"}
                        </Text>
                    </View>

                    <Text style={styles.text7}>
                        {"Yesterday"}
                    </Text>

                    <View style={styles.row6}>
                        <View style={styles.column2}>
                            <Text style={styles.text8}>
                                {"Sophia "}
                            </Text>
                            <Text style={styles.text4}>
                                {"mentioned you in a comment"}
                            </Text>
                        </View>
                        <Text style={styles.text4}>
                            {"12h"}
                        </Text>
                    </View>

                    <View style={styles.row8}>
                        <View style={styles.column2}>
                            <Text style={styles.text8}>
                                {"Mia "}
                            </Text>
                            <Text style={styles.text4}>
                                {"liked your post"}
                            </Text>
                        </View>
                        <Text style={styles.text4}>
                            {"20h"}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
                        <Text style={styles.text9}>
                            {"Clear all notifications"}
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
    button: {
        alignItems: "center",
        backgroundColor: "#A30CF2",
        borderRadius: 20,
        paddingVertical: 14,
        marginHorizontal: 16,
    },
    column: {
        backgroundColor: "#191121",
        paddingBottom: 56,
    },
    column2: {
        flex: 1,
        marginRight: 4,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#191121",
        paddingVertical: 28,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    row2: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#7A3F3F78",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    row3: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    row4: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#16271B",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    row5: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    row6: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#191121",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    row7: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#191121",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    row8: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#191121",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 150,
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 18,
        flex: 1,
    },
    text2: {
        color: "#FFFFFF",
        fontSize: 18,
        marginBottom: 9,
        marginLeft: 17,
    },
    text3: {
        color: "#FFFFFF",
        fontSize: 16,
        marginRight: 5,
    },
    text4: {
        color: "#AD93C6",
        fontSize: 14,
    },
    text5: {
        color: "#FFFFFF",
        fontSize: 16,
        marginBottom: 8,
        marginLeft: 1,
    },
    text6: {
        color: "#FFFFFF",
        fontSize: 16,
        marginBottom: 6,
    },
    text7: {
        color: "#FFFFFF",
        fontSize: 18,
        marginBottom: 9,
        marginLeft: 16,
    },
    text8: {
        color: "#FFFFFF",
        fontSize: 16,
        marginBottom: 8,
    },
    text9: {
        color: "#FFFFFF",
        fontSize: 14,
    },
});