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
  isLoading = true;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getRandomJoke();
    this.menus = this.jokeService.getApimenu();
  }

  getRandomJoke(): void {
    this.jokeService.getJoke()
        .subscribe(joke => {
          this.joke = joke;
          console.log('Случайная шутка:', this.joke);
          this.isLoading = false; });
  }

}
