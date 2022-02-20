const Engineer = require("../lib/Engineer");
	
test("Can create a github.", () => {
    const testGithub = "Esilfa";
    const employeeInstance = new Engineer("Steph", 2, "ssilfa3@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});


test("Testing getGithub will return github.", () => {
    const testGithub = "Esilfa";
    const employeeInstance = new Engineer("Steph", 2, "ssilfa3@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});


test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Steph", 2, "ssilfa3@gmail.com", "Esilfa");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
