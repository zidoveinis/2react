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
   // 'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
              <View style={styles.flexbox1}>
              <Button
                
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                
                title="Learn More"
                color="red"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
              
                title="Learn More"
                color="green"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
              
                title="Learn More"
                color="black"
                accessibilityLabel="Learn more about this purple button"
              />
              </View>
              <View style={styles.flexbox2}>
              <Text
              
                title="Learn More"
                color="green"
                accessibilityLabe l="Learn more about this purple button"
              />
              </View>
      </View>

    );
  }
}
//const Box = ({align}) => (
 // <View style={styles.flexBox1}/>
//)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  flexbox1: {
    flex: 1,
    justifyContent: 'space-between'
    
    },
  flexbox2: {
    flex:1,
    justifyContent: 'space-between',
    backgroundColor: 'brown'  
    }
    
  
});