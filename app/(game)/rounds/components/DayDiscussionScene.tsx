import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Role } from '@/interfaces/RoleInterface'

import theme, { customStyles } from '@/constants/DefaultStyles';
import { Ionicons } from '@expo/vector-icons';




const DayDiscussionScene = () => {

    return (
        <View
            style={styles.mainView}
        >
            <View style={styles.narratorView}>
                <Text style={customStyles.H2}>Narrateur :</Text>
                <View style={styles.speakerView}>
                    <Ionicons name="information-circle" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>{"Annoncez les victimes au village si il y en a en gardant en tête:\n" +
                        "- le vote des loups\n- les actions de la sorcière \n- le possible couple"}</Text>
                </View>
                <View style={styles.speakerView}>
                    <Ionicons name="information-circle" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>Après un certain temps ou quand le village se décide passez au vote.</Text>
                </View>
            </View>
        </View>
    )
}

export default DayDiscussionScene

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