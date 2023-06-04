import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    if (confirm('Bạn có muốn đăng xuất không ?')) {
      this.showAdmin = false;
      // Xóa token khỏi local storage
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('role');

      this.userName = null;
      this.role = null;


    }
  }

}
