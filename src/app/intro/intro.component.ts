import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  audio: HTMLAudioElement = new Audio(
    '/assets/sounds/Star_Wars_Main_Theme_Song.mp3'
  );

  @Output()
  hide: EventEmitter<void> = new EventEmitter();

  started = false;

  start() {
    this.started = true;
    this.audio?.play();
    setTimeout(() => {
      document.getElementById('crawl')?.addEventListener('animationend', () => {
        this.end();
      });
    }, 50);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.end();
  }

  end() {
    this.hide.emit();
    this.audio?.pause();
  }
}
