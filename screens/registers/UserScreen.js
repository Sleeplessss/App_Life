import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import SelfFormScreen from './Self/SelfFormScreen';
import OverseerFormScreen from './Overseer/OverseerFormScreen';

export default class UserScreen extends Component {

    static navigationOptions = ({
        header : null,
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.UserText}>
                    กรุณาเลือกกลุ่มผู้ใช้งาน
                    {'\n'}{'\n'}
                </Text>
                
                <View style={{flex:1,width:'60%'}}>
                    <Button
                        large
                        onPress = {() => this.props.navigation.navigate('SelfFormScreen')}
                        title = 'ตัวท่านเอง'
                        color = '#455A64'
                        fontWeight = 'bold'
                        buttonStyle = {
                            {
                                backgroundColor: '#FFECB3',
                            }
                        }
                    />
                    <Text>{'\n'}</Text>
                    <Button
                        large
                        onPress = {() => this.props.navigation.navigate('OverseerFormScreen')}
                        title = 'ผู้ใกล้ชิด'
                        color = '#455A64'
                        fontWeight = 'bold'
                        buttonStyle = {
                            {
                                backgroundColor: '#FFD54F',
                            }
                        }
                    />
                </View>
                
                <Image
                    source={require('../../assets/images/family.jpg')}
                    style={{width: 260, height: 260}}
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
        marginTop: 80,
        color: '#455A64',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
});
//export default createStackNavigator({ UserScreen, SelfFormScreen, OverseerFormScreen },{ headerMode : null });