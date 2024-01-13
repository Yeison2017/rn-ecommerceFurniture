import { useNavigation } from "@react-navigation/native";

import { TabsProps, TabsStackProps } from "@/navigation";

type typeStack = "TabsProps" | "TabsStackProps";

type typeConditionalStack<T extends typeStack> = T extends "TabsProps"
  ? TabsProps
  : T extends "TabsStackProps"
  ? TabsStackProps
  : unknown;

const useNavigationApp = <T extends typeStack>() => {
  const navigationScreen = useNavigation<any>();
  const navigation = useNavigation<typeConditionalStack<T>>();

  const onNavigation = (screen: string) => {
    navigationScreen.navigate(screen);
  };

  return { navigation, onNavigation };
};

export default useNavigationApp;
