import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { validators, helpers } from "../utils";
import { Input } from "../components";

const Playground = () => {
  const [input, setInput] = useState<string>("");

  const isValid = (input: string): boolean =>
    validators.isValid(helpers.removeSpaces(input));

  return (
    <View style={styles.container}>
      <Input value={input} onChangeText={(text) => setInput(text)} />
      <View style={styles.container}>
        <Text style={{ color: isValid(input) ? "green" : "red" }}>
          {`Input is ${isValid(input) ? "valid" : "invalid"}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Playground;
