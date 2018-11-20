import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';

class AddPhonenumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  state = {
      name: '',
      tel: ''
  }
  static navigationOptions = ({
    header : null,
});
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TxtTitle}> เพิ่มรายชื่อ {'\n'}{'\n'}</Text>
        <View>
            <TextInput
                style={{height: 60, borderColor: 'gray', borderWidth: 2, width:200}}
                placeholder = "ชื่อ"
                maxLength = {50}
                fontWeight = 'bold'
                textAlign = 'center'
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
            />
            <Text>{'\n'}{'\n'}</Text>
            <TextInput
                style={{height: 60, borderColor: 'gray', borderWidth: 2, width:200}}
                placeholder = "เบอร์โทรศัพท์"
                keyboardType='numeric'
                maxLength = {11}
                fontWeight = 'bold'
                textAlign = 'center'
                value={this.state.tel}
                onChangeText={tel => this.setState({ tel })}
            />
            <Text>{'\n'}{'\n'}</Text>
            <Button
                medium
                onPress= {()=> Alert.alert('save phone number!')}
                title= 'ตกลง'
                fontSize= {20}
                fontWeight= 'bold'
                color= '#000'
                buttonStyle={{
                    backgroundColor: '#A5D6A7',
                    borderRadius: 30,
                }}
            />
            <Text>{'\n'}</Text>
            <Button
                medium
                onPress= {()=> this.props.navigation.navigate('PhoneBook')}
                title= 'ยกเลิก'
                fontSize= {20}
                fontWeight= 'bold'
                color= '#000'
                buttonStyle={{
                    backgroundColor: '#F96565',
                    borderRadius: 30,
                }}
            />
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
        // justifyContent: 'center'
    },
    TxtTitle: {
        marginTop: 50,
        color: '#455A64',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    }
});
export default AddPhonenumber;
