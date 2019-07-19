import React ,{Component}  from 'react';
import {Text , View , StyleSheet} from 'react-native';

    class Header extends Component{
			render(){

			return(
				<View style = {styles.header}>
               <Text style = {styles.text}>Collections !</Text>
				</View>
			);
		}
	}

		const styles = StyleSheet.create({
			header : {
				 justifyContent : 'center',
				 alignItems : 'center',
				 backgroundColor : '#f33',
				 paddingTop : 12,
				 marginTop : 8 ,
				 position : 'relative',
				 borderRadius : 5,
				 shadowColor : 'black',
				 shadowOffset : { width : 0 , height : 3},
				 shadowOpacity : 0.2
			},
			text : {
				 fontSize : 20,
				 fontFamily : 'comic sans ms',
				 color : 'white'
			}
		});

		export default Header ;
