import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormService {
    private url = 'http://localhost:7800/addProduct';

    constructor(private http: HttpClient) {}

    postUser(user) {
        return this.http.post(this.url, user);
    }
}
