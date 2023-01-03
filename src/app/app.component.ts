import { Component, OnInit } from '@angular/core';
import { IPerson, Person } from './classes/person.class';
import { Human } from './classes/person.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('POJAWIŁEM SIE');

    const personA: IPerson = {
      firstName: 'Tomasz',
      lastName: 'Gardecki',
      age: 37,
    };

    console.log(
      `Hej nazywam się ${personA.firstName} ${personA.lastName}. Mam ${personA.age} lat.`
    );

    const personB: IPerson = {
      firstName: 'Grzegorz',
      lastName: 'Gardecki',
      age: 29,
    };

    console.log(
      `Hej nazywam się ${personB.firstName} ${personB.lastName}. Mam ${personB.age} lat.`
    );

    const personC: Person = new Person('Magdalena', 'Kravtsova', 35);
    const personD: Person = new Person('Vitaha', 'Kravtsov', 50);

    personC.przedstawSie();
    personD.przedstawSie();

    const HumanA: Human = new Human('Grzegorz', 'Gardecki', 29, 180);

    HumanA.opowiedzOSobie();

    const HumanB: Human = new Human('Ania', 'Piotrowicz', 29, 160);

    HumanA.opowiedzOSobie();

    // const HumanA: Human = {
    //   name: 'Grzegorz',
    //   secondName: 'Gardecki',
    //   age: 29,
    //   tall: 180,
    // };

    // console.log(
    //   `Mam na imię ${HumanA.name}. Moje rodowe nazwisko to ${HumanA.secondName}. Mój wzrost to około ${HumanA.tall}, niestety już nie urosnę, gdyż skończyłem/łam ponad ${HumanA.age} lat.`);
    // }
  }
}
