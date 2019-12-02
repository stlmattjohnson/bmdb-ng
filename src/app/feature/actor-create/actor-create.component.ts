import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/model/actor.class";
import { JsonResponse } from "src/app/model/json-response.class";
import { ActorService } from "src/app/service/actor.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-actor-create",
  templateUrl: "./actor-create.component.html",
  styleUrls: ["./actor-create.component.css"]
})
export class ActorCreateComponent implements OnInit {
  title: string = "Actor Create";
  actor: Actor = new Actor();
  jr: JsonResponse;
  constructor(private actorSvc: ActorService, private router: Router) {}

  ngOnInit() {}
  save(): void {
    this.actorSvc.save(this.actor).subscribe(jr => {
      this.router.navigateByUrl("/actors/list");
    });
  }
}
