import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms'
import { AccountService } from './Services/account.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './Services/data.service';
import {MatTableModule} from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'
import { MatDialogModule} from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FormsModule } from '@angular/forms';
import { EdittaskComponent } from './edittask/edittask.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { DeletetaskComponent } from './deletetask/deletetask.component';
//import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ButtonService } from './Services/button.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RouteGuardService } from './Services/routeguard.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    TaskviewComponent,
    AddtaskComponent,
    EdittaskComponent,
    DetailviewComponent,
    DeletetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    MatSelectModule,
    MatSortModule,
   NgxPaginationModule,
   MatPaginatorModule,
   NgbModule,
   MatDatepickerModule,
   
  ],
  providers: [AccountService, DataService, ButtonService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
