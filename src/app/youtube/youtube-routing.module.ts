import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent }     from "./youtube.component";
import { TestGuard }            from "./test.guard";

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubeComponent,
    canActivate: [TestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
