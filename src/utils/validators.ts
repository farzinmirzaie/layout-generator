/**
 * Will validate if the given string is in the following format:
 * 1/2/3/4
 */
const isValid = (input: string): boolean => /^[0-9-/]+$/g.test(input);

export default { isValid };
