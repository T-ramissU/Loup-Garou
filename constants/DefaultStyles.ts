import {
  Button,
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

const sizes = {
  sz1: 4,
  sz2: 8,
  sz3: 12,
  sz4: 16,
  sz5: 20,
  sz6: 24,
  sz7: 28,
  sz8: 32,
  sz9: 36,
  full: 1000,
};

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const theme = {
  spacing: sizes,
  appSpacing: sizes.sz5,
  androidTopSpacing: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  androidBottomSpacing: sizes.sz4,
  borderRadius: sizes,
  dimensions: {
    width: width,
    height: height,
    vw: (vw: number) => (vw / 100) * width,
    vh: (vh: number) => (vh / 100) * height,
  },
  fontSize: {
    xxs: 8,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  fontFamily: {
    header: "Cizel", // Use Cizel for headers, titles, or decorative text
    body: "IMFellDWPica", // Use IMFellDWPica for body text or general content
  },
  os: Platform.OS,
  color: {
    white: "#ffffff",

    prim10: "#F8EDE7", // Soft beige for lightest primary
    prim20: "#E7C8B8", // Light warm beige
    prim40: "#D89F86", // Medium light earthy beige
    prim60: "#C77A61", // Warm medium reddish-brown
    prim80: "#A04D3A", // Earthy reddish tone (main tint for light mode)
    prim100: "#8C3D2C", // Darker earthy red
    prim120: "#773025", // Dark reddish-brown
    prim140: "#5E251E", // Dark brownish-red
    prim160: "#4A1B15", // Darkest earthy red

    grey20: "#FAF4F1", // Very light warm grey
    grey40: "#EDE7E4", // Light warm grey
    grey60: "#D4CFCB", // Muted beige-grey
    grey80: "#B6AFA9", // Warm medium grey
    grey100: "#918883", // Medium grey
    grey120: "#6F6560", // Slightly darker medium grey
    grey140: "#5C534F", // Darker grey-brown
    grey160: "#3E3936", // Dark warm grey
    grey180: "#2E2927", // Very dark grey-brown
    grey200: "#1E1A18", // Dark grey (for background elements)

    dark20: "#F0E9E5", // Very light warm grey (for accents)
    dark40: "#C5B7B2", // Light grey-brown
    dark60: "#8E6E6A", // Medium grey-brown
    dark80: "#5C3E3A", // Reddish-brown
    dark100: "#2E1F1B", // Dark earthy brown
    darkblur: "rgba(46, 31, 27, 0.3)",

    error20: "#FDE8E8",
    error40: "#FAB3B3",
    error60: "#F17A7A",
    error80: "#DF4545",
    error100: "#BF2A2A",

    info20: "#D6EBF5",
    info40: "#A0CEE6",
    info60: "#69B0D8",
    info80: "#3A92C3",
    info100: "#1E78A0",

    warn20: "#FAE9C9",
    warn40: "#F5D6A3",
    warn60: "#F0C27D",
    warn80: "#EBAD57",
    warn100: "#E69331",

    success20: "#E6F4E7",
    success40: "#BFE5C4",
    success60: "#97D6A1",
    success80: "#6FC87D",
    success100: "#47BA5A",

    tert10: "#EAF7FE",
    tert20: "#C0E3FC",
    tert40: "#96CEF9",
    tert60: "#6CB9F7",
    tert80: "#429DF4",
    tert100: "#267AC1",

    second10: "#E9F7F6",
    second20: "#D1F0EC",
    second40: "#A4DAD7",
    second60: "#74C1BF",
    second80: "#479FA2",
    second100: "#2B7E80",

    blurry: "rgba(0, 0, 0, 0.6)",
  },
  buttonShadow: {
    shadowColor: "#2E1F1B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
};

export default theme;

export const customStyles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.prim60, // Primary tint color
    borderRadius: theme.borderRadius.sz2, // Adjust based on the `sizes` object
    paddingVertical: theme.spacing.sz2,
    paddingHorizontal: theme.spacing.sz3,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 70,
    flexDirection: "row",
    gap: 15,
    shadowColor: theme.buttonShadow.shadowColor,
    shadowOffset: theme.buttonShadow.shadowOffset,
    shadowOpacity: theme.buttonShadow.shadowOpacity,
    shadowRadius: theme.buttonShadow.shadowRadius,
    elevation: 6,
  },
  buttonText: {
    fontFamily: theme.fontFamily.header, // Paragraph font
    fontSize: theme.fontSize.lg,
    fontWeight: "600", // Slightly bold for readability
    color: theme.color.white,
    minWidth: 150,
  },
  // Headers
  H1: {
    fontFamily: theme.fontFamily.header,
    fontSize: theme.fontSize.xxl,
    fontWeight: "bold", // Boldest for H1
    color: theme.color.prim100,
  },
  H2: {
    fontFamily: theme.fontFamily.header,
    fontSize: theme.fontSize.xl,
    fontWeight: "600", // Semi-bold
    color: theme.color.prim20,
  },
  H3: {
    fontFamily: theme.fontFamily.header,
    fontSize: theme.fontSize.lg,
    fontWeight: "400", // Normal weight for H3
    color: theme.color.prim60,
  },
  // Paragraphs
  P1: {
    fontFamily: theme.fontFamily.body,
    fontSize: theme.fontSize.md,
    fontWeight: "700", // Boldest for P1
    color: theme.color.grey100,
  },
  P2: {
    fontFamily: theme.fontFamily.body,
    fontSize: theme.fontSize.sm,
    // fontWeight: "400", // Normal weight for P2
    color: theme.color.grey80,
  },
  P3: {
    fontFamily: theme.fontFamily.body,
    fontSize: theme.fontSize.xs,
    fontWeight: "200", // Thin weight for P3
    color: theme.color.grey60,
  },
  ButtonIcon: {
    color: theme.color.prim10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
