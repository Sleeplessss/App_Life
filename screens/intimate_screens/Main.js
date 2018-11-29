import React, { Component } from 'react';
import { View, 
  Image,
  StyleSheet,
  Text,
 } from 'react-native';
 import { Avatar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

// Screens
import Consolation from '../intimate_screens/consolation/ConsolationHome';
import Relax from '../intimate_screens/relax/RelaxHome';
import ScreeningMain from '../intimate_screens/screening/ScreeningMain';
import VideoHome from '../intimate_screens/video/VideoHome';
import StartScreening from '../intimate_screens/screening/StartScreening';
import ComunicationScreen from '../intimate_screens/consolation/ComunicationScreen';
import Suicide from '../intimate_screens/consolation/SuicideScreen';
import StayAlert from '../intimate_screens/consolation/StayalertScreen';

class Main extends Component {
  constructor(props) {
    super(props);
    // this.handleArticle = this.handleArticle.bind(this);
  }
  static navigationOptions = {
    headerTitle: (
        <View style={{ flex: 1, marginBottom: 10 , overflow: 'hidden' }}>
             <Image
                style={{ flex: 1, height: 15, width: 300, alignSelf: 'center' }}
                source={require('../../assets/images/header-life.png')}
                resizeMode="contain"
            /> 
        </View>
    ),
    headerTintColor: '#ffffff',
    headerStyle: { backgroundColor: '#90CAF9' },
    headerRight: <View />,
    headerLeft: <View />
};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextMain}> สำหรับผู้ใกล้ชิด </Text>

        <View style={styles.AvartarMain1}>
          <Avatar
            large
            rounded
            overlayContainerStyle={{backgroundColor: '#7be3fc'}}
            source={require('../../assets/images/hug.png')}
            style={{width: 20, height: 20}}
            onPress={() => this.props.navigation.navigate('Consolation')}
            activeOpacity={0.7}
            containerStyle={{marginLeft: 5}}
          />
          
          <Avatar
            large
            rounded
            source={require('../../assets/images/relax.png')}
            onPress={() => this.props.navigation.navigate('Relax')}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 95}}
          />
          
        </View>

        <View style={styles.TextMenu1}>
          <Text 
            onPress={() => this.props.navigation.navigate('Consolation')} 
            style={{color: '#455A64',fontSize: 22,fontFamily: 'cloud-bold',marginLeft: 20}}>
            คำปลอบใจ
          </Text>
          <Text 
            onPress={() => this.props.navigation.navigate('Relax')} 
            style={{color: '#455A64',fontSize: 22,fontFamily: 'cloud-bold',marginLeft: 90}}>
            วิธีคลายเครียด
          </Text>
        </View>
        

        <View style={styles.AvartarMain2}>
          <Avatar
            large
            rounded
            source={require('../../assets/images/video-camera.png')}
            onPress={() => this.props.navigation.navigate('VideoHome')}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 5, marginTop: 60}}
          />

          <Avatar
            large
            rounded
            source={require('../../assets/images/form.png')}
            onPress={() => this.props.navigation.navigate('ScreeningMain')}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 95, marginTop: 60}}
          />
        </View>

        <View style={styles.TextMenu2}>
          <Text 
            onPress={() => this.props.navigation.navigate('VideoHome')} 
            style={{color: '#455A64',fontSize: 22,fontFamily: 'cloud-bold',marginLeft: 10}}>
              เมื่อเจอไลฟ์สด..
          </Text>
          <Text 
            onPress={() => this.props.navigation.navigate('ScreeningMain')} 
            style={{color: '#455A64',fontSize: 22,fontFamily: 'cloud-bold',marginLeft: 60}}>
            แบบคัดกรอง
          </Text>
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
      flexDirection:'column',
      // justifyContent:'space-between',
      justifyContent: 'center',
  },
  TextMain: {
    // marginTop: 80,
    // backgroundColor:'red',
    color: '#455A64',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'cloud-bold',
  },
  AvartarMain1: {
    // flex:1,
    // backgroundColor:'red',
    flexDirection:'row',
    textAlign: 'center',
    justifyContent:'space-between',
  },
  AvartarMain2: {
    // flex:1,
    // backgroundColor:'green',
    // marginBottom:80,
    flexDirection:'row',
    textAlign: 'center',
    justifyContent:'space-between',
  },
  TextMenu1: {
    color: '#455A64',
    textAlign: 'center',
    fontFamily: 'cloud-bold',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  TextMenu2: {
    // flex:1,
    // backgroundColor: 'yellow',
    color: '#455A64',
    textAlign: 'center',
    fontFamily: 'cloud-bold',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 50
  }
});

export default createStackNavigator({
   Main, 
   Consolation, 
   Relax, 
   ScreeningMain, 
   VideoHome, 
   StartScreening, 
   ComunicationScreen, 
   Suicide, 
   StayAlert },
  //  { headerMode : null }
   );
