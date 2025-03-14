import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import theme, { customStyles } from '@/constants/DefaultStyles';
import { Ionicons } from '@expo/vector-icons';




const DayVoteScene = () => {

    return (
        <View
            style={styles.mainView}
        >
            <View style={styles.narratorView}>
                <Text style={customStyles.H2}>Narrateur :</Text>
                <View style={styles.speakerView}>
                    <Ionicons name="information-circle" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>{"Annoncez le début des votes et la fin des discussions:\n"}</Text>
                </View>
                <View style={styles.speakerView}>
                    <Ionicons name="information-circle" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>Demandez au joeurs de pointer apres un décompte de 5s vers la personne qu'ils aimerent éliminer </Text>
                </View>
                <View style={styles.speakerView}>
                    <Ionicons name="information-circle" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>Effectuer le décompte et comptabiliser les votes.</Text>
                </View>
                <View style={styles.speakerView}>
                    <Ionicons name="information-circle" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>{"En cas d'égaliser c'est à vous de choisir comment opperer: \n" +
                        " - Soit personne ne meurs\n - Soit vous refaites un vote pour départager \n - Soit les 2 meurent"} </Text>
                </View>
            </View>
        </View>
    )
}

export default DayVoteScene

const styles = StyleSheet.create({

    mainView: {
        borderRadius: 20,
        maxHeight: "65%",
        width: "80%",
        alignSelf: "center",
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 0,
    },
    imageTitleView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
        gap: 40,

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 60,
        opacity: 0.4,

    },
    descriptionView: {
        gap: 10,
        marginBottom: 20
    },
    segmentView: {
        gap: 5,
    },
    narratorView: {
        justifyContent: "space-between",
    },
    speakerView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        padding: 10,

    },
    searchIcon: {
        position: "absolute",
        zIndex: 1,
        top: 10,
        left: 10,
    },
    text: {
        width: "80%",
    }



})