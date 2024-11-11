import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Role } from "@/interfaces/RoleInterface";
import allCard from "@/assets/cards/origin.json";
import GridTile from "../components/GridTile";
import theme from "@/constants/DefaultStyles";
import { useGameStore } from "@/stores/GameStore";

const GridView = () => {
  const allRoles: Role[] = allCard;
  const { cards } = useGameStore();
  return (
    <View style={styles.mainColumnView}>
      {allRoles.map((role) => (
        <GridTile key={role.Name} item={role}></GridTile>
      ))}
    </View>
  );
};

export default GridView;

const styles = StyleSheet.create({
  mainColumnView: {
    flexWrap: "wrap",
    alignContent: "center",
    rowGap: theme.spacing.sz9,
    gap: 50,
    flexDirection: "row",
    width: theme.dimensions.width,
    paddingLeft: theme.spacing.sz6,
  },
});
