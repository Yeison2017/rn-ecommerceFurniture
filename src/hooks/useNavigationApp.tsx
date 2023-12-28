import { useNavigation } from "@react-navigation/native";

import { TabsProps } from "@/navigation";

type typeStack = "TabsProps";

type typeConditionalStack<T extends typeStack> = T extends "TabsProps"
  ? TabsProps
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
