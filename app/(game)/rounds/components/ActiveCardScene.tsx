import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Role } from '@/interfaces/RoleInterface'

import allCards from "@/assets/cards/origin.json";
import theme, { customStyles } from '@/constants/DefaultStyles';
import { ImageBackground } from 'expo-image';
import { Image } from "expo-image";
import { imageMap } from '@/constants/CardImages';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';



type ActiveCardSceneProps = {
    role: Role
}
const ActiveCardScene = () => {
    const role: Role = allCards.find((card) => card.Name === "Sorcière")!;

    return (
        <BlurView intensity={100} tint='dark' style={[customStyles.container, StyleSheet.absoluteFill]}>
            <View
                style={[customStyles.shadowBox, styles.mainView]}
            >

                <View style={styles.imageTitleView}>
                    <Image
                        contentFit="contain"
                        source={imageMap[role.Image as keyof typeof imageMap]}
                        style={styles.image}
                    ></Image>
                    <Text style={[customStyles.H1]}>{role.Name}</Text>

                </View>

                {/* <View style={styles.descriptionView}>
                <View style={styles.segmentView}>
                    <Text style={customStyles.H2}>Pouvoir :</Text>
                    <Text style={customStyles.P1}>{role.Description}</Text>
                </View>
            </View> */}
                <View style={styles.narratorView}>
                    <Text style={customStyles.H2}>Narrateur :</Text>
                    <View style={styles.speakerView}>
                        <Ionicons name="mic-outline" size={24} color={theme.color.prim20} />
                        <Text style={customStyles.P1}>{role.Narration}</Text>
                    </View>
                    <View style={styles.speakerView}>
                        <Ionicons name="footsteps-outline" size={24} color={theme.color.prim20} />
                        <Text style={customStyles.P1}>{role.Action}</Text>

                    </View>
                    {/* Only show if role has a Remember */}
                    {role.Remember && <View style={styles.speakerView}>
                        <Ionicons name="eye-outline" size={24} color={theme.color.prim20} />
                        <Text style={customStyles.P1}>{role.Remember}</Text>

                    </View>
                    }
                </View>
            </View>
        </BlurView>
    )
}

export default ActiveCardScene

const styles = StyleSheet.create({

    mainView: {
        borderRadius: 20,
        maxHeight: "80%",
        width: "80%",
        alignSelf: "center",
        padding: 20,
        backgroundColor: theme.color.dark80,
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
        gap: 15,
        padding: 10,
    }


})