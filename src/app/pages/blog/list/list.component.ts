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
  
  displayedColumns = ['select','title', 'subTitle', 'category','tag','date',];

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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
  }
 
  constructor() { }

  ngOnInit(): void {
    
  }

}
  
export interface InvoiceListItems {
  title:string;
  subTitle:string;
  category:string;
  tag:string;
  date:string;

 
  }
  
  const ELEMENT_DATA: InvoiceListItems[] = [
   {title:'Moglix Enables Automotive OEM to Unlock 2% Cost Savings in Indirect',subTitle:'Automotive last 5 year', category:'SUPPLY CHAIN', tag:'MRO',date:'2022/07/28'},
   {title:'Moglix Enables Automotive OEM to Unlock 2% Cost Savings in Indirect',subTitle:'Automotive last 5 year', category:'SUPPLY CHAIN', tag:'MRO',date:'2022/07/28'},
   {title:'Moglix Enables Automotive OEM to Unlock 2% Cost Savings in Indirect',subTitle:'Automotive last 5 year', category:'SUPPLY CHAIN', tag:'MRO',date:'2022/07/28'},
   {title:'Moglix Enables Automotive OEM to Unlock 2% Cost Savings in Indirect',subTitle:'Automotive last 5 year', category:'SUPPLY CHAIN', tag:'MRO',date:'2022/07/28'},
   {title:'Moglix Enables Automotive OEM to Unlock 2% Cost Savings in Indirect',subTitle:'Automotive last 5 year', category:'SUPPLY CHAIN', tag:'MRO',date:'2022/07/28'},
   {title:'Moglix Enables Automotive OEM to Unlock 2% Cost Savings in Indirect',subTitle:'Automotive last 5 year', category:'SUPPLY CHAIN', tag:'MRO',date:'2022/07/28'},
   {title:'Moglix Enables Automotive OEM to Unlock 2% Cost Savings in Indirect',subTitle:'Automotive last 5 year', category:'SUPPLY CHAIN', tag:'MRO',date:'2022/07/28'},
   {title:'Moglix Enables Automotive OEM to Unlock 2% Cost Savings in Indirect',subTitle:'Automotive last 5 year', category:'SUPPLY CHAIN', tag:'MRO',date:'2022/07/28'},
  ];