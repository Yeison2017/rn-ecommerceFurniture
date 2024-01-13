import { StyleSheet, Text, View } from "react-native";

import { colors, fontFamily, fontSize, space } from "@/theme";

const Welcome = () => {
  return (
    <View>
      <View>
        <Text style={styles.titleText}>Find The Most</Text>
        <Text style={styles.subTitleText}>Luxurious Furniture</Text>
      </View>
    </View>
  );
};

export default Welcome;

const stl = StyleSheet.create({
  text: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize["2.5xl"],
    marginHorizontal: space.sm,
  },
});

const styles = StyleSheet.create({
  titleText: {
    ...stl.text,
    marginTop: space.xs,
    color: colors.black,
  },
  subTitleText: {
    ...stl.text,
    color: colors.primary,
  },
});
