// product-update.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  product!: any;
  categorys!: any;

  productForm = this.fb.group({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    priceSale: new FormControl(0, Validators.required),
    describe: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
    // categoryId: new FormControl('', Validators.required),

  })

  constructor(private fb: FormBuilder,
    private router: ActivatedRoute,
    private productService: ProductService,
    private route: Router,
  ) {
    this.productService.getCategory().subscribe(response => {

      this.categorys = response
    });
    this.router.paramMap.subscribe(params => {

      const _id: any = params.get('id');
      this.productService.getProduct(_id).subscribe(data => {
        this.product = data;
        this.productForm.patchValue({
          name: this.product.data.name,
          price: this.product.data.price,
          priceSale: this.product.data.priceSale,
          describe: this.product.data.describe,
          // categoryId: this.product.data.categoryId,
        })

      })
    });


  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product.data._id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        priceSale: this.productForm.value.priceSale || 0,
        describe: this.productForm.value.describe || '',
        // categoryId: this.productForm.value.categoryId || ''
      };


      this.productService.updateProduct(product).subscribe((product) => {
        alert("Cập nhật danh mục thành công");
        this.route.navigate(['/admin/product'])
      },
        (error) => {
          alert('Cập nhật mục thất bại');
        });

    }
  }

}
