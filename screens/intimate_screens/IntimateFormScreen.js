import React, { Component } from 'react'
import firebase from 'firebase';
import {
    Image,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    ToastAndroid
} from 'react-native';
import { Button } from 'react-native-elements';
import {
    StackActions,
    NavigationActions,
} from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';

export default class IntimateFormScreen extends Component {

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

    handle_sex = data_sex => this.setState({ 'sex': data_sex })
    handle_relation = data_relation => this.setState({ 'relation': data_relation })

    handleSubmit() {
        if (!(this.state.age.startsWith('0'))) {
            try {
                if (this.state.age >= 15 && this.state.age <= 24) {
                    firebase.database().ref().child('user').push().set({
                        type: 'ผู้ใกล้ชิด',
                        age: this.state.age,
                        sex: sex,
                        age_section: 'วัยรุ่น',
                        relation: relation,
                        //date : new Date().getMonth+1
                    })
                } else if (this.state.age >= 25 && this.state.age <= 59) {
                    firebase.database().ref().child('user').push().set({
                        type: 'ผู้ใกล้ชิด',
                        age: this.state.age,
                        sex: sex,
                        age_section: 'วัยทำงาน',
                        relation: relation,
                        //date : new Date().getMonth+1
                    })
                } else if (this.state.age >= 60 && this.state.age <= 69) {
                    firebase.database().ref().child('user').push().set({
                        type: 'ผู้ใกล้ชิด',
                        age: this.state.age,
                        sex: sex,
                        age_section: 'วัยสูงอายุ',
                        relation: relation,
                        //date : new Date().getMonth+1
                    })
                }
                const resetActions = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "IntimateMain" })]
                })

                this.props.navigation.dispatch(resetActions)
            }
            catch
            {
                ToastAndroid.show('ไม่สามารถเพิ่มข้อมูลได้! กรุณาลองใหม่อีกครั้ง', ToastAndroid.SHORT);
            }
        }
        else {
            ToastAndroid.show('กรุณากรอกอายุให้ถูกต้อง!', ToastAndroid.SHORT);
        }
    }

    render() {

        let selectedButton_sex = this.state.data_sex.find(e => e.selected == true);
        sex = selectedButton_sex ? selectedButton_sex.value : this.state.data_sex[0].label;

        let selectedButton_relation = this.state.data_relation.find(e => e.selected == true);
        relation = selectedButton_relation ? selectedButton_relation.value : this.state.data_relation[0].label;

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.SelfText}>
                            {'\n'}
                            กรุณากรอกอายุ
                    {'\n'}
                            และเลือกเพศของคุณ
                    {'\n'}{'\n'}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={{ height: 60, borderColor: 'gray', borderWidth: 2, width: 180, fontFamily: 'cloud-bold', justifyContent: 'center' }}
                            placeholder="กรอกอายุ"
                            keyboardType='numeric'
                            maxLength={2}
                            textAlign='center'
                            value={this.state.age}
                            onChangeText={age => this.setState({ age })}
                        />
                    </View>

                    <View style={styles.radioBt}>
                        <RadioGroup radioButtons={this.state.data_sex} onPress={this.handle_sex} flexDirection='row' />
                        <Text>{'\n'}</Text>
                        <RadioGroup radioButtons={this.state.data_relation} onPress={this.handle_relation} flexDirection='column' />
                        <Text>{'\n'}</Text>
                        <Button
                            large
                            onPress={this.handleSubmit}
                            title='ตกลง'
                            fontSize= {22}
                            fontFamily='cloud-bold'
                            color='#000'
                            buttonStyle={{ backgroundColor: '#A5D6A7', borderRadius: 30, width: 130, marginBottom: 25 }}
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SelfText: {
        color: '#455A64',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'cloud-bold'
    },
    radioBt: {
        flex: 3,
        marginBottom: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});