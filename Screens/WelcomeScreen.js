import { SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AnimatedLoader from 'react-native-animated-loader'

const WelcomeScreen = ({navigation}) => {

    const [showLottie, setShowLottie] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setShowLottie(false)
            navigation.replace('HomeScreen')
        },1950)
    },[])

    return (
        <SafeAreaView>
            <AnimatedLoader
                visible={showLottie}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={{width: '100%'}}
                source={require('../assets/start_animation_2.json')}
                speed={1}
            />
        </SafeAreaView>
    )
}

export default WelcomeScreen