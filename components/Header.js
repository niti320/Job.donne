
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, Dimensions, Modal, SafeAreaView, Alert, } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import { useStyles } from '../StylesContext';
import Ionicons from '@expo/vector-icons/Ionicons';




const Header = (username, userImage, ) => {
    const USERNAME_FILE_URI = FileSystem.documentDirectory + 'username.json';
    const USERIMAGE_FILE_URI = FileSystem.documentDirectory + 'userimage.json';


    return (
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
                    style={styles.openAdder}>
                    <Ionicons
                        name={isDarktheme ? 'moon' : 'sunny'}
                        size={24}
                        color={styles.footertext.color}
                    />
                </TouchableOpacity>


            </View>



            <View style={styles.sort_section}>
                <View style={[styles.sortButton, { flex: 1, borderWidth: 0, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff00" }]} >
                    <Text style={{ color: "white", fontSize: 20 }}>{month} <Text style={{ fontWeight: "normal", fontWeight: 'bold', }}>{date}</Text></Text>
                </View>


            </View>
        </View>
    );
};

export default Header;



