import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms"
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user!: User
  submitted: boolean = false
  formSignup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, { Validators: this.checkPassword })

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword)
      return null;
    return { notMath: true };
  }

  onHandleSubmit() {
    this.submitted = true;
    this.auth.signup(this.formSignup.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/signin']);
    })
  }
}
