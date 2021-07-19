import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components';
import { FreeComponent } from './shared/components/free/free.component';
import { GamesComponent } from './shared/components/games/games.component';
import { KidsComponent } from './shared/components/kids/kids.component';
import { LearnComponent } from './shared/components/learn/learn.component';
import { VideoComponent } from './shared/components/video/video.component';
import { ErosComponent } from './shared/components/eros/eros.component';
import { HeaderComponent } from './shared/components';
import { SoftkeyComponent } from './shared/components';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  {
    path: 'free', component: FreeComponent
  },
  {
    path: 'games', component: GamesComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'kids', component: KidsComponent
  },
  {
    path: 'learn', component: LearnComponent
  },
  {
    path: 'video', component: VideoComponent
  },
  {
    path: 'eros', component: ErosComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const routingComponets = [FreeComponent,GamesComponent ,HomeComponent, KidsComponent, LearnComponent, VideoComponent, ErosComponent, SoftkeyComponent,HeaderComponent ]