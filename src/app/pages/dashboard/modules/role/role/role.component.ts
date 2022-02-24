import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgxSpinnerService } from 'ngx-spinner';
import { TablePage } from 'src/app/interfaces/implements/TablePage';
import { Response } from 'src/app/interfaces/model/Response';
import { Role } from 'src/app/interfaces/model/Role';
import { RolesService } from 'src/app/services/roles/roles.service';
import { UsersService } from 'src/app/services/users/users.service';
import { backofficeconst } from 'src/app/utility/constants';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, TablePage {

  rows: any = [];
  temp: any = [];
  columns = [
    { prop: 'name' },
    { name: 'Username' },
    { name: 'RoleId' },
    { name: 'Action' }
  ];
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  constructor(
    private userService: UsersService,
    private roleService: RolesService,
    private router: Router,
    private spinner: NgxSpinnerService) { }
  titlePage: string = 'Role';

  getAllData(): void {
    this.spinner.show();
    this.roleService.setEndpoint(backofficeconst.endpoint_role_get);
    this.roleService.getAllData().subscribe((res: Response<Role>) => {
      this.spinner.show();
      console.log('role',res);
    },
    () => {},
    () => this.spinner.hide());
  }
  create(): void {
    this.router.navigate(['dashboard/user/form']);
  }
  update(id: number): void {
    this.router.navigate([`dashboard/user/form/${id}`]);
  }
  delete(id: number): void {
    
  }

  ngOnInit(): void {
    this.getAllData();
  }

  // getData() {
  //   this.spinner.show();
  //   this.userService.getUsers().subscribe((res: Response<User>) => {
  //     if (res) {
  //       let data = res.data;
  //       console.log(res);
  //       this.temp = [...data];
  //       this.rows = data;
  //     }
  //   }, () => {},
  //   () => {
  //     this.spinner.hide();
  //   });
  // }

  deleteData(id: any) {
    //   this.spinner.show();
    //   this.userService.deleteUser(id).subscribe(res => {
    //     this.getData();
    //     this.spinner.hide();
    //   },
    //   () => {},
    //   () => {
    //     this.spinner.hide();
    //   });
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter((d: any) => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
