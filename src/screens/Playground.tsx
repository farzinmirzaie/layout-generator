import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { validators, helpers } from "../utils";
import { Input, LayoutGenerator } from "../components";

const Playground = () => {
  const [structure, setStructure] = useState<string>("");
  const [data, setData] = useState<number[]>([]);

  const isValid = (value: string): boolean =>
    validators.isValid(helpers.removeSpaces(value));

  useEffect(() => {
    if (isValid(structure)) {
      setData(
        structure
          .split("/")
          .filter((num) => num !== "")
          .map((num) => Number(num))
          .filter((num) => num > 0)
      );
    } else {
      setData([]);
    }
  }, [structure]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="ex: 1/2/3/4"
        value={structure}
        onChangeText={(text) => setStructure(text)}
      />
      <LayoutGenerator data={data} />
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
