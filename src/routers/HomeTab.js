import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import ListStack from './ListStack';
import IntroStack from './IntroStack';
import NewsStack from './NewsStack';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
	return (
		<Tab.Navigator
			initialRouteName="List"
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
				style: {
					height: 55,
					backgroundColor: '#ccc'
				},
				tabStyle: {
					color: 'tomato',
					size: 5
				},
				labelStyle: {
					fontSize: 12,
					paddingBottom: 5
				}
			}}
		>
			<Tab.Screen
				name="List"
				component={ListStack}
				options={{
					tabBarLabel: '角色清單',
					tabBarIcon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />
				}}
			/>
			<Tab.Screen
				name="Intro"
				component={IntroStack}
				options={{
					tabBarLabel: '介紹',
					tabBarIcon: ({ size, color }) => (
						<Ionicons name="information-circle-outline" size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name="News"
				component={NewsStack}
				options={{
					tabBarLabel: '通知',
					tabBarIcon: ({ size, color }) => <AntDesign name="notification" size={size} color={color} />
				}}
			/>
		</Tab.Navigator>
	);
}
