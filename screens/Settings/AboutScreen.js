import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';

export default class AboutScreen extends Component {

    static navigationOptions = {
        title: "เกี่ยวกับเรา",
        headerTitle: (
            <View style={{ flex: 1, marginBottom: 10 , overflow: 'hidden' }}>
                {/* <Image
                    style={{ flex: 1, height: 15, width: 300, alignSelf: 'center' }}
                    source={require('../../assets/images/header-life.png')}
                    resizeMode="contain"
                /> */}
            </View>
        ),
        headerTintColor: '#ffffff',
        headerStyle: { backgroundColor: '#90CAF9' },
        headerRight: <View />
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Life2
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// export default AboutScreen;