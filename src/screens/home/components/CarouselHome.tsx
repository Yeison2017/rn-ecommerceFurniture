import { StyleSheet } from "react-native";

import { Carousel } from "@/components";

const images = [
  "https://img.freepik.com/fotos-premium/muebles-verdes-tapizados-moda-modernos-sala-estar-gran-pared-verde_124507-16333.jpg?w=1480",
  "https://media.admagazine.com/photos/648cd919d6ffbb9c781e28c0/3:2/w_1685,h_1123,c_limit/renovar-los-muebles-sala.jpg",
  "https://www.esneca.com/wp-content/uploads/tipos-de-muebles.jpg",
  "https://look4deco.com/wp-content/uploads/2022/01/Consejos-para-elegir-los-muebles-de-tu-sala.png",
];

const CarouselHome = () => {
  return <Carousel images={images} />;
};

export default CarouselHome;

const styles = StyleSheet.create({});
