import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/model/actor.class";
import { JsonResponse } from "src/app/model/json-response.class";
import { ActorService } from "src/app/service/actor.service";

@Component({
  selector: "app-actor-list",
  templateUrl: "./actor-list.component.html",
  styleUrls: ["./actor-list.component.css"]
})
export class ActorListComponent implements OnInit {
  actors: Actor[] = [];
  jr: JsonResponse;
  title: string = "Actor List";
  constructor(private actorSvc: ActorService) {}

  ngOnInit() {
    console.log("Calling Actor List Service...");
    this.actorSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.actors = this.jr.data as Actor[];
      console.log(this.actors);
    });
  }
}
