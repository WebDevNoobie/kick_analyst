import { Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FixturesScreen from './FixturesScreen'
import StandingsScreen from './StandingsScreen'

const Tab = createMaterialTopTabNavigator()

const LeagueScreen = ({route}) => {

    const [data, setData] = useState([])
    const [standings, setStandings] = useState([])
    

    useEffect(()=>{
        axios.get("https://v3.football.api-sports.io/fixtures?season=2022&league="+route.params.leagueId,{headers:{
            'x-rapidapi-key': '5f17589b59adfea187e7c090aa206683',
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }})
        .then((res) => setData(res.data.response))
        .catch((err) => console.log(err))

        axios.get("https://v3.football.api-sports.io/standings?season=2022&league="+route.params.leagueId,{headers:{
            'x-rapidapi-key': '5f17589b59adfea187e7c090aa206683',
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }})
        .then((res) => setStandings(res.data.response))
        .catch((err) => console.log(err))
    },[])

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#F2F2F2', paddingTop: Platform.OS==='android' ? StatusBar.currentHeight*1.2 : 0}}>
            <Tab.Navigator initialRouteName='Fixtures' screenOptions={({route}) => ({
                headerShown:false,
                tabBarStyle:{height:'7%', backgroundColor:'#F2F2F2'},
                tabBarLabel: ({focused}) => {
                    return focused ? <Text style={{fontSize: Platform.OS==='android' ? 17 : '22%', color:'purple'}}>{route.name}</Text> : <Text style={{fontSize: Platform.OS==='android' ? 17 : '22%', color:'purple', opacity:0.6}}>{route.name}</Text>
                },
                swipeEnabled:false,
                tabBarIndicatorStyle:{backgroundColor:'purple'}
            })}>
                <Tab.Screen name='Fixtures' children={()=><FixturesScreen data={data}/>}/>
                <Tab.Screen name='Standings' children={()=><StandingsScreen data={standings}/>}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default LeagueScreen