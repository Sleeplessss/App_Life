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

  static navigationOptions = ({
    header : null,
});

  render() {
    return (
        <View>
          <Text>asdasdasdasd</Text>
      </View>
    );
  }
}

export default createStackNavigator({ Main },{ headerMode : null });
