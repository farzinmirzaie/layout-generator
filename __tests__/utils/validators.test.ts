import validators from "../../src/utils/validators";
import helpers from "../../src/utils/helpers";

describe("validate input", () => {
  it("should not contain any letter", () => {
    const input = "some text";
    const output = validators.isValid(helpers.removeSpaces(input));
    expect(output).toBe(false);
  });

  it("should not contain any special characters", () => {
    const input = "#$%^/*$*(&)";
    const output = validators.isValid(helpers.removeSpaces(input));
    expect(output).toBe(false);
  });

  it("should only contain number", () => {
    const input = "123456";
    const output = validators.isValid(helpers.removeSpaces(input));
    expect(output).toBe(true);
  });

  it("should only accept / as special character", () => {
    const input = "/";
    const output = validators.isValid(helpers.removeSpaces(input));
    expect(output).toBe(true);
  });

  it("should accept numbers separated by /", () => {
    const input = "1/2/3/4";
    const output = validators.isValid(helpers.removeSpaces(input));
    expect(output).toBe(true);
  });
});
