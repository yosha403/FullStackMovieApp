import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string ="Movie";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl+ this.url;
   }

  GetMovieList(){
    return this.http.get(this.url);
  }

  //Think of observable as the pizza order, I've told papajohn what I want
  //And now I need to wait it to be delivered
  GetMovie(id : number) : Observable<Object> {
    return this.http.get(this.url + "/get/" + id);
  }

  CreateMovie(m : Movie){
    return this.http.post(this.url+"/makeNew/", m);
  }

  DeleteMovie(id: number){
    return this.http.delete(this.url +"/delete/"+id);    
  }

  UpdateMovie(newMovie: Movie,id: number){
    return this.http.put(this.url+"/update/"+id, newMovie);
  }
}
