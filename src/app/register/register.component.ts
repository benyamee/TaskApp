import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  successMessage:string =""

  regForm!:FormGroup

  constructor(private fb: FormBuilder, private accountservice : AccountService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    })
  }

  register(data : any){
    debugger

    let body= 
    {
      "Email": data.name,
      "Password": data.password,
      "ConfirmPassword": data.password
    }

       this.accountservice.register(body).subscribe({
        next: (data) => {
          debugger;
          alert("Registration Successful !")
        },
        error: (err) => {
          console.log(err)
        }
       })
    
  }

}
