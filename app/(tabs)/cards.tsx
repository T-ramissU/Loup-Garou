import {
  FlatList,
  ImageBackground,
  ListRenderItem,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { customStyles } from "@/constants/DefaultStyles";
import RoleCard from "@/components/RoleCard";
import allCards from "@/assets/cards/origin.json";
import { Role } from "@/interfaces/RoleInterface";

const cards = () => {
  const allRoles: Role[] = allCards;

  const renderItem: ListRenderItem<Role> = ({ item }) => (
    <View style={styles.itemView}>
      <RoleCard roleData={item} />
    </View>
  );
  return (
    <View style={customStyles.container}>
      <ImageBackground
        style={customStyles.imageBgContainer}
        source={require("@/assets/images/backgroundImage.jpg")}
      >
        <FlatList
          data={allRoles}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </ImageBackground>
    </View>
  );
};

export default cards;

const styles = StyleSheet.create({
  itemView: {
    marginVertical: 15,
  },
});
