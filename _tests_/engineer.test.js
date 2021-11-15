//Child class required
const Engineer = require("../lib/Engineer");



// test toBe method to check if role is engineer
test("getRole() should return \"engineer\"", () => {
    const testMethod = "Engineer";
    const engineer = new Engineer("Marcus", 1, "marc.malliate@gmail.com", "gitUser");
    expect(engineer.getRole()).toBe(testMethod);
  });

// test toBe method for Github account
test("Can set GitHUb account using constructor", () => {
  const testUser = "gitUser";
  const engineer = new Engineer("Marcus", 1, "marc.malliate@gmail.com", testUser);
  expect(engineer.github).toBe(testUser);
});

// test toBe method to get username from Github
test("Can get GitHub username from getGithub()", () => {
  const testUser = "gitUser";
  const engineer = new Engineer("Marcus", 1, "marc.malliate@gmail.com", testUser);
  expect(engineer.getGithub()).toBe(testUser);
});