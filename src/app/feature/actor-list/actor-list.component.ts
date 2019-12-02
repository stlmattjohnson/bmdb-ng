import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/model/actor.class";
import { ActorService } from "src/app/service/actor.service";
import { BaseComponent } from '../base/base.component';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: "app-actor-list",
  templateUrl: "./actor-list.component.html",
  styleUrls: ["./actor-list.component.css"]
})
export class ActorListComponent extends BaseComponent implements OnInit {
  title: string = "Actor List";
  actors: Actor[] = [];
  jr: JsonResponse;
  constructor(private actorSvc: ActorService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.actorSvc.list().subscribe(jr => {
      this.actors = jr.data as Actor[];
    });
  }
}
