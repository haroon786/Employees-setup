import { Component, OnInit } from '@angular/core';
import { MessageService } from '../Shared-Service/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageservice:MessageService)
  {

  }

  ngOnInit(): void {
  }

}
