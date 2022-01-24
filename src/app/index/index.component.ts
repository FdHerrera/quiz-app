import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent {
    userName: string;
    @ViewChild('usernameInput') username: ElementRef;

    public saveUsername(): void {
        //TODO save username in backend
        const user: string = this.username.nativeElement.value;
        console.log(user);
    }
}