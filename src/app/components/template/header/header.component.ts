import { HeaderService } from "../../../service/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private service: HeaderService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.service.headerData.title;
  }

  get icon(): string {
    return this.service.headerData.icon;
  }

  get routeUrl(): string {
    return this.service.headerData.routeUrl;
  }
}
