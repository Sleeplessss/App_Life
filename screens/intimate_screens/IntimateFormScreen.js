import React, { Component } from 'react'
import {
  StyleSheet,
  Alert,
  TextInput,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';

export default class OverseerFormScreen extends Component {

    static navigationOptions = ({
        header : null,
    });
    
    handle_sex = data_sex => this.setState({'sex' : data_sex})
    handle_relation = data_relation => this.setState({'relation' : data_relation})

    btnSave () {
        console.log('sex = ' + sex + '  and relation = ' + relation)
    }

    state = {
        Age: '',
        data_sex: [
            {
                label: 'ชาย',
                size: 36,
            },
            {
                label: 'หญิง',
                size: 36,
            },
        ],
        data_relation: [
            {
                label: 'ญาติ',
                size: 36,
            },
            {
                label: 'แฟน',
                size: 36,
            },
            {
                label: 'เพื่อน',
                size: 36,
            },
        ],
        sex:'',
        relation:''
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
                <View style={{flex:1,width:'65%'}}>
                    <TextInput
                        style={{height: 60, borderColor: 'gray', borderWidth: 2}}
                        placeholder = "กรอกอายุ"
                        keyboardType='numeric'
                        maxLength = {3}
                        fontWeight = 'bold'
                        textAlign = 'center'
                        onChangeText={(text) => this.setState({Age:text})}
                        value={this.state.text}
                    />
                    <Text>{'\n'}{'\n'}</Text>
                    <RadioGroup radioButtons={this.state.data_sex} onPress={this.handle_sex} flexDirection='row' />
                    <Text>{'\n'}{'\n'}</Text>
                    <RadioGroup radioButtons={this.state.data_relation} onPress={this.handle_relation} flexDirection='row' />
                    <Text>{'\n'}{'\n'}</Text>
                    <Button
                        large
                        onPress={this.btnSave}
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
        marginTop: 30,
        color: '#455A64',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
// export default 