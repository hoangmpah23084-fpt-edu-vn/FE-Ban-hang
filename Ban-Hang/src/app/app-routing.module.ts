import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutUserComponent } from './layouts/base-layout-user/base-layout-user.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageDetailComponent } from './pages/page-detail/page-detail.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { BaseLayoutAdminComponent } from './layouts/base-layout-admin/base-layout-admin.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';

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
    path: 'admin', component: BaseLayoutAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'category', component: ListCategoriesComponent },
      { path: 'category/add', component: CategoryAddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
