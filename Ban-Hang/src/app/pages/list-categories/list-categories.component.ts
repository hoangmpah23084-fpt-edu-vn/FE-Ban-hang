import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ICategory } from 'src/app/interface/category';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
  category!: ICategory[]
  constructor(private cate: CategoryService) {
    this.cate.getCategoryAll().subscribe((response: any) => {
      console.log(response.data)
      this.category = response.data

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
        this.cate.deleteCategory(_id).subscribe(() => {
          this.category = this.category.filter(item => item._id !== _id)
        })
        Swal.fire(
          'Deleted!',
          'Danh mục đã được xóa',
          'success'
        )
      }
    })
  }
}
