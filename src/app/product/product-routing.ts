
import {RouterModule, Routes} from '@angular/router';
import {showProductsComponent} from './showProduct/showProduct.component';
import {addProductsComponent} from './addProduct/addProduct.component';
import {showProductListComponent} from './showProductList/showProductList.component';
import {NgModule} from '@angular/core';
import {CartComponent} from '../cart/cart.component';
import {ViewComponent} from './view/view.component';

const productRoutes: Routes = [
  {path: 'viewAllProduct', component: showProductsComponent},
  {path: 'detail/:id', component: ViewComponent},
  {path: 'add',  component: addProductsComponent},
  {path: 'list', component: showProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: '/add', pathMatch: 'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
