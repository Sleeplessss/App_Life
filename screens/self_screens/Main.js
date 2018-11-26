import React, { Component } from 'react';
import { View, 
  Image,
  StyleSheet,
  Text,
  AsyncStorage
 } from 'react-native';
 import { Avatar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

// Screens
import ArticleHome from '../self_screens/articles/ArticleHomeScreen';
import ArticleDetail from '../self_screens/articles/ArticleDetail';
import EnergizeScreen from '../self_screens/energize/EnergizeScreen';
import PhoneBook from '../self_screens/people/PhoneBook';
import AddPhonenumber from '../self_screens/people/AddPhonenumber';
import ScreeningMain from '../self_screens/screening/ScreeningMain';
import StartScreening from '../self_screens/screening/StartScreening';

class Main extends Component {
  constructor(props) {
    super(props);
    // this.handleArticle = this.handleArticle.bind(this);
  }
  static navigationOptions = ({
    header : null,
});

  handleScreening = async () => {
    let age = await AsyncStorage.getItem('age')
    console.log(age);
    if (age < 15 || age > 69) {
      alert('ไม่สามารถทำแบบคัดกรองได้');
    }else{
      return this.props.navigation.navigate('ScreeningMain')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextMain}> สำหรับตัวท่านเอง {'\n'}{'\n'}</Text>

        <View style={styles.AvartarMain1}>
          <Avatar
            large
            rounded
            overlayContainerStyle={{backgroundColor: '#7be3fc'}}
            source={require('../../assets/images/lock.png')}
            style={{width: 20, height: 20}}
            // icon={{name: 'key', type: 'font-awesome', color: 'yellow'}}
            // onPress={this.handleArticle}
            onPress={() => this.props.navigation.navigate('ArticleHome')}
            activeOpacity={0.7}
            containerStyle={{marginLeft: 5}}
          />
          
          <Avatar
            large
            rounded
            source={require('../../assets/images/exercise.png')}
            // icon={{name: 'heart', type: 'font-awesome', color: 'red'}}
            onPress={() => this.props.navigation.navigate('EnergizeScreen')}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 95}}
          />
          
        </View>

        <View style={styles.TextMenu1}>
          <Text 
            onPress={() => this.props.navigation.navigate('ArticleHome')} 
            style={{color: '#455A64',fontSize: 22,fontFamily: 'cloud-bold',marginLeft: 10}}>
            ไขคำถาม...{'\n'}ไขข้อข้องใจ
          </Text>
          <Text 
            onPress={() => this.props.navigation.navigate('EnergizeScreen')} 
            style={{color: '#455A64',fontSize: 22,fontFamily: 'cloud-bold',marginLeft: 80}}>
            เติมพลังใจ...{'\n'}   กันเถอะ
          </Text>
        </View>
        

        <View style={styles.AvartarMain2}>
          <Avatar
            large
            rounded
            source={require('../../assets/images/girl.png')}
            // icon={{name: 'user', type: 'font-awesome', color: 'black'}}
            onPress={() => this.props.navigation.navigate('PhoneBook')}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 5, marginTop: 60}}
          />

          <Avatar
            large
            rounded
            source={require('../../assets/images/form.png')}
            // icon={{name: 'file', type: 'font-awesome', color: '#66ccff'}}
            onPress={this.handleScreening}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 95, marginTop: 60}}
          />
        </View>

        <View style={styles.TextMenu2}>
          <Text 
            onPress={() => this.props.navigation.navigate('PhoneBook')} 
            style={{color: '#455A64',fontSize: 22,fontFamily: 'cloud-bold',marginLeft: 10}}>
              ใครสักคน...{'\n'} ที่อยากคุย
          </Text>
          <Text 
            onPress={this.handleScreening} 
            style={{color: '#455A64',fontSize: 22,fontFamily: 'cloud-bold',marginLeft: 90}}>
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

export default createStackNavigator({ Main, ArticleHome, ArticleDetail, EnergizeScreen, PhoneBook, AddPhonenumber, ScreeningMain, StartScreening },{ headerMode : null });
