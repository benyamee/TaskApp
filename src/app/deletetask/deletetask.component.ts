import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonService } from '../Services/button.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {

  constructor(private dataservice : DataService, private router : Router, public btns : ButtonService ) { }

  @Input() data: any;

  ngOnInit(): void {
    this.btns.show();
  }

  Delete(){
    this.dataservice.DeleteQuote(this.data.QuoteId).subscribe({
      next : () => {
        debugger
        //this.router.navigateByUrl('tasks')
        location.reload();
      }
    })
  }

  noDelete(){
    location.reload();
  }

}