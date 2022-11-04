import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonService } from './Services/button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router : Router, public btnservice : ButtonService ){}

  url : any

  ngOnInit(){
    //this.url = this.router.url
    let x = window.location.href
    this.url = x.substring(x.lastIndexOf('/') + 1)
    
    debugger
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('login')
  }
}
