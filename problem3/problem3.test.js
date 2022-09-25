const makeDiamond = require("./problem3");

test("Test 1", () => {
  expect(makeDiamond("C")).toEqual("··A··\n·B·B·\nC···C\n·B·B·\n··A··\n");
});
test("Test 2", () => {
  expect(makeDiamond("E")).toEqual(
    "····A····\n···B·B···\n··C···C··\n·D·····D·\nE·······E\n·D·····D·\n··C···C··\n···B·B···\n····A····\n"
  );
});
