import React , {Component} from 'react';
import { View , Text} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Header , Button , Spinner} from './authenticate/common';
import LoginForm from './authenticate/LoginForm.js';

export default class App extends Component{
      state = { loggedIn : null}

	 componentWillMount() {
			 firebase.initializeApp({
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  });
	// a new function when authentication state change mean login and logout then this method fired
	  firebase.auth().onAuthStateChanged((user)=>{
			     if(user){
						 this.setState({loggedIn : true})
					 }else {
						 this.setState({loggedIn : false})
					 }
		});
		}



		 renderContent() {
         switch (this.state.loggedIn) {
         	case true:
         		return <View>
						<button onClick = {this.logOut.bind(this)} type="button" style = {{fontFamily : 'comic sans ms' , fontSize : 14 ,backgroundColor : 'hotpink' ,marginTop : 5}}>
						   Log Out
						</button>
						</View>;
					case false:
            return <LoginForm />
         	default:
         		return <Spinner />
         }
		 }
   // for log out method ............
	   logOut (){
			 this.setState({loggedIn : false });
		 }


  render() {
  return (
         <View>
            	<Header />
							{this.renderContent()}
				 </View>
   );
  }
 }
