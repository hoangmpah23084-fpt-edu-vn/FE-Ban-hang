import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutUserComponent } from './layouts/base-layout-user/base-layout-user.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageDetailComponent } from './pages/page-detail/page-detail.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutUserComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'page-detail', component: PageDetailComponent },
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'category/add', component: CategoryAddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
