import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Switch,
  Button,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { createStackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';

import OfflineScreen from './OfflineScreen';

class VideosScreen extends React.Component {
  static navigationOptions = {
    title: 'วิดีโอ',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>

          <Touchable
            background={Touchable.Ripple('#ccc', false)}
            style={styles.option}
            onPress={this._handlePressOnline}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Online
              </Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            background={Touchable.Ripple('#ccc', false)}
            style={styles.option}
            onPress={() => this.props.navigation.navigate('OfflineScreen')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Offline
              </Text>
              </View>
            </View>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
  _handlePressOnline = () => {
    Communications.web('https://www.youtube.com');
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 15,
    marginTop: 1,
  },
});

export default createStackNavigator({ VideosScreen, OfflineScreen });