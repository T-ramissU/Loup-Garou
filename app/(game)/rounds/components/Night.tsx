import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGameStore } from '@/stores/GameStore'
import ActiveCardScene from './ActiveCardScene'
import theme, { customStyles } from '@/constants/DefaultStyles'
import { Colors } from '@/constants/Colors'

const Night = () => {
    const { currentCard, updateCurrentCard } = useGameStore()
    return (
        <View style={customStyles.container}>
            <ActiveCardScene></ActiveCardScene>
        </View>
    )
}

export default Night

const styles = StyleSheet.create({


})