import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Asset } from "expo-asset";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export const unstable_settings = {
  initialRouteName: "/(tabs)", // Ensure que that reloading on `/modal` keeps a back button present.
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Cinzel: require("../assets/fonts/Cinzel-VariableFont_wght.ttf"), // Adjust path as needed
    IMFellDWPica: require("../assets/fonts/IMFellDWPica-Regular.ttf"), // Adjust path as needed
  });

  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  // Preload images using expo-asset.
  useEffect(() => {
    async function loadAssets() {
      await Asset.loadAsync([
        require("../assets/images/backgroundImage.jpg"),
        require("../assets/images/dark_forest_bg.png"),
        require("../assets/images/village_bg1.png"),

        // Add more images here if needed
      ]);
      setImagesLoaded(true);
    }
    loadAssets();
  }, []);


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.push("/(tabs)");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(game)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
