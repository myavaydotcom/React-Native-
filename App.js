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
    apiKey: "AIzaSyAJUnacPh6I1_7jRdMQthIo52mamNhmdmI",
    authDomain: "authentication-96213.firebaseapp.com",
    databaseURL: "https://authentication-96213.firebaseio.com",
    projectId: "authentication-96213",
    storageBucket: "",
    messagingSenderId: "159837044100",
    appId: "1:159837044100:web:173386b67be05ec5"
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
