import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }                 from './app-routing.module';
import { AppComponent }                     from './app.component';
import { SharedModule }                     from "./shared/shared.module";
import { TodoListModule }                   from "./todo-list/todo-list.module";
import { ProfileEditorComponent }           from './profile-editor/profile-editor.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { YoutubeModule }                    from "./youtube/youtube.module";
import { HttpClientModule }                 from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TodoListModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    YoutubeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
