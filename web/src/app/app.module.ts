import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeetUpService } from './services/meetup-service';
import { OnlyNumber } from './core/onlynumber';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumber
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MeetUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
