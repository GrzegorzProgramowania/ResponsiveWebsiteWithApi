import {
  Injectable,
  EventEmitter,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private renderer: Renderer2;

  soundOn = true;
  colorWhite = false;
  colorChanged = new EventEmitter<boolean>();

  constructor() {}

  toggleColor() {
    this.colorWhite = !this.colorWhite;
    this.colorChanged.emit(this.colorWhite);
    document.body.classList.remove(this.colorWhite ? 'bg-dark' : 'bg-white');
    document.body.classList.add(this.colorWhite ? 'bg-white' : 'bg-dark');
  }
}
