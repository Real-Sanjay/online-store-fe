import { Component } from '@angular/core';
import { PostersComponent } from '../../../features/posters/posters.component';
import { CategoriesComponent } from "../../../features/categories/categories.component";
import { ProductListComponent } from "../../../features/product-list/product-list.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PostersComponent, CategoriesComponent, ProductListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
