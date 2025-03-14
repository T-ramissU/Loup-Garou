import { Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useGameStore } from '@/stores/GameStore'
import theme, { } from '@/constants/DefaultStyles'
import BackgroundView from '@/components/BackgroundView'
import { Image } from "expo-image";
import ActiveNightCardScene from './ActiveNightCardScene'

const Night = () => {
    const { currentCard, updateCurrentCard } = useGameStore();

    return (
        <Modal visible={true} animationType="fade" transparent={false}>
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
                <ActiveNightCardScene role={currentCard!.card}></ActiveNightCardScene>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => updateCurrentCard()}
                >
                    <Text style={styles.buttonText}>Suivant</Text>
                </TouchableOpacity>
            </BackgroundView>
        </Modal>
    )
}

export default Night

const styles = StyleSheet.create({

    button: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        backgroundColor: theme.color.warn100,
        padding: 10,
        borderRadius: 10,
        zIndex: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }


})