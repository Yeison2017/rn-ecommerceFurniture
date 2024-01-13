import { StyleSheet, View, Image, Text } from "react-native";

import { ButtonBack, ButtonFavorite, Rating } from "@/components";
import { borderRadius, colors, fontFamily, fontSize, space } from "@/theme";

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <ButtonBack />

        <ButtonFavorite />
      </View>

      <Image
        source={{
          uri: "https://www.esneca.com/wp-content/uploads/tipos-de-muebles.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Muebles de colombia</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 660.000</Text>
          </View>
        </View>

        <Rating />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightWhite,
  },
  upperRow: {
    marginHorizontal: space.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: space["2xl"],
    width: space.width - 44,
    zIndex: 1,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -space.lg,
    backgroundColor: colors.lightWhite,
    width: space.width,
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: space.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: space.width - 44,
    top: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: fontSize.lg,
  },
  priceWrapper: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.lg,
  },
  price: {
    paddingHorizontal: space.xs,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
  },
});
