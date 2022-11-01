import { Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NewsScreen from './NewsScreen'
import LeaguesScreen from './LeaguesScreen'
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const HomeScreen = ({navigation}) => {

    const [news,setNews] = useState([])

    useEffect(()=>{
        axios.get('https://api.newscatcherapi.com/v2/search?q="Premier League"&lang=en&sort_by=date&page_size=100&page=1',{headers:{
            'x-api-key': 'Nu5NWfXdLrTOVhbdIr1BTJ9f88npAXyHt3EzXEHh6ds'
        }})
        .then((res)=>setNews(res.data.articles))
        .catch((err)=>console.log(err))
    },[])

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#F2F2F2', paddingTop: Platform.OS==='android' ? StatusBar.currentHeight*1.2 : 0}}>
            <Tab.Navigator initialRouteName='Fixtures' screenOptions={({route}) => ({
                headerShown:false,
                tabBarStyle:{height:'7%', backgroundColor:'#F2F2F2', paddingBottom:0},
                tabBarIcon: ({focused}) => {
                if(route.name === 'News'){
                    return <FontAwesome5 name="newspaper" size='22%' color={ focused ? 'purple' : 'grey'} />
                }
                else if(route.name === 'Leagues'){
                    return <FontAwesome5 name="trophy" size='22%' color={ focused ? 'purple' : 'grey'} />
                }
            },
                tabBarLabel: ({focused}) => {
                    if(route.name === 'News'){
                        return <Text style={{fontSize: Platform.OS==='android' ? 17 : '15%', color: focused ? 'purple' : 'grey'}}>{route.name}</Text>
                    }
                    else if(route.name === 'Leagues'){
                        return <Text style={{fontSize: Platform.OS==='android' ? 17 : '15%', color: focused ? 'purple' : 'grey'}}>{route.name}</Text>
                    }
                },
                swipeEnabled:false,
                tabBarIndicatorStyle:{backgroundColor:'purple'}
            })}>
                <Tab.Screen name='News' children={()=><NewsScreen data={news}/>}/>
                <Tab.Screen name='Leagues' children={()=><LeaguesScreen navigation={navigation}/>}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default HomeScreen