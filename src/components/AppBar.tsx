import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { borderRadius, colors, fontFamily, fontSize, space } from "@/theme";
import { Icon } from "./icons";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Icon name="location-outline" />
        <Text style={styles.location}>Shanghai China</Text>

        <View style={{ alignItems: "flex-end" }}>
          <View style={styles.cartCount}>
            <Text style={styles.cartNumber}>8</Text>
          </View>
          <TouchableOpacity>
            <Icon name="shopping-bag" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: space.lg,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.md,
    color: colors.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: borderRadius.md,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 1,
  },
  cartNumber: {
    fontFamily: fontFamily.regular,
    fontWeight: "600",
    fontSize: fontSize.xs,
    color: colors.lightWhite,
  },
});
