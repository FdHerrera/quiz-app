import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { QuizGameComponent } from './quiz/game/quiz.component';
import { QuizHomeComponent } from './quiz/home/quiz-home.component';
import { ScoresComponent } from './score-table/scores.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    IndexComponent,
    QuizGameComponent,
    QuizHomeComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
