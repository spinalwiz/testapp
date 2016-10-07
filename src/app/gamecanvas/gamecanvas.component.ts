import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'gamecanvas',
  templateUrl: './gamecanvas.component.html',
  styleUrls: ['./gamecanvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  @ViewChild('gamewindow') iframe:ElementRef;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.authenticated()) {
      this.authService.login();
    } else {
      this.sendAuthToken();
    }
  }

  sendAuthToken() {
    // var win = document.getElementById("gamewindow").nativeElement.contentWindow;
    let win = this.iframe.nativeElement.contentWindow;
    win.postMessage(localStorage.getItem('id_token'));
    //, "http://a.JavaScript.info" target domain
  }

}
