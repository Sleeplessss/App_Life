import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import * as firebase from 'firebase';
import AppNavigator from './navigation/AppNavigator';
import TermScreen from './screens/registers/TermScreen';
import SelfNavigator from './screens/self_screens/SelfNavigator';
import Main from './screens/intimate_screens/Main';

export default class App extends React.Component {

  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAhufDFSMWzwc2yUcRPqn6o81wxRTHLRf4",
      authDomain: "life-1d6fe.firebaseapp.com",
      databaseURL: "https://life-1d6fe.firebaseio.com",
      projectId: "life-1d6fe",
      storageBucket: "life-1d6fe.appspot.com",
      messagingSenderId: "197659518092"
    }
    firebase.initializeApp(firebaseConfig);
  }

  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <TermScreen/> //รันจากหน้ากรอกรายละเอียด
          //<SelfNavigator/> //รันจากหน้าหลักกของ ตนเอง
          //<Main/> //รันจากหน้าหลักของ ผู้ใกล้ชิด
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/antique.png'),
        require('./assets/images/cardiogram.png'),
        require('./assets/images/exercise.png'),
        require('./assets/images/family.png'),
        require('./assets/images/form.png'),
        require('./assets/images/girl.png'),
        require('./assets/images/header-life.png'),
        require('./assets/images/hug.png'),
        require('./assets/images/icon.png'),
        require('./assets/images/lock.png'),
        require('./assets/images/logo.png'),
        require('./assets/images/nurse.png'),
        require('./assets/images/phone.png'),
        require('./assets/images/relax.png'),
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        require('./assets/images/section_boy.png'),
        require('./assets/images/section_girl.png'),
        require('./assets/images/section_man.png'),
        require('./assets/images/section_girl.png'),
        require('./assets/images/section_oldman.png'),
        require('./assets/images/section_oldwoman.png'),
        require('./assets/images/section_woman.png'),
        require('./assets/images/splash.png'),
        require('./assets/images/test_logo.png'),
        require('./assets/images/video-camera.png'),
        
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'cloud-light': require('./assets/fonts/Cloud-Light.otf'),
        'cloud-bold': require('./assets/fonts/Cloud-Bold.otf'),
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
