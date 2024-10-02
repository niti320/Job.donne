//Imports
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useContext, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, Dimensions, Modal, SafeAreaView, Alert, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Swipeable } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather';
import { PanGestureHandler, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as FileSystem from 'expo-file-system';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Animated, PanResponder } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../components/userinfo';
// import styles from "../theme";
import { useStyles } from '../StylesContext';


// File Handling Variables
const ACTIVE_TASKS_FILE_URI = FileSystem.documentDirectory + 'activeTasks.json';
const FILE_URI = FileSystem.documentDirectory + 'completeTasks.json';
const USERNAME_FILE_URI = FileSystem.documentDirectory + 'username.json';
const USERIMAGE_FILE_URI = FileSystem.documentDirectory + 'userimage.json';



export default function Home() {
    const { styles, toggleStyles } = useStyles();

    // States and Variables
    const animatedValues = useRef({}).current;
    const navigation = useNavigation();
    const windowHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const [priority, setPriority] = useState('High');
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);
    const { userImage } = useContext(UserContext);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [AdderVisible, setAdderVisible] = useState(false);
    const [NotificationScreen, setNotifScreen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const { username, setUsername } = useContext(UserContext);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editText, setEditText] = useState('');
    const slideAnim = useRef(new Animated.Value(200)).current;
    const rotateValue = useRef(new Animated.Value(0)).current;
    const today = new Date();
    const date = today.getDate();
    const month = today.toLocaleDateString('en-US', { month: 'long' });
    const [deadlines, setDeadlines] = useState({});
    const [buttonText, setButtonText] = useState({});
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useState(null);
    const images = [
        require('../assets/user/user_icon2.png'),
        require('../assets/user/user_icon3.png'),
        require('../assets/user/user_icon1.png'),
        require('../assets/user/user_icon4.png'),

    ];

    const [isDarktheme, setTheme] = useState(true);

    const toggleTheme = () => {
        toggleStyles();
        isDarktheme ? setTheme(false) : setTheme(true);
    }

    const priorityValues = {
        High: 1,
        Medium: 2,
        Low: 3,
    };

    // Deadline and Time
    const handleTimeChange = (event, date) => {
        if (event.type === 'set') {
            setShowTimePicker(false);
            if (date) {
                const deadlineDate = new Date();
                deadlineDate.setHours(date.getHours());
                deadlineDate.setMinutes(date.getMinutes());
                deadlineDate.setSeconds(0);
                deadlineDate.setMilliseconds(0);

                const formattedTime = deadlineDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                setDeadlines(prev => ({ ...prev, [currentTaskId]: deadlineDate }));
                setButtonText(prev => ({ ...prev, [currentTaskId]: formattedTime }));
            }
        } else {
            setShowTimePicker(false);
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            Object.entries(deadlines).forEach(([taskId, deadline]) => {
                const task = tasks.find(task => task.id === parseInt(taskId));

                if (task && now >= new Date(deadline)) {
                    opennotif(` "${task.text}".`, task.priority);
                    console.log(
                        'Deadline Reached',
                        `The deadline for task "${task.text}" has been reached.`,
                        [{ text: 'OK' }]
                    );

                    setDeadlines(prev => {
                        const { [taskId]: _, ...rest } = prev;
                        return rest;
                    });

                    setButtonText(prev => {
                        const { [taskId]: _, ...rest } = prev;
                        return rest;
                    });
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [deadlines, tasks]);



    //Editing of tasks
    const handleEditTask = async (taskId) => {
        if (editText.trim()) {
            const updatedTasks = tasks.map(task =>
                task.id === taskId ? { ...task, text: editText } : task
            );
            setTasks(updatedTasks);
            setEditingTaskId(null);
            setEditText('');
            await saveTasks(updatedTasks);
        }
    };

    //Sort
    const sortTasksByPriority = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            return priorityValues[a.priority] - priorityValues[b.priority];
        });

        setTasks(sortedTasks);
    };


    //Delete Tasks
    const handleDelete = async (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        await saveTasks(updatedTasks);
    };

    //Task Manipulations---------
    const onGestureEvent = ({ nativeEvent }) => {
        const { translationY, velocityX } = nativeEvent;

        if (translationY < -windowHeight * 0.2 && Math.abs(velocityX) > 500) {
            navigation.navigate('Completed');
        }
    };
    useEffect(() => {
        loadTasks();
    }, []);
    const renderRightActions = (taskId) => {
        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 0, width: 60, padding: 10, backgroundColor: styles.buttonback2.backgroundColor, borderRadius: 10 }}
                onPress={() => handleDelete(taskId)}
            >
                <MaterialIcons name="delete-outline" size={25} color={styles.footertext.color} />
            </TouchableOpacity>
        );
    };
    const renderLeftActions = (taskId) => {
        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', marginRight: 0, width: 60, padding: 10, backgroundColor: styles.buttonback2.backgroundColor, borderRadius: 10 }}
                onPress={() => {

                    setEditingTaskId(taskId);
                    setEditText(tasks.find(task => task.id === taskId).text);
                }}
            >
                <Feather name="edit" size={23} color={styles.footertext.color} />
            </TouchableOpacity>
        );
    };


    //Load Task into Task Array
    const loadTasks = async () => {
        try {
            const fileInfo = await FileSystem.getInfoAsync(ACTIVE_TASKS_FILE_URI);
            if (fileInfo.exists) {
                const fileContent = await FileSystem.readAsStringAsync(ACTIVE_TASKS_FILE_URI);
                const tasksFromFile = JSON.parse(fileContent) || [];
                setTasks(tasksFromFile);
            } else {
                setTasks([]);
            }
        } catch (error) {
            console.log('Error reading tasks:', error);
        }
    };
    const saveTasks = async (tasks) => {
        try {
            await FileSystem.writeAsStringAsync(ACTIVE_TASKS_FILE_URI, JSON.stringify(tasks));
        } catch (error) {
            console.log('Error saving tasks:', error);
        }
    };


    //Checkbox Toggle
    const handleCheckboxToggle = async (taskId) => {

        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            const task = tasks[taskIndex];
            const updatedCompletedTasks = [...completedTasks, task];
            const updatedTasks = tasks.filter(task => task.id !== taskId);


            await delay(300);

            setCompletedTasks(updatedCompletedTasks);
            setTasks(updatedTasks);

            await saveTasks(updatedTasks);
            await saveCompletedTasks(updatedCompletedTasks);
        }
    };


    useEffect(() => {
        loadCompletedTasks();
        loadUsername();
        loadUserImage();
    }, []);

    const loadUserImage = async () => {
        try {
            const fileInfo = await FileSystem.getInfoAsync(USERIMAGE_FILE_URI);
            if (fileInfo.exists) {
                const fileContent = await FileSystem.readAsStringAsync(USERIMAGE_FILE_URI);
                const { imageUri } = JSON.parse(fileContent) || {};
                if (imageUri) {
                    setUserImage(imageUri);
                }
            }
        } catch (error) {
            console.log('Error reading user image:', error);
        }
    };
    const { setUserImage } = useContext(UserContext);
    const [selectedImage, setSelectedImage] = useState(null);


    // Adding Tasks
    const handleAddTask = () => {
        if (taskText.trim()) {
            const newTask = { id: Date.now(), text: taskText, priority };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setTaskText('');
            setPriority('High');
            // closeAdder();
            saveTasks(updatedTasks);
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


    //Sending Completed tasks to Completed Page / Array
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

    // Loading Username from File
    const loadUsername = async () => {
        try {
            const fileInfo = await FileSystem.getInfoAsync(USERNAME_FILE_URI);
            if (fileInfo.exists) {
                const fileContent = await FileSystem.readAsStringAsync(USERNAME_FILE_URI);
                const { username } = JSON.parse(fileContent) || {};
                if (username) {
                    setUsername(username);
                }
            }
        } catch (error) {
            console.log('Error reading username:', error);
        }
    };

    const saveUsername = async (username) => {
        try {
            await FileSystem.writeAsStringAsync(USERNAME_FILE_URI, JSON.stringify({ username }));
        } catch (error) {
            console.log('Error saving username:', error);
        }
    };


    const closenotif = () => {
        setNotifScreen(false);
        setNotificationMessage('');

    };
    const openAdder = () => {
        if (AdderVisible) {
            Animated.timing(slideAnim, {
                toValue: 300,
                duration: 150,
                useNativeDriver: true,
            }).start(() => setAdderVisible(false));

            // Rotate back to 0 degrees
            Animated.timing(rotateValue, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start();
        } else {
            // Open the modal
            setAdderVisible(true);
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start();


            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start();
        }
    };

    // Interpolate rotation value to rotate the icon
    const rotateInterpolate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    const animatedRotateStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };

    const closeAdder = () => {
        setAdderVisible(false);
    }
    const [prioritycolor, setColor] = useState("black");
    const opennotif = (message, p) => {
        setColor(getBackgroundColor(p));
        setNotifScreen(true);
        setNotificationMessage(message);

    };

    const handleSaveChanges = () => {
        if (newUsername.trim()) {
            setUsername(newUsername);
            saveUsername(newUsername);
            setNewUsername('');
        }
        closeModal();
    };
    const saveCompletedTasks = async (completedTasks) => {
        try {
            await FileSystem.writeAsStringAsync(FILE_URI, JSON.stringify(completedTasks));
        } catch (error) {
            console.log('Error saving completed tasks:', error);
        }
    };

    const handleImageChange = () => {

        Alert.alert('Change Image', 'Image picker functionality goes here');
    };

    const CustomModal = ({ visible, message, onClose }) => {
        return (
            <Modal
                visible={visible}
                transparent={true}
                animationType="slide"
                onRequestClose={onClose}
            >
                <View style={styles.notifcontainer}>
                    <View style={styles.notmodal}>
                        <View style={[styles.notifbox]}>


                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
                                <View style={[styles.task_box, { justifyContent: "space-between", alignItems: "center", padding: 10, backgroundColor: "#c82b3dff" }]}>
                                    <Text style={{ color: "white", fontSize: 15, }}>{message}</Text>
                                    <TouchableOpacity style={[styles.notifclose]} onPress={onClose}>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>Unfinished</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    };


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <SafeAreaView style={styles.container}>

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
                            <TouchableOpacity
                                onPress={toggleTheme}
                                style={[styles.openAdder,{width:40,}]}>
                                <Ionicons
                                    name={isDarktheme ? 'moon' : 'sunny'}
                                    size={24}
                                    color={styles.footertext.color2}
                                />
                            </TouchableOpacity>


                        </View>



                        <View style={styles.sort_section}>
                            <View style={[styles.sortButton, { flex: 1, borderWidth: 0, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff00" }]} >
                                <Text style={{ color: "white", fontSize: 17,fontWeight: 'bold', }}>- {month} <Text style={{ }}>{date} -</Text></Text>
                            </View>


                        </View>
                    </View>
                    <View style={[styles.width_margin]}>
                        <View style={[styles.sort_bar,]}>
                            <TouchableOpacity style={styles.openAdder} onPress={openAdder}>
                                <Text style={{ fontSize: 15, color: styles.footertext.color2 }}>Add Task</Text>
                                <Animated.View style={[animatedRotateStyle]}>
                                    <Ionicons name="add-sharp" size={24} color={styles.footertext.color2} />

                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.openAdder]} onPress={sortTasksByPriority} >
                                <Text style={{ fontSize: 15, color: styles.footertext.color2 }}>Sort</Text>
                                <MaterialCommunityIcons name="sort" size={24} color={styles.footertext.color2} />
                            </TouchableOpacity>
                        </View>



                        <ScrollView contentContainerStyle={styles.main_container}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}>
                            {tasks.length === 0 ? (
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 5, opacity: 0.7 }}>
                                    <MaterialIcons name="format-list-bulleted-add" size={30} color={styles.footertext.color} />
                                    <Text style={styles.emptytext}>"Let's do something <Text style={{ fontWeight: "bold" }}>today</Text>"</Text>
                                </View>
                            ) : (
                                tasks.map((task) => (
                                    <View key={task.id} style={styles.task_box}>
                                        <Swipeable


                                            renderRightActions={() => renderRightActions(task.id)}
                                            renderLeftActions={() => renderLeftActions(task.id)}
                                        >
                                            <View style={styles.innertask}>
                                                <View style={[styles.number_container, { backgroundColor: styles.buttonback2.backgroundColor }]}>
                                                    <Text style={[styles.task_number, { color: getBackgroundColor(task.priority) }]}>
                                                        {tasks.findIndex(t => t.id === task.id) + 1}
                                                    </Text>
                                                </View>
                                                <View style={styles.box_text}>
                                                    <View style={styles.task_desc}>
                                                        {editingTaskId === task.id ? (
                                                            <TextInput
                                                                value={editText}
                                                                onChangeText={setEditText}
                                                                style={{ fontWeight: 'thin', color: styles.footertext.color, fontSize: 15 }}
                                                                onBlur={() => handleEditTask(task.id)}
                                                                autoFocus
                                                            />
                                                        ) : (
                                                            <Text
                                                                style={{ fontWeight: 'thin', color: styles.footertext.color, fontSize: 15 }}
                                                            >
                                                                {task.text}
                                                            </Text>
                                                        )}
                                                    </View>
                                                    <View style={styles.task_func}>
                                                        <TouchableOpacity
                                                            style={styles.deadlinebutton}
                                                            onPress={() => {
                                                                setCurrentTaskId(task.id);
                                                                setShowTimePicker(true);
                                                            }}
                                                        >
                                                            <Text style={!buttonText[task.id] ? { color: styles.footertext.color } : { color: "#0a76d4", fontWeight: "bold" }}>
                                                                {buttonText[task.id] || "Set Time"}
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <BouncyCheckbox size={22} fillColor='#2296f3' onPress={() => handleCheckboxToggle(task.id)} />
                                                    </View>
                                                </View>
                                            </View>
                                        </Swipeable>
                                    </View>
                                ))
                            )}
                            {showTimePicker && (
                                <DateTimePicker
                                    themeVariant='light'
                                    mode="time"
                                    display='spinner'

                                    value={new Date()}
                                    onChange={handleTimeChange}
                                />
                            )}
                        </ScrollView>

                        {AdderVisible && (
                            <Animated.View style={[styles.AdderScreenModal, { transform: [{ translateY: slideAnim }] }]}>
                                <View style={styles.AdderContainer}>
                                    <View style={styles.task_input}>
                                        <View style={styles.inputbox}>
                                            <TextInput
                                                style={{ flex: 1, color: styles.footertext.color }}
                                                placeholder='Add Task'
                                                placeholderTextColor={"#919191"}
                                                value={taskText}
                                                onChangeText={setTaskText}
                                            />
                                        </View>
                                        <TouchableOpacity style={styles.task_adder} onPress={handleAddTask}>
                                            <Ionicons name="add-circle-sharp" size={60} color="#33ae8b" />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.priority_menu}>
                                        <Text style={{ fontSize: 15, color: styles.footertext.color, textAlign: "center", padding: 5 }}>Select Priority</Text>
                                        <View style={styles.radioContainer}>
                                            <TouchableOpacity style={[styles.radioButtonWrapper, { backgroundColor: "#d62a66" }]} onPress={() => setPriority('High')}>
                                                <RadioButton
                                                    onPress={() => setPriority('High')}
                                                    value="High"
                                                    uncheckedColor='white'
                                                    status={priority === 'High' ? 'checked' : 'unchecked'}
                                                    color='#fff'
                                                />
                                                <Text style={styles.radioLabel}>High</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.radioButtonWrapper, { backgroundColor: "#2196f3" }]} onPress={() => setPriority('Medium')}>
                                                <RadioButton
                                                    onPress={() => setPriority('Medium')}
                                                    value="Medium"
                                                    uncheckedColor='white'
                                                    status={priority === 'Medium' ? 'checked' : 'unchecked'}
                                                    color="#fff"
                                                />
                                                <Text style={styles.radioLabel}>Medium</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.radioButtonWrapper, { backgroundColor: "#339e6a" }]} onPress={() => setPriority('Low')}>
                                                <RadioButton
                                                    onPress={() => setPriority('Low')}
                                                    value="Low"
                                                    uncheckedColor='white'
                                                    color='#FFF'
                                                    status={priority === 'Low' ? 'checked' : 'unchecked'}
                                                />
                                                <Text style={styles.radioLabel}>Low</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </Animated.View>
                        )}

                    </View>





                    <CustomModal
                        visible={NotificationScreen}
                        message={notificationMessage}
                        onClose={closenotif}
                    />

                    <StatusBar

                        style={styles.statusbartext.style}
                        backgroundColor={styles.statusbar.backgroundColor}
                    />
                </SafeAreaView>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
}


