import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent }     from './youtube.component';
import { FormsModule }          from "@angular/forms";


@NgModule({
  declarations: [
    YoutubeComponent
  ],
    imports: [
        CommonModule,
        YoutubeRoutingModule,
        FormsModule
    ]
})
export class YoutubeModule { }
