'use strict';

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class TestComponent extends Component {
	render() {
		return (
				<View style={styles.container}>
					<Image style={styles.logo} source={ require('./img/handstand.jpg') } />
					<Text style={styles.title}>Handstand on a Boat</Text>
					<TextInput style={styles.input} placeholder="HandStand Username"/>
					<TextInput style={styles.input} placeholder="HandStand Password" secureTextEntry="true"/>
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
	}
});

module.exports = TestComponent;