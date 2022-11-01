import { View, Text,ScrollView, Image } from 'react-native'
import React from 'react'

const NewsScreen = ({data}) => {
    return (
        <View style={{flex:1, backgroundColor:'#f2f2f2', alignItems:'center'}}>
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
                {data && data.map((item,index)=>(
                    <View style={{width:'95%', backgroundColor:'white', borderRadius:'20%', marginTop:'7%', overflow:'hidden'}} key={index}>
                        <Image source={{uri:item.media}} style={{width:'100%', height:undefined, aspectRatio:1.5}}/>
                        <View style={{padding:'5%'}}>
                            <Text style={{fontSize:'25%', fontWeight:'700'}}>{item.title}</Text>
                            <Text style={{marginTop:'3%', fontSize:'18%'}}>{item.summary}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default NewsScreen