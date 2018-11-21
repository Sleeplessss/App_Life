import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

class PhoneBook extends Component {
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

      <View style={{width:'100%'}}>
          <Button 
          onPress={()=>this.props.navigation.navigate('AddPhonenumber')}
          large
          title= 'รายชื่อ'
          color= '#000'
          fontWeight= 'bold'
          fontSize={25}
          iconRight= {{
          size:25,
          name:'plus-circle',
          type:'font-awesome',
          color:'#08A127'
        }}
          buttonStyle={{
            backgroundColor: '#D7D7D7'
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
export default PhoneBook;
