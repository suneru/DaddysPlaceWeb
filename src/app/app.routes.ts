import { Routes } from '@angular/router';
import { UserLOginComponent } from './user-login/user-login.component';
import { PosDashboardComponent } from './pos-dashboard/pos-dashboard.component';
 

export const routes: Routes = [
    { path: 'user-login', component: UserLOginComponent },
    { path: '', redirectTo: 'user-login',pathMatch:'full' },
    
    { path: 'pos-dashboard', component: PosDashboardComponent }
];
