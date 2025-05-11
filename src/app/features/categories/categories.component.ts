import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  categories: any[]= [];

  constructor(private categoriesservice: CategoriesService){
  }

  ngOnInit(): void {
      this.getCategories();
  }

  getCategories() {
    this.categoriesservice.getCategories().subscribe((val)=>{
      next: {
        this.categories = val.data;
        console.log("categories", this.categories);
      }
    })
  }

}
