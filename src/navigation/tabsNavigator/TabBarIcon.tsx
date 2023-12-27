import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RouteProp } from "@react-navigation/native";

import { RootTabsParams } from "../interfaces";

interface Props {
  route: RouteProp<RootTabsParams, keyof RootTabsParams>;
  focused: boolean;
  color: string;
  size: number;
}

const TabBarIcon = ({ route, focused, color, size }: Props) => {
  let iconName: any = "home";

  switch (route.name) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "Search":
      iconName = "search-sharp";
      break;
    case "Profile":
      iconName = focused ? "person" : "person-outline";
      break;
    default:
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default TabBarIcon;

const styles = StyleSheet.create({});
