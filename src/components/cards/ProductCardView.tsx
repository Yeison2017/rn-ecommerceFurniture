import { colors, fontFamily, fontSize, space } from "@/theme";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import { Icon } from "../icons";
import { useNavigationApp } from "@/hooks";

const ProductCardView = () => {
  const { navigation } = useNavigationApp<"TabsStackProps">();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/fotos-premium/muebles-verdes-tapizados-moda-modernos-sala-estar-gran-pared-verde_124507-16333.jpg?w=1480",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price}>$500.000</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add-circle" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: space.md,
    backgroundColor: colors.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: space.sm / 2,
    marginTop: space.sm / 2,
    borderRadius: space.sm,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: space.sm,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.lg,
    marginBottom: 1,
  },
  supplier: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.gray,
  },
  price: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.md,
  },
  addButton: {
    position: "absolute",
    bottom: space.xs,
    right: space.xs,
  },
  icon: {
    fontSize: 35,
    color: colors.primary,
  },
});
