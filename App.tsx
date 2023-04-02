import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { initialWindowMetrics } from "react-native-safe-area-context";

function App(): JSX.Element {
  return (
    <View style={styles.screenContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "grey",
    marginTop: initialWindowMetrics?.insets.top,
  },
});

export default App;
