//Parent class
const Employee = require('../lib/employee');

//Test for new name
test("Can set name using constructor argument", () => {
    const name = "Marcus";
    const e = new employee(name);
    expect(e.name).toBe(name);
  });

  //Test for new id
  test("Can set id using constructor argument", () => {
    const testId = 1;
    const Employee = new employee("Marcus", testId);
    expect(Employee.id).toEqual(testId);
  });
  
    //Test for new email
  test("Can set email using constructor argument", () => {
    const testEmail = "marc.malliate@gmail.com";
    const Employee = new employee("Marcus", 1, testEmail);
    expect(Employee.getEmail).toBe(testEmail);
  });
  
  // Test GET method for name
  test("Can get name using getName()", () => {
    const testName = "Marcus";
    const Employee = new employee(testName);
    expect(Employee.getName()).toBe(testName);
  });
  
 // Test GET method for id
  test("Can get id using getId()", () => {
    const testId = 1;
    const Employee = new employee("Marcus", testId);
    expect(Employee.getId()).toBe(testId);
  });

   // Test GET method for email
  test("Can get email using getEmail()", () => {
    const testEmail = "test@test.com";
    const Employee = new employee("Marcus", 1, testEmail);
    expect(Employee.getEmail()).toBe(testEmail);
  });
  
   // Test GET method for role
  test("getRole() should return \"Employee\"", () => {
    const testRole = "Employee";
    const Employee = new employee("Marcus", 1, "marc.malliate@gmail.com");
    expect(Employee.getRole()).toBe(testRole);
  });
 