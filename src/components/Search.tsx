import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import { borderRadius, colors, fontFamily, fontSize, space } from "@/theme";
import { Icon } from "./icons";

interface Props {
  onPress: () => void;
}

const Search = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="search" style={styles.searchIcon} />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value=""
          onPressIn={onPress}
          placeholder="What are you looking for"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="camera-outline" style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: space.sm,
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.lg,
    marginVertical: space.md,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: space.xs,
    color: colors.gray,
    marginTop: space.xs,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginRight: space.sm,
    borderRadius: borderRadius.sm,
  },
  searchInput: {
    fontFamily: fontFamily.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: space.sm,
  },
  searchButton: {
    width: 50,
    height: "100%",
    borderRadius: borderRadius.lg,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  iconButton: {
    fontSize: fontSize.xl,
    color: colors.white,
  },
});
