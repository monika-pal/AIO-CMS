import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  displayedColumns = ['select','Name', 'Description', 'Slug','Count'];

  dataSource = new MatTableDataSource<InvoiceListItems>(ELEMENT_DATA);
  selection = new SelectionModel<InvoiceListItems>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: InvoiceListItems): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Name + 1}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
export interface InvoiceListItems {
  Name:string;
  Description:string;
  Slug:string;
  Count:string;

 
  }
  
  const ELEMENT_DATA: InvoiceListItems[] = [
   {Name:'Artificial Intelligence',Description:'Automotive last 5 year', Slug:'Artificial Intelligence', Count:'1'},
   {Name:'B2B E-commerce',Description:'Automotive last 5 year', Slug:'SUPPLY CHAIN', Count:'2'},
   {Name:'Artificial Intelligence',Description:'Automotive last 5 year', Slug:'Artificial Intelligence', Count:'3'},
   {Name:'B2B E-commerce',Description:'Automotive last 5 year', Slug:'SUPPLY CHAIN', Count:'4'},
   {Name:'Artificial Intelligence',Description:'Automotive last 5 year', Slug:'Artificial Intelligence', Count:'5'},
   {Name:'B2B E-commerce',Description:'Automotive last 5 year', Slug:'SUPPLY CHAIN', Count:'6'},
   {Name:'Artificial Intelligence',Description:'Automotive last 5 year', Slug:'Artificial Intelligence', Count:'7'},
   {Name:'B2B E-commerce',Description:'Automotive last 5 year', Slug:'SUPPLY CHAIN', Count:'8'},
   {Name:'Artificial Intelligence',Description:'Automotive last 5 year', Slug:'Artificial Intelligence', Count:'9'},
   {Name:'B2B E-commerce',Description:'Automotive last 5 year', Slug:'SUPPLY CHAIN', Count:'10'},
   {Name:'Artificial Intelligence',Description:'Automotive last 5 year', Slug:'Artificial Intelligence', Count:'9'},
   {Name:'B2B E-commerce',Description:'Automotive last 5 year', Slug:'SUPPLY CHAIN', Count:'10'},
   {Name:'Artificial Intelligence',Description:'Automotive last 5 year', Slug:'Artificial Intelligence', Count:'9'},
   {Name:'B2B E-commerce',Description:'Automotive last 5 year', Slug:'SUPPLY CHAIN', Count:'10'},
   {Name:'Artificial Intelligence',Description:'Automotive last 5 year', Slug:'Artificial Intelligence', Count:'9'},
   {Name:'B2B E-commerce',Description:'Automotive last 5 year', Slug:'SUPPLY CHAIN', Count:'10'},
  ];