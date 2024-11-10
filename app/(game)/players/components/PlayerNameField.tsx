import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import theme, { customStyles } from "@/constants/DefaultStyles";
import { useGameStore } from "@/stores/GameStore";
type PlayerNameFieldProps = {
  id: number;
};
const PlayerNameField = ({ id }: PlayerNameFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { setPlayerName } = useGameStore();

  return (
    <View style={styles.mainView}>
      <Text style={customStyles.H1}>PLAYER {id}</Text>
      <TextInput
        style={[customStyles.input, isFocused && customStyles.inputFocused]}
        placeholderTextColor={customStyles.inputPlaceholder.color}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onPressOut={() => setIsFocused(false)}
        placeholder="Name"
        onChangeText={(text) => {
          setPlayerName(id, text);
        }}
      />
    </View>
  );
};

export default PlayerNameField;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: theme.spacing.sz2,
    alignItems: "center",
  },
});
