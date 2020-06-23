import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public userErrorMessage: string = '';
  public passwordErrorMessage: string = '';
  public message: string = '';

  public submitted: boolean = false;

  constructor(
    public loginService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  authorize() {
    this.submitted = true;
    this.userErrorMessage = "";
    this.passwordErrorMessage = "";
    this.message = "";
    // this.loginService.isLoggedIn
    if (this.username == "") {
      this.userErrorMessage = "Please Enter User name";
    } else if (this.username != "admin@gmail.com") {
      this.userErrorMessage = "User name is not valid";
    }
    if (this.password == "") {
      this.passwordErrorMessage = "Please Enter Password";
    } else if (this.password != "123456") {
      this.passwordErrorMessage = "Password is not valid";
    }

    if (this.username == "admin@gmail.com" && this.password == "123456") {
      sessionStorage.setItem('username', 'true');

      this.router.navigate(['contact']);
    } else {
      this.message = "User Name or password is not valid"
    }

    console.log(this.username, this.password);
  }

}
