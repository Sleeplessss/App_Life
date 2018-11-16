import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import {
    View,
    StyleSheet,
    Alert,
    TextInput,
    Text,
    AsyncStorage
  } from 'react-native';
import { Button } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
import { createStackNavigator } from 'react-navigation';
import Main from './Main';

class SelfFormScreen extends Component {
  static navigationOptions = ({
    header : null,
});

constructor(props) {
    super(props);
}

handle_radio = data => this.setState({'sex' : data})

btnSave () {
    console.log('sex = ' + sex)
}
state = {
    age: '',
    data: [
        {
            label: 'ชาย',
            size: 36,
        },
        {
            label: 'หญิง',
            size: 36,
        },
    ]
 }
render () {
    let selectedButton = this.state.data.find(e => e.selected == true);
    sex = selectedButton ? selectedButton.value : this.state.data[0].label;
    let newage = this.state.age;
    return (
        <View style = {styles.container}>

            <Text style={styles.SelfText}>
                กรุณากรอกอายุ
                {'\n'}
                และเลือกเพศของคุณ
                {'\n'}{'\n'}
            </Text>
            <View style={{flex:1,width:'65%'}}>
                <TextInput
                    style={{height: 60, borderColor: 'gray', borderWidth: 2}}
                    placeholder = "กรอกอายุ"
                    keyboardType='numeric'
                    maxLength = {3}
                    fontWeight = 'bold'
                    textAlign = 'center'
                    value={this.state.age}
                    onChangeText={(text) => this.setState({ age : text })}
                />
                {/* <Text>{'user input: ' + this.state.age}</Text> */}
                <Text>{'\n'}{'\n'}</Text>
                <RadioGroup radioButtons={this.state.data} onPress={this.handle_radio} flexDirection='row' />
                <Text>{'\n'}{'\n'}</Text>

                <Button
                    large
                    onPress = {this.btnSave}
                    title = 'ตกลง'
                    color= '#000'
                    buttonStyle = {
                        {
                            backgroundColor: '#A5D6A7',
                            borderRadius: 30,
                        }
                    }
                />
            </View>
            
        </View>
    )
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
SelfText: {
    marginTop: 80,
    color: '#455A64',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
},
});
// export default FormScreen;
export default createStackNavigator({ SelfFormScreen,Main },{ headerMode : null });
