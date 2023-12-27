import { ScrollView, StyleSheet } from "react-native";

import { AppBar, SafeAreaViewLayout } from "@/components";
import { Welcome } from "./components";

const HomeScreen = () => {
  return (
    <SafeAreaViewLayout>
      {/* <Text style={styles.text}>Home</Text> */}
      <AppBar />

      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaViewLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
