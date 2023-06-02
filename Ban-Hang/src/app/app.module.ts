import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutUserComponent } from './layouts/base-layout-user/base-layout-user.component';
import { BaseLayoutAdminComponent } from './layouts/base-layout-admin/base-layout-admin.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageDetailComponent } from './pages/page-detail/page-detail.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutUserComponent,
    BaseLayoutAdminComponent,
    HomePageComponent,
    PageDetailComponent,
    SigninComponent,
    SignupComponent,
    CategoryAddComponent,
    DashBoardComponent,
    ListCategoriesComponent,
    CategoryEditComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
