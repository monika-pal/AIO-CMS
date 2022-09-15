import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  panelOpenState = false;
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  onChangeHour(event: any) {
    console.log('event', event);
  }
  constructor() { }

  ngOnInit(): void {
  
  }

 
}

