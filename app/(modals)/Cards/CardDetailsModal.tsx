import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import theme, { customStyles } from "@/constants/DefaultStyles";
import allCards from "@/assets/cards/origin.json";
import { Role } from "@/interfaces/RoleInterface";
import { Image } from "expo-image";
import { imageMap } from "@/constants/CardImages";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RoleCard from "@/components/RoleCard";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

type CardDetailModalProps = {
  roleData: Role;
  isOpen: boolean;
  onClosePress: () => void;
};

const CardDetailsModal = ({
  roleData,
  isOpen,
  onClosePress,
}: CardDetailModalProps) => {
  const getBorderColor = (roleData: Role) => {
    switch (roleData.Side) {
      case "V":
        return theme.color.green;
        break;
      case "S":
        return theme.color.grey100;
        break;
      case "L":
        return theme.color.red;
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isOpen}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            onClosePress();
          }}
        >
          <BlurView
            style={styles.centeredView}
            intensity={100}
            tint="systemThickMaterialDark"
          >
            <View
              style={[
                styles.mainView,
                {
                  borderColor: getBorderColor(roleData),
                },
              ]}
            >
              <TouchableOpacity
                style={[styles.closeButton]}
                onPress={() => {
                  onClosePress();
                }}
              >
                <Ionicons
                  name="close-outline"
                  size={20}
                  style={customStyles.ButtonIcon}
                />
              </TouchableOpacity>
              <View style={styles.imageTitleView}>
                <Image
                  contentFit="fill"
                  source={imageMap[roleData.Image as keyof typeof imageMap]}
                  style={styles.image}
                ></Image>
                <Text style={[customStyles.H2]}>{roleData.Name}</Text>
              </View>
              <View style={styles.descriptionView}>
                <View style={styles.segmentView}>
                  <Text style={customStyles.P1}>Pouvoir :</Text>
                  <Text style={customStyles.P2}>{roleData.Description}</Text>
                </View>
                <View style={styles.segmentView}>
                  <Text style={customStyles.P1}>Condition de victoire :</Text>
                  <Text style={customStyles.P2}>{roleData.Victory}</Text>
                </View>
              </View>
            </View>
          </BlurView>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CardDetailsModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    height: 30,
    width: 30,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.color.tert100,
    position: "absolute",
    top: -40,
    right: -15,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  mainView: {
    // borderColor: theme.color.prim40,
    borderWidth: 1,
    width: 300,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    borderRadius: theme.borderRadius.sz2,
    padding: theme.spacing.sz3,
    backgroundColor: theme.color.dark100,
    gap: theme.spacing.sz2,
  },
  image: {
    width: 100,
    height: 100,
  },
  descriptionView: {
    flexGrow: 1,
    gap: theme.spacing.sz2,
    borderWidth: 1,
    borderColor: theme.color.prim20,
    padding: theme.spacing.sz3,
    width: "100%",
  },
  segmentView: {
    gap: theme.spacing.sz1,
  },
  imageTitleView: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: theme.spacing.sz4,
    width: "100%",
    justifyContent: "flex-start",
  },
});
