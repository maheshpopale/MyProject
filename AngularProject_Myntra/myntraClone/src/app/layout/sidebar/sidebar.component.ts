import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/_categories/categories.service';
import { ICategory } from 'src/app/_categories/ICategory.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
categories:ICategory[]=[];
  constructor(private categoryService:CategoriesService ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
      console.log(this.categories);
    })
  }

}
