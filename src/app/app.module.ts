import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {HighscoresService} from './services/highscores.service';
import {AddScoreFormComponent} from './addscoreform/addscoreform.component';
import {AuthService} from "./services/auth.service";
import { AuthComponent } from './auth/auth.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from "./services/auth.guard";
import { GameCanvasComponent } from './gamecanvas/gamecanvas.component';
import {GameModesService} from './services/gamemodes.service';
import { GameModesComponent } from './gamemodes/gamemodes.component';



@NgModule({
    declarations: [
        AppComponent,
        LeaderboardComponent,
        AddScoreFormComponent,
        AuthComponent,
        UserProfileComponent,
        AdminComponent,
        GameCanvasComponent,
        GameModesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        NgbModule
    ],
    providers: [
        HighscoresService,
        AuthService,
        AUTH_PROVIDERS,
        AuthGuard,
        GameModesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
