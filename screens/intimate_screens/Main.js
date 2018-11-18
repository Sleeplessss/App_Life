import React, { Component } from 'react';
import { Platform, StatusBar, Text, StyleSheet, View } from 'react-native';
import AppNavigator from '../../navigation/AppNavigator';

class Main extends React.Component  {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> MAIN </Text>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Main;
