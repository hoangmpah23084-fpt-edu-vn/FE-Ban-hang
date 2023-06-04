import { Component } from '@angular/core';
import { User } from 'src/app/interface/auth';
import { UserService } from 'src/app/service/user.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user!: User[]
  constructor(
    private UserService: UserService
  ) {
    this.UserService.getUsers().subscribe((response: any) => {
      console.log(response.data)
      this.user = response.data
    })
  }

  Remove(_id: any) {
    console.log(_id);

    const remonr = confirm('ban muốn xóa');
    if (remonr) {
      this.UserService.deleteUser(_id).subscribe(() => {
        this.user = this.user.filter(item => item._id !== _id)
      })
    } else {
      this.user
    }
  }


}
