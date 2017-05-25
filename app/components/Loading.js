import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ActivityIndicator,
} from 'react-native';

import Common from '../common/constants';

export default class Loading extends React.Commponent {
	render() {
		return (
			<View style = {styles.Loading}>
			   <ActivityIndicator color = "white"/>
			   <Text style = {styles.LoadingTitle}>加载中……</Text>
			   </View>
			)
	}
}

const styles = StyleSheet.create({
	Loading: {
		backgroundColor: 'gray',
		height: 80,
		width: 100,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute'
		top: (Common.window.height - 80)/2,
		left: (common.window.width - 100)/2,
	},
	LoadingTitle: {
		marginTop: 10,
		fontSize: 14,
		color: 'white'
	}
})