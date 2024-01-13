import { StyleSheet, View, Dimensions, Image } from "react-native";
import CarouselApp from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

interface Props {
  images: string[];
}

const Carousel = ({ images }: Props) => {
  return (
    <CarouselApp
      loop
      width={width}
      height={width / 2.4}
      autoPlay={true}
      data={images}
      scrollAnimationDuration={10000}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
      renderItem={({ index }) => (
        <View style={styles.container}>
          <Image source={{ uri: images[index] }} style={styles.image} />
        </View>
      )}
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
});
