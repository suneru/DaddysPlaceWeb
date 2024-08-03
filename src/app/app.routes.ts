import { Routes } from '@angular/router';
import { UserLOginComponent } from './user-login/user-login.component';
import { PosDashboardComponent } from './pos-dashboard/pos-dashboard.component';
import { ProductAddComponent } from './product-add/product-add.component'; 

export const routes: Routes = [
    { path: 'user-login', component: UserLOginComponent },
    { path: '', redirectTo: 'user-login',pathMatch:'full' },
    { path: 'product-add', component: ProductAddComponent },
    { path: 'pos-dashboard', component: PosDashboardComponent }
];
