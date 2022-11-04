import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  successMessage:string ="";
  loginForm!: FormGroup; 

  constructor(private fb: FormBuilder, private accountservice : AccountService, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login(values : any){
    this.accountservice.Login(values).subscribe({
      next : (token : any) => {
        debugger
        console.log(token)
        localStorage.setItem('token', token['access_token'])
        this.router.navigateByUrl('tasks')
      },
      error : (err) => {
        debugger
      }
    })
  }

}
