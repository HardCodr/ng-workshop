import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }                    from './app-routing.module';
import { AppComponent }                        from './app.component';
import { SharedModule }                        from "./shared/shared.module";
import { TodoListModule }                      from "./todo-list/todo-list.module";
import { ProfileEditorComponent }              from './profile-editor/profile-editor.component';
import { FormsModule, ReactiveFormsModule }    from "@angular/forms";
import { YoutubeModule }                       from "./youtube/youtube.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpRequestsInterceptor }             from "./shared/http-requests.interceptor";

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
