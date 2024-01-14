import { StyleProp, TextStyle } from "react-native";
import {
  Ionicons,
  Fontisto,
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export type IconNamesType =
  | "location-outline"
  | "shopping-bag"
  | "search"
  | "home"
  | "home-outline"
  | "search-sharp"
  | "person"
  | "person-outline"
  | "camera-outline"
  | "grid"
  | "add-circle"
  | "chevron-back-circle"
  | "heart"
  | "star"
  | "plus"
  | "minus"
  | "location"
  | "truck-delivery"
  | "shopping";

interface Props {
  name: IconNamesType;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const Icon = ({ name, size = 24, ...props }: Props) => {
  switch (name) {
    case "location-outline":
      return <Ionicons name="location-outline" size={size} {...props} />;
    case "shopping-bag":
      return <Fontisto name="shopping-bag" size={size} {...props} />;
    case "search":
      return <Feather name="search" size={size} {...props} />;
    case "home":
      return <Ionicons name="home" size={size} {...props} />;
    case "home-outline":
      return <Ionicons name="home-outline" size={size} {...props} />;
    case "search-sharp":
      return <Ionicons name="search-sharp" size={size} {...props} />;
    case "person":
      return <Ionicons name="person" size={size} {...props} />;
    case "person-outline":
      return <Ionicons name="person-outline" size={size} {...props} />;
    case "camera-outline":
      return <Ionicons name="camera-outline" size={size} {...props} />;
    case "grid":
      return <Ionicons name="ios-grid" size={size} {...props} />;
    case "add-circle":
      return <Ionicons name="add-circle" size={size} {...props} />;
    case "chevron-back-circle":
      return <Ionicons name="chevron-back-circle" size={size} {...props} />;
    case "heart":
      return <Ionicons name="heart" size={size} {...props} />;
    case "star":
      return <Ionicons name="star" size={size} {...props} />;
    case "plus":
      return <SimpleLineIcons name="plus" size={size} {...props} />;
    case "minus":
      return <SimpleLineIcons name="minus" size={size} {...props} />;
    case "location":
      return <Ionicons name="location-outline" size={size} {...props} />;
    case "truck-delivery":
      return (
        <MaterialCommunityIcons
          name="truck-delivery-outline"
          size={size}
          {...props}
        />
      );
    case "shopping":
      return <Fontisto name="shopping-bag" size={size} {...props} />;
    default:
      break;
  }
};
