import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id;
  users: any = [];
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),
  });


  constructor(private route: ActivatedRoute, private crudservice: CrudService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.crudservice.getuser(this.id).subscribe((users) => {
      this.users = users;
      console.log(users);
      this.userForm.controls['firstName'].setValue(this.users.firstName);
      this.userForm.controls['lastName'].setValue(this.users.lastName);
      this.userForm.controls['login'].setValue(this.users.login);
      this.userForm.controls['pwd'].setValue(this.users.pwd);

    });

  }

  onFormSubmit() {
    this.crudservice.updateuser(this.id, this.userForm.value).subscribe();
    // Redirect to the HOME page when press the submit Button
    this.router.navigate(['/']);
  }
}
