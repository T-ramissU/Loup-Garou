import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { customStyles } from "@/constants/DefaultStyles";

const index = () => {
  return (
    <View style={customStyles.container}>
      <ImageBackground
        style={customStyles.imageBgContainer}
        source={require("@/assets/images/backgroundImage.jpg")}
      >
        <Text>"Roles"</Text>
      </ImageBackground>
    </View>
  );
};

export default index;
