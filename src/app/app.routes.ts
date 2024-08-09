import { Routes } from '@angular/router';
import { UserLOginComponent } from './user-login/user-login.component';
import { PosDashboardComponent } from './pos-dashboard/pos-dashboard.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { KotprintComponent } from './kotprint/kotprint.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from './_service/authGuard';
import { ReportComponent } from './report/report.component';


export const routes: Routes = [
    { path: 'user-login', component: UserLOginComponent },
    { path: '', redirectTo: 'user-login',pathMatch:'full' },
    { path: 'product-add', component: ProductAddComponent, canActivate: [AuthGuard]},
    { path: 'pos-dashboard', component: PosDashboardComponent, canActivate: [AuthGuard]},
    { path: 'logindetails', component: LogindetailsComponent, canActivate: [AuthGuard]},
    { path: 'kotPrint', component: KotprintComponent, canActivate: [AuthGuard]},
    { path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
    { path: 'report', component: ReportComponent, canActivate: [AuthGuard]},
];
