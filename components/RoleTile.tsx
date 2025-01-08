import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import theme, { customStyles } from "@/constants/DefaultStyles";
import allCards from "@/assets/cards/origin.json";
import { Role } from "@/interfaces/RoleInterface";
import { Image } from "expo-image";
import { imageMap } from "@/constants/CardImages";
import CardDetailsModal from "@/app/(modals)/Cards/CardDetailsModal";

type RoleTileProps = {
  roleData: Role;
};

const RoleTile = ({ roleData }: RoleTileProps) => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  const onClosePress = () => {
    setIsopen(false);
  };
  return (
    <View>
      <CardDetailsModal
        isOpen={isOpen}
        roleData={roleData}
        onClosePress={onClosePress}
      />
      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => {
          setIsopen(true);
        }}
      >
        <View style={styles.cardName}>
          <Text style={[customStyles.P1]}>{roleData.Name}</Text>
        </View>
        <Image
          contentFit="fill"
          source={imageMap[roleData.Image as keyof typeof imageMap]}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default RoleTile;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
  roleButton: {
    alignItems: "center",
  },
  cardName: {
    position: "absolute",
    zIndex: 2,
    top: 50,
    backgroundColor: theme.color.blurry,
    width: "100%",
    alignItems: "center",
  },
});
