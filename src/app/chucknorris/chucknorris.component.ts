import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { norrisJoke } from '../norrisjoke';
import { norrisCategory } from '../norrisjoke';
@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent implements OnInit {
  joke:norrisJoke;
  chuckCategory: norrisCategory;
  Loading = true;
  constructor(private jokeService: JokeService) { }
  ngOnInit(): void {
    this.getRandomjoke();
    this.getNorrisCategory();
  }

  getRandomjoke(): void {
    this.jokeService.getChuckjoke()
        .subscribe(joke => { this.joke = joke; console.log('Случайная шутка Chuck Norris:', this.joke); });
  }

  getNorrisCategory(): void {
    this.jokeService.getChuckCategory()
        .subscribe(category => { this.chuckCategory = category; console.log('Категории Chuck Norris:', this.chuckCategory); this.Loading = false; });
  }


}
