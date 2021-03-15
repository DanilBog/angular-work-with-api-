import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { Joke } from '../joke';
import { finalize } from 'rxjs/operators';


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
  errorProxy = false;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getRandomJoke();
    this.menus = this.jokeService.getApimenu();
  }

  getRandomJoke(): void {
    this.jokeService.getJoke().pipe(
      finalize(() => this.isLoading = false)
    )
        .subscribe((joke) => {
          this.joke = joke;
          console.log('Случайная шутка:', this.joke); },
          (error) => {console.log('Ошибка получения случайной шутки:', error); if (error.status === 403) { this.errorProxy = true; } } );
  }

}
