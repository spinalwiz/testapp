import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Params} from "@angular/router";
import {and} from "@angular/router/src/utils/collection";

@Component({
  selector: 'gamecanvas',
  templateUrl: './gamecanvas.component.html',
  styleUrls: ['./gamecanvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  mode: String;
  level: String;
  gameUrl: String = "https://playcanv.as/p/ubmYsFJ9/";

  constructor(private authService: AuthService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.authService.authenticated()) {
      this.authService.login();
    } else {
      // this.sendAuthToken();
    }

    this.route.params.forEach((params: Params) => {
      this.mode = params['mode'];
      this.level = params['level'];
    });

    this.gameUrl += this.generateParamString();
  }


  generateParamString() {
    if (this.mode && this.level) {
      return `?m=${this.mode}&l=${this.level}`;
    }
    else if (this.mode) {
      return `?m=${this.mode}`;
    }
    else if (this.level) {
      `?m=${this.level}`;
    }
  }

}
