import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';

export default class AboutScreen extends Component {

    static navigationOptions = {
        headerTitle: "เกี่ยวกับเรา",
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