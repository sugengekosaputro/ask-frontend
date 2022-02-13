import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  id: any;
  dataTemp: any;
  mode: string = "add";
  cardTitle: string = "Tambah Data User";

  userForm = this.fb.group({
    id: [''],
    username: ['', Validators.required],
    name: ['', Validators.required],
    password: ['', Validators.required],
    role: this.fb.group({
      id: []
    })
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private fb: FormBuilder) {
    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.mode = "edit";
        this.cardTitle = "Edit Data User"
        this.id = param.id;
        this.getDetailUsers();
      }
    });
  }

  ngOnInit(): void {    

  }

  getDetailUsers(){
    this.userService.getUserById(this.id).subscribe((res: any) => {
      if(res) {
        this.dataTemp = res;
        this.userForm.patchValue(res);
      }
    });
  }

  onReset() {
    if(this.mode === "edit"){
      this.userForm.patchValue(this.dataTemp);
      return;
    }

    this.userForm.reset();
  }

  onSubmit(){
    let data = {
      id: this.userForm.get('id')?.value,
      username: this.userForm.get('username')?.value,
      name: this.userForm.get('name')?.value,
      password: this.userForm.get('password')?.value,
      role: {
        id: this.userForm.get('role.id')?.value,
        rolename: this.userForm.get('role.id')?.value === "21" ? "System Administrator" : "User Only"
      }
    };

    if (this.mode === "add") {
      this.userService.postUser(data).subscribe(res => {
        this.router.navigate(['dashboard/user']);
      })
    } else {
      this.userService.putUser(data, data.id).subscribe(res => {
        this.router.navigate(['dashboard/user']);
      });
    }
  }

}
