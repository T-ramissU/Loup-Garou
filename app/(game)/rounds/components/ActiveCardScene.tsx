import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Role } from '@/interfaces/RoleInterface'

import allCards from "@/assets/cards/origin.json";
import theme, { customStyles } from '@/constants/DefaultStyles';
import { ImageBackground } from 'expo-image';
import { Image } from "expo-image";
import { imageMap } from '@/constants/CardImages';
import { Ionicons } from '@expo/vector-icons';



type ActiveCardSceneProps = {
    role: Role
}
const ActiveCardScene = () => {
    const role: Role = allCards.find((card) => card.Name === "Voyante")!;

    return (
        <View
            style={[customStyles.shadowBox, styles.mainView]}
        >

            <View style={styles.imageTitleView}>
                <Image
                    contentFit="cover"
                    source={imageMap[role.Image as keyof typeof imageMap]}
                    style={styles.image}
                ></Image>
                <Text style={[customStyles.H2]}>{role.Name}</Text>

            </View>

            <View style={styles.descriptionView}>
                <View style={styles.segmentView}>
                    <Text style={customStyles.H2}>Pouvoir :</Text>
                    <Text style={customStyles.P1}>{role.Description}</Text>
                </View>
            </View>
            <View style={styles.narratorView}>
                <Text style={customStyles.H2}>Narrateur :</Text>
                <View style={styles.speakerView}>
                    <Ionicons name="mic" size={24} color="black" />
                    <Text style={customStyles.P1}>C'est à vous de jouer !</Text>

                </View>
            </View>




        </View>
    )
}

export default ActiveCardScene

const styles = StyleSheet.create({

    mainView: {
        borderRadius: 20,
        height: "80%",
        width: "80%",
        alignSelf: "center",
        padding: 20,
        backgroundColor: theme.color.dark80,
    },
    imageTitleView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
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
        gap: 5
    }


})