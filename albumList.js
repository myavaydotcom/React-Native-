import React ,{Component}  from 'react';
import {Text , View , StyleSheet} from 'react-native';
import axios from 'axios';
import AlbumDetails from './albumDetails.js';

  class AlbumLists extends Component {
		// defining state .....
		 state = {
			 albums : []
		 };

		componentWillMount(){
				// an asynchronous request using axios and get method and use a promise  ,,,, it returns a response object .....
				//as it return response object  and update the album state .....
					axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums : response.data}));
		}

    // function  for showing list of albums ...
		renderAlbums(){
			   return this.state.albums.map(album => <AlbumDetails key = {album.title} thumbnail_image = {album.thumbnail_image} artist = {album.artist} title = {album.title} image = {album.image} url = {album.url} />)
		}

		render(){
			return(
         <View>
                    {this.renderAlbums()}
				 </View>
			);
		}
	}

 export default AlbumLists
