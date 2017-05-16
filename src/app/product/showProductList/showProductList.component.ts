import {Component} from '@angular/core';
import {Product} from '../product';
import {ProductDataServerService} from '../../service/product-data-server.service';
@Component({
  selector: 'showProductList',
  templateUrl: './showProductList.component.html',
  styleUrls: ['./showProductList.component.css']
})
export class showProductListComponent {
  products: Product[]

  constructor(private productDataService: ProductDataServerService) {
  }

  ngOnInit() {
    this.productDataService.getProductsData().subscribe((res) => this.products = res);
  }

  showDescription(product) {
    if (product.description.length <= 50) {
      return product.description;
    } else {
      return product.description.substring(0, 47) + '...';
    }
  }

  alertDetail(product) {
    alert('Name : ' + product.name + '\nDescription : ' +
      product.description + '\nPictures : ' + product.pictures +
      '\nPrice : ' + product.price + '\nAmount : ' + product.amount +
      '\nRating : ' + product.rating.toFixed(1));
  }


}
