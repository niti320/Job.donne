import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useStyles } from '../StylesContext';
import { useNavigationContext } from './NavigationContext'; 

export default function Footer() {
  const { styles } = useStyles();
  const navigation = useNavigation();
  const { currentRoute } = useNavigationContext();

  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setActiveButton(currentRoute);
  }, [currentRoute]);

  // Define active and inactive colors
  const activeColor = '#FFFFFF'; // White for active state
  const inactiveColor = styles.footertext.color // Dark gray for inactive state

  const getButtonStyle = (routeName) => {
    const isActive = routeName === activeButton;
    return {
      ...styles.navButton,
      backgroundColor: isActive ? '#232c61ff' : '#1c1c2b00',
    };
  };

  const getTextColor = (routeName) => {
    return routeName === activeButton ? activeColor : inactiveColor;
  };

  return (
    <View style={styles.footer}>
      <View style={styles.innerfooter}>
        <TouchableOpacity
          style={getButtonStyle('User')}
          onPress={() => navigation.navigate('User')}
        >
          <Ionicons name={activeButton === 'User' ? "person" : "person-outline"} size={22} color={getTextColor('User')} />
          <Text style={{ fontSize: 12, color: getTextColor('User') }}>User</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={getButtonStyle('Completed')}
          onPress={() => navigation.navigate('Completed')}
        >
          <Ionicons name={activeButton === 'Completed' ? "checkmark-done-circle" : "checkmark-circle-outline"} size={22} color={getTextColor('Completed')} />
          <Text style={{ fontSize: 12, color: getTextColor('Completed') }}>Done</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={getButtonStyle('Home')}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name={activeButton === 'Home' ? "home" : "home-outline"} size={22} color={getTextColor('Home')} />
          <Text style={{ fontSize: 12, color: getTextColor('Home') }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={getButtonStyle('Inspire')}
          onPress={() => navigation.navigate('Inspire')}
        >
          <Ionicons name={activeButton === 'Inspire' ? "happy" : "happy-outline"} size={22} color={getTextColor('Inspire')} />
          <Text style={{ fontSize: 12, color: getTextColor('Inspire') }}>Inspire</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={getButtonStyle('About')}
          onPress={() => navigation.navigate('About')}
        >
          <Image
            source={require("../assets/whiteicon.png")}
            style={{ width: 25, height: 25, tintColor: getTextColor('About') }}
          />
          <Text style={{ fontSize: 12, color: getTextColor('About') }}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
