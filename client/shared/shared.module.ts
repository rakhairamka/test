import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';

//COMPONENTS
import { NotFoundComponent }  from './components/not-found/not-found.component';
import { LoginComponent}      from './components/login/login.component';

import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  declarations: [
    NotFoundComponent,
    LoginComponent
  ],
})
export class SharedModule { }
