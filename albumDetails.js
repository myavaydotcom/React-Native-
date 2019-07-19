import React from 'react';
import {Text , View ,Image} from 'react-native';
import Card from './card.js';
import CardSection from './cardSection.js';
import Upper from './upperPart.js';

const AlbumDetails = (props)=>{
	 return(
		 <Card>
		    <CardSection>
				<Upper src = {props.thumbnail_image} artist = {props.artist} title = {props.title} />
					 </CardSection>
			 <CardSection>
         <Image source = {props.image} style = { {width : 100 , height : 100} } />
					 </CardSection>
			 <CardSection>
           <button><a href={props.url}>Purchase</a></button>
					 </CardSection>
		 </Card >
	 );
};

 export default AlbumDetails;
