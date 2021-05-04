import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HomeTab from './HomeTab';
import News from '../screens/News';

function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.container}>
				<FontAwesome name="user" size={40} style={styles.avatar} />
				<Text>welcome!</Text>
			</View>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}

export default function RootRoute() {
	const Drawer = createDrawerNavigator();

	return (
		<NavigationContainer>
			<Drawer.Navigator hideStatusBar={false} drawerContent={(props) => <CustomDrawerContent {...props} />}>
				<Drawer.Screen name="首頁" component={HomeTab} />
				<Drawer.Screen name="新訊" component={News} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingTop: 30,
		display: 'flex',
		alignItems: 'center'
	},
	avatar: {
		marginBottom: 20,
		padding: 30,
		backgroundColor: '#ddd',
		color: 'tomato',
		borderRadius: 20
	}
});
