'use strict';

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default class TestComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		}

		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
	}

	handleUserChange (username) {
		this.setState({username});
		console.log('THIS IS THE STATE', this.state)
	}

	handlePassChange (password) {
		this.setState({password});
		console.log('THIS IS THE STATE', this.state)
	}

	render() {
		return (
				<View style={styles.container}>
					<Image style={styles.logo} source={ require('./img/handstand.jpg') } />
					<Text style={styles.title}>Handstand on a Boat</Text>
					<TextInput onChangeText={this.handleUserChange} style={styles.input} placeholder="HandStand Username"/>
					<TextInput onChangeText={this.handlePassChange} style={styles.input} placeholder="HandStand Password" secureTextEntry={true}/>
					<TouchableHighlight style={styles.button}>
						<Text style={styles.buttonText}>Log In</Text>
					</TouchableHighlight>
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

module.exports = TestComponent;