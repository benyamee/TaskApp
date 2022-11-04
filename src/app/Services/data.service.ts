import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export interface task {
    QuoteId : any,
    Quote_Type: any,
    Contact: any,
    Task_Desc: any,
    Due_Date: any,
    Task_Type: any
}
@Injectable()
export class DataService {

  url = 'https://localhost:44390/api/Task/';

  constructor( private http: HttpClient) { }


   getQuotes(){

    let token = localStorage.getItem('token');
    debugger
    return  this.http.get(this.url, {headers:{'Authorization':'bearer ' + token}})

  }

  getQuoteById(id){

    let token = localStorage.getItem('token');
    let newUrl = this.url + id
    debugger
    return  this.http.get(newUrl, {headers:{'Authorization':'bearer ' + token}})

  }

  PostQuotes(body){
    debugger
    
    let token = localStorage.getItem('token')
    debugger
    return  this.http.post(this.url, body, {headers:{'Authorization':'bearer ' + token}})

  }

  EditQuotes(body){
    debugger
    
    let token = localStorage.getItem('token')

    let newUrl = this.url + body.QuoteId
    debugger
    return  this.http.put(newUrl, body, {headers:{'Authorization':'bearer ' + token}})

  }

  DeleteQuote(id) {
    debugger
    
    let token = localStorage.getItem('token')

    let newUrl = this.url + id
    debugger
    return  this.http.delete(newUrl, {headers:{'Authorization':'bearer ' + token}})
  }
}