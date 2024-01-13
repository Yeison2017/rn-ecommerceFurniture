import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "./icons";
import { colors, fontFamily, fontSize, space } from "@/theme";

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Icon name="grid" color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;

const styles = StyleSheet.create({
  container: {
    marginTop: space.md,
    marginHorizontal: space.xs,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
  },
});
