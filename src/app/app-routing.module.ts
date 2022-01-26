import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ScoresComponent } from './score-table/scores.component';
import { ContactComponent } from './contact/contact.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizGameComponent } from './quiz/game/quiz-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'quiz-home', component: QuizComponent },
  { path: 'game', component: QuizGameComponent},
  { path: 'scores', component: ScoresComponent },
  { path: 'contact-me', component: ContactComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
