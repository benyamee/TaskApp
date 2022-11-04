import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonService } from '../Services/button.service';
import { DataService } from '../Services/data.service';



@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private dataservice : DataService, private router: Router, public btn : ButtonService ) { }

  ngOnInit(): void {
    this.btn.show();
  }


  submitForm(values){

    debugger

    let body = {
      "QuoteId": values.QuoteID,
      "Quote_Type": values.Quote_Type,
      "Contact": values.Contact,
      "Task_Desc": values.Task_Desc,
      "Due_Date": values.Due_Date,
      "Task_Type": values.Task_Type
    }
    this.dataservice.PostQuotes(body).subscribe({
      next : () => {
        // this.router.navigateByUrl('tasks')
        location.reload();

      },
      error: (err) => {
        debugger
      }
    })
  }

  @ViewChild('closeModal') closeModal: ElementRef
  ​
closeFunction() {
    // do something
    location.reload();

  }

  



}
