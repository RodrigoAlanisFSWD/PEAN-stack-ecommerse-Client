import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: "",pathMatch: "full",component: HomeComponent },
	{ path: 'login', loadChildren: () => import('./core/modules/login/login.module').then(m => m.LoginModule) },
	{ path: 'register', loadChildren: () => import('./core/modules/register/register.module').then(m => m.RegisterModule) },
	{ path: 'products', loadChildren: () => import('./core/modules/products/products.module').then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
