import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme, { customStyles } from '@/constants/DefaultStyles';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';




const DayToNight = () => {

    return (
        <Animated.View
            style={styles.mainView}
            entering={FadeIn}

        >
            <View style={styles.narratorView}>
                <Text style={customStyles.H2}>Narrateur :</Text>
                <View style={styles.speakerView}>
                    <Ionicons name="mic-outline" size={24} color={theme.color.prim20} />
                    <Text style={[customStyles.P1, styles.text]}>Le village s'endors...</Text>
                </View>
            </View>
        </Animated.View>
    )
}

export default DayToNight

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