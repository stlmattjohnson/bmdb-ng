import { Component, OnInit } from "@angular/core";
import { Credit } from "src/app/model/credit.class";
import { JsonResponse } from "src/app/model/json-response.class";
import { CreditService } from "src/app/service/credit.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MovieService } from "src/app/service/movie.service";
import { ActorService } from "src/app/service/actor.service";
import { Movie } from "src/app/model/movie.class";
import { Actor } from "src/app/model/actor.class";

@Component({
  selector: "app-credit-edit",
  templateUrl: "./credit-edit.component.html",
  styleUrls: ["./credit-edit.component.css"]
})
export class CreditEditComponent implements OnInit {
  title: string = "Credit Edit";
  credit: Credit = new Credit();
  id: number = 0;
  jr: JsonResponse;
  movies: Movie[] = [];
  actors: Actor[] = [];

  constructor(
    private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => (this.id = parms["id"]));
    this.creditSvc.get(this.id).subscribe(jr => {
      this.credit = jr.data as Credit;
    });
    this.movieSvc.list().subscribe(jr => {
      this.movies = jr.data as Movie[];
    });
    this.actorSvc.list().subscribe(jr => {
      this.actors = jr.data as Actor[];
    });
  }

  save(): void {
    this.creditSvc.save(this.credit).subscribe(jr => {
      this.router.navigateByUrl("/credits/list");
    });
  }

  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }

  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }

  backClicked() {
    this.loc.back();
  }
}
