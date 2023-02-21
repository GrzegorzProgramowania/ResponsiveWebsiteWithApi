// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class SettingsService {
//   soundOn = false;
//   colorWhite = false;

//   constructor() {}
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  soundOn = false;
  colorWhite = false;

  constructor() {}

  toggleColor() {
    this.colorWhite = !this.colorWhite;
  }
}
