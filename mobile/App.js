import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import io from "socket.io-client"


export default class App extends Component {

  componentDidMount(){
    const socket = io("http://192.168.0.105:3000")
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="Type Message"
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignSelf:"center"
  }
})