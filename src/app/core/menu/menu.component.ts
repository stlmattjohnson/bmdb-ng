import { Component, OnInit } from "@angular/core";
import { MenuItem } from "src/app/model/menu-item.class";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  constructor() {}

  ngOnInit() {
    this.menuItems = [
      new MenuItem("Movies", "/movies/list", "List of Movies"),
      new MenuItem("Actors", "/actors/list", "List of Actors"),
      new MenuItem("Credits", "/credits/list", "List of Credits")
    ];
  }
}
