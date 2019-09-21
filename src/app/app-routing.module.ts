import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: 'game/:id',      component: GameComponent },
  {
    path: 'heroes',
    component: LobbyComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: 'lobby',
    pathMatch: 'full'
  },
  { path: '**', component: LobbyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
