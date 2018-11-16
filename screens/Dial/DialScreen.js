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
            <Text>
              สายด่วนสุขภาพจิต
          </Text>
          </View>

          <View>
            <Text>
              (โทรฟรีไม่เสียค่าใช้จ่าย)
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

          <View>
            <Text>
              1323
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
}
);

export default createStackNavigator({ DialScreen });