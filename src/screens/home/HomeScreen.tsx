import { ScrollView, StyleSheet } from "react-native";

import { useNavigationApp } from "@/hooks";
import { AppBar, Headings, SafeAreaLayout, Search } from "@/components";
import { CarouselHome, Welcome } from "./components";

const HomeScreen = () => {
  const { navigation } = useNavigationApp<"TabsProps">();

  return (
    <SafeAreaLayout>
      {/* <Text style={styles.text}>Home</Text> */}
      <AppBar />

      <ScrollView>
        <Welcome />
        <Search onPress={() => navigation.navigate("Search")} />

        <CarouselHome />
        <Headings />
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
