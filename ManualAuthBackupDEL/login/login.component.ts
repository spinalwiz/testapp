import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    constructor(private userService: UserService, private router: Router) {
    }

    onSubmit(email, password) {
        this.userService.login(email, password).subscribe((result) => {
            if (result) {
                this.router.navigate(['']);
            }
        });
    }

}
