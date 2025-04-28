// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates points for vowels and consonants", () => {
    expect(pointsForWord("test")).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    expect(pointsForWord("tEsT")).toBe(7);
  });
});
