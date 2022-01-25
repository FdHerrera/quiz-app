import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
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
        
    }


}