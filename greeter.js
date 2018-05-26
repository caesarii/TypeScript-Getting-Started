function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'qinghe', lastName: 'wang' };
document.body.innerHTML = greeter(user);
