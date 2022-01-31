import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ICategory } from '../ICategory.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:ICategory[]=[];
  constructor(private categoryService:CategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(data=>this.categories=data);
  }
  
}
