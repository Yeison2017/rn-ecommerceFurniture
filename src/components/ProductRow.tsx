import { FlatList, StyleSheet, View } from "react-native";

import { space } from "@/theme";
import { ProductCardView } from "./cards";

const products = [1, 2, 3, 4];

const ProductRow = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={() => <ProductCardView />}
        horizontal={true}
        contentContainerStyle={{ columnGap: space.md }}
      />
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({
  container: {
    marginTop: space.md,
    marginLeft: space.md,
  },
});
