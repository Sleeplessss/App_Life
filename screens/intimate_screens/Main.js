import React, { Component } from 'react';
import { View, 
  Image,
  StyleSheet,
  Text,
 } from 'react-native';
 import { Avatar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

export default createStackNavigator({ Main },{ headerMode : null });
