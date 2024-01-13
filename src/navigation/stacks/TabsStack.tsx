import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CartScreen, ProductDetailsScreen } from "@/screens";
import { TabsNavigator } from "../tabsNavigator";
import { RootTabsStackParams } from "../interfaces";

const Stack = createNativeStackNavigator<RootTabsStackParams>();

const TabsStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabsStack;
