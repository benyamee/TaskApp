import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonService } from '../Services/button.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  constructor(private r : Router, private router : ActivatedRoute, private dataservice : DataService, public btn : ButtonService) { }


  id : any
  specificData: any

  QuoteId : any
  Quote_Type: any
  Contact: any
  Task_Desc: any
  Due_Date: any
  Task_Type: any


  ngOnInit(): void {
    this.btn.show();
    this.id = this.router.snapshot.paramMap.get('id')
    debugger

    this.dataservice.getQuoteById(this.id).subscribe({
      next : (data) => {
          debugger
          console.log(data)
          this.specificData = data

          this.QuoteId = this.specificData.QuoteId
        
          
      }
    })
  }
  getBack(){
    this.r.navigateByUrl('tasks')
  }

  

}
