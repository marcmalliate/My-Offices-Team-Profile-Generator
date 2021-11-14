//Child class required
const manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialisation", () => {
        it("Should create an object with a name, id, email and officeNumber", () => {
            const Manager = new manager("Amba", 1, "Amba.S@gmail.com", 8);

            //confirm the new objects has the correct properties
            expect(manager.name).toEqual("Amba");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("Amba.S@gmail.com");
            expect(manager.officeNumber).toEqual(8);
        });


         //Tests toBE method to check office number
         describe("Can set the officeNumber using constructor arguments", () => {
            it("Should return the managers officeNumber", () => {
                const officeNumberValue = 8
                const Manager = new manager("Amba", 1, "Amba.S@gmail.com", officeNumberValue);
                expect(Manager.officeNumber).toBe(officeNumberValue)
            })
        })

        //Tests GET methods to return office number
        describe("Can get office number from getOfficeNumber", () => {
            it("Should return the manager office number", () => {
                const testValue = 1;
                const Manager = new manager("Name", 1, "Amba.S@gmail.com", testValue);
                expect(Manager.getOfficeNumber()).toBe(testValue)
            })
        })

        //Tests getRole method to return role
        describe("Can get role from getRole", () => {
            it("Should return the role as 'manager' ", () => {
                const testRole = "Manager";
                const Manager = new manager("Amba", 1, "Amba.S@gmail.com", 8);
                expect(Manager.getRole()).toBe(testRole);
            })
        })
    })
})
