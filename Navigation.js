import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import React from 'react'
import WelcomeScreen from './Screens/WelcomeScreen'
import HomeScreen from './Screens/HomeScreen'
import LeaguesScreen from './Screens/LeaguesScreen'
import LeagueScreen from './Screens/LeagueScreen'

const Stack = createStackNavigator()

export const Navigation_Stack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='LeagueScreen' component={LeagueScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)