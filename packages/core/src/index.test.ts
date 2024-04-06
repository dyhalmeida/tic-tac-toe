import { sayHello } from ".";

describe("sayHello", () => {
  it("should say hello", () => {
    expect(sayHello()).toBe("Hello World");
  });
});
