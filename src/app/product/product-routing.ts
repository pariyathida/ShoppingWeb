
import {RouterModule, Routes} from "@angular/router";
import {showProductsComponent} from "./showProduct/showProduct.component";
import {addProductsComponent} from "./addProduct/addProduct.component";
import {showProductListComponent} from "./showProductList/showProductList.component";
import {NgModule} from "@angular/core";

const productRoutes: Routes = [
  {path: 'view', component: showProductsComponent},
  {path: 'add',  component: addProductsComponent},
  {path: 'list', component: showProductListComponent},
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
