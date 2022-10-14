import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {FormBuilder} from '@angular/forms';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { RelatedDialogComponent } from '../related-dialog/related-dialog.component';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  panelOpenState = false;

  // time
  title = 'demo';
  exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  onChangeHour(event: any) {
    console.log('event', event);
  }

  // multiselect

  toppings = this._formBuilder.group({
    ArtificialIntelligence: false,
    Ecommerce: false,
    CaseStudy: false,
  });
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
  
  }

  // chip
 
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Fashion'}, {name: 'Trend'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(RelatedDialogComponent, {
    });
  }

}

export interface Fruit {
  name: string;
}

