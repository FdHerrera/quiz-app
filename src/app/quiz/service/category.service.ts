import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Category } from "../model/category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categoriesUrl: string = 'http://localhost:8080/categories'

    constructor(
        private http: HttpClient,
    ) {
    }

    public getCategories(): Observable<Array<Category>> {
        return this.http.get<Array<Category>>(this.categoriesUrl)
        .pipe(
            tap(_ => console.log('Fetched Categories')),
            catchError(
            this.handleError<Array<Category>>('getCategories', [])
        ));
    }

    private handleError<T>(operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

}