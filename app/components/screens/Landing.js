import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Landing = () => {
  return (
    <View testID={"title"} style={styles.titleWrapper}>
      <Text style={styles.title}>Welcome to my App</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  titleWrapper: {
    alignItems: "center",
    marginTop: 150,
  },
  title: {
    fontSize: 30,
  },
});
