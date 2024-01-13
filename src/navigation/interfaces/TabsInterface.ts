import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootTabsParams = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

export type TabsProps = NativeStackNavigationProp<RootTabsParams>;
