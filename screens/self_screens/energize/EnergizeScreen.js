import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Slider } from 'react-native';
import { Button } from 'react-native-elements'

class EnergizeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 5,
      };
  }
  static navigationOptions = ({
    header : null,
});

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }
  getVal(val){
    console.log(val);
    }  

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.TitleText}>วัดระดับพลังใจกันหน่อย {'\n'}</Text>
        <View style={styles.body}>
            <Text style={styles.TitleBody1}>1</Text>
            <Text style={styles.TitleBody2}>5</Text>
            <Text style={styles.TitleBody3}>10</Text>
        </View>

        <View style={styles.SliderStyle}>
            <Slider
                style={{width:250}}
                trackStyle={styles.track}
                thumbStyle={styles.thumb}
                step={1}
                minimumValue={0}
                maximumValue={10}
                value={this.state.value}
                onValueChange={val => this.setState({ value: val })}
                onSlidingComplete={ val => this.getVal(val)}
                />
        </View>

        <View style={styles.Btn}>
            <Button
            onPress={()=>Alert.alert('test')}
            title= 'ตกลง'
            color= '#000'
            fontWeight = 'bold'
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#A5D6A7',
                width: 130,
                height: 50        
            }}
            />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignContent: 'center',
        // alignItems: 'center',
        justifyContent: 'center'
    },
    Btn: {
        marginTop: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        marginTop: 30,
        flexDirection:'row',
        // justifyContent: 'space-between'
    },
    TitleBody1: {
        color: '#455A64',
        marginLeft:65,
        fontSize: 20,
        fontWeight: 'bold'
    },
    TitleBody2: {
        color: '#455A64',
        marginLeft:97,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    TitleBody3: {
        color: '#455A64',
        marginLeft:98,
        fontSize: 20,
        fontWeight: 'bold'
    },
    SliderStyle: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleText: {
        color: '#455A64',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    track: {
        height: 18,
        borderRadius: 1,
        backgroundColor: '#d5d8e8',
      },
    thumb: {
        width: 20,
        height: 30,
        borderRadius: 1,
        backgroundColor: '#838486',
    }
})

export default EnergizeScreen;
