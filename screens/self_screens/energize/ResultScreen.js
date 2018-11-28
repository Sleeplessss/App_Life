import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet, Image, Slider } from 'react-native';

class EnergizeResultScreen extends Component {

  static navigationOptions = {
    headerTitle:<View style={{textAlign:'center'}}>
                        <Text style={{fontSize: 30, fontFamily: 'cloud-bold', color: '#fff'}}>ดับพลังใจ</Text>
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
   const d = AsyncStorage.getItem('point')
   console.log('point = ' + d);
   
  //  this.setState({'value': parseInt(point)})
  }
  loadPoint = async () => {
    // let point = await AsyncStorage.getItem('point')
    this.setState({ 'point': await AsyncStorage.getItem('point') })
    console.log(point);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txtStyle}>ระดับพลังใจของคุณ{'\n'}คือ {this.state.point} มาช่วยกัน {'\n'}เติมให้เต็มสิคะ</Text>
          <Image
              source={require('../../../assets/images/nurse.png')}
              style={{ height: 130, width: 130 }}
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
      </View>
    );
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
    fontSize: 25
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
