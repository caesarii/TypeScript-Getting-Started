class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// Student 实例的属性与 Person 接口是不完全相同的， 但是两者兼容
let user = new Student("qing", "M.", "wang");
document.body.innerHTML = greeter(user);

