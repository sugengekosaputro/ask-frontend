import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private fb: FormBuilder) { }


  //  On submit click, reset field value
  onSubmit() {
    let params = new HttpParams({
      fromObject: {
        username: this.signInForm.get('username')?.value
      }
    });
    this.userService.getUsers(params).subscribe((res: any) => {
      if (res) {
        localStorage.setItem('userId', res[0].id)
        localStorage.setItem('roleId', res[0].role.id)
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
  }

}
