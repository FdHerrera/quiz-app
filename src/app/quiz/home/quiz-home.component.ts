import { Component, OnInit } from "@angular/core";
import { debounceTime, Observable } from "rxjs";
import { Category } from "../model/category";
import { CategoryService } from "../service/category.service";

@Component({
    selector: 'quiz-home',
    templateUrl: './quiz-home.component.html',
    styleUrls: ['./quiz-home.component.css']
})
export class QuizHomeComponent implements OnInit {
    categories: Observable<Array<Category>>;
    private categoryService: CategoryService;

    constructor(categoryService: CategoryService) {
        this.categoryService = categoryService;
    }

    ngOnInit(): void {
        this.categories = this.categoryService.getCategories();
    }

    public selectCategory(categoryId: number): void {
        console.log(this.categories[categoryId - 1]);
    }

    public showDescription(categoryId: number): void {
        console.log(this.categories.subscribe(
            categoriesFound => categoriesFound.filter(
                category => category.id === categoryId
            ).forEach(categoryFound => console.log(categoryFound))
        ));
    }

}