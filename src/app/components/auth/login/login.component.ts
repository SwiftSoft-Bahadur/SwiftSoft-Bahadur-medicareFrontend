import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngForm: any
  loginObj: any = {
    email: '',
    password: '',
    name: ''
  }


  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _sessionService: SessionService) { }

  ngOnInit(): void {
    let loginObj: any = this.ngForm?.value;
    this.loginObj.email = loginObj?.email
    this.loginObj.password = loginObj?.password
    this.loginObj.name = loginObj?.name;

    let userExist = this._sessionService.getUser();
    if (userExist) {
      this._router.navigate(['/home']);
    }
  }

  onSubmit() {
    this._authService.login(this.loginObj).subscribe(
      res => {
        //store token on localStorage onLogin
        let ResObj: any = { name: res.user.name, token: res.token }
        this._sessionService.setUser(ResObj);
        window.location.href = "/home";
      },
      err => {
        if (err.status == 401) {
          alert("Wrong Credentials");
        }
      }
    )

  }
}
