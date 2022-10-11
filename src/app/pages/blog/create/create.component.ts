import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  panelOpenState = false;
  title = 'demo';
  exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  onChangeHour(event: any) {
    console.log('event', event);
  }

  toppings = this._formBuilder.group({
    ArtificialIntelligence: false,
    Ecommerce: false,
    CaseStudy: false,
  });
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
  
  }

  

}

