import React from 'react';
import {
  Platform,
  StyleSheet,
  Switch,
  Button,
  Image,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';

export default class GuideScreen extends React.Component {
  static navigationOptions = {
    title: 'คู่มือการใช้งาน',
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

  render() {
    return (
        <ScrollView>
        </ScrollView>
      );
    }
}