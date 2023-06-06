import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-base-layout-user',
  templateUrl: './base-layout-user.component.html',
  styleUrls: ['./base-layout-user.component.scss']
})
export class BaseLayoutUserComponent {
  constructor(private router: Router) { }
  userName = localStorage.getItem('userName');
  role = localStorage.getItem('role');
  showAdmin = true;
  logout() {

    Swal.fire({
      title: 'Đăng xuất',
      text: "Bạn chắc là muốn Đăng xuất chứ ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.showAdmin = false;
        // Xóa token khỏi local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('role');

        this.userName = null;
        this.role = null;
        Swal.fire(
          'Đăng xuất!',
          'Đăng xuất Success',
          'success'
        )
      }
    })


  }

}
