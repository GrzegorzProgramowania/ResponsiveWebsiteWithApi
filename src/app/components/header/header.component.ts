import { Component } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
// @NgbModule({
//   imports: [NgbModule],
// })
export class HeaderComponent {
  menuVisible: boolean = false;
}
