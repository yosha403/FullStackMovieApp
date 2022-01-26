import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-full-crud',
  templateUrl: './full-crud.component.html',
  styleUrls: ['./full-crud.component.css'],
  providers: [MovieService]
})
export class FullCRUDComponent implements OnInit {

  movies?: Movie[] = [];
  constructor(private movieService: MovieService) {
    //This will fill out our array 
    //Get Movie list pass along an observable 
    //when you subscribe to the obserable, the function waits until 
    //the observable is done running to kick in. 
    this.movieService.GetMovieList().subscribe(

      //The response represents the result of the HTTP call
      //PRO-TIP: if you are merely displaying models, you don't need to do any conversion 
      //The front-end won't care about loose typing 
      //However, the backend (API/Database) will want those conversions, both are strongly typed
      (response: any) => { this.movies = response }
    )
  }

  //The constructor is for filling out properties and nothing else 
  //ngOnInit is for handling any other kind of setup (function calls etc)
  ngOnInit() {
  }

  DeleteEntry(id: number, index: number) {
    this.movieService.DeleteMovie(id).subscribe(
      (response: any) => {
        console.log(id + " was deleted successfully from our database");
        //Splice goes to an index in an array, and removes the number of elements set in the 
        //second parameter. Then it will return the smaller array so we set it to the original 
        //array variable, so that we can see the deletion on our front-end 
        this.movies.splice(index, 1);
      }
    );
  }

  EditMovie(id: number){
    //This just shows all my properties
    let displayPanel = document.getElementById("display"+id);
    //This is my edit form
    let editPanel = document.getElementById("edit"+id);

    //If the display is empty, by default the element is being shown

    //In HTML the style contains all possible css styles, so we can set them directly
    //If style isn't set it usually is either 0, the browser's defaults or an empty string
    if(displayPanel.style.display==="" || displayPanel.style.display==="inherit"){
      displayPanel.style.display="none";
      editPanel.style.display="inherit";
    }
    else if(displayPanel.style.display==="none"){
      displayPanel.style.display="inherit";
      editPanel.style.display="none";
    }
  }
}