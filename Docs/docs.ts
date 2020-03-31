function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Robert Hartley";

document.body.textContent = greeter(user);