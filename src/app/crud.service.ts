import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
interface Users {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  pwd: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  rootUrl = 'https://polytech.compaktor.app/users';

  constructor(private http: HttpClient) {
  }

  // get all users method using httpClient
  getData() {
    return this.http.get(this.rootUrl + '/');

  }

  // get  user method using httpClient
  getuser(id: number) {
    return this.http.get(this.rootUrl + '/find/' + id);
  }
  // get  user method using httpClient
  getuserbyname(name: string) {
    return this.http.get(this.rootUrl + '/recherche/' + name);
  }
  // add User httpClient
  postuser(user: Users) {
    return this.http.post(this.rootUrl + '/add', {
      firstName: user.firstName,
      lastName: user.lastName,
      login: user.login,
      pwd: user.pwd
    });
  }

  DeleteUser(id: number) {
    return this.http.delete(`${this.rootUrl}/delete/${id}`);
  }

  updateuser(id: number, user: Users) {
    return this.http.put(this.rootUrl + `/update/${id}`,
      {
        firstName: user.firstName,
        lastName: user.lastName,
        login: user.login,
        pwd: user.pwd
      });

  }


}
