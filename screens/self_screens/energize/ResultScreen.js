import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet, Image, Slider } from 'react-native';
import { Button } from 'react-native-elements'

class EnergizeResultScreen extends Component {

  static navigationOptions = {
    headerTitle:<View style={{textAlign:'center'}}>
                        <Text style={{fontSize: 30, fontFamily: 'cloud-bold', color: '#fff'}}>ระดับพลังใจ</Text>
                    </View>,
    headerTintColor: '#ffffff',
    headerStyle: { backgroundColor: '#90CAF9' },
    headerRight: <View />
};

  constructor(props) {
    super(props);
    this.state = {
      point: '',
      value: null,
    };
  }
  componentWillMount(){
   AsyncStorage.getItem('point').then((value) => this.setState({ 'point': value }))
   AsyncStorage.getItem('point').then((value) => this.setState({ 'value': parseInt(value) }))
  }
  handleSubmit(){
    if (this.state.value >= 1 && this.state.value < 5){
      return this.props.navigation.navigate('Low')
    } else if (this.state.value >= 5) {
      return this.props.navigation.navigate('High')
    }
  }
  render() {
    // if (this.state.value >= 1 && this.state.value <= 4) {
      return (
        <View style={styles.container}>
          <View style={styles.Mainbody}>
            <Text style={styles.txtStyle}>ระดับพลังใจของคุณ{'\n'}คือ {this.state.point} มาช่วยกัน {'\n'}เติมให้เต็มสิคะ</Text>
            <Image
                source={require('../../../assets/images/nurse.png')}
                style={{ height: 150, width: 150 }}
                resizeMode="contain"
            />
          </View>
          
          <Text>{'\n'}</Text>
          
          <Slider
                  disabled={true}
                  style={{width:250}}
                  trackStyle={styles.track}
                  thumbStyle={styles.thumb}
                  step={1}
                  minimumValue={0}
                  maximumValue={10}
                  value={this.state.value}
                  />
  
          <Text>{'\n'}</Text>
  
          <Button
              onPress={this.handleSubmit}
              title= 'ตกลง'
              color= '#000'
              fontFamily= 'cloud-bold'
              fontSize = {22}
              buttonStyle={{
                  borderRadius: 30,
                  backgroundColor: '#A5D6A7',
                  width: 130,
                  height: 50        
              }}
              />
        </View>
      );
    // } else if (this.state.value >= 5 && this.state.value <= 9) {
    //   return (
    //     <View style={styles.container}>
    //       <View style={styles.Mainbody}>
    //         <Text style={styles.txtStyle}>สุดยอดเลย ระดับพลังใจ{'\n'}ของคุณคือ {this.state.point} มาช่วยกัน {'\n'}เติมให้เต็มสิคะ</Text>
    //         <Image
    //             source={require('../../../assets/images/nurse.png')}
    //             style={{ height: 150, width: 150 }}
    //             resizeMode="contain"
    //         />
    //       </View>
          
    //       <Text>{'\n'}</Text>
          
    //       <Slider
    //               disabled={true}
    //               style={{width:250}}
    //               trackStyle={styles.track}
    //               thumbStyle={styles.thumb}
    //               step={1}
    //               minimumValue={0}
    //               maximumValue={10}
    //               value={this.state.value}
    //               />
  
    //       <Text>{'\n'}</Text>
  
    //       <Button
    //           onPress={this.handleSubmit}
    //           title= 'ตกลง'
    //           color= '#000'
    //           fontFamily= 'cloud-bold'
    //           fontSize = {22}
    //           buttonStyle={{
    //               borderRadius: 30,
    //               backgroundColor: '#A5D6A7',
    //               width: 130,
    //               height: 50        
    //           }}
    //           />
    //     </View>
    //   );
    // } else if (this.state.value == 10) {
    //   return (
    //     <View style={styles.container}>
    //       <View style={styles.Mainbody}>
    //         <Text style={styles.txtStyle}>สุดยอดเลย ระดับพลังใจ{'\n'}ของคุณเต็ม {this.state.point}</Text>
    //         <Image
    //             source={require('../../../assets/images/nurse.png')}
    //             style={{ height: 150, width: 150 }}
    //             resizeMode="contain"
    //         />
    //       </View>
          
    //       <Text>{'\n'}</Text>
          
    //       <Slider
    //               disabled={true}
    //               style={{width:250}}
    //               trackStyle={styles.track}
    //               thumbStyle={styles.thumb}
    //               step={1}
    //               minimumValue={0}
    //               maximumValue={10}
    //               value={this.state.value}
    //               />
  
    //       <Text>{'\n'}</Text>
  
    //       <Button
    //           onPress={this.handleSubmit}
    //           title= 'ตกลง'
    //           color= '#000'
    //           fontFamily= 'cloud-bold'
    //           fontSize = {22}
    //           buttonStyle={{
    //               borderRadius: 30,
    //               backgroundColor: '#A5D6A7',
    //               width: 130,
    //               height: 50        
    //           }}
    //           />
    //     </View>
    //   );
    // }
    
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle:{
    color: '#455A64',
    fontFamily: 'cloud-bold',
    fontSize: 25,
    marginTop: 25,
  },
  Mainbody:{
    flexDirection: 'row',
    alignContent: 'center'
  },
  track: {
    height: 18,
    borderRadius: 1,
    backgroundColor: '#d5d8e8',
  },
thumb: {
    width: 20,
    height: 30,
    borderRadius: 1,
    backgroundColor: '#838486',
}
})
export default EnergizeResultScreen;
