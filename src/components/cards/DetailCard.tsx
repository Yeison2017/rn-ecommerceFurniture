import { StyleSheet, Text, View } from "react-native";

import { colors, fontSize, space } from "@/theme";
import { Icon } from "../icons";
import { IProductDetail } from "@/interfaces";

interface Props {
  details: IProductDetail[];
}

const DetailCard = ({ details }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        {details.map((detail, index) => (
          <View style={styles.containerDetail} key={index}>
            <Icon name={detail.iconName} style={styles.icon} />
            <Text>{detail.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: space.sm,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: space.lg,
  },
  containerDetail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    fontSize: fontSize.lg,
  },
});
