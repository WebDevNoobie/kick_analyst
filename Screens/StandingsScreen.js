import { View, Text, ScrollView, Image, Platform } from 'react-native'
import React from 'react'

const StandingsScreen = ({data}) => {
    return (
        <View style={{backgroundColor:'#F2F2F2', flex:1}}>
            {data[0]!=null &&
                <View style={{flex:1, alignItems:'center'}}>
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri: data[0].league.logo}} style={{width:'20%', height:undefined, aspectRatio:1, resizeMode:'contain', marginTop:'8%'}}/>
                        <Text style={{fontSize: Platform.OS==='android' ? 15 : '25%', marginTop:'4%'}}>{data[0].league.name}</Text>
                    </View>
                    <View style={{flex:1, marginTop:'8%', paddingHorizontal:'1%', width:'95%', backgroundColor:'white', borderRadius:'10%', overflow:'hidden'}}>
                        <View style={{flexDirection:'row', paddingVertical:'3.5%'}}>
                            <Text style={{width:'4.5%', fontSize: Platform.OS==='android' ? 11 : '16%', textAlign:'center'}}>#</Text>
                            <Text style={{width:'47%', marginLeft:'6.5%', fontSize: Platform.OS==='android' ? 11 : '16%'}}>Club</Text>
                            <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>Pts</Text>
                            <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>P</Text>
                            <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>W</Text>
                            <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>D</Text>
                            <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>L</Text>
                            <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>GD</Text>
                        </View>
                        <View style={{height:'0.1%', backgroundColor:'#f2f2f2'}}/>
                        <ScrollView contentContainerStyle={{paddingBottom:'4.5%'}} showsVerticalScrollIndicator={false}>
                            {data[0].league.standings.map((item,index)=>(
                                <View style={{flex:1}} key={index}>
                                    { data[0].league.standings.length>1 ?
                                        <View style={{flex:1}}>
                                            <View style={{paddingHorizontal:'1%', paddingVertical:'3%'}}>
                                                <Text style={{fontSize:'16%'}}>{item[0].group}</Text> 
                                            </View>
                                            <View style={{height:'1.5%', backgroundColor:'#f2f2f2'}}></View>
                                        </View>
                                        : null
                                    }
                                    {item.map((child,index)=>(
                                        <View style={{flex:1}}  key={index}>
                                            <View style={{flexDirection:'row', paddingHorizontal:'1%', paddingVertical:'3%',  alignItems:'center'}}>
                                                <Text style={{width:'4.5%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>{child.rank}</Text>
                                                {child.status=='same' ? <Image source={require('../assets/straight-arrow.png')} style={{width:'2.5%', height:undefined, aspectRatio:1, resizeMode:'contain', marginHorizontal:'1.5%'}}/> : <View style={{width:'2.5%', marginHorizontal:'1.5%'}}/>}
                                                <Image source={{uri: child.team.logo}} style={{width:'6%', height:undefined, aspectRatio:1, resizeMode:'contain', marginLeft:'1%'}}/>
                                                <Text style={{width:'41%', paddingLeft:'2%', fontSize: Platform.OS==='android' ? 11 : '16%'}}>{child.team.name}</Text>
                                                <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>{child.points}</Text>
                                                <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>{child.all.played}</Text>
                                                <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>{child.all.win}</Text>
                                                <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>{child.all.draw}</Text>
                                                <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>{child.all.lose}</Text>
                                                <Text style={{width:'7%', textAlign:'center', fontSize: Platform.OS==='android' ? 11 : '16%'}}>{child.goalsDiff}</Text>
                                            </View>
                                            <View style={{height:'1.5%', backgroundColor:'#f2f2f2'}}/>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            }
        </View>
    )
}

export default StandingsScreen