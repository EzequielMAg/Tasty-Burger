import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { loginRegisterGuard } from './core/guards/login-register.guard';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then( m => m.ProductsModule )
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module').then( m => m.CartModule )
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then( m => m.OrdersModule ),
    canActivate: [authGuard]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then( m => m.CheckoutModule),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule ),
    canActivate: [loginRegisterGuard]
  },
  {
    path: 'home',
    //component: HomePageComponent
    loadComponent: () => import('./standalones/home-page/home-page.component').then( m => m.HomePageComponent )
  },
  {
    path: '404',
    //component: Error404Component
    loadComponent: () => import('./standalones/error404/error404.component').then( m => m.Error404Component )
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
