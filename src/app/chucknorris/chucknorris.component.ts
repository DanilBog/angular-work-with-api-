import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { JokeService } from '../joke.service';
import { NorrisJoke } from '../norrisjoke';
import { NorrisCategory } from '../norrisjoke';
@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent implements OnInit {
  joke: NorrisJoke;
  chuckCategory: NorrisCategory;
  isLoading = true;
  errorProxy = false;
  constructor(private jokeService: JokeService) { }
  ngOnInit(): void {
    this.getRandomjoke();
    this.getNorrisCategory();
  }

  getRandomjoke(): void {
    this.jokeService.getChuckjoke().pipe(
      finalize(() => this.isLoading = false)
      ).subscribe(joke => {
          this.joke = joke;
          console.log('Случайная шутка Chuck Norris:', this.joke); },
          (error) => console.log('Ошибка получения случайной шутки Чак Норрис:', error)
        );
  }

  getNorrisCategory(): void {
    this.jokeService.getChuckCategory().pipe(
      finalize(() => this.isLoading = false))
        .subscribe(category => {
          this.chuckCategory = category;
          console.log('Категории Chuck Norris:', this.chuckCategory); },
          (error) => {console.log('Ошибка получения категорий Чак Норрис:', error); if (error.status === 403) { this.errorProxy = true; } }
        );
  }

}
