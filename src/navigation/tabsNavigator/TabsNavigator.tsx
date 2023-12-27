import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, ProfileScreen, SearchScreen } from "@/screens";
import { colors } from "@/theme";
import TabBarIcon from "./TabBarIcon";
import { RootTabsParams } from "../interfaces";

const Tab = createBottomTabNavigator<RootTabsParams>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 70,
        },
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon
            route={route}
            color={color}
            focused={focused}
            size={size}
          />
        ),
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray2,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({});
