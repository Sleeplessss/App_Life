import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
export class ArticleHomeScreen extends Component {
  static navigationOptions = ({
    header : null,
});
  render() {
    return (
      <View style={styles.container}>
        <Card // image={require('../../../assets/images/robot-prod.png') }
        >
          <Image
              source={require('../../../assets/images/robot-prod.png')}
              style={{width: 260, height: 330}}
          />
          <Button
            // icon={<Icon name='code' color='#ffffff' />}
            onPress={()=>this.props.navigation.navigate('ArticleDetail')}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 30, backgroundColor: '#A5D6A7', marginLeft: 50, marginRight: 50, marginBottom: 0}}
            title='ตกลง'
            titleStyle={{ fontSize: "50", alignContent: 'center', justifyContent: 'center', alignItems: 'center', }}
            color='#000'
            fontWeight = 'bold'
          />
        </Card>
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
    // justifyContent:'space-between',
    justifyContent: 'center',
}
});
export default ArticleHomeScreen
