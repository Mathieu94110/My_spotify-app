import { convertMsToMinutesSeconds } from "./convertMsToMinutesSeconds";

describe("convertMsToMinutesSeconds test case", () => {
  test("should convertMsToMinutesSeconds 1220 render 0:01", () => {
    expect(convertMsToMinutesSeconds(1220)).toBe("0:01");
  });
  test("should convertMsToMinutesSeconds works", () => {
    expect(convertMsToMinutesSeconds(60000)).toBe("1:00");
  });
  test("should convertMsToMinutesSeconds 20 render 0:00", () => {
    expect(convertMsToMinutesSeconds(20)).toBe("0:00");
  });
});
