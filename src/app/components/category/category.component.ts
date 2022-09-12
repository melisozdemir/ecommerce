import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : []=[];
  currentCategory :Category;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response
    })
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category ==this.currentCategory){
      return "rounded-md active"
    }else{
      return "rounded-md"
    }
  }

  getAllCategoryClass(){
       if(!this.currentCategory){
        return "rounded-md active"
       }
       else{
        return "rounded-md"
       }
  }

}
