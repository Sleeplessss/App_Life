import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class UserScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.UserText}>
                    กรุณาเลือกกลุ่มผู้ใช้งาน
                    {'\n'}{'\n'}
                </Text>
                
                <View>
                    <Button
                        large
                        onPress = {() => this.props.navigation.navigate('SelfFormScreen')}
                        title = 'ตัวท่านเอง'
                        color = '#455A64'
                        fontWeight = 'bold'
                        buttonStyle = {
                            {
                                backgroundColor: '#FFECB3',
                                width: 130,
                                borderRadius: 30,
                            }
                        }
                    />
                    <Text>{'\n'}</Text>
                    <Button
                        large
                        onPress = {() => this.props.navigation.navigate('IntimateFormScreen')}
                        title = 'ผู้ใกล้ชิด'
                        color = '#455A64'
                        fontWeight = 'bold'
                        buttonStyle = {
                            {
                                backgroundColor: '#FFD54F',
                                width: 130,
                                borderRadius: 30,
                            }
                        }
                    />
                </View>
                
                <Image
                    source={require('../../assets/images/family.png')}
                    style={{width: 300, height: 250}}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent:'space-between',
        // justifyContent: 'center',
    },
    UserText: {
        marginTop: 50,
        color: '#455A64',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
});