import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';

class ConsolationHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({
    header : null,
});
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.TouchableStyle1} onPress={()=> this.props.navigation.navigate('ComunicationScreen')}>
          <Text style={styles.TxtStyle}>การสื่อสาร วิธีการพูด</Text> 
          <Icon name='angle-right' type='font-awesome' color='#000'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableStyle2} onPress={()=> this.props.navigation.navigate('Suicide')}>
          <Text style={styles.TxtStyle}>สัญญาณเตือนการฆ่าตัวตาย</Text>
          <Icon style={{marginRight: 20}} name='angle-right' type='font-awesome' color='#000'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableStyle1} onPress={()=> this.props.navigation.navigate('StayAlert')}>
          <Text style={styles.TxtStyle}>การเฝ้าระวัง/ดูแล</Text> 
          <Icon name='angle-right' type='font-awesome' color='#000'/>
      </TouchableOpacity>        
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
        flexDirection: 'column'
    },
    TxtStyle:{
      marginLeft: 20,
      color: '#000',
      fontFamily: 'cloud-bold',
      fontSize: 25,
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    TouchableStyle1:{
      width: '100%',
      height: 80,
      backgroundColor: '#FFD54F',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    TouchableStyle2:{
      width: '100%',
      height: 80,
      backgroundColor: '#FFECB3',
      flexDirection:'row',
      justifyContent:'space-between'
    }
});
export default ConsolationHome;
