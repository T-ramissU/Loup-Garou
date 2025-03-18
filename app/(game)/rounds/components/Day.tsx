import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useGameStore } from '@/stores/GameStore';
import theme, { customStyles } from '@/constants/DefaultStyles';
import BackgroundView from '@/components/BackgroundView';
import DayDiscussionScene from './DayDiscussionScene';
import DayVoteScene from './DayVoteScene';
import DayEliminationScene from './DayEliminationScene';
import { Role } from '@/interfaces/RoleInterface';
import DayToNight from './DayToNight';
import DayHunterActive from './DayHunterActive';

const Day = () => {
    const { resetCurrentCard, cards, removeCard, startNightPhase } = useGameStore();

    const [phase, setPhase] = useState<number>(1);
    const [selectedCards, setSelectedCards] = useState<Role[]>([]);

    const onCardSelect = (card: Role) => {
        if (selectedCards.includes(card)) {
            setSelectedCards(selectedCards.filter((c) => c !== card));
        } else {
            setSelectedCards([...selectedCards, card]);
        }
    };

    const handleNextPress = () => {
        if (phase === 1) {
            selectedCards.forEach((card) => removeCard(card.Name));
            setSelectedCards([]);
            setPhase((prev) => prev + 1); // goes from 1 -> 2 (DayVoteScene)
        } else if (phase === 3) {
            // In elimination phase: check if "Chasseur" is selected.
            let hunterSelected = false;
            selectedCards.forEach((card) => {
                if (card.Name === "Chasseur") {
                    hunterSelected = true;
                }
                removeCard(card.Name);
            });
            setSelectedCards([]);
            if (hunterSelected) {
                setPhase(0); // Show Hunter Scene
                return; // Stop further phase change
            } else {
                setPhase((prev) => prev + 1); // goes from 3 -> 4 (DayToNight)
            }
        } else if (phase === 0) {
            // After the hunter scene is shown, proceed to the next appropriate phase.
            setPhase(4);
        } else if (phase === 4) {
            resetCurrentCard();
            startNightPhase();
        } else {
            // Default: increment phase.
            setPhase((prev) => prev + 1);
        }
    };

    return (
        <Modal visible={true} animationType="fade" transparent={false}>
            <BackgroundView backgroundImage={require('@/assets/images/village_bg1.png')}>
                <View style={styles.header}>
                    <Text style={customStyles.H1}>Le village se réveille</Text>
                </View>

                {phase === 0 && (
                    <DayHunterActive onCardSelect={onCardSelect} roles={cards} />
                )}
                {phase === 1 && (
                    <DayDiscussionScene onCardSelect={onCardSelect} roles={cards} />
                )}
                {phase === 2 && <DayVoteScene />}
                {phase === 3 && (
                    <DayEliminationScene onCardSelect={onCardSelect} roles={cards} />
                )}
                {phase === 4 && <DayToNight />}

                <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                    {phase === 0 && <Text style={styles.buttonText}>Suivant</Text>}
                    {phase === 1 && <Text style={styles.buttonText}>Suivant</Text>}
                    {phase === 2 && (
                        <Text style={styles.buttonText}>Passer au vote</Text>
                    )}
                    {phase === 3 && (
                        <Text style={styles.buttonText}>Valider les votes</Text>
                    )}
                    {phase === 4 && (
                        <Text style={styles.buttonText}>Passer à la nuit</Text>
                    )}
                </TouchableOpacity>
            </BackgroundView>
        </Modal>
    );
};

export default Day;

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 50,
        left: 0,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 0,
    },
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
    },
});
