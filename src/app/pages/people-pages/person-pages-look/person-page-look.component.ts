import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Human, HumanDetails } from 'src/app/interfaces/people';
import { HumanService } from 'src/app/services/people.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-person-page-look',
  templateUrl: './person-page-look.component.html',
  styleUrls: ['./person-page-look.component.scss'],
})
export class PersonPageLookComponent {
  showSpinner = false;
  id: number = null;
  person: HumanDetails;

  constructor(
    private route: ActivatedRoute,
    private peopleService: HumanService,
    public settingsService: SettingsService
  ) {
    this.showSpinner = true;
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.peopleService.getHuman(this.id).subscribe((person) => {
      this.person = person.result;
      console.log('person', this.person);
      this.showSpinner = false;
    });
  }
}
