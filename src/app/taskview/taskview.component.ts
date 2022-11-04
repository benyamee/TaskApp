import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddtaskComponent } from '../addtask/addtask.component';
import { DeletetaskComponent } from '../deletetask/deletetask.component';
import { EdittaskComponent } from '../edittask/edittask.component';
import { DataService, task } from '../Services/data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { ButtonService } from '../Services/button.service';



@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css'],
})
export class TaskviewComponent implements OnInit {






 // --------------------///

 constructor(private dataservice : DataService, private dialogRef: MatDialog, private router : Router, public btn : ButtonService) { 
 
 }

 options = [
  {"value" : "QuoteId"},
  {"value" : "Quote_Type"},
  {"value" : "Contact"},
  {"value" : "Task_Desc"},
  {"value" : "Due_Date"},
  {"value" : "Task_Type"},
]

pages = [
  {"value" : 5},
  {"value" : 10},
  {"value" : 15},
  {"value" : 20},

]


  data : task[] = [];

  dataSource : any

  @ViewChild(MatSort, {static: false}) sort : MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  selectedColumn = 'name';

  checkedDesc : any
  orderByValue : 'QuoteId'
  pageSize : any
  itemCount : any

  specificData : any

  columnsToDisplay = [
    "QuoteId",
    "Quote_Type",
    "Contact",
    "Task_Desc",
    "Due_Date",
    "Task_Type",
  "action"]

  ngOnInit(): void {
    this.btn.show();
    this.dataservice.getQuotes().subscribe({
      next : (dta:any) => {
        this.data = dta;
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.itemCount = this.data.length
        console.log(dta)
      }
    })
  }

  Addtask(){
    this.dialogRef.open(AddtaskComponent);
  }

  editItem(row:any){
    debugger
    const modalRef  = this.dialogRef.open(EdittaskComponent);


    (<EdittaskComponent>modalRef.componentInstance).data = row;

  }

  deleteItem(row:any){
    const modalRef  = this.dialogRef.open(DeletetaskComponent);


    (<DeletetaskComponent>modalRef.componentInstance).data = row;
  }

  viewItem(row:any){
    let url = 'tasks/' + row.QuoteId
    this.router.navigateByUrl(url)
    
  }

  applyFilter(event: Event) {
    debugger
    let x = this.dataSource
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  orderby(value: any){
    console.log(value)
    this.orderByValue = value
    debugger
    console.log(this.orderByValue)

  this.dataSource.sort = null;
  this.dataSource.sort = this.sort;
  }

  pageselection(value: any){
    console.log(value)
    this.pageSize = value
    debugger
    console.log(this.pageSize)

  this.dataSource.paginator = null;
  this.dataSource.paginator = this.paginator;
  }

  checkAll(check){
    console.log(check.checked)
    this.checkedDesc = check.checked

    if(check.checked == true) {
      this.checkedDesc = 'asc'
    } else {
      this.checkedDesc = 'desc'
    }
    debugger

 this.dataSource.sort = null;
  this.dataSource.sort = this.sort;
  }

  


 

}
