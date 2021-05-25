import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudService} from '../crud.service';
import {Users} from '../users';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  name;
  data: any [];
  lastname;
  users: any = [];

  constructor(private crudservice: CrudService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    });

    this.crudservice.getuserbyname(this.name).subscribe((res) => {
      console.log(res);
      this.users = res;

    });
  }

  delete(id: number) {
    if (confirm('Are you sure to delete ')) {
      this.crudservice.DeleteUser(id).subscribe();
    }
  }

}
