//This component is meant to grab a single movie by id from our database 
//and On its front, it will create a form that lets us edit that movie 
//When done we'll click submit and pass the updated to our API
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css'],
  providers: [MovieService]
})
export class UpdateMovieComponent implements OnInit {
  @Input() Id: number;
  movie: Movie;
  constructor(private movieService: MovieService) {
  }
  ngOnInit() {
    this.movieService.GetMovie(this.Id).subscribe(
      (response: any) => {
        console.log(response);
        this.movie = response;
      }
    );
  }

  UpdateMovie(){
    let title: string = (<HTMLInputElement>document.getElementById("Title"+this.Id)).value;
    console.log(title);
    let year: number = parseInt((<HTMLInputElement>document.getElementById("Year"+this.Id)).value);
    console.log(year);
    let runTime: number = parseInt((<HTMLInputElement>document.getElementById("RunTime"+this.Id)).value);
    console.log(runTime);
    let genre: string = (<HTMLInputElement>document.getElementById("Genre"+this.Id)).value;
    console.log(genre);

    let newMovie: Movie = { id: this.Id, title: title, year: year, runtime: runTime, genre: genre };

    this.movieService.UpdateMovie(newMovie,this.Id).subscribe(
      (response:any) =>{location.reload()}
    );
  }
}

