import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { NorrisJokes } from '../norrisjoke';
import { NorrisCategory } from '../norrisjoke';
import { EMPTY, of, Subscription } from 'rxjs';
import { catchError, filter, finalize, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.scss']
})
export class JokelistComponent implements OnInit, OnDestroy {
  jokes: Joke[];
  chuckJokes: NorrisJokes;
  id;
  chucknorris = false;
  jokeapi = false;
  menus = [];
  chuckCategory: NorrisCategory;
  subscribtions: Subscription;
  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService,
    private location: Location,
    private router: Router)
    {   this.subscribtions = this.router.events.pipe(
        filter( (event: Event) => event instanceof NavigationEnd),
        switchMap(() => this.getJokes() )
      ).subscribe({
        error: (err) => console.log('Error from getJokes:', err)
      });
    }

ngOnInit(): void {
  this.menus = this.jokeService.getApimenu();
  this.getNorrisCategory();
}

ngOnDestroy(): void{
  this.subscribtions.unsubscribe();
}

getJokes(): Observable <void> {
  this.id = this.route.snapshot.paramMap.get('id');
  const source = this.route.snapshot.paramMap.get('source');
  if (source === 'jokeapi'){
    return this.jokeService.getJokebyType(this.id).pipe(
            finalize(() => {this.jokeapi = true; console.log('Finalyze done'); } ),
            catchError(error => of(`I caught: ${error}`)),
            map((jokes: Joke[]) => {
              this.jokes = jokes;
              console.log(jokes);
          })
    );
  }
  if (source === 'chucknorris') {
    return this.jokeService.getNorrisJokebyType(this.id).pipe(
      finalize(() => this.chucknorris = true),
      map((jokes: NorrisJokes) => {
        this.chuckJokes = jokes;
        console.log('Шутки от Chuck Norris', jokes);
      })
    );
    }
  return of();
}

goBack(): void {
  this.location.back();
  }

getNorrisCategory(): void {
  this.jokeService.getChuckCategory()
  .subscribe(category => {
    this.chuckCategory = category;
    console.log('Категории Chuck Norris:',
    this.chuckCategory);
    });
  }
}
