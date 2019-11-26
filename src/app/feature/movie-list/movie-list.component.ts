import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/model/movie.class";
import { JsonResponse } from "src/app/model/json-response.class";
import { MovieService } from "src/app/service/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  jr: JsonResponse;
  title: string = "Movie List";
  constructor(private movieSvc: MovieService) {}

  ngOnInit() {
    console.log("Calling Movie List Service...");
    this.movieSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.movies = this.jr.data as Movie[];
      console.log(this.movies);
    });
  }
}
