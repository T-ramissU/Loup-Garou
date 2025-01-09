import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import BackgroundView from "@/components/BackgroundView";
import { useGameStore } from "@/stores/GameStore";
import CardTile from "./components/CardTile";
import { customStyles } from "@/constants/DefaultStyles";
import { router } from "expo-router";

const index = () => {
  const { cards } = useGameStore();

  const MainView = () => {
    return (
      <View style={styles.mainView}>
        {cards.map((card) => {
          return <CardTile key={card.Name} card={card} />;
        })}
      </View>
    );
  };

  return (
    <BackgroundView>
      <ScrollView contentContainerStyle={styles.contentView}>
        <MainView />
        <TouchableOpacity
          style={[customStyles.button, customStyles.buttonSizeL]}
          onPress={() => {
            router.push("/(game)/rounds");
          }}
        >
          <Text style={customStyles.buttonText}>Lancer la partie</Text>
        </TouchableOpacity>
      </ScrollView>
    </BackgroundView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentView: {
    gap: 50,
    paddingBottom: 50,
    alignItems: "center",
  },
});
