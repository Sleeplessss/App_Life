import React, { Component } from 'react'
import firebase from 'firebase';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import { Button } from 'react-native-elements';
import {
    StackActions,
    NavigationActions,
  } from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';

export default class IntimateFormScreen extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        age: '',
        data_sex: [
            { label: 'ชาย', size: 35 },
            { label: 'หญิง', size: 35 },
        ],
        data_relation: [
            { label: 'คนในครอบครัว', size: 35 },
            { label: 'เพื่อน/คนรู้จัก', size: 35 },
            { label: 'คนรัก/คนรู้ใจ', size: 35 },
        ]
     }
    
    handle_sex = data_sex => this.setState({'sex' : data_sex})
    handle_relation = data_relation => this.setState({'relation' : data_relation})

    handleSubmit() {
        if(!(this.state.age.startsWith('0')))
        {
            try
            {
                if (this.state.age >= 15 && this.state.age <= 24){
                    firebase.database().ref().child('user').push().set({
                        type : 'ผู้ใกล้ชิด',
                        age : this.state.age,
                        sex : sex,
                        age_section : 'วัยรุ่น',
                        relation : relation
                    })
                }else if (this.state.age >= 25 && this.state.age <= 59){
                    firebase.database().ref().child('user').push().set({
                        type : 'ผู้ใกล้ชิด',
                        age : this.state.age,
                        sex : sex,
                        age_section : 'วัยทำงาน',
                        relation : relation
                    })
                }else if (this.state.age >= 60 && this.state.age <= 69){
                    firebase.database().ref().child('user').push().set({
                        type : 'ผู้ใกล้ชิด',
                        age : this.state.age,
                        sex : sex,
                        age_section : 'วัยสูงอายุ',
                        relation : relation
                    })
                }    
                const resetActions=StackActions.reset({
                    index:0,
                    actions:[NavigationActions.navigate({routeName:"IntimateMain"})]
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

    render () {

        let selectedButton_sex = this.state.data_sex.find(e => e.selected == true);
        sex = selectedButton_sex ? selectedButton_sex.value : this.state.data_sex[0].label;

        let selectedButton_relation = this.state.data_relation.find(e => e.selected == true);
        relation = selectedButton_relation ? selectedButton_relation.value : this.state.data_relation[0].label;

        return (
            <View style = {styles.container}>

                <Text style={styles.SelfText}>
                    กรุณากรอกอายุ
                    {'\n'}
                    และเลือกเพศของคุณ
                    {'\n'}{'\n'}
                </Text>
                <View>
                    <TextInput
                        style={{height: 60, borderColor: 'gray', borderWidth: 2, width:180}}
                        placeholder = "กรอกอายุ"
                        keyboardType='numeric'
                        maxLength = {3}
                        fontWeight = 'bold'
                        textAlign = 'center'
                        value={this.state.age}
                        onChangeText={age => this.setState({ age })}
                    />
                    <Text>{'\n'}{'\n'}</Text>
                </View>

                <View style={styles.radioBt}>
                    <RadioGroup radioButtons={this.state.data_sex} onPress={this.handle_sex} flexDirection='row' />
                    <Text>{'\n'}</Text>
                    <RadioGroup radioButtons={this.state.data_relation} onPress={this.handle_relation} flexDirection='column' />
                    <Text>{'\n'}</Text>
                    <Button
                        large
                        onPress={this.handleSubmit}
                        title = 'ตกลง'
                        color= '#000'
                        buttonStyle = {{ backgroundColor: '#A5D6A7', borderRadius: 30, width:130 }}
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
        // marginTop: 15,
        color: '#455A64',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    radioBt: {
        marginBottom: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});