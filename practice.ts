//Soal 1
const username: string = "Alice";
const age: number = 25;
const isAdmin: boolean = true;
const colors: string[] = ["red", "green", "blue"];

//Soal 2
const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

//Soal 3
interface Car {
  brand: string;
  model: string;
  year: number;
}
const myCar: Car = {
  brand: "DBrand",
  model: "Dd1",
  year: 2050,
};

//Soal 4
const userId: string | number = "123";

// Soal 5
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log(`${this.name} generic sound`);
  }
}

const cat = new Animal("cat");
cat.makeSound();

//Soal 6
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}
const dog = new Dog("Dog");
dog.makeSound();

//Soal 7
function identity<T>(value: T): T {
  return value;
}

//Soal 8
type Point = {
  x: number;
  y: number;
};
const pointA: Point = { x: 10, y: 20 };

//Soal 9
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(value: number): void {
    this.balance + value;
  }
  getBalance(): void {
    console.log(this.balance);
  }
}
const account = new BankAccount(1000);
account.deposit(500);
account.getBalance();

//Soal 10
interface User {
  readonly id: number;
  name: string;
}
const alice: User = {
  id: 1,
  name: "Alice",
};

//Soal 11
interface Profile {
  name: string;
  age: number;
}

const partialProfile: Partial<Profile> = {
  name: "Dede",
};

// Soal 12
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}
const currentRole = Role.User;

//Soal 13
type Manager = {
  id: number;
};
type Employee = {
  name: string;
};
type ManagerEmployee = Manager & Employee;
const managerEmployee: ManagerEmployee = {
  id: 1,
  name: "Dede",
};

// Soal 14
interface Person {
  name: string;
  age: number;
  address?: string;
}
const person: Person = {
  name: "Dede",
  age: 20,
  address: "Jakarta",
};

// Soal 15
function calculateDiscount(price: number, discount: number = 10): number {
  const discountAmount = (price * discount) / 100;
  return price - discountAmount;
}

console.log(calculateDiscount(100));
console.log(calculateDiscount(100, 20));
