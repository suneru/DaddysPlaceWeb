import { Routes } from '@angular/router';
import { UserLOginComponent } from './user-login/user-login.component';
import { CategoryAddComponent } from './category-add/category-add.component';

export const routes: Routes = [
    {path:'',component:UserLOginComponent},
    {path:'category-add',component:CategoryAddComponent}
];
