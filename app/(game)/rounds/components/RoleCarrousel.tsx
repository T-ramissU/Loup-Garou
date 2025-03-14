import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Role } from '@/interfaces/RoleInterface'
import { Image } from "expo-image";
import theme, { customStyles } from '@/constants/DefaultStyles';
import { imageMap } from '@/constants/CardImages';




type RoleCarrouselProps = {
    roles: Role[],
    onCardSelect: (card: Role) => void
}
const RoleCarrousel = ({ roles, onCardSelect }: RoleCarrouselProps) => {

    const [selectedCards, setSelectedCards] = React.useState<Role[]>([]);

    const selectCard = (card: Role) => {
        if (selectedCards.includes(card)) {
            setSelectedCards(selectedCards.filter((c) => c !== card))
        } else {
            setSelectedCards([...selectedCards, card])
        }
    }

    const renderImage = (role: Role) => {
        return (
            <View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={imageMap[role.Image as keyof typeof imageMap]}
                ></Image>
                <View style={styles.textBannerView}>
                    <Text style={[customStyles.P1, styles.textBanner]}>{role.Name}</Text>
                </View>
            </View>
        )
    }
    return (
        <View>
            <ScrollView horizontal={true}
                contentContainerStyle={styles.content}
            >
                {
                    roles.map((role: Role, index: number) => (
                        <TouchableOpacity
                            onPress={() => selectCard(role)}
                            key={index}
                            style={[styles.card, selectedCards.includes(role) ? styles.selectedCard : {}]}
                        >
                            {renderImage(role)}
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

        </View>
    )
}


export default RoleCarrousel;

const styles = StyleSheet.create({
    textBanner: {
        color: theme.color.white,
        fontSize: 13,
    },
    imageView: {
        width: 70,
        height: 70,
    },
    image: {
        width: 70,
        height: 70,
    },
    card: {

        alignItems: "center",
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 10,
        padding: 5,
        margin: 5,

    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        gap: 15
    },
    textBannerView: {
        backgroundColor: theme.color.darkblur,
        height: 20,
        width: "100%",
        position: "absolute",
        bottom: "35%",
        alignItems: "center",
        justifyContent: "center",
    },
    selectedCard: {
        borderColor: theme.color.warn100,
        borderWidth: 1,
        borderBottomWidth: 2,
    }

})
