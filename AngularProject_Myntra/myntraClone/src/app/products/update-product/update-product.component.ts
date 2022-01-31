import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/_categories/categories.service';
import { ICategory } from 'src/app/_categories/ICategory.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
id:number;
categories:ICategory[]=[];
product:any;
productForm:FormGroup;
imagePreview:string;
image:string;
updated=false;
  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService,private categoryService:CategoriesService) {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.id=+data.get('id');
      console.log(this.id);
    });

    this.productForm=new FormGroup({
      productId:new FormControl(null,{validators:Validators.required}),
      productName:new FormControl(null,{validators:Validators.required}),
      productCategory:new FormControl(null,{validators:[Validators.required]}),
      productQuantity:new FormControl({Validators:[Validators.required]}),
      productPrice:new FormControl({Validators:[Validators.required]}),
      productDescription:new FormControl({Validators:[Validators.required]}),
      image:new FormControl({Validators:[Validators.required]})
    })



   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
    this.getProduct(this.id);
  }
  getProduct(id:number)
  {
   this.productsService.getProduct(id).subscribe(data=>{
    this.product=data;
  });
   }
   handleImageFile(e:Event){
    const file = (<HTMLInputElement>e.target).files[0];
    const path=file.name;
    this.image=`../../../assets/${path}`;
    this.productForm.patchValue({image:file})
    this.productForm.get('image').updateValueAndValidity();
   const reader=new FileReader();
   reader.onload=()=>{
     this.imagePreview=reader.result as string;
   };
   reader.readAsDataURL(file);
   }

   updateProduct(){
   //console.log(this.productForm.value);
   console.log(this.imagePreview);
   this.productsService.updateProduct(this.productForm.value.productId,
    this.productForm.value.productName,
    this.productForm.value.productQuantity,
    this.productForm.value.productPrice,
    this.productForm.value.productDescription,
    this.image,
    this.productForm.value.productCategory,).subscribe(data=>{
      console.log(data);
      if(data)
      this.updated=true;
    });
    this.productForm.reset();
   }

}
