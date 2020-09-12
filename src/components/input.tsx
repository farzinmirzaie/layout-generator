import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  TextInputProps,
} from "react-native";

const Input = (props: TextInputProps): JSX.Element => (
  <View style={styles.inputContainer}>
    <TextInput {...props} style={{ flex: 1 }} />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    height: 40,
    marginVertical: 20,
    padding: 5,
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    ...Platform.select({
      ios: { marginTop: 55 },
    }),
  },
});

export default Input;
