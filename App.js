
import React, { Component } from 'react';  
import { Alert, Button, StyleSheet, View, TextInput, Text } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/database';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}
     firebase.initializeApp(firebaseConfig)
     console.log('Running..')
     this.onPressButton = this.onPressButton.bind(this)
     this.registerData = this.registerData.bind(this)
    
  }

  onPressButton() {
    username = this.state.username;
    password = this.state.password;
    firebase.database().ref('Users/').once('value').then(function(snapshort) {
    
      if(snapshort.val().username==username){
        if(snapshort.val().password==password){
          Alert.alert('Login Success')
        } else {
          Alert.alert('Wrong Password')
        }
      } else {
        Alert.alert('Wrong UserName')
      }
      
     });
  }
  
  registerData() {
    username = this.state.username;
    password = this.state.password;

    firebase.database().ref('Users/').set({
      username: username,
      password: password
    }).then().catch();
  }

  render() {
    return (
      <View style={styles.container}>
  <Text>{this.state.password}</Text>
                <View style={styles.inputField}>
                    <TextInput placeholder="User name" 
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    />
                    <TextInput placeholder="Password" secureTextEntry
                    
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    />

                </View>

                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Login"
                    />  
                </View>

                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.registerData}  
                        title="Change Password"
                    />  
                </View>  
                
            </View>  
  
    );
  };

}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
  },  
  buttonContainer: {  
      margin: 20  
  },
  inputField: {
    margin: 20
  } 
})

var firebaseConfig = {
  apiKey: "AIzaSyD3yMEHM7LpZFRUf0-Jqv6fU_GN3ISigps",
  authDomain: "fire-base-login-app-dafe9.firebaseapp.com",
  databaseURL: "https://fire-base-login-app-dafe9.firebaseio.com",
  projectId: "fire-base-login-app-dafe9",
  storageBucket: "fire-base-login-app-dafe9.appspot.com",
  messagingSenderId: "895652671945",
  appId: "1:895652671945:web:6e2cef833414158af3b818",
  measurementId: "G-3Q79CJT9TP"
  };