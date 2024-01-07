import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootTabsStackParams = {
  Tabs: undefined;
  Cart: undefined;
  ProductDetails: undefined;
};

export type TabsStackProps = NativeStackNavigationProp<RootTabsStackParams>;
