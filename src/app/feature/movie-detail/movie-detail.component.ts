import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/model/movie.class";
import { JsonResponse } from "src/app/model/json-response.class";
import { MovieService } from "src/app/service/movie.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  title: string = "Movie Detail";
  movie: Movie = new Movie();
  jr: JsonResponse;
  id: number = 0;

  constructor(
    private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location
  ) {}

  ngOnInit() {
    //getting id from url, getting movie by id, setting to this.movie
    this.route.params.subscribe(parms => (this.id = parms["id"]));
    this.movieSvc.get(this.id).subscribe(jr => {
      this.movie = jr.data as Movie;
    });
  }

  delete(): void {
    this.movieSvc.delete(this.movie.id).subscribe(jr => {
      if (jr.errors != null) {
        console.log("Error deleting movie: " + jr.errors);
      }
      this.router.navigateByUrl("/movies/list");
    });
  }

  backClicked() {
    this.loc.back();
  }
}
