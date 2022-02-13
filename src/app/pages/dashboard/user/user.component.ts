import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  rows:any = [];
  temp:any = [];
  columns = [
    { prop: 'name' },
    { name: 'Username' },
    { name: 'RoleId' },
    { name: 'Action' }
  ];
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  constructor(
    private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.getUsers().subscribe((res: any) => {
      if (res) {
        let data = res;
        this.temp = [...data];
        this.rows = data;
      }
    });
  }

  editData(id: any){
    this.router.navigate([`dashboard/user/form/${id}`])
  }

  addData(){
    this.router.navigate(['dashboard/user/form']);
  }

  deleteData(id: any){
    this.userService.deleteUser(id).subscribe(res => {
      this.getData();
    });
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
