import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useAnimatedValue } from "react-native";

// Thank you gregswinford for the free sound! Check him out: https://freesound.org/people/gregswinford/
export const useAmbiantSound = () => {
  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);

  // Launch sound only once when the hook is initialized
  useEffect(() => {
    const launchAmbiantSound = async () => {
      const { sound: newSound } = await Audio.Sound.createAsync(
        require("@/assets/sound/ambiant/forest.mp3"),
        { shouldPlay: true, isLooping: true }
      );
      setSound(newSound);
      await newSound.playAsync();
    };

    launchAmbiantSound();

    // Cleanup sound on unmount
    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, []);

  // Toggle mute function
  const toggleMute = async (mute: boolean) => {
    if (sound) {
      await sound.setIsMutedAsync(mute);
    }
  };

  return { toggleMute };
};
