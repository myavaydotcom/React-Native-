import React from 'react';
import { View , Text , StyleSheet , Image} from 'react-native';

 const Upper = (props)=>{
	   return(
			   <View style = {styles.containerStyle}>
                <Image source = {props.src} style = {styles.img} />
								<Text>{props.title} <br />{props.artist}</Text>
				 </View>
		 );
 }

 const styles = StyleSheet.create({
     containerStyle : {
			    borderWidth : 1,
					borderRadius : 2,
					paddingLeft : 5,
					paddingRight : 5,
					position : 'relative',
					borderBottomWidth : 0
		 },
		 img : {
			   width : 50,
				 height :50,
				 borderRadius : 5
		 }
 });

export default Upper ;
