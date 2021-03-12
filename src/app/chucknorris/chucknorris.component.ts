import { Component, OnInit } from '@angular/core';
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
  constructor(private jokeService: JokeService) { }
  ngOnInit(): void {
    this.getRandomjoke();
    this.getNorrisCategory();
  }

  getRandomjoke(): void {
    this.jokeService.getChuckjoke()
        .subscribe(joke => {
          this.joke = joke;
          console.log('Случайная шутка Chuck Norris:', this.joke);
        });
  }

  getNorrisCategory(): void {
    this.jokeService.getChuckCategory()
        .subscribe(category => {
          this.chuckCategory = category;
          console.log('Категории Chuck Norris:', this.chuckCategory);
          this.isLoading = false;
        });
  }

}
