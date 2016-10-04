import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {AddScoreFormComponent} from './addscoreform/addscoreform.component';
import {UserProfileComponent} from './userprofile/userprofile.component';
import {AuthGuard}                   from './services/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {GameCanvasComponent} from './gamecanvas/gamecanvas.component';
import {GameModesComponent} from './gamemodes/gamemodes.component';


const appRoutes: Routes = [
    {
        path: 'leaderboard',
        component: LeaderboardComponent
    },
    {
        path: 'addscore',
        component: AddScoreFormComponent
    },
    {
        path: '',
        redirectTo: '/leaderboard',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: UserProfileComponent
    },
    {
        path: 'game',
        component: GameCanvasComponent
    },
    {
        path: 'gamemodes',
        component: GameModesComponent
    },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    {path: '**', redirectTo: ''}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
