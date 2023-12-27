import { Dimensions } from "react-native";

import { BorderRadius, Colors, FontSize, Fonts, Space } from "./interfaces";
import { FontSource } from "expo-font";

const { height, width } = Dimensions.get("window");

export const colors: Colors = {
  primary: "#2A4D50",
  secondary: "#DDF0FF",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  green: " #00C135",
  lightWhite: "#FAFAFC",
};

export const fontSize: FontSize = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  "2.5xl": 32,
  "2xl": 44,
};

export const space: Space = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  "2xl": 44,
};

export const borderRadius: BorderRadius = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
  "2xl": 64,
};

type FontsType = string | Record<keyof Fonts, FontSource>;

export const fonts: FontsType = {
  bold: require("../../assets/fonts/Poppins-Bold.ttf"),
  extraBold: require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  light: require("../../assets/fonts/Poppins-Light.ttf"),
  medium: require("../../assets/fonts/Poppins-Medium.ttf"),
  regular: require("../../assets/fonts/Poppins-Regular.ttf"),
  semiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
};

type FontFamilyType = {
  [Key in keyof typeof fonts]: string;
};

export const fontFamily: FontFamilyType = Object.fromEntries(
  Object.keys(fonts).map((key) => [key, key])
) as FontFamilyType;

export const shadows = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};
