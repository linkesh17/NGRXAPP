import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class StudentProvider {
    baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http:HttpClient){}
    getPosts(){
        return this.http.get(`${this.baseUrl}/posts`);
    }
}