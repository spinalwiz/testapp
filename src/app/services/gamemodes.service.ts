import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GameModesService {
  API_URL: string = 'https://aimtrain.herokuapp.com';
  // API_URL: string = 'http://localhost:3000';

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }

  getGameModes() {
    return this.http.get(`${this.API_URL}/api/gamemodes`).map(res => res.json());
  }
}
