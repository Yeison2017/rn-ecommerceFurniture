import { StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "@/theme";
import { Icon } from "../icons";

const ButtonFavorite = () => {
  return (
    <TouchableOpacity>
      <Icon name="heart" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default ButtonFavorite;

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: colors.primary,
  },
});
