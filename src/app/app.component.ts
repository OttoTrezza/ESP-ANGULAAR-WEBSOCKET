import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ESP';
  constructor(private chat: ChatService) {}

// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {
  this.chat.messages.subscribe(msg => {
    console.log(msg);
  });
}
sendMessage() {
  this.chat.sendMsg('Test Message');
}
}
