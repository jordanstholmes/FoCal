// function greeter(person) {
//   return `Hello ${person.firstName}, how may I do your bidding today?`;
// }

// const user = { firstName: 'Bobby' };

// document.body.textContent = greeter(user);
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello Mr. ${person.lastName}, how may I do your bidding today?`;
}

let user = new Student('Jordan', 'S.', 'Holmes');

document.body.textContent = greeter(user);
