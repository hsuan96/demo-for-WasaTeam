import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../screens/List';
import Profile from '../screens/Profile';
import Menu from '../shared/Menu';

const Stack = createStackNavigator();

export default function ListStack({ navigation }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitleStyle: {
					fontSize: 15
				}
			}}
		>
			<Stack.Screen
				name="List"
				component={List}
				options={{
					title: '我的英雄學院-角色清單',
					headerLeft: () => <Menu navigation={navigation} />
				}}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={({ route }) => ({
					title: '角色介紹 - ' + route.params.name
				})}
			/>
		</Stack.Navigator>
	);
}
