import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGameStore } from "@/stores/GameStore";
import Night from "./components/Night";
import Day from "./components/Day";
import { customStyles } from "@/constants/DefaultStyles";

const index = () => {

  const { game } = useGameStore();
  return (
    <View style={customStyles.container}>
      {game.phase === "night" ?
        <Night></Night> :
        <Day></Day>
      }
    </View>
  );
};

export default index;

const styles = StyleSheet.create({

});
