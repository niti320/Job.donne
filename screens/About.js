import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Feather from '@expo/vector-icons/Feather';
import styles from "../theme"
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PanGestureHandler, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useStyles } from '../StylesContext';
import { UserContext } from '../components/userinfo';


const FILE_URI = FileSystem.documentDirectory + 'completedTasks.json';

export default function Completed() {
    const { styles, toggleStyles } = useStyles();
    const navigation = useNavigation();
    const windowHeight = Dimensions.get('window').height;


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
                <View style={[styles.container]}>
                    
                        <View style={styles.about_container}>
                            <View style={styles.about_content}>
                                <View style={styles.about_icon} >
                                    <Image style={{ width: "100%", height: "100%" }} source={require("../assets/mainicon.png")} />
                                </View>
                                <Text style={{ color: "white", fontWeight: "bold", color:"#19abfa",fontSize: 25 }}>job.donne!</Text>
                                <Text style={{ color: styles.footertext.color, fontSize: 15 }}>Developed by Nitin</Text>
                              
                            </View>
                            <View style={styles.about_content}>
                                <View style={styles.about_text}>
                                    <Text style={{ color: styles.footertext.color, fontSize: 13, textAlign:"center" }}>I made this just for personal use.
                                        I Currently don't have plans on deploying it. It's kinda still in development phase.
                                        And more stuff to be added soon. Why am i even writing this, i'm the only user on this. </Text>
                                </View>
                                <View style={styles.about_text}>
                                    <Text style={{ color: styles.footertext.color, fontSize: 13,textAlign:"center" }}>This App performs your basic tasks management. 
                                        Editing, deleting, setting deadlines, storing and clearing tasks. 
                                        I prefered to keep it minimal, because I will just use it for basic purposes. 
                                        Lets See what happens later</Text>
                                </View>
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
