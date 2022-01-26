import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Answer } from "../model/answer";
import { Question } from "../model/question";

@Component({
    selector: 'quiz-game',
    templateUrl: './quiz-game.component.html',
    styleUrls:['../quiz.component.css']
})
export class QuizGameComponent{
    question: Observable<Question>;
    answers: Observable<Array<Answer>>;
}