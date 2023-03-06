import { Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";

interface MenuItem {
  path: string;
  text: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  menuVisible: boolean = false;
  showPlanets: boolean = false;

  oldMenuItems = [
    "home",
    "films",
    "characters",
    "species",
    "planets",
    "starships",
    "vehicles",
  ];

  menuItems: MenuItem[] = [
    { path: "home", text: "Home" },
    { path: "films", text: "Films" },
    { path: "people", text: "Characters" },
    { path: "species", text: "Species" },
    { path: "planets", text: "Planets" },
    { path: "starships", text: "Starships" },
    { path: "vehicles", text: "Vehicles" },
  ];

  imgSrc: string;

  constructor(public settingsService: SettingsService) {}

  ngOnInit() {
    if (this.settingsService.soundOn) {
      this.playSound();
    }
    this.imgSrc = this.settingsService.colorWhite
      ? "../../../assets/img/typNumer2.png"
      : "../../../assets/img/typNumer1.png";
  }

  onLoad() {
    var audio = new Audio("/assets/sounds/StarWars.mp3");
    audio.play();

    setTimeout(function () {
      audio.pause();
    }, 8500);
  }

  toggleColor() {
    this.settingsService.toggleColor();
    this.imgSrc = this.settingsService.colorWhite
      ? "../../../assets/img/typNumer2.png"
      : "../../../assets/img/typNumer1.png";
  }

  @ViewChild("audio", { static: true })
  audio!: ElementRef<HTMLAudioElement>;

  playSound() {
    return;
    this.audio.nativeElement.play();
    setTimeout(() => {
      this.audio.nativeElement.pause();
    }, this.audio.nativeElement.duration * 500);
  }

  toggleSound() {
    this.settingsService.soundOn = !this.settingsService.soundOn;
    if (this.settingsService.soundOn) {
      this.playSound();
    } else {
      this.audio.nativeElement.pause();
    }
  }
}
