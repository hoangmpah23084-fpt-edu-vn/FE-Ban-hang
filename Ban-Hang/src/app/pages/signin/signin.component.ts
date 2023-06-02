import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/interface/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  onSubmit() {
    if (this.loginForm.valid) {
      const signinData: User = {
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || ''
      };
      this.authService.signin(signinData).subscribe(
        (data: any) => {
          console.log(data.user);
          localStorage.setItem('userName', data.user.name);
          localStorage.setItem('token', data.token);



          let token = localStorage.getItem('token');
          console.log(token);

          if (data.user.role === "admin") {
            this.router.navigate(['/admin']);
            alert('Chào mừng quản trị viên')
          } else {
            alert('Đăng nhập thành công');
            this.router.navigate(['/'])
          }

        },
        (error) => {
          alert('Đăng nhập thất bại');
        }
      );
    }
  }

}
