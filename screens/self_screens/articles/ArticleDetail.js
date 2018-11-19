import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity  style={styles.Txt1} onPress={()=>Alert.alert('test')}>
            <Text style={styles.TextTitle} onPress={()=>Alert.alert('test')}>เหตุผลของการทำร้ายตนเอง &ensp;</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity >

        <TouchableOpacity style={styles.Txt2} onPress={()=>Alert.alert('test')}>
            <Text style={styles.TextTitle}>ลักษณะความทุกข์ใจที่พบ</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Txt1} onPress={()=>Alert.alert('test')}>
            <Text style={styles.TextTitle}>กลุ่มโรคที่มีความเสี่ยงต่อการ{'\n'}ต่อการทำร้ายตนเอง &ensp;</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Txt2} onPress={()=>Alert.alert('test')}>
            <Text style={styles.TextTitle}>สัญญาณเตือน</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Txt1} onPress={()=>Alert.alert('test')}>
            <Text style={styles.TextTitle}>พฤติกรรมที่ชัดเจนของ{'\n'}การทำร้ายตนเอง &ensp;</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Txt2} onPress={()=>Alert.alert('test')}>
            <Text style={styles.TextTitle}>ฆ่าตัวตายป้องกันได้ &ensp;</Text>
            <Icon size={30} type='font-awesome' name='chevron-right'/>
        </TouchableOpacity>

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
        fontSize: 25,
        marginLeft: 30,
    }
});
export default ArticleDetail;
