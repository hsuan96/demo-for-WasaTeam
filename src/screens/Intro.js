import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import myHeroAcademia from '../shared/introData';

export default function Intro() {
	const [ currentIndex, setCurrentIndex ] = useState(null);
	return (
		<View style={styles.container}>
			{myHeroAcademia.map((item, index) => {
				return (
					<TouchableOpacity
						key={index}
						onPress={() => {
							setCurrentIndex(index === currentIndex ? null : index);
						}}
						activeOpacity={0.9}
						style={styles.card}
					>
						<View style={styles.header}>
							<Text style={styles.title}>{item.title}</Text>
							{index === currentIndex ? (
								<Entypo name="triangle-up" size={24} color="black" />
							) : (
								<Entypo name="triangle-down" size={24} color="black" />
							)}
						</View>
						{index === currentIndex && <Text style={styles.content}>{item.content}</Text>}
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	card: {
		marginTop: 10
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#ddd',
		padding: 10
	},
	title: {
		flex: 1
	},
	content: {
		backgroundColor: '#eee',
		padding: 10,
		paddingBottom: 20
	}
});
