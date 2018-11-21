import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class StartScreening extends Component {
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
