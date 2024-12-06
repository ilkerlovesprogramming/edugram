import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet } from "react-native";
import colors from '../../theme/colors';

import { Animated, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Animated.View style={[styles.column, { opacity: fadeAnim }]}>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('SelfProfile')}>
							<FontAwesome5 name="user-circle" size={24} color="black" />
						</TouchableOpacity>
						<Text style={styles.text}>{"EduGram"}</Text>
						<View style={styles.iconContainer}>
							<TouchableOpacity onPress={() => navigation.navigate('SearchPageEmpty')} style={styles.iconButton}>
								<FontAwesome5 name="search" size={24} color="black" />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => navigation.navigate('NoNotification')} style={styles.iconButton}>
								<FontAwesome5 name="bell" size={24} color="black" />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.row2}>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image3}
						/>
						<View style={styles.column2}>
							<Text style={styles.text2}>{"Lee Granjdima"}</Text>
							<Text style={styles.text3}>{"2h ago"}</Text>
						</View>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image4}
						/>
					</View>
					<Text style={styles.text4}>
						{"This week we are going to talk about the history of art."}
					</Text>
					<View style={styles.row3}>
						<TouchableOpacity 
							style={styles.socialButton}
							onPress={() => {
								const newAnim = new Animated.Value(1);
								Animated.sequence([
									Animated.spring(newAnim, {
										toValue: 0.8,
										useNativeDriver: true,
									}),
									Animated.spring(newAnim, {
										toValue: 1,
										useNativeDriver: true,
									})
								]).start();
							}}>
							<FontAwesome5 name="heart" size={24} color={colors.primary} />
							<Text style={styles.socialText}>2.5k</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.socialButton}>
							<FontAwesome5 name="comment" size={24} color="#666" />
							<Text style={styles.socialText}>483</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.socialButton}>
							<FontAwesome5 name="share" size={24} color="#666" />
							<Text style={styles.socialText}>124</Text>
						</TouchableOpacity>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text5}>{"12"}</Text>
						<View style={styles.box2}></View>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image5}
						/>
						<View style={styles.view}>
							<Text style={styles.text5}>{"3"}</Text>
						</View>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text5}>{"2"}</Text>
					</View>
					<View style={styles.row2}>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image6}
						/>
						<View style={styles.column3}>
							<Text style={styles.text2}>{"Kira X"}</Text>
							<Text style={styles.text3}>{"4h ago"}</Text>
						</View>
					</View>
					<Text style={styles.text6}>
						{"I'm looking for a study group for the upcoming midterm. Anyone interested?"}
					</Text>
					<View style={styles.view2}>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image7}
						/>
					</View>
					<View style={styles.row4}>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text5}>{"22"}</Text>
						<View style={styles.box}></View>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text7}>{"7"}</Text>
						<Image
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
							resizeMode={"stretch"}
							style={styles.image5}
						/>
						<Text style={styles.text5}>{"5"}</Text>
					</View>
					<View style={styles.column4}>
						<View style={styles.row5}>
							<Image
								source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
								resizeMode={"stretch"}
								style={styles.image2}
							/>
							<View style={styles.box}></View>
							<Image
								source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
								resizeMode={"stretch"}
								style={styles.image8}
							/>
							<Image
								source={{uri: "https://i.imgur.com/1tMFzp8.png"}}
								resizeMode={"stretch"}
								style={styles.image2}
							/>
						</View>
						<View style={styles.row6}>
							<Text style={styles.text8}>{"Home"}</Text>
							<Text style={styles.text9}>{"Search"}</Text>
							<Text style={styles.text10}>{"Friends"}</Text>
						</View>
					</View>
					<View style={styles.box3}></View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};