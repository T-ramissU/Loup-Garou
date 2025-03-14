import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Role } from '@/interfaces/RoleInterface'

import allCards from "@/assets/cards/origin.json";
import theme, { customStyles } from '@/constants/DefaultStyles';
import { ImageBackground } from 'expo-image';
import { Image } from "expo-image";
import { imageMap } from '@/constants/CardImages';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import CardInfoModal from '../../components/CardInfoModal';
import Animated from 'react-native-reanimated';



type ActiveNightCardSceneProps = {
    role: Role
}
const ActiveNightCardScene = ({ role }: ActiveNightCardSceneProps) => {

    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false)
    }
    return (
        <BlurView intensity={80} tint='dark' style={[customStyles.container, StyleSheet.absoluteFill]} >
            <Animated.View

                style={[styles.mainView]}
            >
                <View style={styles.imageTitleView}>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                    >
                        <Ionicons name="search-outline" size={30} color={theme.color.warn100} style={styles.searchIcon} />
                        <Image
                            contentFit="fill"
                            source={imageMap[role.Image as keyof typeof imageMap]}
                            style={styles.image}

                        ></Image>
                    </TouchableOpacity>
                    <Text style={[customStyles.H1]}>{role.Name}</Text>

                </View>
                <View style={styles.narratorView}>
                    <Text style={customStyles.H2}>Narrateur :</Text>
                    <View style={styles.speakerView}>
                        <Ionicons name="mic-outline" size={24} color={theme.color.prim20} />
                        <Text style={[customStyles.P1, styles.text]}>{role.Narration}</Text>
                    </View>
                    {/* Only show if role as a Action */}
                    {
                        role.Action &&
                        <View style={styles.speakerView}>
                            <Ionicons name="footsteps-outline" size={24} color={theme.color.prim20} />
                            <Text style={[customStyles.P1, styles.text]}>{role.Action}</Text>

                        </View>
                    }
                    {/* Only show if role has a Remember */}
                    {role.Remember && <View style={styles.speakerView}>
                        <Ionicons name="eye-outline" size={24} color={theme.color.prim20} />
                        <Text style={[customStyles.P1, styles.text]}>{role.Remember}</Text>

                    </View>
                    }
                </View>
            </Animated.View>
            <CardInfoModal visible={visible} onClose={onClose} item={role}></CardInfoModal>
        </BlurView>

    )
}

export default ActiveNightCardScene

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