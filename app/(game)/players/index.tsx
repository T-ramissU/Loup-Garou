import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useMemo } from "react";
import theme, { customStyles } from "@/constants/DefaultStyles";
import { useGameStore } from "@/stores/GameStore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import PlayerNameField from "./components/PlayerNameField";

const index = () => {
  const { players, addNewPlayer } = useGameStore();
  console.log(players);

  const buttonIsActive = useMemo(() => {
    return players.every((player) => player.Name); // returns true only if every player has a non-empty Name
  }, [players]);

  return (
    <KeyboardAvoidingView style={customStyles.container}>
      <ImageBackground
        style={customStyles.imageBgContainer}
        source={require("@/assets/images/backgroundImage.jpg")}
      >
        {buttonIsActive && (
          <TouchableOpacity
            style={[
              customStyles.button,
              customStyles.buttonSizeS,
              styles.alignButtonRight,
            ]}
            onPress={() => router.push("/(game)/roles")}
          >
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              style={customStyles.ButtonIcon}
            />
          </TouchableOpacity>
        )}

        <ScrollView contentContainerStyle={styles.inputView}>
          {players.map((player) => {
            return <PlayerNameField id={player.id} key={player.id} />;
          })}
          <TouchableOpacity
            style={[
              customStyles.button,
              customStyles.buttonSizeS,
              styles.alignButtonCenter,
            ]}
            onPress={() => addNewPlayer()}
          >
            <MaterialCommunityIcons
              name="plus"
              size={30}
              style={customStyles.ButtonIcon}
            />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    gap: theme.spacing.sz9,
    paddingBottom: theme.spacing.sz9,
    paddingTop: theme.spacing.sz9,
  },
  alignButtonCenter: {
    alignSelf: "center",
  },
  alignButtonRight: {
    alignSelf: "flex-end",
  },
});
