import { Component, OnInit } from "@angular/core";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private headerSevice: HeaderService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.headerSevice.headerData.title;
  }

  get icon(): string {
    return this.headerSevice.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerSevice.headerData.routeUrl;
  }
}
