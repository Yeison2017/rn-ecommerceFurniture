import { StyleProp, TextStyle } from "react-native";
import { Ionicons, Fontisto, Feather } from "@expo/vector-icons";

export type IconNamesType =
  | "location-outline"
  | "shopping-bag"
  | "search"
  | "home"
  | "home-outline"
  | "search-sharp"
  | "person"
  | "person-outline"
  | "camera-outline";

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
    default:
      break;
  }
};
