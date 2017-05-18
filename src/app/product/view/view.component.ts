import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductDataServerService} from '../../service/product-data-server.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  product: Product;
  // isNoData: boolean;
  constructor (private route: ActivatedRoute, private productDataService: ProductDataServerService, private router: Router){}
  ngOnInit() {
    // this.isNoData = false;
    this.route.params
      .switchMap((params: Params) => this.productDataService.getProduct(+params['id']))
      .subscribe((product: Product) => {
      this.product = product;
        // if (product !== null) {
        // }else {
        //   this.isNoData = true;
        // }
       });
  }

  addCart(product: Product) {
    console.log(product)
    this.productDataService.addCart(product);
    alert('- add complete -');
    this.router.navigate(['/viewAllProduct']);
  }

}
