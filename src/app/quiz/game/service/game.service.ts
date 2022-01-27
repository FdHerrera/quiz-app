import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Question } from "../../model/question";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private questionsBaseUrl: string = 'http:/localhost:8080/';

    constructor(private http: HttpClient) {
    }

    public getQuestionsForCategory(selectedCategory: number): Observable<Array<Question>> {
        return this.http.get<Array<Question>>(this.completeUrl(selectedCategory))
        .pipe(
            tap(_ => console.log('Fetched questions')),
            catchError(this.handleError<Array<Question>>('getQuestions', []))
        );
    }

    private completeUrl(selectedCategory: number): string {
        return this.questionsBaseUrl.concat(selectedCategory.toString());
    }

    private handleError<T>(operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

}