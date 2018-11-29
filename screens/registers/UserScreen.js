import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';

export default class UserScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={
                        <Icon
                            name='arrow-back'
                            color='#fff'
                            onPress={() => this.props.navigation.navigate('TermScreen')}
                        />
                    }
                    centerComponent={
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, height: 30, width: 150 }}
                                source={require('../../assets/images/header-life.png')}
                                resizeMode="contain"
                            />
                        </View>}

                    backgroundColor='#90CAF9'
                />
                <View style={{ flex: 1 }}>
                <Text style={styles.UserText}>
                    กรุณาเลือกกลุ่มผู้ใช้งาน
                    
                </Text>
                </View>
                <View style={{ flex: 2,alignItems: 'center',justifyContent: 'center' }}>
                <Button
                    large
                    onPress={() => this.props.navigation.navigate('SelfFormScreen')}
                    title='ตัวท่านเอง'
                    fontSize={22}
                    fontFamily='cloud-bold'
                    color='#455A64'
                    buttonStyle={
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
                    onPress={() => this.props.navigation.navigate('IntimateFormScreen')}
                    title='ผู้ใกล้ชิด'
                    fontSize={22}
                    fontFamily='cloud-bold'
                    color='#455A64'
                    buttonStyle={
                        {
                            backgroundColor: '#FFD54F',
                            width: 130,
                            borderRadius: 30,
                        }
                    }
                />
                </View>
                <View style={{ flex: 2 }}>
                <Image
                    source={require('../../assets/images/family.png')}
                    style={{ flex:1, height: undefined, width: undefined}}
                    resizeMode="contain"
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
        //alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // justifyContent: 'center',
    },
    UserText: {
        marginTop: 50,
        color: '#455A64',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'cloud-bold',
    },
});