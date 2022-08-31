import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  displayedColumns = ['select','email','name', 'designation', 'platform','action',];

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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.email + 1}`;
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}

export interface InvoiceListItems {
  email:string;
  name:string;
  designation:string;
  platform:string;
  action:string;

 
  }
  
  const ELEMENT_DATA: InvoiceListItems[] = [
   {email:'raj.kumar@moglix.com',name:'Raj Kumar',designation:'Senior Developer',platform:'Moglix',action:'Inactive'},
   {email:'ashish.kumar@moglix.com',name:'Ashish Kumar',designation:'Lead Developer',platform:'Credlix',action:'Active'},
   {email:'raj.kumar@moglix.com',name:'Raj Kumar',designation:'Senior Developer',platform:'Moglix Business',action:'Inactive'},
   {email:'ashish.kumar@moglix.com',name:'Ashish Kumar',designation:'Lead Developer',platform:'Moglix',action:'Active'},
   {email:'raj.kumar@moglix.com',name:'Raj Kumar', designation:'Senior Developer',platform:'Credlix',action:'Inactive'},
   {email:'ashish.kumar@moglix.com',name:'Ashish Kumar',designation:'Lead Developer',platform:'Moglix +2',action:'Active'},
   {email:'raj.kumar@moglix.com',name:'Raj Kumar',designation:'Senior Developer',platform:'Moglix Business',action:'Inactive'},
   {email:'ashish.kumar@moglix.com',name:'Ashish Kumar',designation:'Lead Developer',platform:'Moglix',action:'Active'},
  ];

