import { Component } from '@angular/core';
import { User } from 'src/app/interface/auth';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {
  user!: any;

  formUser = this.formUsers.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: new FormControl('', Validators.required),
    role: ['', Validators.required]
  })
  get checkCategory() {
    return this.formUser.controls;
  }
  constructor(
    private formUsers: FormBuilder,
    private Users: UserService,
    private Ac: ActivatedRoute
  ) {
    this.Ac.paramMap.subscribe(params => {
      const _id = params.get('id');
      this.Users.getUser(_id).subscribe((response => {
        this.user = response
        console.log(this.user.data);
        this.formUser.patchValue({
          name: this.user.data.name,
          email: this.user.data.email,
          role: this.user.data.role
        });

      }))


    }, error => console.log(error.message));
  };



  onhandelSubmit() {
    const users: User = {
      _id: this.user.data._id,
      name: this.formUser.value.name || "",
      email: this.formUser.value.email || "",
      role: this.formUser.value.role || ""
    };
    console.log(users._id);
    this.Users.updateUser(users).subscribe(response => {
      console.log(response);
      alert("Cập nhật danh mục thành công");
    },
      (error) => {
        alert('Cập nhật mục thất bại');
      });
  }
}
