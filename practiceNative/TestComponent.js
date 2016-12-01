'use strict';

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  TextInput
} from 'react-native';

export default class TestComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			showProgress: false
		}
	}

	handleUserChange = (username) => {
		this.setState({username});
		console.log('THIS IS THE STATE', this.state)
	}

	handlePassChange = (password) => {
		this.setState({password});
		console.log('THIS IS THE STATE', this.state)
	}

	onLoginPressed = () => {
		console.log('Attempting to login with ' + this.state.username + '!!!');
		this.setState({showProgress: true})
	}

	render() {
		return (
				<View style={styles.container}>
					<Image style={styles.logo} source={ require('./img/handstand.jpg') } />
					<Text style={styles.title}>Handstand on a Boat</Text>
					<TextInput onChangeText={this.handleUserChange} style={styles.input} placeholder="HandStand Username"/>
					<TextInput onChangeText={this.handlePassChange} style={styles.input} placeholder="HandStand Password" secureTextEntry={true}/>
					<TouchableHighlight 
						onPress={this.onLoginPressed}
						style={styles.button}>
						<Text style={styles.buttonText}>Log In</Text>
					</TouchableHighlight>

					<ActivityIndicator 
						animating={this.state.showProgress}
						size='large' 
					/>
				</View>
		)
	}
}

const styles = StyleSheet.create({
	logo: {
		width: 196,
		height: 185,
	},
	title: {
		fontSize: 28,
		paddingTop: 25,
		color: 'skyblue'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		fontSize: 18,
		height: 50,
		marginTop: 10,
		padding: 5,
		borderWidth: 1,
		borderColor: '#48bbec',
		borderRadius: 10
	},
	button: {
		height: 50,
		marginTop: 10,
		backgroundColor: 'skyblue',
		alignSelf: 'stretch',
		justifyContent: 'center',
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 22,
		color: '#FFF',
		alignSelf: 'center',
	}
});
