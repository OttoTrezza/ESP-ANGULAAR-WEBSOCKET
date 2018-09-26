import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import * as Rx from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket; // socket que conecta a nuestro servidor socket.io

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(environment.ws_url);

    // tslint:disable-next-line:no-shadowed-variable
    const observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log('Recibo un mensaje del servidor wesocket');
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    // tslint:disable-next-line:prefer-const
    let observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      },
    };

    return Rx.Subject.create(observer, observable);
  }
}
