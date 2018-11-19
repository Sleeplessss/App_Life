import React, { Component } from 'react';
import { View, 
  Image,
  StyleSheet,
  Text,
 } from 'react-native';
 import { Avatar } from 'react-native-elements';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextMain}> สำหรับตัวท่านเอง {'\n'}{'\n'}</Text>

        <View style={styles.AvartarMain1}>
          <Avatar
            large
            rounded
            icon={{name: 'key', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{marginLeft: 10}}
          />
          
          <Avatar
            large
            rounded
            icon={{name: 'heart', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 79}}
          />
          
        </View>

        <View style={styles.TextMenu1}>
          <Text 
            onPress={() => console.log("Works!")} 
            style={{color: '#455A64',fontSize: 25,fontWeight: 'bold',marginLeft: 20}}>
            ไขคำถาม...{'\n'}ไขข้อข้องใจ
          </Text>
          <Text 
            onPress={() => console.log("Works!")} 
            style={{color: '#455A64',fontSize: 25,fontWeight: 'bold',marginLeft: 60}}>
            เติมพลังใจ...{'\n'}กันเถอะ
          </Text>
        </View>
        

        <View style={styles.AvartarMain2}>
          <Avatar
            large
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 10, marginTop: 60}}
          />

          <Avatar
            large
            rounded
            icon={{name: 'file', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 79, marginTop: 60}}
          />
        </View>

        <View style={styles.TextMenu2}>
          <Text 
            onPress={() => console.log("Works!")} 
            style={{color: '#455A64',fontSize: 20,fontWeight: 'bold',marginLeft: 10}}>
            ใครสักคน{'\n'}ที่อยากคุย
          </Text>
          <Text 
            onPress={() => console.log("Works!")} 
            style={{color: '#455A64',fontSize: 20,fontWeight: 'bold',marginLeft: 70}}>
            แบบคัดกรอง
          </Text>
        </View>

      </View>
    );
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
  },
  TextMain: {
    // marginTop: 80,
    // backgroundColor:'red',
    color: '#455A64',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  AvartarMain1: {
    // flex:1,
    // backgroundColor:'red',
    flexDirection:'row',
    textAlign: 'center',
    justifyContent:'space-between',
  },
  AvartarMain2: {
    // flex:1,
    // backgroundColor:'green',
    marginBottom:80,
    flexDirection:'row',
    textAlign: 'center',
    justifyContent:'space-between',
  },
  TextMenu1: {
    color: '#455A64',
    textAlign: 'center',
    fontWeight: 'bold',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  TextMenu2: {
    // flex:1,
    backgroundColor: 'yellow',
    color: '#455A64',
    textAlign: 'center',
    fontWeight: 'bold',
    flexDirection:'row',
    justifyContent:'space-between',
  }
});

export default Main;
