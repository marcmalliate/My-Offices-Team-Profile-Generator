//Parent class
const Employee = require('../lib/Employee');

//Test for new name
test("Can set name using constructor argument", () => {
    const name = "Marcus";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  //Test for new id
  test("Can set id using constructor argument", () => {
    const testId = 1;
    const employee = new Employee("Marcus", testId);
    expect(Employee.id).toEqual(testId);
  });
  
    //Test for new email
  test("Can set email using constructor argument", () => {
    const testEmail = "marc.malliate@gmail.com";
    const employee = new Employee("Marcus", 1, testEmail);
    expect(employee.getEmail).toBe(testEmail);
  });
  
  // Test GET method for name
  test("Can get name using getName()", () => {
    const testName = "Marcus";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
  });
  
 // Test GET method for id
  test("Can get id using getId()", () => {
    const testId = 1;
    const employee = new Employee("Marcus", testId);
    expect(Employee.getId()).toBe(testId);
  });

   // Test GET method for email
  test("Can get email using getEmail()", () => {
    const testEmail = "test@test.com";
    const employee = new Employee("Marcus", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });
  
   // Test GET method for role
  test("getRole() should return \"Employee\"", () => {
    const testRole = "Employee";
    const employee = new Employee("Marcus", 1, "marc.malliate@gmail.com");
    expect(employee.getRole()).toBe(testRole);
  });
 