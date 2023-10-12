interface User {
    name: string,
    age?: number, 
    id: number,
    email: string,
}

let user: User = { name: "John", age: 30, id: 1, email: ''}

interface Employee extends User {
    salary: number
}

let employee: Employee = {name: "john", id: 1, email: '', salary: 1000}

interface Login {
    Login(): User;
}


let users: User[] = [{
    name: "John",
    email: '',
    id: 1
},
{
    name: "Tim",
    email: '',
    id: 2
}]





