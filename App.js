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
var keiciamSpalva = 'green';
var keiciamSpalva2 = 'purple';
var keiciamSpalva3 = 'magenta';
var keiciamSpalva4 = 'gray';

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
    var backgroundColor = keiciamSpalva ;
    this.setState({
    spalva1: backgroundColor
    })
}
keiciamSpalva2()
{
    var backgroundColor = keiciamSpalva2;
    this.setState({
    spalva2: backgroundColor
    })
}
keiciamSpalva3()
{
    var backgroundColor = keiciamSpalva3;
    this.setState({
    spalva3: backgroundColor
    })
}
keiciamSpalva4()
{
    var backgroundColor = keiciamSpalva4;
    this.setState({
    spalva4: backgroundColor
    })
}



  render() {
    return (
      <View style={styles.container}>
              <View style={styles.flexbox1}>
             
              < TouchableOpacity onPress ={ () => this.keiciamSpalva ()} >
              
              < Text style = { styles.buttonas  } >
                
              Buttonas1
              </ Text >
              
              </ TouchableOpacity  >
              
              < TouchableOpacity onPress ={ () => this.keiciamSpalva2  ()} >
              
              < Text style = { styles.buttonas  } >
              Buttonas2
              </ Text >
              
              </ TouchableOpacity >
              < TouchableOpacity onPress ={ () => this.keiciamSpalva3  ()} >
              
              < Text style = { styles.buttonas  } >
              Buttonas3
              </ Text >
              
              </ TouchableOpacity >
              < TouchableOpacity onPress ={ () => this.keiciamSpalva4  ()} >
              
              < Text style = { styles.buttonas  } >
                
              Buttonas4
              </ Text >
              
              </ TouchableOpacity >
              
              </View>
              <View style={styles.flexbox2}>
          

              < Text style =
              {[styles.IPHONE,{ backgroundColor: this.state.spalva1}]}
    > BOX1 </ Text >
   
    < Text style =
    {[styles.IPHONE,{ backgroundColor: this.state.spalva2}]}
  
    > BOX2 </ Text >
 
    < Text style =
    {[styles.IPHONE,{ backgroundColor: this.state.spalva3}]}
  
    > BOX3 </ Text >
    < Text style =
        {[styles.IPHONE,{ backgroundColor: this.state.spalva4}]}
     
  
    > BOX4 </ Text >
 

    
  
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
    },
    
  IPHONE: {
    padding: 15,
    width: 150,
    marginLeft: 15,
    textAlign: 'center',
    fontSize: 26,
  }
});