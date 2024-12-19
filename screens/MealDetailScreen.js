import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Detail Screen</Text>
    </View>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
