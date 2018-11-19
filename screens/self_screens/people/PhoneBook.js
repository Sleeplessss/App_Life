import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PhoneBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Text> textInComponent </Text>
=======
        <Text style={styles.AddNameList}> รายชื่อ </Text>
>>>>>>> master
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
<<<<<<< HEAD
=======
    },
    AddNameList: {
        fontSize:25,
        color:'#455A64'
>>>>>>> master
    }
});
export default PhoneBook;
