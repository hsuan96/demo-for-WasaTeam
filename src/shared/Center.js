import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Center({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.content}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	content: {
		fontSize: 30
	}
});
