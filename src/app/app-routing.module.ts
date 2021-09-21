import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";

const routes: Routes = [
  {
    path: 'profile-form',
    component: ProfileEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
