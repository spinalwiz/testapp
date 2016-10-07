import {Component, OnInit} from '@angular/core';
import {HighscoresService} from "../services/highscores.service";
import {Http} from '@angular/http';
import {Highscore} from "../../interfaces/highscore.interface";


@Component({
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  private highscores: Highscore[] = [];
  private message: {
    test: String
  };
  private isLoading: boolean = true;

  constructor(private http: Http,
              private highScoresService: HighscoresService) {
  }

  ngOnInit() {
    this.getScores();
    this.testSecureApi();
  }

  getScores() {
    this.highScoresService.getScores().subscribe(
      data => this.highscores = data,
      error => console.log(error)
    );
  }

  testSecureApi() {
    this.highScoresService.testSectureApi().subscribe(
      data => this.message = data,
      error => console.log(error),
      () => {
        console.log(this.message);
        this.isLoading = false;
      }
    );

  }

  addScore() {
    let userName = "NewName";
    let score = 292;
    this.highScoresService.addScore(userName, score).subscribe(
      () => this.highscores.push({
        "user": "",
        "userName": userName,
        "score": score,
        "date": ""
      }),
      error =>console.log(error)
    )
  }
}
