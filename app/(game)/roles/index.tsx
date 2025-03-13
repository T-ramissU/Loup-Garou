import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import theme, { customStyles } from "@/constants/DefaultStyles";

import GridView from "./views/GridView";
import { useGameStore } from "@/stores/GameStore";
import { router } from "expo-router";
import BackgroundView from "@/components/BackgroundView";

const index = () => {
  const { cards, startGame } = useGameStore();

  const isButtonActive = useMemo(() => {
    const validCardsCount = cards.reduce((acc, card) => {
      return acc + (card.Number ?? 0); // Safely handle undefined or null values
    }, 0);
    return validCardsCount >= 3; // Returns true if valid cards are more than 3
  }, [cards]);

  return (
    <BackgroundView>
      <View style={styles.mainView}>
        <Text style={[customStyles.H1, customStyles.title]}>
          Selectonnez les cartes avec les quelles vous jouez
        </Text>
        <GridView />
        <TouchableOpacity
          disabled={!isButtonActive}
          style={[
            customStyles.button,
            customStyles.buttonSizeL,
            !isButtonActive && styles.inactiveButton,
          ]}
          onPress={() => {
            startGame();
            router.push("/(game)/validation");
          }}
        >
          <Text style={customStyles.buttonText}>Lancer la partie</Text>
        </TouchableOpacity>
      </View>
    </BackgroundView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
  },
  inactiveButton: {
    backgroundColor: theme.color.grey100,
  },
});
