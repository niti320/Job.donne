import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Footer from './Footer';
import { useAdder } from './AdderContext';

const Layout = ({ children, navigation }) => {
  const { openAdder, animatedRotateStyle } = useAdder();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <Footer navigation={navigation} openAdder={openAdder} animatedRotateStyle={animatedRotateStyle} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
});

export default Layout;
