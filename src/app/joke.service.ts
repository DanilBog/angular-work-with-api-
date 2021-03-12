import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Joke } from './joke';
import { NorrisJoke } from './norrisjoke';
import { NorrisJokes } from './norrisjoke';
import { NorrisCategory } from './norrisjoke';
@Injectable({
  providedIn: 'root'
})

export class JokeService {
  menus = ['general', 'knock-knock', 'programming'];
  url = 'https://official-joke-api.appspot.com/random_joke';  // random joke
  urlBytype = 'https://official-joke-api.appspot.com/jokes/';
  urlChuck = 'http://api.icndb.com/jokes/random';             // random Chuck Norris joke
  urlChuckCategory = 'http://api.icndb.com/categories';       // Chuck Norris category
  urlChuckBycategory = 'http://api.icndb.com/jokes/random/10?limitTo=[';                                    // Chuck Norris
  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.url);
  }

  getJokebyType(jokeType: string): Observable<Joke[]> {
    const urlBytype = this.urlBytype + jokeType + '/ten';
    return this.http.get<Joke[]>(urlBytype);
  }

  getChuckjoke(): Observable<NorrisJoke> {
      return this.http.get<NorrisJoke>(this.urlChuck);
  }

  getChuckCategory(): Observable<NorrisCategory> {
    return this.http.get<NorrisCategory>(this.urlChuckCategory);
  }

  getNorrisJokebyType(jokeType: string): Observable<NorrisJokes> {
    const urlChuckBycategory = this.urlChuckBycategory + jokeType + ']';
    return this.http.get<NorrisJokes>(urlChuckBycategory);
  }

  getApimenu(): string[] {
    return this.menus;
  }

}
