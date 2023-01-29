import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Human } from 'src/app/interfaces/people';
import { HumanService } from 'src/app/people.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent {
  id: number = null;
  person: Human;

  constructor(private route: ActivatedRoute, private peopleService: HumanService) {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.peopleService.getHuman(this.id).subscribe((person) => {
      this.person = person;
      console.log('person', person);
    })
  }
}
