import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Feather from '@expo/vector-icons/Feather';
import styles from '../theme';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useStyles } from '../StylesContext';
import Ionicons from '@expo/vector-icons/Ionicons';

import { PanGestureHandler, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';


import { UserContext } from '../components/userinfo';


const FILE_URI = FileSystem.documentDirectory + 'completeTasks.json';

const USERNAME_FILE_URI = FileSystem.documentDirectory + 'username.json';



export default function Completed() {
    const { styles } = useStyles();
    const navigation = useNavigation();
    const [completedTasks, setCompletedTasks] = useState([]);
    const windowHeight = Dimensions.get('window').height;
    const { userImage } = useContext(UserContext);

    const { username } = useContext(UserContext);

    useEffect(() => {
        loadCompletedTasks();
    }, []);

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
                return '#d62a66';
            case 'Medium':
                return '#2278f8';
            case 'Low':
                return '#2ecc80';
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
                            <Text style={{ color: "white", fontSize: 17, fontWeight:"bold",  }}> {"- Completed Tasks -"}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.width_margin]}>
                        <View style={[styles.sort_bar,]}>
                            <TouchableOpacity style={styles.openAdder} onPress={clearCompletedTasks}>
                                <Text style={{ fontSize: 15, color: styles.footertext.color2 }}>Clear Tasks</Text>

                                <MaterialIcons name="delete-outline" size={24} color={styles.footertext.color2} />


                            </TouchableOpacity>

                        </View>
                        <ScrollView contentContainerStyle={styles.main_container}>
                            {completedTasks.length > 0 ? (
                                completedTasks.map((task, index) => (
                                    <View key={task.id} style={styles.task_box}>
                                        <View key={index} style={[styles.innertask]}>
                                            <View style={[styles.number_container, { backgroundColor: styles.buttonback2.backgroundColor }]}>
                                                <Text style={[styles.task_number, { color: getBackgroundColor(task.priority) }]}>
                                                    {index + 1}
                                                </Text>
                                            </View>
                                            <View style={styles.box_text}>
                                                <View style={styles.task_desc}>
                                                    <Text style={{ fontWeight: "thin", color: styles.footertext.color, fontSize: 15, textDecorationLine: 'line-through' }}>
                                                        {task.text}
                                                    </Text>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10, opacity: 0.7 }}>
                                    <Feather name="smile" size={30} color="#2196f3" />
                                    <Text style={styles.emptytext}>"No Completed Tasks Yet"</Text>
                                </View>
                            )}
                        </ScrollView>
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
