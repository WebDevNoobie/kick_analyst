import { SafeAreaView, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React from 'react'

const LeaguesScreen = ({navigation}) => {

    const leagueData = [
        {
            id: 39,
            name: "Premier League",
            logo: "https://media.api-sports.io/football/leagues/39.png"
        },
        {
            id: 2,
            name: "UEFA Champions League",
            logo: "https://media.api-sports.io/football/leagues/2.png"
        },
        {
            id: 140,
            name: "La Liga",
            logo: "https://media.api-sports.io/football/leagues/140.png"
        },
        {
            id: 1,
            name: "World Cup",
            logo: "https://media.api-sports.io/football/leagues/1.png"
        },
        {
            id: 135,
            name: "Serie A",
            logo: "https://media.api-sports.io/football/leagues/135.png"
        },  
        {
            id: 78,
            name: "Bundesliga",
            logo: "https://media.api-sports.io/football/leagues/78.png"
        },
        {
            id: 61,
            name: "Ligue 1",
            logo: "https://media.api-sports.io/football/leagues/61.png"
        },
        {
            id: 3,
            name: "UEFA Europa League",            
            logo: "https://media.api-sports.io/football/leagues/3.png"
        },
        {
            id:4,
            name: "Euro Championship",
            logo: "https://media.api-sports.io/football/leagues/4.png"
        },
        {
            id: 9,
            name: "Copa America",
            logo: "https://media.api-sports.io/football/leagues/9.png"
        }       
    ]
    
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.screenName}>Leagues</Text>
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
                {leagueData.map((item,index)=>(
                    <TouchableOpacity key={index} style={styles.leagueContainer} onPress={()=>navigation.navigate('LeagueScreen', {leagueId:item.id, leagueName:item.name})}>
                        <Image source={{uri: item.logo}} style={styles.leagueLogo}/>
                        <Text style={styles.leagueName}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#F2F2F2',
        paddingTop: Platform.OS==='android' ? StatusBar.currentHeight*1.2 : 0
    },
    screenName:{
        fontSize: Platform.OS==='android' ? 25 : '40%',
        fontWeight:'700',
        marginVertical:'10%',
        marginLeft:'5%'
    },
    leagueContainer:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        borderRadius: Platform.OS==='android' ? 20 : '15%',
        padding:'5%',
        marginBottom:'3%'
    },
    leagueLogo:{
        width:'7%',
        height:undefined,
        aspectRatio: 1,
        resizeMode:'contain'
    },
    leagueName:{
        fontSize: Platform.OS==='android' ? 14 : '17%',
        marginLeft:'4%'
    }
})

export default LeaguesScreen