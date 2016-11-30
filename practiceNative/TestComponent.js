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
	}

	render() {
		return (
				<View style={styles.container}>
					<Image style={styles.logo} source={ require('./img/handstand.jpg') } />
					<Text style={styles.title}>Handstand on a Boat</Text>
					<TextInput onChangeText={text => console.log(text)} style={styles.input} placeholder="HandStand Username"/>
					<TextInput style={styles.input} placeholder="HandStand Password" secureTextEntry={true}/>
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
	},
	buttonText: {
		fontSize: 22,
		color: '#FFF',
		alignSelf: 'center',
	}
});

module.exports = TestComponent;