import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Input from "../../src/components/input";

test("input component", () => {
  const mockFn = jest.fn();

  const { getAllByA11yLabel } = render(
    <Input accessibilityLabel="Input" onChangeText={mockFn} />
  );

  const InputComponent = getAllByA11yLabel("Input");

  fireEvent.changeText(InputComponent[0], "something");

  expect(mockFn).toBeCalledWith("something");
});
