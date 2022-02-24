import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgxSpinnerService } from 'ngx-spinner';
import { TablePage } from 'src/app/interfaces/implements/TablePage';
import { Response } from 'src/app/interfaces/model/Response';
import { User } from 'src/app/interfaces/model/User';
import { UsersService } from 'src/app/services/users/users.service';
import { backofficeconst } from 'src/app/utility/constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, TablePage {
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
    private router: Router,
    private spinner: NgxSpinnerService) { }


  titlePage: string = 'User';

  getAllData(): void {
    this.spinner.show();
    this.userService.setEndpoint(backofficeconst.endpoint_user_get);
    this.userService.getAllData().subscribe((res: Response<User>) => {
      if (res) {
        let data = res.data;
        this.temp = [...data];
        this.rows = data;
      }
    }, () => {},
    () => {
      this.spinner.hide();
    });
  }
  create(): void {
    this.router.navigate(['dashboard/user/form']);
  }
  update(id: number): void {
    console.log(id);
    this.router.navigate([`dashboard/user/form/${id}`]);
  }
  delete(id: number): void {
    this.spinner.show();
    this.userService.setEndpoint(backofficeconst.endpoint_user_delete);
    this.userService.deleteData(id).subscribe(res => {
      this.getAllData();
      this.spinner.hide();
    },
      () => { },
      () => {
        this.spinner.hide();
      });
  }

  ngOnInit(): void {
    this.getAllData();
  };

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
