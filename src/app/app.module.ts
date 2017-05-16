import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {addProductsComponent} from './product/addProduct/addProduct.component';
import {showProductsComponent} from './product/showProduct/showProduct.component';
import {showProductListComponent} from './product/showProductList/showProductList.component';
import {ProductDataService} from './service/product-data-db.service';
import {TimeComponent} from './time/time.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {ProductRoutingModule} from './product/product-routing';
import {ProductDataServerService} from './service/product-data-server.service';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './service/authentication.service';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
 declarations: [AppComponent,
   addProductsComponent,
   showProductsComponent,
   showProductListComponent,
   TimeComponent,
   MenuComponent,
   LoginComponent],
 imports: [BrowserModule, FormsModule, HttpModule, ProductRoutingModule, AppRoutingModule],
 bootstrap: [AppComponent],
 providers: [ProductDataService, ProductDataServerService, AuthenticationService]
})
export class AppModule {
}
