import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ButtonService {

  visible = false;

  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }


  
}