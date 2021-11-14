//Child class required
const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initalisation", () => {
        it("Should create an object with a name, id, email and school", () => {
            const intern = new Intern("Marcus", 1, "marc.malliate@gmail.com", "Sydney University")

            //Confirm the new objects has the correct properties
            expect(intern.name).toEqual("Marcus");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("marc.malliate@gmail.com");
            expect(intern.school).toEqual("Sydney University");


            //Test toBe method to check interns school
            describe("Can set the school using constructor arguments", () => {
                it("Should return the interns school", () => {
                    const schoolValue = "Melbourne University"
                    const Intern = new intern("Anna", 2, "anna.b@gmail.com", schoolValue);
                    expect(Intern.school).toBe(schoolValue)
                })
            })

            //Tst GET method to return school
            describe("Can get the school from getSchool", () => {
                it("Should return the intern school", () => {
                    const testSchool = "school";
                    const Intern = new intern("Anna", 2, "anna.b@gmail.com", testSchool);
                    expect(Intern.getSchool()).toBe(testSchool)
                })
            })


            //Test getRole to return role
            describe("Can get role using getRole", () => {
                it("Should return the role as 'intern' ", () => {
                    const testRole = "Intern";
                    const Intern = new intern("Anna", 2, "anna.b@gmail.com", "Melbourne University");
                    expect(Intern.getRole()).toBe(testRole)
                })
            })
        })
    })
})