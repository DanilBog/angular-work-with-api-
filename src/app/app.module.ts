import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeApiComponent } from './joke-api/joke-api.component';
import { ProxyInterceptor } from './interceptor/proxy.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { JokelistComponent } from './jokelist/jokelist.component';
import { ChucknorrisComponent } from './chucknorris/chucknorris.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    JokeApiComponent,
    JokelistComponent,
    ChucknorrisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProxyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
