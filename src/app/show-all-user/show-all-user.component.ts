import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {
  users: any = [];

  constructor(private crudservice: CrudService) { }

  ngOnInit(): void {
    this.crudservice.getData().subscribe((users) => {
        this.users = users;
      }
    );
  }
  delete(id: number) {
    if (confirm('Are you sure to delete ')) {
      this.crudservice.DeleteUser(id).subscribe();
    }
  }

}
