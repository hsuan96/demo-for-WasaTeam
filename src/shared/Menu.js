import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Menu({ navigation }) {
	return (
		<Ionicons
			name="menu"
			size={30}
			color="#bbb"
			style={{ marginLeft: 15 }}
			onPress={() => navigation.toggleDrawer()}
		/>
	);
}
