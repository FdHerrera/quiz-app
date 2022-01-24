import { Component, OnInit } from "@angular/core";
import { Category } from "../model/category";

@Component({
    selector: 'quiz-home',
    templateUrl: './quiz-home.component.html',
    styleUrls: ['./quiz-home.component.css']
})
export class QuizHomeComponent implements OnInit {
    categories: Array<Category>;

    ngOnInit(): void {
        //TODO Make this method return categories from backend
        this.categories = [
            new Category(1, 'Alta categoria'),
            new Category(2, 'Otra categoria re piola'),
            new Category(3, 'Naah, esta es la buena'),
            new Category(4, 'Nah esta no')
        ]
    }

    public selectCategory(categoryId: number): void{
        console.log(this.categories[categoryId-1]);
    }

}