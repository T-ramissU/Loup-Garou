import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import theme, { customStyles } from "@/constants/DefaultStyles";

type BackgroundViewProps = {
  children: React.ReactNode;
  backgroundImage?: any; // Optional: Allows using different images
};

const BackgroundView: React.FC<BackgroundViewProps> = ({
  children,
  backgroundImage = require("@/assets/images/backgroundImage.jpg"), // Default image
}) => {
  return (
    <View style={customStyles.container}>
      <ImageBackground
        style={customStyles.imageBgContainer}
        source={backgroundImage}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundView;
