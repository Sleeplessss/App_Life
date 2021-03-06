import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

class PhoneBook extends Component {
  static navigationOptions = {
    headerTitle:<View style={{textAlign:'center'}}>
                        <Text style={{fontSize: 30, fontFamily: 'cloud-bold', color: '#fff'}}>ใครสักคนที่อยากคุย</Text>
                    </View>,
    headerTintColor: '#ffffff',
    headerStyle: { backgroundColor: '#90CAF9' },
    headerRight: <View />
};
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>

      <View style={{width:'100%'}}>
          <Button 
          onPress={()=>this.props.navigation.navigate('AddPhonenumber')}
          large
          title= 'รายชื่อ'
          color= '#000'
          fontFamily= 'cloud-bold'
          fontSize={30}
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
