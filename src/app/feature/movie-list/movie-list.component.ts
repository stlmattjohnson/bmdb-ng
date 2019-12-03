import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/model/movie.class";
import { MovieService } from "src/app/service/movie.service";
import { BaseComponent } from '../base/base.component';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent extends BaseComponent implements OnInit {
  title: string = "Movie List";
  movies: Movie[] = [];
  jr: JsonResponse;
  isLoading: boolean = true;
  constructor(private movieSvc: MovieService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.movieSvc.list().subscribe(jr => {
      this.movies = jr.data as Movie[];
      this.isLoading = false;
    });
  }
}
