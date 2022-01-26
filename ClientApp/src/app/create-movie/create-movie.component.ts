import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [MovieService]
})
export class CreateMovieComponent implements OnInit {
  constructor(private movieService: MovieService) { }
  ngOnInit() {
  }
  CreateMovie() {
    let title: string = (<HTMLInputElement>document.getElementById("Title")).value;
    console.log(title);
    let year: number = parseInt((<HTMLInputElement>document.getElementById("Year")).value);
    console.log(year);
    let runTime: number = parseInt((<HTMLInputElement>document.getElementById("RunTime")).value);
    console.log(runTime);
    let genre: string = (<HTMLInputElement>document.getElementById("Genre")).value;
    console.log(genre);
    let newMovie: Movie = { id: 0, title: title, year: year, runtime: runTime, genre: genre };
    //We will pass this model to the movie service
    this.movieService.CreateMovie(newMovie).subscribe(
      (response: any) => { location.reload() }
    );
  }
}
