import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

const CompletedFixtures = ({data}) => {

    const completed = ['FT','AET','PEN','BT','SUSP','INT','PST','CANC','ABD','AWD','WO']

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.fixturesContainer}>
                {data && data.sort((a,b) => {
                        var dateA = new Date(a.fixture.date)
                        var dateB = new Date(b.fixture.date)
                        return dateA-dateB
                    }).map((item,index) => {
                    if(completed.indexOf(item.fixture.status.short)>=0){
                    return (
                        <TouchableOpacity key={index} style={styles.fixtureContainer}>
                            <View style={styles.fixtureTimeInfo}>
                                <Text style={{marginRight:'2.5%'}}>{new Date(item.fixture.date).toDateString()}</Text>
                                <Text style={{marginLeft:'2.5%'}}>{new Date(item.fixture.date).toLocaleTimeString()}</Text>
                            </View>
                            <View style={styles.fixtureContainerInner}>
                                <Image source={{uri: item.teams.home.logo}} style={styles.fixtureTeamLogo}/>
                                <Text style={styles.fixtureScore}>{item.goals.home}-{item.goals.away}</Text>
                                <Image source={{uri: item.teams.away.logo}} style={styles.fixtureTeamLogo}/>
                            </View>
                            <Text>{item.fixture.status.long}</Text>
                        </TouchableOpacity>
                    )}
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:'#f2f2f2',
        flex:1
    },
    fixturesContainer:{
        alignItems:'center',
        flexDirection:'column-reverse',
        paddingTop:'3%'
    },
    fixtureContainer:{
        width:'90%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: Platform.OS==='android' ? 20 : '20%',
        padding:'2.5%',
        marginBottom:'3%'
    },
    fixtureContainerInner:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',
    },
    fixtureTeamLogo:{
        width:'20%',
        height:undefined,
        aspectRatio: 1,
        resizeMode:'contain'
    },
    fixtureScore:{
        fontSize: Platform.OS==='android' ? 20 : '25%',
        fontWeight:'700',
        color:'black',
        marginLeft:'2%'
    },
    fixtureTimeInfo:{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
        marginBottom:'2.5%'
    }
})

export default CompletedFixtures