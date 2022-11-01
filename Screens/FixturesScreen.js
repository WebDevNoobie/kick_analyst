import { Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import UpcomingFixtures from './UpcomingFixtures'
import LiveFixtures from './LiveFixtures'
import CompletedFixtures from './CompletedFixtures'

const Tab = createMaterialTopTabNavigator()

const FixturesScreen = ({data}) => {

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'purple'}}>
            <Tab.Navigator initialRouteName='Upcoming' screenOptions={({route}) => ({
                headerShown:false,
                tabBarStyle:{height:'7%', backgroundColor:'#f2f2f2'},
                tabBarLabel: ({focused}) => {
                    return focused ? <Text style={{fontSize: Platform.OS==='android' ? 15 : '18%', color:'purple'}}>{route.name}</Text> : <Text style={{fontSize: Platform.OS==='android' ? 15 : '18%', color:'purple', opacity:0.6}}>{route.name}</Text>
                },
                swipeEnabled:false,
                tabBarIndicatorStyle:{backgroundColor:'purple'}
            })}>
                <Tab.Screen name='Upcoming' children={()=><UpcomingFixtures data={data}/>}/>
                <Tab.Screen name='Live' children={()=><LiveFixtures data={data}/>}/>
                <Tab.Screen name='Completed' children={()=><CompletedFixtures data={data}/>}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default FixturesScreen