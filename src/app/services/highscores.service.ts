import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class HighscoresService {
    API_URL: string = 'http://localhost:3000';

    private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private http: Http, private authHttp: AuthHttp) {
    }

    getScores() {
        return this.http.get(`${this.API_URL}/api/highscores`).map(res => res.json());
    }

    testSectureApi() {
        return this.authHttp.get(`${this.API_URL}/api/secured/ping`).map(res => res.json());
    }

}
