import { Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useGameStore } from '@/stores/GameStore'
import theme, { customStyles } from '@/constants/DefaultStyles'
import BackgroundView from '@/components/BackgroundView'
import DayDiscussionScene from './DayDiscussionScene'
import DayVoteScene from './DayVoteScene'
import DayEliminationScene from './DayEliminationScene'
import { Role } from '@/interfaces/RoleInterface'

const Day = () => {
    const { currentCard, updateCurrentCard, cards, removeCard } = useGameStore();

    const [phase, setPhase] = useState<number>(1);

    const nextPhase = () => {
        setPhase(phase + 1);
    }
    const onCardSelect = (card: Role) => {
        removeCard(card.Name);
    }

    return (
        <Modal visible={true} animationType="fade" transparent={false}>
            <BackgroundView backgroundImage={require('@/assets/images/village_bg1.png')}>

                <View style={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    width: '100%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 0,
                }}>

                    <Text style={customStyles.H1}>Le village se réveil</Text>
                </View>
                {
                    phase == 1 &&
                    <DayDiscussionScene ></DayDiscussionScene>
                }
                {
                    phase == 2 &&
                    <DayVoteScene ></DayVoteScene>
                }
                {
                    phase == 3 &&
                    <DayEliminationScene onCardSelect={onCardSelect} roles={cards} ></DayEliminationScene>
                }
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => nextPhase()}
                >
                    <Text style={styles.buttonText}>Passer au vote</Text>
                </TouchableOpacity>
            </BackgroundView>
        </Modal>
    )
}

export default Day

const styles = StyleSheet.create({

    button: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        backgroundColor: theme.color.warn100,
        padding: 10,
        borderRadius: 10,
        zIndex: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }


})