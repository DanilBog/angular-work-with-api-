import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { Joke } from '../joke';


@Component({
  selector: 'app-joke-api',
  templateUrl: './joke-api.component.html',
  styleUrls: ['./joke-api.component.scss']
})
export class JokeApiComponent implements OnInit {
  menus = [];
  joke: Joke;
  randomJoke = '';
  Loading = true;


  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.get_random_joke();
    this.menus = this.jokeService.getApimenu();
  }

  get_random_joke(): void {
    this.jokeService.getJoke()
        .subscribe(joke => { this.joke = joke; console.log('Случайная шутка:', this.joke); this.Loading=false; });
  }


}
