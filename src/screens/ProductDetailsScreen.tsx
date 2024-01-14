import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import {
  ButtonBack,
  ButtonFavorite,
  DetailCard,
  Icon,
  Rating,
} from "@/components";
import { borderRadius, colors, fontFamily, fontSize, space } from "@/theme";
import { IProductDetail } from "@/interfaces";

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

        <View style={styles.descriptionWraper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar consectetur auctor. Sed ultrices quam ut lectus volutpat
            molestie. Maecenas eros tortor, ultricies id bibendum sed, rutrum in
            dolor.
          </Text>
        </View>

        <DetailCard details={details} />

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartButton}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Icon name="shopping" style={styles.iconBuyNow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const details: IProductDetail[] = [
  {
    name: "Dallas",
    iconName: "location",
  },
  {
    name: "Free Delivery",
    iconName: "truck-delivery",
  },
];

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
  descriptionWraper: {
    marginTop: space.xl,
    marginHorizontal: space.lg,
  },
  description: {
    fontFamily: fontFamily.medium,
    fontSize: space.lg,
  },
  descriptionText: {
    fontFamily: fontFamily.regular,
    fontSize: space.sm,
    textAlign: "justify",
    marginBottom: space.sm,
  },
  cartRow: {
    paddingBottom: space.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: space.width - 44,
  },
  cartButton: {
    width: space.width * 0.7,
    backgroundColor: colors.black,
    padding: space.sm / 2,
    borderRadius: space.lg,
    marginLeft: 12,
  },
  cartTitle: {
    marginLeft: space.sm,
    fontFamily: fontFamily.semiBold,
    fontSize: space.md,
    color: colors.lightWhite,
  },
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: space.sm,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBuyNow: {
    fontSize: 22,
    color: colors.lightWhite,
  },
});
