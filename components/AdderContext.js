import React, { createContext, useState, useContext } from 'react';
import { Animated } from 'react-native';

const AdderContext = createContext();

export function useAdder() {
    return useContext(AdderContext);
}

export function AdderProvider({ children }) {
    const [adderVisible, setAdderVisible] = useState(false);
    const slideAnim = new Animated.Value(200);
    const rotateValue = new Animated.Value(0);

    const openAdder = () => {
        if (adderVisible) {
            Animated.timing(slideAnim, {
                toValue: 200,
                duration: 150,
                useNativeDriver: true,
            }).start(() => setAdderVisible(false));

            Animated.timing(rotateValue, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start();
        } else {
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

    const rotateInterpolate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    const animatedRotateStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };

    return (
        <AdderContext.Provider value={{ openAdder, animatedRotateStyle }}>
            {children}
        </AdderContext.Provider>
    );
}
