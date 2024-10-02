import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, Button, StatusBar } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Feather from '@expo/vector-icons/Feather';
import styles from '../theme';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Footer from '../components/Footer';
import { useStyles } from '../StylesContext';


import { PanGestureHandler, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';


import { UserContext } from '../components/userinfo';


const FILE_URI = FileSystem.documentDirectory + 'completeTasks.json';
const USERNAME_FILE_URI = FileSystem.documentDirectory + 'username.json';
const USERIMAGE_FILE_URI = FileSystem.documentDirectory + 'userimage.json';


export default function User() {
    const { styles, toggleStyles } = useStyles();
    const navigation = useNavigation();
    const { userImage } = useContext(UserContext);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [newUsername, setNewUsername] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const windowHeight = Dimensions.get('window').height;
    const { username, setUsername } = useContext(UserContext);
    const images = [
        require('../assets/user/user_icon2.png'),
        require('../assets/user/user_icon3.png'),
        require('../assets/user/user_icon1.png'),
        require('../assets/user/user_icon4.png'),
       
    ];

    const handleEditPress = () => {
        if (isEditing) {
            // Save changes and exit editing mode
            setUsername(newUsername);
            handleSaveChanges();
        }
        setIsEditing(!isEditing); // Toggle edit mode
    };
    useEffect(() => {
        loadCompletedTasks();
    }, []);

    const goToHome = () => {
        navigation.navigate('Home');
    };
    const handleSaveChanges = () => {
        if (newUsername.trim()) {
            setUsername(newUsername);
            saveUsername(newUsername);
            setNewUsername('');
        }
    };

    const saveUsername = async (username) => {
        try {
            await FileSystem.writeAsStringAsync(USERNAME_FILE_URI, JSON.stringify({ username }));
        } catch (error) {
            console.log('Error saving username:', error);
        }
    };
    const handleSelectImage = async () => {
        if (selectedImage !== null) {
            const imageUri = images[selectedImage];
            setUserImage(imageUri);
            await saveUserImage(imageUri);
        }
    };

    const saveUserImage = async (imageUri) => {
        try {
            await FileSystem.writeAsStringAsync(USERIMAGE_FILE_URI, JSON.stringify({ imageUri }));
        } catch (error) {
            console.log('Error saving user image:', error);
        }
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
    useEffect(() => {
        loadCompletedTasks();
        loadUsername();
        loadUserImage();
    }, []);

    const loadUsername = async () => {
        try {
            const fileInfo = await FileSystem.getInfoAsync(USERNAME_FILE_URI);
            if (fileInfo.exists) {
                const fileContent = await FileSystem.readAsStringAsync(USERNAME_FILE_URI);
                const { username } = JSON.parse(fileContent) || {};
                if (username) {
                    setUsername(username);
                    setNewUsername(username); // Pre-fill the input if in editing mode
                }
            }
        } catch (error) {
            console.log('Error reading username:', error);
        }
    };

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



    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <View style={styles.container}>

                    <View style={[styles.topcontainer, {justifyContent:"center", alignItems:"center", gap:15,}]}>


                        <View style={[styles.userimage, { width: 100, height: 100, borderRadius: 100 }]} >
                        {userImage ? <Image source={userImage} style={styles.image2} /> : <Feather name="user" size={28} color={"white"} />}
                        </View>


                        <View style={[styles.openAdder,{borderWidth:0.4,elevation:0,width:"90%", justifyContent:"space-between", height:50, paddingHorizontal:15, backgroundColor:styles.buttonback.backgroundColor}]}>
                            {isEditing ? (
                                <TextInput
                                    style={{ flex: 1, color: "white", fontSize: 18 }}
                                    value={newUsername}
                                    onChangeText={setNewUsername}
                                    autoFocus
                                    onSubmitEditing={handleEditPress} // Save changes when user presses 'Enter'
                                />
                            ) : (
                                <Text style={styles.usernameText}>{username}</Text>
                            )}
                            <TouchableOpacity onPress={handleEditPress} style={styles.editIcon}>
                                <Feather name={isEditing ? "check" : "edit"} size={24} color="white" />
                            </TouchableOpacity>
                        </View>



                        <View style={styles.sort_section}>
                            <View style={[styles.sortButton, { flex: 1, justifyContent: "center", alignItems: "center", }]} >
                            <Text style={{ color: "white", fontSize: 17, fontWeight:"bold",  }}> {"- Edit Profile -"}</Text>
                            </View>


                        </View>
                    </View>
                    <View style={[styles.width_margin, { height: windowHeight - 250, }]}>
                        <View style={styles.modalContent}>

                            <View style={styles.imageselecter}>
                             

                                <View style={styles.imageContainer}>
                                    {images.map((image, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={[
                                                styles.imageWrapper,
                                                selectedImage === index && styles.selectedImage,
                                            ]}
                                            onPress={() => setSelectedImage(index)}
                                        >
                                            <Image source={image} style={styles.image} />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <TouchableOpacity style={[styles.openAdder,{marginTop:10, backgroundColor:"#1a1d2eff"}]} onPress={handleSelectImage}>
                                    <Text style={{ color: "white", fontSize: 18, }}>Set</Text>
                                    <MaterialCommunityIcons name="image-edit-outline" size={24} color="white" />
                                </TouchableOpacity>
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
