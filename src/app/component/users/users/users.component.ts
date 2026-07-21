import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/modals/product';
import { UserService } from 'src/app/services/user.service';
import { rootCertificates } from 'tls';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userdata !: Iuser[]
  constructor(
    private _userservice: UserService,
    private router: Router,
    private routes: ActivatedRoute
  ) {
    console.log(routes.snapshot.data)
    this.userdata = routes.snapshot.data['user']
    console.log(this.userdata)
   }

  ngOnInit(): void {
    // this.getdata()
  }

  getdata() {
    this._userservice.getusers()
      .subscribe(res => {
        this.userdata = res
        if (this.router.url === '/users' && this.userdata.length > 0) {
          this.router.navigate(['/users', this.userdata[0].userId]);
        }
      })
  }

  trackbyfun(index: number, item: Iuser) {
    return item.userId
  }

}
