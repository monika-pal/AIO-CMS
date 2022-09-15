import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddnewComponent>) { }
 
  ngOnInit(): void {
    
  }
  Platform = new FormControl('');

  PlatformList: string[] = ['All', 'Moglix', 'Moglix Business', 'Credlix'];
 
}
