import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokelistComponent } from './jokelist/jokelist.component';
import { JokeApiComponent } from './joke-api/joke-api.component';
const routes: Routes = [
  { path: '',   redirectTo: '/joke-api', pathMatch: 'full' },
  { path: 'joke-api', component: JokeApiComponent },
  { path: 'jokelist/:source/:id', component: JokelistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
