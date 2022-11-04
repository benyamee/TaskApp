import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonService } from '../Services/button.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  constructor(private dataservice : DataService, private router : Router, public btn : ButtonService) { }

  @Input() data: any;

  QuoteID : any;
  Quote_Type: any;
  Contact : any;
  Due_Date: any;
  Task_Desc : any;
  Task_Type : any;




  ngOnInit(): void {
    this.btn.show();
    console.log(this.data)
     this.QuoteID = this.data.QuoteId
     this.Quote_Type = this.data.Quote_Type
     this.Contact = this.data.Contact
     this.Due_Date = this.data.Due_Date
     this.Task_Desc = this.data.Task_Desc
     this.Task_Type = this.data.Task_Type
     debugger
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
    this.dataservice.EditQuotes(body).subscribe({
      next : () => {
        debugger
        // this.router.navigateByUrl('tasks')
        location.reload();
       
      },
      error: (err) => {
        debugger
      }
    })

  }

  closeEdit(){
    location.reload();
  }

}
