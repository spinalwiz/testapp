import {Component, OnInit} from '@angular/core';
import {GameModesService} from "../services/gamemodes.service";
import {GameModes} from "../../interfaces/gamemodes.interface";


@Component({
    selector: 'gamemodes',
    templateUrl: './gamemodes.component.html',
    styleUrls: ['./gamemodes.component.css']
})
export class GameModesComponent implements OnInit {

    private gamemodes: GameModes[];

    constructor(private gameModesService: GameModesService) {
    }

    ngOnInit() {
        this.getGameModes();
    }

    getGameModes() {
        this.gameModesService.getGameModes().subscribe(
            data => this.gamemodes = data,
            error => console.log(error)
        );
    }

}
