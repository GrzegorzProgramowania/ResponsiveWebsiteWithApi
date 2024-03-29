import { Component } from '@angular/core';
import { Human } from 'src/app/interfaces/people';
import { HumanService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss'],
})
export class HumanPageComponent {
  showSpinner = false;
  humans: Human[] = [];

  constructor(private humanService: HumanService) {}

  ngOnInit() {
    this.getHumans();
  }

  getHumans() {
    this.showSpinner = true;
    this.humanService.getHumans().subscribe((humans) => {
      console.log(humans);
      this.humans = humans.results;
      this.showSpinner = false;
    });
  }
}
