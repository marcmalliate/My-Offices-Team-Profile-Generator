//Child class required
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initalisation", () => {
        it("Should create an object with a name, id, email and school", () => {
            const intern = new Intern("Anna", 2, "anna.b@gmail.com", "Melbourne University")

            //Confirm the new objects has the correct properties
            expect(intern.name).toEqual("Anna");
            expect(intern.id).toEqual(2);
            expect(intern.email).toEqual("anna.b@gmail.com");
            expect(intern.school).toEqual("Melbourne University");


            //Test toBe method to check interns school
            describe("Can set the school using constructor arguments", () => {
                it("Should return the interns school", () => {
                    const schoolValue = "Melbourne University"
                    const intern = new Intern("Anna", 2, "anna.b@gmail.com", schoolValue);
                    expect(intern.school).toBe(schoolValue)
                })
            })

            //Tst GET method to return school
            describe("Can get the school from getSchool", () => {
                it("Should return the intern school", () => {
                    const testSchool = "school";
                    const intern = new Intern("Anna", 2, "anna.b@gmail.com", testSchool);
                    expect(intern.getSchool()).toBe(testSchool)
                })
            })


            //Test getRole to return role
            describe("Can get role using getRole", () => {
                it("Should return the role as 'intern' ", () => {
                    const testRole = "Intern";
                    const intern = new Intern("Anna", 2, "anna.b@gmail.com", "Melbourne University");
                    expect(intern.getRole()).toBe(testRole)
                })
            })
        })
    })
})