import React, { Component } from 'react';
import firebase from 'firebase';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    ToastAndroid
} from 'react-native';
import {
    StackActions,
    NavigationActions,
  } from 'react-navigation';
import { Button } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';

export default class SelfFormScreen extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        age: '',
        data: [
            { label: 'ชาย', size: 36 },
            { label: 'หญิง', size: 36 },
        ],
    }

    handle_radio = data => this.setState({ 'sex' : data })

    handleSubmit() {
        if(!(this.state.age.startsWith('0')))
        {
            try
            {
                firebase.database().ref().child('user').push().set({
                    type : 'ตนเอง',
                    age : this.state.age,
                    sex : sex
                })
    
                const resetActions=StackActions.reset({
                    index:0,
                    actions:[NavigationActions.navigate({routeName:"SelfMain"})]
                })
    
                this.props.navigation.dispatch(resetActions)
            }
            catch
            {
                ToastAndroid.show('ไม่สามารถเพิ่มข้อมูลได้! กรุณาลองใหม่อีกครั้ง',ToastAndroid.SHORT);
            } 
        }
        else
        {
            ToastAndroid.show('กรุณากรอกอายุให้ถูกต้อง!',ToastAndroid.SHORT);
        }
    }

    render() {

        let selectedButton = this.state.data.find(e => e.selected == true);
        sex = selectedButton ? selectedButton.value : this.state.data[0].label;

        return (
            <View style={styles.container}>
                <Text style={styles.SelfText}>
                    กรุณากรอกอายุ
                {'\n'}
                    และเลือกเพศของคุณ
                {'\n'}{'\n'}
                </Text>
                <View style={{ flex: 1, width: '65%' }}>
                    <TextInput
                        style={{ height: 60, borderColor: 'gray', borderWidth: 2 }}
                        placeholder="กรอกอายุ"
                        keyboardType='numeric'
                        maxLength={2}
                        fontWeight='bold'
                        textAlign='center'
                        value={this.state.age}
                        onChangeText={age => this.setState({ age })}
                    />
                    <Text>{'\n'}{'\n'}</Text>
                    <RadioGroup
                        radioButtons={this.state.data}
                        onPress={this.handle_radio}
                        flexDirection='row'
                    />
                    <Text>{'\n'}{'\n'}</Text>
                    <Button
                        large
                        onPress={this.handleSubmit}
                        title='ตกลง'
                        color='#000'
                        fontWeight= 'bold'
                        fontSize={25}
                        buttonStyle={{ backgroundColor: '#A5D6A7', borderRadius: 30 }}
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