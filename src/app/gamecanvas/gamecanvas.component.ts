import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'gamecanvas',
  templateUrl: './gamecanvas.component.html',
  styleUrls: ['./gamecanvas.component.css']
})
export class GameCanvasComponent implements OnInit {

  constructor(authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.authenticated()) {
      this.authService.login();
    } else {
      this.sendAuthToken();
    }
  }

  sendAuthToken() {
    var win = document.getElementById("gamewindow").contentWindow;
    win.postMessage(localStorage.getItem('id_token'));
    //, "http://a.JavaScript.info" target domain
  }

}
