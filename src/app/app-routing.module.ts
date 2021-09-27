import { Routes } from "@angular/router";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { HomeComponent } from "./home/home.component";
import { ItemCardComponent } from "./item-card/item-card.component";
import { PaymentWindowComponent } from "./payment-window/payment-window.component";
import { AuthService } from "./services/auth.service";
import { PaymentsService } from "./services/payments.service";


export const applicationRoutes : Routes = [
    //{path:'',component:HomeComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'admin-login', component:AdminLoginComponent},
    {path:'items/:name', component:ItemCardComponent},
    {path:'admin-page', component:AdminPageComponent, canActivate:[AuthService]},
    {path:'payment',component:PaymentWindowComponent, canActivate:[PaymentsService]}
    //{path:'users',component:UsersComponent},
    // {path:'user-details/:id', component:UserDetailsComponent},
    // {path:'support', component:SupportComponent, children:[
    //     {path:'', redirectTo:'customer-support', pathMatch:'full'},
    //     {path:'customer-support',component:CustomerSupportComponent},
    //     {path:'supplier-support', component:SupplierSupportComponent}
    // ]}
]

