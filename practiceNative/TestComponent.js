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
				<Text>
					Hey I am text. and a test. i am two tings.
					<Image style={styles.logo} source={ require('./img/handstand.jpg') } />
				</Text>
		)
	}
}

const styles = StyleSheet.create({
	logo: {
		width: 66,
		height: 55
	}
});

module.exports = TestComponent;