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
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
        }}
        name="index"
      />
    </Stack>
  );
}
