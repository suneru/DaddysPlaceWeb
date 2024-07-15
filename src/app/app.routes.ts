import { Routes } from '@angular/router';
import { UserLOginComponent } from './user-login/user-login.component';
import { PosDashboardComponent } from './pos-dashboard/pos-dashboard.component';

export const routes: Routes = [
    { path: 'login', component: UserLOginComponent },
    { path: 'pos-dashboard', component: PosDashboardComponent }
];
