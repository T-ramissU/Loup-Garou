import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RoleCard from '@/components/RoleCard'
import { Role } from '@/interfaces/RoleInterface'
import { BlurView } from 'expo-blur'
import theme, { customStyles } from '@/constants/DefaultStyles'
import { Ionicons } from '@expo/vector-icons'


type CardInfoModalProps = {
    visible: boolean
    onClose: () => void
    item: Role
}
const CardInfoModal = ({ visible, onClose, item }: CardInfoModalProps) => {

    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <BlurView intensity={100} tint='dark' style={[styles.mainView, StyleSheet.absoluteFill]}>
                <RoleCard roleData={item} />
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={onClose}
                >
                    <Ionicons name="close-outline" size={30} color={theme.color.warn100} />
                </TouchableOpacity>
            </BlurView>
        </Modal>
    )
}

export default CardInfoModal

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 200,
        right: 10,
        backgroundColor: theme.color.prim20,
        padding: 5,
        borderRadius: 50,
    }
})