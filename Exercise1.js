class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  usersAgesComparing(otherUs) {
    if (otherUs.age > this.age) {
      return `${otherUs.firstName} è più vecchio di ${this.firstName}.`;
    } else if (otherUs.age < this.age) {
      return `${otherUs.firstName} è più giovane di ${this.firstName}.`;
    } else {
      return `${otherUs.firstName} ha la stessa età di ${this.firstName}.`;
    }
  }
}

w = new User("Gino", "Gino", 24, "Madrid");
x = new User("Emanuele", "Bianchi", 24, "Milano");
y = new User("Rocco", "Micchia", 52, "Padova");
z = new User("Laura", "Ventura", 55, "Roma");

// Esempi con le possibili combinazioni da vedere in console
console.log("Es.01:", x.usersAgesComparing(y));
console.log("Es.02:", z.usersAgesComparing(x));
console.log("Es.03:", w.usersAgesComparing(x));
console.log("Es.04:", y.usersAgesComparing(z));
