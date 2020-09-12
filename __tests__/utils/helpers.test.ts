import helpers from "../../src/utils/helpers";

const hasSpace = (string: string): boolean => /\\s+/g.test(string);

describe("remove spaces", () => {
  it("should not contain any spaces", () => {
    const input = "some text with spaces";
    const output = helpers.removeSpaces(input);
    expect(hasSpace(output)).toBe(false);
  });
});
