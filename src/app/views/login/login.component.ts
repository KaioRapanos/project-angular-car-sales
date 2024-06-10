import { FormsModule } from '@angular/forms';
import { RequestLogin } from './../../resources/models/RequestLogin';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../resources/service/login.service';
import { ResponseLogin } from '../../resources/models/ResponseLogin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public requestlogin: RequestLogin = new RequestLogin();

  constructor(private loginService: LoginService){}

  public doLogin():void {
    this.loginService.doLogin(this.requestlogin).subscribe(data => {
      console.log(data);
    },
    error => {
      console.error(error);
    })
  }
}
