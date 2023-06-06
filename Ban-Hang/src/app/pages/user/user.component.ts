import { Component } from '@angular/core';
import { User } from 'src/app/interface/auth';
import { UserService } from 'src/app/service/user.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


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
    Swal.fire({
      title: 'Delete?',
      text: "Bạn chắc là muốn xóa chứ ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.UserService.deleteUser(_id).subscribe(() => {
          this.user = this.user.filter(item => item._id !== _id)
        })
        Swal.fire(
          'Deleted!',
          'User đã được xóa',
          'success'
        )
      }
    })
  }


}
