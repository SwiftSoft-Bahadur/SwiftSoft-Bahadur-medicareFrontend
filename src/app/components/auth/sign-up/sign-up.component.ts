import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  ngForm: any
  loginObj = {
    email: '',
    password: '',
    name: ''
  }

  constructor(private _auth: AuthService, private _sessionService: SessionService, private _router: Router) { }
  ngOnInit() {
    let loginObj = this.ngForm.value
    this.loginObj.email = loginObj.email
    this.loginObj.password = loginObj.password
    this.loginObj.name = loginObj.name
  }



  onSubmit() {

    this._auth.singUp(this.loginObj).subscribe(
      res => {

        let ResObj = { name: res.user.name, token: res.token }

        this._sessionService.setUser(ResObj);
        window.location.href = "/login";
      },
      err => {
        if (err.status == 403) {
          alert("Email Already exists");
          this._router.navigate(['/home'])
        }
        if (err.status == 422) {
          alert("Name must be greater then five chars");
        }

      }
    )
  }

}
