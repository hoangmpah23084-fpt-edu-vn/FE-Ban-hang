import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  formCategory = this.formBuilder.group({
    name: new FormControl('', Validators.required),
  })

  get checkCategory() {
    return this.formCategory.controls
  }
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService) {
  }

  onhandelSubmit() {

    const category: ICategory = {
      name: this.formCategory.value.name || ""
    }

    this.categoryService.categoryAdd(category).subscribe(data => {
      console.log(data);
      alert("Thêm danh mục thành công")

    },
      (error) => {
        alert('Thêm danh mục thất bại');
      })


  }

}
