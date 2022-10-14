import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-related-dialog',
  templateUrl: './related-dialog.component.html',
  styleUrls: ['./related-dialog.component.scss']
})
export class RelatedDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RelatedDialogComponent>) { }

  ngOnInit(): void {
  }

}
