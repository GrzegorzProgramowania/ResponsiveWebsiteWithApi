import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuVisible: boolean = false;
  showPlanets: boolean = false;
  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    // var audio = new Audio('/assets/sounds/StarWars.mp3');
    // audio.play();

    setTimeout(function () {
      // audio.pause();
    }, 8500);
  }

  @ViewChild('audio', { static: true })
  audio!: ElementRef<HTMLAudioElement>;

  playSound() {
    return;
    this.audio.nativeElement.play();
    setTimeout(() => {
      this.audio.nativeElement.pause();
    }, this.audio.nativeElement.duration * 1000);
  }
}
