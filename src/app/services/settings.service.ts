import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  soundOn = false;
  colorWhite = false;
  colorChanged = new EventEmitter<boolean>();

  constructor() {}

  toggleColor() {
    this.colorWhite = !this.colorWhite;
    this.colorChanged.emit(this.colorWhite);
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class SettingsService {
//   soundOn = false;
//   colorWhite = false;

//   constructor() {}

//   toggleColor() {
//     this.colorWhite = !this.colorWhite;
//   }
// }
