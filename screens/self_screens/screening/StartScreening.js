import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class StartScreening extends Component {
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

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default StartScreening;
