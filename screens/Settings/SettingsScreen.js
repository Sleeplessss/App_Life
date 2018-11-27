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
import AboutScreen from './AboutScreen';

class SettingsScreen extends React.Component {

  static navigationOptions = {
    title: "ตั้งค่า",
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

  constructor() {
    super();
    this.state = {
      MusicSwitchValue: false,
      StorySwitchValue: false,
    }
  }

  MusicSwitch = (value) => {
    this.setState({ MusicSwitchValue: value })
    console.log('MusicSwitch is: ' + value)
  }

  StorySwitch = (value) => {
    this.setState({ StorySwitchValue: value })
    console.log('StorySwitch is: ' + value)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  เสียงดนตรี
                </Text>
              </View>
              <View>
                <Switch
                  onValueChange={this.MusicSwitch}
                  value={this.state.MusicSwitchValue} />
              </View>
            </View>
          </Touchable>

          <Touchable
            background={Touchable.Ripple('#ccc', false)}
            style={styles.option}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  เสียงบรรยายอัตโนมัติ
              </Text>
              </View>
              <View>
                <Switch
                  onValueChange={this.StorySwitch}
                  value={this.state.StorySwitchValue} />
              </View>
            </View>
          </Touchable>

          <Touchable
            background={Touchable.Ripple('#ccc', false)}
            style={styles.option}
            onPress={() => this.props.navigation.navigate('AboutScreen')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  เกี่ยวกับเรา
              </Text>
              </View>
            </View>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    justifyContent: 'flex-end',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
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

export default createStackNavigator({ SettingsScreen, AboutScreen });