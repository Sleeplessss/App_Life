import React, { Component } from 'react'
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
import { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class OfflineScreen extends React.Component {
  static navigationOptions = {
    title: 'Offline',
  };

  state = {
    mute: false,
    fullScreen: true,
    shouldPlay: true,
  }

  handlePlayAndPause = () => {
    this.setState(prevState => ({
      shouldPlay: !prevState.shouldPlay
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }

  render() {

    const { width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View>
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              // source={require('../../assets/videos/withoutyou.mp4')}
              shouldPlay={this.state.shouldPlay}
              resizeMode="cover"
              style={{ width, height: 300 }}
              isMuted={this.state.mute}
            />
            <View style={styles.controlBar}>
              <MaterialIcons
                name={this.state.mute ? "volume-mute" : "volume-up"}
                size={25}
                color="white"
                onPress={this.handleVolume}
              />
              <MaterialIcons
                name={this.state.shouldPlay ? "pause" : "play-arrow"}
                size={25}
                color="white"
                onPress={this.handlePlayAndPause}
              />
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});