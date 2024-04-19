import { Component } from '@angular/core';
import { MessageService } from '../services/messages.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor (public messageService: MessageService){} //Pública porque la vamos a vincular a la plantilla

}
