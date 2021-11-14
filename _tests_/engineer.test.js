//Child class required
const engineer = require("../lib/engineer");



// test toBe method to check if role is engineer
test("getRole() should return \"engineer\"", () => {
    const testMethod = "Engineer";
    const Engineer = new engineer("Marcus", 1, "marc.malliate@gmail.com", "gitUser");
    expect(Engineer.getRole()).toBe(testMethod);
  });

// test toBe method for Github account
test("Can set GitHUb account using constructor", () => {
  const testUser = "gitUser";
  const Engineer = new engineer("Marcus", 1, "marc.malliate@gmail.com", testUser);
  expect(Engineer.github).toBe(testUser);
});

// test toBe method to get username from Github
test("Can get GitHub username from getGithub()", () => {
  const testUser = "gitUser";
  const Engineer = new engineer("Marcus", 1, "marc.malliate@gmail.com", testUser);
  expect(Engineer.getGithub()).toBe(testUser);
});