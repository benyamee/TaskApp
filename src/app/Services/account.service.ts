import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }


  Login(data :any){
    let body = new URLSearchParams();
        body.set('Username', data.email);
        body.set('password', data.password);        
        body.set('grant_type', 'password');
        debugger
        console.log(body)

     return  this.http.post('https://localhost:44390/token',body.toString(), {headers:{'content-type':'x-www-form-urlencoded'}})
    }


  register(body : any){
    
       debugger
    return  this.http.post('https://localhost:44390/api/Account/Register', body, {headers: {'content-type':'application/json'}})
  }  
}