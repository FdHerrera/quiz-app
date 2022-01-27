import { Component, OnInit } from "@angular/core";
import { find, map, Observable } from "rxjs";
import { Category } from "./model/category";
import { CategoryService } from "./service/category.service";

@Component({
    selector: 'quiz-home',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    categories: Observable<Array<Category>>;
    categorySelected: Observable<Category>;
    private categoryService: CategoryService;

    constructor(categoryService: CategoryService) {
        this.categoryService = categoryService;
    }

    ngOnInit(): void {
        this.categories = this.categoryService.getCategories();
    }

    public selectCategory(categoryId: number): void {
        this.categorySelected = this.categories.pipe(
            map(categoriesAvailable => 
                categoriesAvailable.find(
                    category => category.id === categoryId
                )));
    }


}