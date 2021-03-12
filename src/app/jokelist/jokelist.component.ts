import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { norrisJokes } from '../norrisjoke';
import { norrisCategory } from '../norrisjoke';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.scss']
})
export class JokelistComponent implements OnInit, OnDestroy  {
  jokes:Joke[];
  chuckJokes: norrisJokes;
  id;
  chucknorris = false;
  jokeapi = false;
  menus = [];
  chuckCategory: norrisCategory;
  subscribtions: Subscription;
  
  constructor(private route: ActivatedRoute,
              private jokeService: JokeService,
              private location: Location,
              private router: Router) {
              this.subscribtions = this.router.events.subscribe((event: Event) => {
                  if (event instanceof NavigationEnd) {
                     this.getJokes();
                  }
              });
              }

  ngOnInit(): void {
    this.getJokes();
    this.menus = this.jokeService.getApimenu();
    this.getNorrisCategory();
  }
  ngOnDestroy(): void{
    this.subscribtions.unsubscribe();
  }
  getJokes(): void {
    //this.route.params
    this.id = this.route.snapshot.paramMap.get('id');
    const source = this.route.snapshot.paramMap.get('source');
    if (source == 'jokeapi'){
      this.jokeService.getJokebyType(this.id)
      .subscribe(jokes => {this.jokes = jokes; console.log(jokes); this.jokeapi = true; this.chucknorris = false;});
    }
    if (source == 'chucknorris') {
      this.jokeService.getNorrisJokebyType(this.id)
      .subscribe(jokes => {this.chuckJokes = jokes; console.log('Шутки от Chuck Norris', jokes);this.jokeapi = false; this.chucknorris = true;});
    }
    
    
  }
  goBack(): void {
    this.location.back();
  }
  getNorrisCategory(): void {
    this.jokeService.getChuckCategory()
        .subscribe(category => { this.chuckCategory = category; console.log('Категории Chuck Norris:', this.chuckCategory); });
  }
}
