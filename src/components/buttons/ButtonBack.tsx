import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { colors } from "@/theme";
import { Icon } from "../icons";

const ButtonBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-back-circle" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: colors.primary,
  },
});
