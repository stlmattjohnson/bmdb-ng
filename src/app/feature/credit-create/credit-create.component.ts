import { Component, OnInit } from "@angular/core";
import { CreditService } from "src/app/service/credit.service";
import { ActorService } from "src/app/service/actor.service";
import { MovieService } from "src/app/service/movie.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Credit } from "src/app/model/credit.class";
import { JsonResponse } from "src/app/model/json-response.class";
import { Movie } from "src/app/model/movie.class";
import { Actor } from "src/app/model/actor.class";

@Component({
  selector: "app-credit-create",
  templateUrl: "./credit-create.component.html",
  styleUrls: ["./credit-create.component.css"]
})
export class CreditCreateComponent implements OnInit {
  title: string = "Credit Create";
  credit: Credit = new Credit();
  jr: JsonResponse;
  movies: Movie[] = [];
  actors: Actor[] = [];

  constructor(
    private creditSvc: CreditService,
    private actorSvc: ActorService,
    private movieSvc: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
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
}
