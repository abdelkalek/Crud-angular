import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),
  });

  constructor(private userService: CrudService , private router: Router) { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    this.userService.postuser(this.userForm.value).subscribe();
    // Redirect to the HOME page when press the submit Button
    this.router.navigate(['/']);
  }

}
