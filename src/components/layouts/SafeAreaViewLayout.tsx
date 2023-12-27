import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const SafeAreaViewLayout = ({ children }: Props) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default SafeAreaViewLayout;
