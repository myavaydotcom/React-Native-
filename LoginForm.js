import React , { Component } from 'react';
import {Text,StyleSheet} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Card ,CardSection ,Input,Spinner} from './common';

  class LoginForm extends Component {
		state ={
			  email : '',
				password : '',
				error : '',
				loading : false
		}

	    onButtonPress (){
			const {email , password} = this.state;

			// setting error to null if it has already showing an error
			  this.setState({error : '' , loading : true})

			// connect to firebase ...... and asking for email and password login if exist
			firebase.auth().signInWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this))
			.catch(()=>{
   // catch is a promise that decide that if signIn have any error then  catch the error and  run this funnctionn
	    firebase.auth().createUserWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this))
			.catch(this.onLoginFail.bind(this));
		 });
	 }

    buttonStatus (){
			if(this.state.loading){
				   return <Spinner />;
			}

		return(
			<button type="submit" style = {{ borderWidth : 0,
				padding : 5 ,
				fontFamily : 'comic sans ms',
				fontSize : 15 ,
				backgroundColor : '#f3f' ,
				color : 'white',
				borderRadius : 3}}
				onClick = {this.onButtonPress.bind(this)}>
				Log In
			</button>
		);
		}

  // a new function while login is successfull  or failed.....
    onLoginSuccess() {
			 this.setState({
				 email : '',
				 password : '',
				 loading : false,
				 error  : ''
			 })
		}

		onLoginFail() {
			this.setState({ error : 'Authentication Failed' , loading : false})
		}


		 render(){
			 return(
				 <Card>
             <CardSection>
                   <Input
                      label = "Email : "
											value = {this.state.email}
											onChangeText = {email => this.setState({email})}
											placeholder = "myavay@gmail.com"
									  />
						 </CardSection>
						 <CardSection>
						 <Input
								label = "Password : "
								value = {this.state.password}
								onChangeText = {password => this.setState({password})}
							  secureTextEntry = {true}
							/>
						 </CardSection>

               <Text style = {styles.warningText}>
                     {this.state.error}
							 </Text>

              <CardSection>
							{this.buttonStatus()}
							</CardSection>
				 </Card>
			 );
		 }
	}

const styles  = StyleSheet.create({
	    warningText : {
				  color : 'hotpink',
					fontSize : 20 ,
					alignItems : 'center'
			}
})

	export default LoginForm
