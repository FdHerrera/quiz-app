import { Component, Input } from "@angular/core";
import { map, Observable } from "rxjs";
import { Answer } from "../model/answer";
import { Category } from "../model/category";
import { Question } from "../model/question";
import { QuizComponent } from "../quiz.component";
import { GameService } from "./service/game.service";

@Component({
    selector: 'quiz-game',
    templateUrl: './quiz-game.component.html',
    styleUrls:['../quiz.component.css']
})
export class QuizGameComponent{
    @Input() quizComponent: QuizComponent;
    questions: Observable<Array<Question>>;
    answers: Array<Answer>;
    private gameService: GameService;

    constructor(gameService: GameService){
        this.gameService = gameService;
    }

    public getQuestions(categoryId: number){
        this.questions = this.gameService.getQuestionsForCategory(this.getCategoryId());
    }

    private getCategoryId(): number{
        let categoryId;
        this.quizComponent.categorySelected.subscribe(
            (category: Category) => categoryId = category.id
        );
        return categoryId;
    }

}