import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useAnimatedValue,
  View,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import theme, { customStyles } from "@/constants/DefaultStyles";
import { Audio } from "expo-av";

const SoundControle = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [ambiantSound, setAmbiantSound] = useState<boolean>(true);
  const [voiceSound, setVoiceSound] = useState<boolean>(true);

  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);

  const fadeAnim = useAnimatedValue(0);
  const slideDown = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const slideUp = () => {
    Animated.timing(fadeAnim, {
      toValue: 10,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/sound/ambiant/forest.mp3")
    );
    setSound(sound);
    await sound.setIsMutedAsync(ambiantSound);
    await sound.playAsync();
  }

  async function muteSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/sound/ambiant/forest.mp3")
    );
    setSound(sound);
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={[customStyles.button, styles.roundButton]}
        onPress={() => {
          setMenuOpen(!menuOpen);
          if (menuOpen) slideUp();
          else {
            slideDown();
          }
          playSound();
        }}
      >
        <Ionicons
          name="volume-high-outline"
          size={15}
          style={customStyles.ButtonIcon}
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.subMenu,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            customStyles.button,
            styles.roundButton,
            !ambiantSound && customStyles.buttonInactive,
          ]}
          onPress={() => {
            setAmbiantSound(!ambiantSound);
          }}
        >
          <MaterialCommunityIcons
            name="forest"
            size={15}
            style={customStyles.ButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            customStyles.button,
            styles.roundButton,
            !voiceSound && customStyles.buttonInactive,
          ]}
          onPress={() => {
            setVoiceSound(!voiceSound);
          }}
        >
          <MaterialCommunityIcons
            name="account-voice"
            size={15}
            style={customStyles.ButtonIcon}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SoundControle;

const styles = StyleSheet.create({
  mainView: {
    position: "absolute",
    top: 90,
    right: 5,
    zIndex: 3,
    borderRadius: theme.borderRadius.full,
    gap: theme.spacing.sz1,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  subMenu: {
    justifyContent: "center",
    alignContent: "center",
    gap: theme.spacing.sz1,
  },
});
