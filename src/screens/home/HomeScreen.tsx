import { ScrollView, StyleSheet } from "react-native";

import { useNavigationApp } from "@/hooks";
import { AppBar, SafeAreaViewLayout, Search } from "@/components";
import { Welcome } from "./components";

const HomeScreen = () => {
  const { navigation } = useNavigationApp<"TabsProps">();

  return (
    <SafeAreaViewLayout>
      {/* <Text style={styles.text}>Home</Text> */}
      <AppBar />

      <ScrollView>
        <Welcome />
        <Search onPress={() => navigation.navigate("Search")} />
      </ScrollView>
    </SafeAreaViewLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
