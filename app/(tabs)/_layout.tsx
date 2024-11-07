import { Stack, Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import theme from "@/constants/DefaultStyles";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen
        name="cards"
        options={{
          headerShown: true,
          headerTitle: "Cards",
          headerStyle: { backgroundColor: theme.color.dark100 },
        }}
      ></Stack.Screen>
    </Stack>
  );
}
