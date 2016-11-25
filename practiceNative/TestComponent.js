'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class TestComponent extends Component {
	render() {
		return (
			<View>
				<Text>
					Hey I am text. and a test. i am two tings.
				</Text>
			</View>
		)
	}
}

module.exports = TestComponent;