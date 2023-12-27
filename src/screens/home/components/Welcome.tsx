import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { borderRadius, colors, fontFamily, fontSize, space } from "@/theme";
import { Icon } from "@/components";

const Welcome = () => {
  return (
    <View>
      <View>
        <Text style={styles.titleText}>Find The Most</Text>
        <Text style={styles.subTitleText}>Luxurious Furniture</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Icon name="search" style={styles.searchIcon} />
        </TouchableOpacity>
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
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.lg,
    marginVertical: space.md,
  },
  searchIcon: {
    marginHorizontal: space.xs,
    color: colors.gray,
  },
});
