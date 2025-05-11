import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostersComponent } from './features/posters/posters.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { ProductListComponent } from './features/product-list/product-list.component';

export const routes: Routes = [
{path: '', component: HeaderComponent},
{path:'posters', component: PostersComponent },
{path:'categories', component: CategoriesComponent },
{path:'products', component: ProductListComponent }

];
