import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
