import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class UserScreen extends Component {

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
                        onPress={() => this.props.navigation.navigate('SelfFormScreen')}
                        title='ตัวท่านเอง'
                        fontFamily='cloud-light'
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
                        fontFamily='cloud-light'
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

                <Text>{'\n'}</Text>
                <Image
                    source={require('../../assets/images/family.png')}
                    style={{ flex: 1, height: 300, width: 250 }}
                    resizeMode="contain"
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        // justifyContent: 'center',
    },
    UserText: {
        marginTop: 50,
        color: '#455A64',
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'cloud-light',
    },
});