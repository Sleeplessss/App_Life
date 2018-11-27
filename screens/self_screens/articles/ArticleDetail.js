import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({
    header : null,
});
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity  style={styles.Txt1} onPress={()=>this.props.navigation.navigate('Cause')}>
            <Text style={styles.TextTitle} onPress={()=>Alert.alert('test')}>เหตุผลของการทำร้ายตนเอง &ensp;</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity >

        <TouchableOpacity style={styles.Txt2} onPress={()=>this.props.navigation.navigate('Sorrowful')}>
            <Text style={styles.TextTitle}>ลักษณะความทุกข์ใจที่พบ</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Txt1} onPress={()=>this.props.navigation.navigate('Risk')}>
            <Text style={styles.TextTitle}>กลุ่มโรคที่มีความเสี่ยงต่อการ{'\n'}ทำร้ายตนเอง &ensp;</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Txt2} onPress={()=>this.props.navigation.navigate('Alarms')}>
            <Text style={styles.TextTitle}>สัญญาณเตือน</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Txt1} onPress={()=>this.props.navigation.navigate('Behavior')}>
            <Text style={styles.TextTitle}>พฤติกรรมที่ชัดเจนของการลงมือ{'\n'}ทำร้ายตนเอง &ensp;</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Txt2} onPress={()=>this.props.navigation.navigate('Suicide')}>
            <Text style={styles.TextTitle}>ฆ่าตัวตายป้องกันได้ &ensp;</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <View style={{flex:1,backgroundColor:'#FFF',height:'50%'}}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Txt1: {
        flex:1,
        backgroundColor:'#FFD54F',
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Txt2: {
        flex:1,
        backgroundColor:'#FFECB3',
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    TextTitle: {
        fontSize: 22,
        fontFamily: 'cloud-bold',
        marginLeft: 30,
    }
});
export default ArticleDetail;
