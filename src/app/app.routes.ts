import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostersComponent } from './features/posters/posters.component';

export const routes: Routes = [
{path: '', component: HeaderComponent},
{path:'posters', component: PostersComponent }

];
