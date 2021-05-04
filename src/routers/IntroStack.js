import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../screens/Intro';
import Menu from '../shared/Menu';

const Stack = createStackNavigator();

export default function IntroStack({ navigation }) {
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
				name="Intro"
				component={Intro}
				options={{
					title: '我的英雄學院 - 介紹'
				}}
			/>
		</Stack.Navigator>
	);
}
