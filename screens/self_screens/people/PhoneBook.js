import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PhoneBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({
    header : null,
});
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.AddNameList}> รายชื่อ </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    AddNameList: {
        fontSize:25,
        color:'#455A64'
    }
});
export default PhoneBook;
