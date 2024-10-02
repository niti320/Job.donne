import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Feather from '@expo/vector-icons/Feather';
// import styles from '../theme';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import quotes from '../components/quotes';
import Footer from '../components/Footer';
import { useStyles } from '../StylesContext';

import { PanGestureHandler, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';


import { UserContext } from '../components/userinfo';


const FILE_URI = FileSystem.documentDirectory + 'completeTasks.json';
const USERNAME_FILE_URI = FileSystem.documentDirectory + 'username.json';


export default function Inspire() {
    const { styles, toggleStyles } = useStyles();
    const navigation = useNavigation();
    const [completedTasks, setCompletedTasks] = useState([]);
    const windowHeight = Dimensions.get('window').height;
    const { userImage } = useContext(UserContext);

    const { username } = useContext(UserContext);

    useEffect(() => {
        loadCompletedTasks();
    }, []);

    const [quote, setQuote] = useState('');

    useEffect(() => {
        getRandomQuote();
    }, []);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex].text);
    };


    const goToHome = () => {
        navigation.navigate('Home');
    };
    const onGestureEvent = ({ nativeEvent }) => {
        const { translationY, velocityX } = nativeEvent;

        // Swipe left detection
        if (translationY < windowHeight * 0.2 && Math.abs(velocityX) > 500) {
            // Navigate to the "Completed" page on left swipe
            navigation.navigate('Home');
        }
    };

    const loadCompletedTasks = async () => {
        try {
            const fileInfo = await FileSystem.getInfoAsync(FILE_URI);
            if (fileInfo.exists) {
                const fileContent = await FileSystem.readAsStringAsync(FILE_URI);
                const tasksFromFile = JSON.parse(fileContent) || [];
                setCompletedTasks(tasksFromFile);
            } else {
                setCompletedTasks([]);
            }
        } catch (error) {
            console.log('Error reading completed tasks:', error);
        }
    };

    const clearCompletedTasks = async () => {
        try {
            await FileSystem.deleteAsync(FILE_URI);
            setCompletedTasks([]);
        } catch (error) {
            console.log('Error clearing completed tasks:', error);
        }
    };

    const getBackgroundColor = (priority) => {
        switch (priority) {
            case 'High':
                return '#4b2eed';
            case 'Medium':
                return '#2196f3';
            case 'Low':
                return '#339e6a';
            default:
                return '#333';
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <View style={styles.container}>

                    <View style={styles.topcontainer}>
                        <View style={styles.headerbar}>
                            <View style={styles.user_info} >
                                <TouchableOpacity style={styles.user_name}>
                                    <View style={styles.userimage} >
                                        {userImage ? <Image source={userImage} style={styles.image2} /> : <Feather name="user" size={28} color={"white"} />}
                                    </View>
                                    <Text style={styles.bigfont}>{username}</Text>
                                </TouchableOpacity>
                            </View>


                        </View>


                        <View style={styles.sort_section}>
                            <View style={[styles.sortButton, { flex: 1, justifyContent: "center", alignItems: "center" }]} >
                                <Text style={{ color: "white", fontSize: 17, fontWeight:"bold",  }}> {"- Get Inspired -"}</Text>
                            </View>


                        </View>
                    </View>
                    <View style={[styles.width_margin, { alignItems: "center" }]}>
                        
                        <View style={[styles.motiv, { height: 450, width: "100%" }]}>



                            <TouchableOpacity style={[styles.motivshowcase]} onPress={getRandomQuote}>
                                <Text style={{ letterSpacing: -0.5, color: "white", fontSize: 25, fontWeight: "bold", color: styles.footertext.color }}>"{quote}"</Text>
                            </TouchableOpacity>


                        </View>
                    </View>

                    <StatusBar

                        style={styles.statusbartext.style}
                        backgroundColor={styles.statusbar.backgroundColor}
                    />
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
}
