import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { colors, fontFamily, fontSize, space } from "@/theme";
import { Icon } from "./icons";

const Rating = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        {[1, 2, 3, 4, 5].map((index) => (
          <Icon key={index} name="star" style={styles.icon} />
        ))}

        <Text style={styles.text}>(4.9)</Text>
      </View>
      <View style={styles.rating}>
        <TouchableOpacity onPress={increment}>
          <Icon name="plus" style={styles.iconButton} />
        </TouchableOpacity>

        <Text style={styles.text}>
          {"  "}
          {count}
          {"  "}
        </Text>
        <TouchableOpacity onPress={decrement}>
          <Icon name="minus" style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    paddingBottom: space.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: space.width - 10,
    top: 5,
  },
  rating: {
    top: space.lg,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: space.lg,
  },
  icon: {
    color: "gold",
  },
  iconButton: {
    fontSize: 20,
  },
  text: {
    color: colors.gray,
    fontFamily: fontFamily.medium,
  },
});
