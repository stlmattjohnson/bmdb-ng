import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/model/actor.class";
import { JsonResponse } from "src/app/model/json-response.class";
import { ActorService } from "src/app/service/actor.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-actor-detail",
  templateUrl: "./actor-detail.component.html",
  styleUrls: ["./actor-detail.component.css"]
})
export class ActorDetailComponent implements OnInit {
  title: string = "Actor Detail";
  actor: Actor = new Actor();
  jr: JsonResponse;
  id: number = 0;

  constructor(
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => (this.id = parms["id"]));
    this.actorSvc.get(this.id).subscribe(jr => {
      this.actor = jr.data as Actor;
    });
  }

  delete(): void {
    this.actorSvc.delete(this.actor.id).subscribe(jr => {
      if (jr.errors != null) {
        console.log("Error deleting Actor: " + jr.errors);
      }
      this.router.navigateByUrl("/actors/list");
    });
  }

  backClicked() {
    this.loc.back();
  }
}
