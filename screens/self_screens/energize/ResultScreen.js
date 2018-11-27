import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

class EnergizeResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  loadPoint = async () => {
    let point = await AsyncStorage.getItem('point')
    console.log(point);
  }
  render() {
    return (
      <View>
        <Text onPress={this.loadPoint}> คะแนน =  </Text>
      </View>
    );
  }
}

export default EnergizeResultScreen;
