import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ToastAndroid, AsyncStorage, TouchableOpacity } from 'react-native';

class ScreeningMain extends Component {
  constructor(props) {
    super(props);
    this.handleonPress = this.handleonPress.bind(this);
    this.state = {
    };
  }
  
//   static navigationOptions = ({
//     header : null,
// });

handleonPress = async (section) => {
    try {
        let age = await AsyncStorage.getItem('age');
        let sex = await AsyncStorage.getItem('sex');
        console.log("section = " + section);
        console.log("age = " + age);
        console.log("sex = " + sex);
        if (section == 'boy') {
            if (age >= 15 && age <= 24 && sex == 'ชาย') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
                return this.props.navigation.navigate('StartScreening')
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        } else if (section == 'girl') {
            if (age >= 15 && age <= 24 && sex == 'หญิง') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
                return this.props.navigation.navigate('StartScreening')
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        } else if (section == 'man') {
            if (age >= 25 && age <= 59 && sex == 'ชาย') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
                return this.props.navigation.navigate('StartScreening')
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        } else if (section == 'woman') {
            if (age >= 25 && age <= 59 && sex == 'หญิง') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
                return this.props.navigation.navigate('StartScreening')
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        }  else if (section == 'oldman') {
            if (age >= 60 && age <= 96 && sex == 'ชาย') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
                return this.props.navigation.navigate('StartScreening')
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        }  else if (section == 'oldwoman') {
            if (age >= 60 && age <= 69 && sex == 'หญิง') {
                ToastAndroid.show('OK!',ToastAndroid.SHORT);
                return this.props.navigation.navigate('StartScreening')
            }else{
                ToastAndroid.show('ข้อมูลไม่ถูกต้อง!',ToastAndroid.SHORT);
            }
        } 
    }catch{
        ToastAndroid.show('ไม่สามารถตรวจสอบข้อมูลได้!',ToastAndroid.SHORT);
    }
}
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.TxtTitle}> เลือกช่วงอายุของท่าน {'\n'}</Text>
        
        <View style={styles.ImgScreening1}>

            <TouchableOpacity onPress={()=>this.handleonPress('boy')}>
                <Image
                    source={require('../../../assets/images/section_boy.png')}
                    style={styles.ImgStyle}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.handleonPress('girl')} >
                <Image
                    source={require('../../../assets/images/section_girl.png')}
                    style={styles.ImgStyle}
                />
            </TouchableOpacity>
        
        </View>

        <View style={styles.TextMenu1}>
          <Text 
            onPress={()=>this.handleonPress('boy')} 
            style={{color: '#455A64',fontSize: 20,fontFamily: 'cloud-bold',marginLeft: 10}}>
            15-24 ปี
          </Text>
          <Text 
            onPress={()=>this.handleonPress('girl')} 
            style={{color: '#455A64',fontSize: 20,fontFamily: 'cloud-bold',marginLeft: 50}}>
            15-24 ปี
          </Text>
        </View>
    

        <View style={styles.ImgScreening2}>

            <TouchableOpacity onPress={()=>this.handleonPress('man')}>
                <Image
                    source={require('../../../assets/images/section_man.png')}
                    style={styles.ImgStyle}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.handleonPress('woman')} >
                <Image
                    source={require('../../../assets/images/section_woman.png')}
                    style={styles.ImgStyle}
                />
            </TouchableOpacity>

        </View>

        <View style={styles.TextMenu2}>
          <Text 
            onPress={()=>this.handleonPress('man')} 
            style={{color: '#455A64',fontSize: 20,fontFamily: 'cloud-bold',marginLeft: 10}}>
              25-59 ปี
          </Text>
          <Text 
            onPress={()=>this.handleonPress('woman')} 
            style={{color: '#455A64',fontSize: 20,fontFamily: 'cloud-bold',marginLeft: 50}}>
              25-59 ปี
          </Text>
        </View>

        <View style={styles.ImgScreening3}>
            
            <TouchableOpacity onPress={()=>this.handleonPress('oldman')}>
                <Image
                    source={require('../../../assets/images/section_oldman.png')}
                    style={styles.ImgStyle}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.handleonPress('oldwoman')} >
                <Image
                    source={require('../../../assets/images/section_oldwoman.png')}
                    style={styles.ImgStyle}
                />
            </TouchableOpacity>

        </View>

        <View style={styles.TextMenu2}>
          <Text 
            onPress={()=>this.handleonPress('oldman')} 
            style={{color: '#455A64',fontSize: 20,fontFamily: 'cloud-bold',marginLeft: 10}}>
              60-69 ปี
          </Text>
          <Text 
            onPress={()=>this.handleonPress('oldwoman')} 
            style={{color: '#455A64',fontSize: 20,fontFamily: 'cloud-bold',marginLeft: 50}}>
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
        fontSize: 30,
        fontFamily: 'cloud-bold',
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
        fontFamily: 'cloud-bold',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    TextMenu2: {
        color: '#455A64',
        textAlign: 'center',
        fontFamily: 'cloud-bold',
        flexDirection:'row',
        justifyContent:'space-between',
        // marginBottom: 50
    },
    TextMenu3: {
        color: '#455A64',
        textAlign: 'center',
        fontFamily: 'cloud-bold',
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
