import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ICategory } from 'src/app/interface/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
  category!: ICategory[]
  constructor(private cate: CategoryService){
    this.cate.getCategoryAll().subscribe((response : any)=>{
      console.log(response.data)
      this.category = response.data
      
    })
  }
  Remove(_id:any){
    const remonr = confirm('ban muốn xóa');
    if(remonr){
     this.cate.deleteCategory(_id).subscribe(()=>{
       this.category = this.category.filter(item =>item._id !== _id)
     })
    }
   }
}
