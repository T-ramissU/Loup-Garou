import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import allCards from "@/assets/cards/origin.json";
import { Role } from "@/interfaces/RoleInterface";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme, { customStyles } from "@/constants/DefaultStyles";
import { useGameStore } from "@/stores/GameStore";
import { imageMap } from "@/constants/CardImages";

type GridProps = {
  item: Role;
};

const GridTile = ({ item }: GridProps) => {
  const tile: Role = allCards[0];

  const { addCard, removeCard } = useGameStore();

  const [counter, setCounter] = useState<number>(0);

  const addToCard = () => {
    setCounter(counter + 1);
    addCard(item.Name);
  };
  const removeFromCard = () => {
    setCounter(Math.max((counter ?? 0) - 1, 0));
    removeCard(item.Name);
  };

  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={[styles.roundButton, styles.colorRed]}
        onPress={() => removeFromCard()}
        disabled={counter == 0}
      >
        <MaterialCommunityIcons
          name="minus"
          style={customStyles.ButtonIcon}
          size={18}
        />
      </TouchableOpacity>

      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={imageMap[item.Image as keyof typeof imageMap]}
        ></Image>
        <View style={styles.textBannerView}>
          <Text style={[customStyles.H3, styles.textBanner]}>{counter}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.roundButton, styles.colorBlue]}
        onPress={() => addToCard()}
      >
        <MaterialCommunityIcons
          name="plus"
          style={customStyles.ButtonIcon}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GridTile;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  roundButton: {
    borderRadius: theme.borderRadius.full,
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 3,
  },
  colorRed: {
    backgroundColor: theme.color.warn100,
  },
  colorBlue: {
    backgroundColor: theme.color.tert100,
  },
  imageView: {
    width: 70,
    height: 70,
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
  textBanner: {
    color: theme.color.white,
    fontSize: 20,
  },
});
