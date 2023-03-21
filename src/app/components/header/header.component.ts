import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  OnInit,
} from "@angular/core";
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
export class HeaderComponent implements OnInit {
  menuVisible: boolean = false;
  showPlanets: boolean = false;
  audio: HTMLAudioElement;

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = "/assets/sounds/StarWars.mp3";
    this.audio.autoplay = true;
    this.audio.muted = true;
    this.audio.load();
  }

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

  constructor(public settingsService: SettingsService) {}
}
