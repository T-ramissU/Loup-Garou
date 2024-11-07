/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const customTintColorLight = "#A04D3A"; // A warm, earthy reddish tone
const customTintColorDark = "#FFD07F"; // A soft, warm yellow-orange for contrast on dark backgrounds

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  customTheme: {
    tabIconDefault: "#9BA1A6",
    tabIconSelected: customTintColorDark,

    // Backgrounds
    backgroundPrimary: "#5A2A27", // Dark earthy red for main background to match image tones
    backgroundSecondary: "#7C3A36", // Slightly lighter shade for card sections
    backgroundHighlight: "#A0524D", // Accent background for highlighted areas

    // Text
    textPrimary: "#F2E7DC", // Warm off-white for readability on dark backgrounds
    textSecondary: "#D1C4B7", // Softer beige for subtitles or secondary text
    textHighlight: "#FFD07F", // Golden highlight for important text or action prompts

    // Buttons
    buttonPrimary: "#8E5548", // Earthy brown-red for primary action buttons
    buttonSecondary: "#AA6B5E", // Lighter, warmer tone for secondary actions
    buttonDanger: "#B04134", // Rich red for critical actions like "vote" or "eliminate"

    // Roles and Phases
    werewolfRed: "#9A2B23", // Dark red for werewolf-related phases
    villagerGreen: "#4F7356", // Muted forest green for villager actions
    seerBlue: "#476A8A", // Smoky blue for seer actions and phases
    healerYellow: "#D5A253", // Warm yellow/gold for healer roles or phases

    // Shadows & Borders
    shadowColor: "#3A1E1B", // Dark shadow for depth, blends with the earthy tones
    borderColor: "#70443E",
  },
};
