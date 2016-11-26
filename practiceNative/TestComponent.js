'use strict';

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TestComponent extends Component {
	render() {
		return (
				<View style={styles.container}>
					<Image style={styles.logo} source={ require('./img/handstand.jpg') } />
					<Text style={styles.title}>Handstand on a Boat</Text>
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
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

module.exports = TestComponent;