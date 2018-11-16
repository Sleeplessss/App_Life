import React, { Component,BackAndroid } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    Alert,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import UserScreen from './UserScreen';

class TermScreen extends Component {

    static navigationOptions = ({
        header : null,
    });

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/test_logo.png')}
                    style={{width: 200, height: 200}}
                />

                <Text style={styles.acceptText}>
                    {'\n'}ต้องการเข้าถึงข้อมูล{'\n'}เพศและอายุของท่าน{'\n'}{'\n'}
                </Text>

                <View style={styles.termButton}>
                    <Button
                        large
                        onPress = {() => {
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                key: null,
                                actions: [NavigationActions.navigate({ routeName: 'UserScreen' })],
                                navigationOptions: {
                                    header : null,
                                }
                            }))
                        }}
                        title = "อนุญาต"
                        color = '#455A64'
                        fontWeight = 'bold'
                        buttonStyle = {{
                            backgroundColor: '#90CAF9',
                            borderRadius: 30,
                        }}
                    />
                    <Button
                        large
                        onPress = {this.closeApp}
                        title = "ไม่อนุญาต"
                        color = '#455A64'
                        fontWeight = 'bold'
                        buttonStyle = {{
                            backgroundColor: '#FFD54F',
                            borderRadius: 30,
                        }}
                    />
                </View>
            </View>
        );
    }
    closeApp () {
        // BackAndroid.exitApp();
        console.log('Exit!');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    accept: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    acceptText: {
        color: '#455A64',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    termButton: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default createStackNavigator({ TermScreen, UserScreen },{ headerMode : null });