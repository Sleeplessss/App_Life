import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ToastAndroid, AsyncStorage } from 'react-native';

class ScreeningMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
//   static navigationOptions = ({
//     header : null,
// });
check_data = async (section) => {
    try {
        let age = await AsyncStorage.getItem('age');
        let sex = await AsyncStorage.getItem('sex');
        console.log("age = " + age);
        console.log("sex = " + sex);
        if (section == 'boy') {
            if (age >= 15 && age <= 24 && sex == 'ชาย') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        } else if (section == 'girl') {
            if (age >= 15 && age <= 24 && sex == 'หญิง') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        } else if (section == 'man') {
            if (age >= 25 && age <= 59 && sex == 'ชาย') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        } else if (section == 'woman') {
            if (age >= 25 && age <= 59 && sex == 'หญิง') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        }  else if (section == 'oldman') {
            if (age >= 60 && age <= 96 && sex == 'ชาย') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        }  else if (section == 'oldwoman') {
            if (age >= 60 && age <= 69 && sex == 'หญิง') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        } 
    }catch{
        ToastAndroid.show('ไม่สามารถตรวจสอบข้อมูลได้!',ToastAndroid.SHORT);
    }
}
    handleonPress(section){
        console.log("section = " + section);
        // this.check_data(section)
    }
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.TxtTitle}> เลือกช่วงอายุของท่าน {'\n'}</Text>
        
        <View style={styles.ImgScreening1}>
            <Image
                onPress={this.handleonPress('boy')}
                source={require('../../../assets/images/section_boy.png')}
                style={styles.ImgStyle}
            />
          
          <Image
                onPress={this.handleonPress('girl')} 
                source={require('../../../assets/images/section_girl.png')}
                style={styles.ImgStyle}
            />
          
        </View>

        <View style={styles.TextMenu1}>
          <Text 
            onPress={this.handleonPress('boy')} 
            style={{color: '#455A64',fontSize: 20,fontWeight: 'bold',marginLeft: 10}}>
            15-24 ปี
          </Text>
          <Text 
            onPress={this.handleonPress('girl')} 
            style={{color: '#455A64',fontSize: 20,fontWeight: 'bold',marginLeft: 50}}>
            15-24 ปี
          </Text>
        </View>
    

        <View style={styles.ImgScreening2}>
            <Image
                onPress={this.handleonPress('man')} 
                source={require('../../../assets/images/section_man.png')}
                style={styles.ImgStyle}
            />

          <Image
                onPress={this.handleonPress('woman')} 
                source={require('../../../assets/images/section_woman.png')}
                style={styles.ImgStyle}
            />
        </View>

        <View style={styles.TextMenu2}>
          <Text 
            onPress={this.handleonPress('man')} 
            style={{color: '#455A64',fontSize: 20,fontWeight: 'bold',marginLeft: 10}}>
              25-59 ปี
          </Text>
          <Text 
            onPress={this.handleonPress('woman')} 
            style={{color: '#455A64',fontSize: 20,fontWeight: 'bold',marginLeft: 50}}>
              25-59 ปี
          </Text>
        </View>

        <View style={styles.ImgScreening3}>
            <Image
                onPress={this.handleonPress('oldman')}
                source={require('../../../assets/images/section_oldman.png')}
                style={styles.ImgStyle}
            />

          <Image
                onPress={this.handleonPress('oldwoman')} 
                source={require('../../../assets/images/section_oldwoman.png')}
                style={styles.ImgStyle}
            />
        </View>

        <View style={styles.TextMenu2}>
          <Text 
            onPress={this.handleonPress('oldman')} 
            style={{color: '#455A64',fontSize: 20,fontWeight: 'bold',marginLeft: 10}}>
              60-69 ปี
          </Text>
          <Text 
            onPress={this.handleonPress('oldwoman')} 
            style={{color: '#455A64',fontSize: 20,fontWeight: 'bold',marginLeft: 50}}>
              60-69 ปี
          </Text>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TxtTitle: {
        color: '#455A64',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    ImgScreening1: {
        flexDirection:'row',
        textAlign: 'center',
        justifyContent:'space-between',
      },
    ImgScreening2: {
        flexDirection:'row',
        textAlign: 'center',
        justifyContent:'space-between',
    },
    ImgScreening3: {
        flexDirection:'row',
        textAlign: 'center',
        justifyContent:'space-between',
    },
    TextMenu1: {
        color: '#455A64',
        textAlign: 'center',
        fontWeight: 'bold',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    TextMenu2: {
        color: '#455A64',
        textAlign: 'center',
        fontWeight: 'bold',
        flexDirection:'row',
        justifyContent:'space-between',
        // marginBottom: 50
    },
    TextMenu3: {
        color: '#455A64',
        textAlign: 'center',
        fontWeight: 'bold',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 30
    },
    ImgStyle: {
        width: 120,
        height: 120
    },
});
export default ScreeningMain;
