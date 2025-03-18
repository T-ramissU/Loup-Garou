import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import theme, { customStyles } from '@/constants/DefaultStyles';
import { Ionicons } from '@expo/vector-icons';
import { Role } from '@/interfaces/RoleInterface';
import RoleCarrousel from './RoleCarrousel';



type DayHunterActiveProps = {
    roles: Role[]
    onCardSelect: (card: Role) => void
}

const DayHunterActive = ({ roles, onCardSelect }: DayHunterActiveProps) => {


    return (
        <View
            style={styles.mainView}
        >
            <View style={styles.narratorView}>
                <Text style={customStyles.H2}>Narrateur :</Text>
                <View style={styles.speakerView}>
                    <Ionicons name="information-circle" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>Le chasseur à été éliminé. Il peut donc désigner un joueur qu'il souhaite tuer pour se vanger.</Text>
                </View>
                <View style={styles.speakerView}>
                    <Ionicons name="mic-outline" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>Le chasseur désigne un joeur à tuer.</Text>
                </View>

                <RoleCarrousel roles={roles} onCardSelect={onCardSelect}></RoleCarrousel>

            </View>
        </View>
    )
}

export default DayHunterActive

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