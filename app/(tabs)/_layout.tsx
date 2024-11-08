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
          headerTitle: "Cartes",
          headerStyle: { backgroundColor: theme.color.dark100 },
        }}
      />
      <Stack.Screen
        name="rules"
        options={{
          headerShown: true,
          headerTitle: "Règles",
          headerStyle: { backgroundColor: theme.color.dark100 },
        }}
      />
    </Stack>
  );
}
