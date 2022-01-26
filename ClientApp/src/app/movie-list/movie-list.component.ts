import { Component, OnInit } from '@angular/core';
import { Convert, Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {

  currentMovie?: Movie;
  constructor(private movieDAL: MovieService) { }

  ngOnInit() {
    //subscribe attaches an observable and waits for it to finish calling the api
    //when the service is done running, subscribe will react by running the method
    //we pass in it
    this.movieDAL.GetMovie(3).subscribe(
      (response: any) => {
        console.log(response);
        let json = Convert.MovieToJson(response); 
        this.currentMovie = Convert.toMovie(json); 
        console.log(this.currentMovie); 
      }
    );
  }
}