import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Center from '../shared/Center';

export default function Profile({ route }) {
	const { name, heroname, quirk, bday, height, bloodtype, like } = route.params;
	return (
		<Center>
			<View style={styles.card}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.item}>英雄名 : {heroname}</Text>
				<Text style={styles.item}>個性 : {quirk}</Text>
				<Text style={styles.item}>生日 : {bday}</Text>
				<Text style={styles.item}>身高 : {height}</Text>
				<Text style={styles.item}>血型 : {bloodtype}</Text>
				<Text style={styles.item}>喜歡的事物 : {like}</Text>
			</View>
		</Center>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#ccc',
		width: 240,
		padding: 30,
		borderRadius: 10
	},
	name: {
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		paddingBottom: 10,
		marginBottom: 10
	},
	item: {
		marginBottom: 5
	}
});
