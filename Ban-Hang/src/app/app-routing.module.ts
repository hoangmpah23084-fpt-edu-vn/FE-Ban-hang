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
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';

import { UserComponent } from './pages/user/user.component';
import { UserUpdateComponent } from './pages/user-update/user-update.component';

import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailAdminComponent } from './pages/product-detail-admin/product-detail-admin.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';



const routes: Routes = [
  {
    path: '', component: BaseLayoutUserComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'product/:id', component: PageDetailComponent },
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', component: BaseLayoutAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'category', component: ListCategoriesComponent },
      { path: 'category/add', component: CategoryAddComponent },
      { path: 'category/:id/edit', component: CategoryEditComponent },

      { path: 'product', component: ProductListComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id', component: ProductDetailAdminComponent },
      { path: 'product/:id/edit', component: ProductUpdateComponent },


      { path: 'product/add', component: ProductAddComponent },
      { path: 'user', component: UserComponent },
      { path: 'user/:id/edit', component: UserUpdateComponent },
      { path: 'product', component: ProductListComponent }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
