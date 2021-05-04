import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import News from '../screens/News';
import Menu from '../shared/Menu';

const Stack = createStackNavigator();

export default function NewsStack({ navigation }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitleStyle: {
					fontSize: 15
				},
				headerLeft: () => <Menu navigation={navigation} />
			}}
		>
			<Stack.Screen
				name="News"
				component={News}
				options={{
					title: ''
				}}
			/>
		</Stack.Navigator>
	);
}
