import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowAllUserComponent} from './show-all-user/show-all-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    component: ShowAllUserComponent
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: 'update/:id',
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
