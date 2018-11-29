import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Divider } from 'react-native-elements'

class ComunicationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    headerTitle:<View style={{textAlign:'center'}}>
                    <Text style={{fontSize: 30, fontFamily: 'cloud-bold', color: '#fff'}}>การสื่อสาร วิธีการพูด</Text>
                </View>,
    headerTintColor: '#ffffff',
    headerStyle: { backgroundColor: '#90CAF9' },
    headerRight: <View />
};
  render() {
    return (
        <View style={styles.container}>
        <Card>
          <Text style={styles.TxtTitle}> การสื่อสาร วิธีการพูด </Text>
          <Divider style={{ backgroundColor: 'black' }} />
          <ScrollView>
              <Text style={styles.TxtDetail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui metus, euismod nec bibendum a, auctor eget dolor. Morbi interdum consequat porta. Nullam magna nisl, porttitor quis convallis non, pharetra eget massa. Nam luctus id lacus et faucibus. Fusce ante neque, aliquet sit amet tortor at, vehicula vehicula augue. Sed vitae dui et nulla imperdiet finibus ac ut erat. In laoreet enim tellus, eget dapibus justo molestie ut. Suspendisse pulvinar velit vitae fermentum tempus. Nam sed pharetra quam. Proin commodo porttitor sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eget tortor in lacus.
              </Text>
          </ScrollView>
        </Card>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    TxtTitle:{
      fontFamily:'cloud-bold',
      fontSize: 30,
      color: '#000'
    },
    TxtDetail:{
      color: '#455A64',
      fontFamily: 'cloud-bold',
      fontSize: 20
    }
  })
export default ComunicationScreen;
