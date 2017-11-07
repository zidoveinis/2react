/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
  Button,
  Platform
} from 'react-native';
const instructions = Platform.select({
  
 // android: 'Double tap R on your keyboard to reload,\n' +
   // 'Shake o    r press menu button for dev menu',
});
var keiciamSpalva = 'blue';
var keiciamSpalva2 = 'green';
var keiciamSpalva3 = 'magenta';
var keiciamSpalva4 = 'black';

export default class App extends Component<{}> {
  constructor()
  {
    super()
    this.state = {
    spalva1: 'red',
      spalva2: 'red',
      spalva3: 'red',
      spalva4: 'red'

    }
}
keiciamSpalva()
{
    var backgroundColor = keiciamojiSp;
    this.setState({
    spalva1: backgroundColor
    })
}
keiciamSpalva2()
{
    var backgroundColor = keiciamojiSp2;
    this.setState({
    spalva2: backgroundColor
    })
}
keiciamSpalva3()
{
    var backgroundColor = keiciamojiSp3;
    this.setState({
    spalva3: backgroundColor
    })
}
keiciamSpalva4()
{
    var backgroundColor = keiciamojiSp4;
    this.setState({
    spalva4: backgroundColor
    })
}



  render() {
    return (
      <View style={styles.container}>
              <View style={styles.flexbox1}>
             
              < TouchableOpacity >
              
              < Text style = { styles.buttonas  } >
                
              Buttonas1
              </ Text >
              
              </ TouchableOpacity >
              
              < TouchableOpacity >
              
              < Text style = { styles.buttonas  } >
                
              Buttonas2
              </ Text >
              
              </ TouchableOpacity >
              < TouchableOpacity >
              
              < Text style = { styles.buttonas  } >
                
              Buttonas3
              </ Text >
              
              </ TouchableOpacity >
              < TouchableOpacity >
              
              < Text style = { styles.buttonas  } >
                
              Buttonas4
              </ Text >
              
              </ TouchableOpacity >
              
              </View>
              <View style={styles.flexbox2}>
          
< Text style ={
        {
        padding: 15,
    width: 150,
    marginLeft: 15,
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 26,
  }
    }> BOX1 </ Text >
    < Text style ={
        {
        padding: 15,
    width: 150,
    marginLeft: 15,
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 26,
  }
    }> BOX2 </ Text >
 

    < Text style ={
        {
        padding: 15,
    width: 150,
    marginLeft: 15,
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 26,
  }
    }> BOX3 </ Text >
    < Text style ={
        {
        padding: 15,
    width: 150,
    marginLeft: 15,
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 26,
  }
    }> BOX4 </ Text >
 

    
  
               </View>
      </View>

    );
  }
}
//const Box = ({align}) => (
 // <View style={styles.flexBox1}/>
//)
const styles = StyleSheet.create({
  buttonas: {
    borderWidth: 6,
    padding: 15,
    height : 50,
    width: 150,
    marginLeft: 15,
    borderColor: 'yellow',
    backgroundColor: 'grey',
    textAlign:'center',
    fontSize: 16,
  },
 
 
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  flexbox1: {
    flex: 1,
    justifyContent: 'space-around'
    
    },
  flexbox2: {
    flex:1,
    justifyContent: 'space-around',
    backgroundColor: 'brown'  
    }
    
  
});