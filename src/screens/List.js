import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import useApi from '../shared/useApi';
import Center from '../shared/Center';

export default function List({ navigation }) {
	const [ data, isloading, error ] = useApi();

	if (error) return <Center>無法下載</Center>;
	if (isloading) return <Center>努力下載中...</Center>;
	return (
		<View style={styles.container}>
			<Text style={styles.title}>雄英高校 英雄科1年A班</Text>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.item}
						onPress={() => {
							navigation.navigate('Profile', item);
						}}
					>
						<Text style={styles.content}>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>
			<Text style={styles.wiki}>資訊來源:維基百科</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20
	},
	title: {
		textAlign: 'center'
	},
	item: {
		backgroundColor: 'pink',
		borderRadius: 5,
		padding: 15,
		marginTop: 10
	},
	content: {
		color: 'tomato'
	},
	wiki: {
		color: '#aaa',
		fontSize: 12
	}
});
