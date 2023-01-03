export interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

export class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(fn: string, ln: string, a: number) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
  }

  przedstawSie() {
    console.log(
      `Hej nazywam się ${this.firstName} ${this.lastName}. Mam ${this.age} lat.`
    );
  }
}

export class Human {
  name: string;
  secondName: string;
  age: number;
  tall: number;

  constructor(name: string, secondName: string, age: number, tall: number) {
    this.name = name;
    this.secondName = secondName;
    this.age = age;
    this.tall = tall;
  }
  opowiedzOSobie() {
    console.log(
      `Mam na imię ${this.name}. Moje rodowe nazwisko to ${this.secondName}. Mój wzrost to około ${this.tall} cm. , niestety już nie urosnę, gdyż skończyłem/łam ponad ${this.age} lat.`
    );
  }
}
