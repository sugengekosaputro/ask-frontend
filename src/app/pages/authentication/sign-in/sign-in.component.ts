import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/model/Response';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  btnValue: string = "Simpan";
  signInForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthenticationService,
    private fb: FormBuilder) { }


  //  On submit click, reset field value
  onSubmit() {
    let params = new HttpParams({
      fromObject: {
        username: this.signInForm.get('username')?.value
      }
    });

    this.authService.login({
      username_or_email: this.signInForm.get('username')?.value,
      password: this.signInForm.get('password')?.value
    }).subscribe((res: Response<any>) => {
      if (res.kode && res.data) {
        let token:string = res.token!;
        localStorage.setItem('token', token);
        this.router.navigate(['dashboard/user']);
      }
    });
  }

  // On ResetPassword link click
  onResetpassword1() {
    this.router.navigate(['reset-password1'], { relativeTo: this.route.parent });
  }

  // On Signup1 link click
  onSignup1() {
    this.router.navigate(['signup1'], { relativeTo: this.route.parent });
  }


  ngOnInit() {
    localStorage.clear();
  }

}
