import React from 'react';
import {View , StyleSheet} from 'react-native';

  const Button = (props) =>{
			return(
				  <View style = { styles.button}>
                  {props.children}
					</View>
			);
	}

	const styles = StyleSheet.create({
		   button : {
				 borderWidth : 0,
				 borderRadius : 5,
				 padding : 5,
				 marginLeft : 40,
				 marginRight : 40,
				 position: 'relative',
				 justifyContent : 'center',
				 alignItems : 'center'
			 }
	})

	export {Button}
