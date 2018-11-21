import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';

class DialScreen extends React.Component {

  static navigationOptions = {
    title: 'สายด่วนสุขภาพจิต',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Image
              source={require('../../assets/images/antique.png')}
              style={{width: 60, height: 60}}
            />
          </View>
          <View>
            <Text style={styles.MainTxt}>
              {'\n'}สายด่วนสุขภาพจิต
          </Text>
          </View>

          <View>
            <Text style={styles.MainTxt}>
              (โทรฟรีไม่เสียค่าใช้จ่าย){'\n'}
          </Text>
          </View>

          <View>
            <Icon.Ionicons
              onPress={this._handlePressCalling}
              name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
              size={80}
              style={{ marginBottom: -3 }}
            />
          </View>

          <View style={{marginBottom: 40}}>
            <Text style={styles.MainTxt}>
              {'\n'}1323
          </Text>
          </View>

        </View>
      </View>
    );
  }

  _handlePressCalling = () => {
    Communications.phonecall('1323', false)
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainTxt: {
    color: '#455A64',
    fontSize: 25,
  }
}
);

export default createStackNavigator({ DialScreen });