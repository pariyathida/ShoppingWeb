import { Component, OnInit } from '@angular/core';
import {ProductDataServerService} from '../../service/product-data-server.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {Product} from '../../product/product';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.css']
})
export class SlipComponent implements OnInit {

  products: Product[]=[];


  constructor (private productDataService : ProductDataServerService, private router: Router, private authenService: AuthenticationService){}

  ngOnInit() {
    this.products = this.productDataService.getCart();
  }

  showPrice() {
    var x=0;
    this.products.forEach(product => {
      x += product.price;
    });
    return x;

  }

  showQuantity() {
    var x = 0;
    this.products.forEach(product => {
      x += 1;
    });
    return x;
  }


  purchase() {

    this.products.forEach(product => {

      this.productDataService.addPurchase(product);

    });
    this.productDataService.clearCart();
    alert('PURCHASING SUCCESS');
    this.router.navigate(['/viewAllProduct']);
  }

}
