import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Response } from 'src/app/interfaces/model/Response';
import { User } from 'src/app/interfaces/model/User';
import { RolesService } from 'src/app/services/roles/roles.service';
import { UsersService } from 'src/app/services/users/users.service';
import { backofficeconst } from 'src/app/utility/constants';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  id!: number;
  dataUser!: User;
  mode: string = "add";
  cardTitle: string = "Tambah Data User";
  dataRole: any;

  userForm = this.fb.group({
    id: [''],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    role: ['']
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private roleService: RolesService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService) {

    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.mode = "edit";
        this.cardTitle = "Edit Data User"
        this.id = param.id;
        console.log('id',this.id);
        this.getDetailUsers();
      }
    });
  }

  ngOnInit(): void {
    this.getAllRole();
  }

  getDetailUsers() {
    this.spinner.show();
    this.userService.setEndpoint(backofficeconst.endpoint_user_get);
    this.userService.getDataById(this.id).subscribe((res: Response<User>) => {
      if (res.kode && res.data) {
        this.dataUser = res.data[0];
        this.setFormValue();
        console.log('user ', this.dataUser);
      }
    },
      () => {},
      () => this.spinner.hide());
  }

  getAllRole() {
    this.roleService.setEndpoint(backofficeconst.endpoint_role_get);
    this.roleService.getAllData().subscribe((res: any) => {
      this.dataRole = res.data;
    })
  }

  onReset() {
    if (this.mode === "edit") {
      this.setFormValue();
      return;
    }
    this.userForm.reset();
  }

  onSubmit() {
    let data: User = this.userForm.value;

    this.spinner.show();
    if (this.mode === "add") {
      this.userService.setEndpoint(backofficeconst.endpoint_user_create);
      this.userService.createData(data).subscribe(res => {
        this.router.navigate(['dashboard/user']);
      },
      () => { },
      () => this.spinner.hide());
    } else {
      this.userService.setEndpoint(backofficeconst.endpoint_user_update);
      this.userService.updateData(data, data.id).subscribe(res => {
        this.router.navigate(['dashboard/user']);
      },
      () => {},
      () => this.spinner.hide());
    }
  }

  setFormValue() {
    this.userForm.get('id')?.setValue(this.dataUser.id);
    this.userForm.get('username')?.setValue(this.dataUser.username);
    this.userForm.get('email')?.setValue(this.dataUser.email);
    this.userForm.get('role')?.setValue(this.dataUser.role);
  }
}
