import { Component, OnInit } from '@angular/core';
import {Product} from '../product/product';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {ProductDataServerService} from '../service/product-data-server.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[]= [];


  constructor (private productDataService: ProductDataServerService, private router: Router, private authenService:AuthenticationService){}

  ngOnInit() {
    this.products = this.productDataService.getCart();
  }

  deleteCart(product: Product){
    this.productDataService.deleteCart(product.id);
    this.products = this.productDataService.getCart();
  }

  showPrice() {
    var x = 0;
    this.products.forEach(product => {
      x += product.price;
    });
    return x;

  }

  hasRole(role: string) {
    return this.authenService.hasRole(role);
  }

  // notHasRole(role:string){
  //   return this.authenService.notHasRole(role);
  // }

  slip() {
    if (this.authenService.hasRole('ADMIN,USER,SHOPKEEPER') === true) {
      this.router.navigate(['/slip']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
