import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loader-component",
  templateUrl: "./loader-component.component.html",
  styleUrls: ["./loader-component.component.scss"],
})
export class LoaderComponentComponent implements OnInit {
  showSpinner = false;

  constructor() {}

  ngOnInit() {}

  startSpinner() {
    this.showSpinner = true;
  }

  stopSpinner() {
    this.showSpinner = false;
  }
}
