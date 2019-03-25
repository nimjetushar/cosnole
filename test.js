require("./cosnole.js");

test("alias consoles defined", () => {
  expect(window.cosnole).toEqual(console);
  expect(window.consle).toEqual(console);
  expect(window.consloe).toEqual(console);
  expect(window.consoe).toEqual(console);
})