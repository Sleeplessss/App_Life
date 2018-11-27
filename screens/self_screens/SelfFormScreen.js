import React, { Component } from 'react';
import firebase from 'firebase';
import {
    Image,
    View,
    StyleSheet,
    TextInput,
    Text,
    Alert,
    ToastAndroid,
    Keyboard,
    TouchableWithoutFeedback,
    AsyncStorage
} from 'react-native';
import {
    StackActions,
    NavigationActions,
} from 'react-navigation';
import { Button } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';

export default class SelfFormScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <View style={{ flex: 1, marginBottom: 10 , overflow: 'hidden' }}>
                <Image
                    style={{ flex: 1, height: 15, width: 300, alignSelf: 'center' }}
                    source={require('../../assets/images/header-life.png')}
                    resizeMode="contain"
                />
            </View>
        ),
        headerTintColor: '#ffffff',
        headerStyle: { backgroundColor: '#90CAF9' },
        headerRight: <View />
    };

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

    handle_radio = data => this.setState({ 'sex': data })

    handleSubmit() {
        if (!(this.state.age.startsWith('0'))) {
            AsyncStorage.setItem('age', this.state.age)
            AsyncStorage.setItem('sex', sex)
            try {
                if (this.state.age >= 15 && this.state.age <= 24) {
                    firebase.database().ref().child('user').push().set({
                        type: 'ตนเอง',
                        age: this.state.age,
                        sex: sex,
                        age_section: 'วัยรุ่น',
                        relation: '',
                        //date : new Date().getMonth+1
                    })
                } else if (this.state.age >= 25 && this.state.age <= 59) {
                    firebase.database().ref().child('user').push().set({
                        type: 'ตนเอง',
                        age: this.state.age,
                        sex: sex,
                        age_section: 'วัยทำงาน',
                        relation: '',
                        //date : new Date().getMonth+1
                    })
                } else if (this.state.age >= 60 && this.state.age <= 69) {
                    firebase.database().ref().child('user').push().set({
                        type: 'ตนเอง',
                        age: this.state.age,
                        sex: sex,
                        age_section: 'วัยสูงอายุ',
                        relation: '',
                        //date : new Date().getMonth+1
                    })
                } else {
                    alert('แอปพลิเคชั่นนี้เหมาะสำหรับผู้ใช้อายุ 15-69 ปี เท่านั้น');
                    // ToastAndroid.show('แอพพลิเคชั่นนี้เหมาะสำหรับผู้ใช้อายุ 15-69 ปี เท่านั้น',ToastAndroid.SHORT);
                }
                const resetActions = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "SelfMain" })]
                })

                this.props.navigation.dispatch(resetActions)
            }
            catch
            {
                ToastAndroid.show('ไม่สามารถเพิ่มข้อมูลได้! กรุณาลองใหม่อีกครั้ง', ToastAndroid.SHORT);
            }
        }
        else {
            ToastAndroid.show('กรุณากรอกอายุให้ถูกต้อง!' + currentDate, ToastAndroid.SHORT);
        }
    }

    render() {

        let selectedButton = this.state.data.find(e => e.selected == true);
        sex = selectedButton ? selectedButton.value : this.state.data[0].label;

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.SelfText}>
                        กรุณากรอกอายุ
                {'\n'}
                        และเลือกเพศของคุณ
                {'\n'}{'\n'}
                    </Text>
                    <View style={{ flex: 1, width: '65%' }}>
                        <TextInput
                            style={{ height: 60, borderColor: 'gray', borderWidth: 2, fontFamily: 'cloud-bold' }}
                            placeholder="กรอกอายุ"
                            keyboardType='numeric'
                            maxLength={2}
                            textAlign='center'
                            value={this.state.age}
                            onChangeText={age => this.setState({ age })}
                        />
                        <Text>{'\n'}{'\n'}</Text>
                        <RadioGroup
                            radioButtons={this.state.data}
                            onPress={this.handle_radio}
                            fontFamily='cloud-bold'
                            flexDirection='row'
                        />
                        <Text>{'\n'}{'\n'}</Text>
                        <Button
                            large
                            onPress={this.handleSubmit}
                            title='ตกลง'
                            fontFamily='cloud-bold'
                            color='#000'
                            fontSize={22}
                            buttonStyle={{ backgroundColor: '#A5D6A7', borderRadius: 30 }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        fontSize: 30,
        fontFamily: 'cloud-bold'
    },
});