import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/model/movie.class";
import { MovieService } from "src/app/service/movie.service";
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: "app-movie-create",
  templateUrl: "./movie-create.component.html",
  styleUrls: ["./movie-create.component.css"]
})
export class MovieCreateComponent implements OnInit {
  title: string = "Movie Create";
  movie: Movie = new Movie();
  jr: JsonResponse;
  constructor(private movieSvc: MovieService, private router: Router) {}

  ngOnInit() {}
  save(): void {
    this.movieSvc.save(this.movie).subscribe(jr => {
      this.router.navigateByUrl("/movies/list");
    });
  }
}
