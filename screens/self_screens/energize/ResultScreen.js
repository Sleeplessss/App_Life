import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

class EnergizeResultScreen extends Component {

  static navigationOptions = {
    headerTitle: (
        <View style={{ flex: 1, marginBottom: 10 , overflow: 'hidden' }}>
            {/* <Image
                style={{ flex: 1, height: 15, width: 300, alignSelf: 'center' }}
                source={require('../../assets/images/header-life.png')}
                resizeMode="contain"
            /> */}
        </View>
    ),
    headerTintColor: '#ffffff',
    headerStyle: { backgroundColor: '#90CAF9' },
    headerRight: <View />
};

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
