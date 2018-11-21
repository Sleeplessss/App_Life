import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

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

      <View style={{flex:1, width:'100%'}}>
          <Button 
          onPress={()=> console.log('comunication')}
          large
          title= 'การสื่อสาร วิธีการพูด'
          textStyle={{ marginRight: 70 }}
          color= '#000'
          fontWeight= 'bold'
          fontSize={25}
          iconRight= {{
          size:25,
          name:'angle-right',
          type:'font-awesome',
          color:'#000'
        }}
          buttonStyle={{
            backgroundColor: '#FFD54F'
          }}
          />
          <Button 
          onPress={()=> console.log('suicide')}
          large
          title= 'สัญญาณเตือนการฆ่าตัวตาย'
          color= '#000'
          fontWeight= 'bold'
          fontSize={25}
          iconRight= {{
          size:25,
          name:'angle-right',
          type:'font-awesome',
          color:'#000'
        }}
          buttonStyle={{
            backgroundColor: '#FFECB3'
          }}
          />
          <Button 
          onPress={()=> console.log('Stay alerted!')}
          large
          title= 'การเฝ้าระวัง/ดูแล'
          textStyle={{ marginRight: 100 }}
          color= '#000'
          fontWeight= 'bold'
          fontSize={25}
          iconRight= {{
          size:25,
          name:'angle-right',
          type:'font-awesome',
          color:'#000'
        }}
          buttonStyle={{
            backgroundColor: '#FFD54F'
          }}
          />
          <Text>{'\n'}{'\n'}</Text>
      </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
    },
});
export default ConsolationHome;
