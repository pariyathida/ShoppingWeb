import {Component} from '@angular/core';
import {Product} from '../product';
import {ProductDataServerService} from '../../service/product-data-server.service';
@Component({
  selector: 'showProducts',
  templateUrl: './showProduct.component.html',
  styleUrls: ['./showProduct.component.css']
})
export class showProductsComponent {
  products: Product[];

  constructor(private productDataService: ProductDataServerService) {
  }

  ngOnInit() {
    this.productDataService.getProductsData().subscribe((res) => this.products = res);
  }

  serverPath(){
    return this.productDataService.getServerPath()+'image/';
  }

}
