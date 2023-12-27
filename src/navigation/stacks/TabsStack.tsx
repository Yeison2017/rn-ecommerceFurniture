import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabsNavigator } from "../tabsNavigator";
import { CartScreen } from "@/screens";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabsStack;
