import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGameStore } from '@/stores/GameStore'
import ActiveCardScene from './ActiveCardScene'
import theme, { customStyles } from '@/constants/DefaultStyles'
import { Colors } from '@/constants/Colors'
import BackgroundView from '@/components/BackgroundView'
import { Image } from "expo-image";

const Night = () => {
    const { currentCard, updateCurrentCard } = useGameStore()
    return (
        <BackgroundView backgroundImage={require('@/assets/images/dark_forest_bg.png')}>
            <Image

                source={require('@/assets/images/moon.png')}
                style={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    width: 200,
                    height: 200,
                    zIndex: 0,
                }}>

            </Image>
            <ActiveCardScene></ActiveCardScene>
        </BackgroundView>
    )
}

export default Night

const styles = StyleSheet.create({


})