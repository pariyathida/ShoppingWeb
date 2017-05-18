import {Component} from '@angular/core';
import {Product} from '../product';
import {ProductDataServerService} from '../../service/product-data-server.service';
import {Router} from '@angular/router';
@Component({
  selector: 'showProducts',
  templateUrl: './showProduct.component.html',
  styleUrls: ['./showProduct.component.css']
})
export class showProductsComponent {
  products: Product[];
  search: string;

  ngOnInit() {
    this.productDataService.getProductsData().subscribe((res) => this.products = res);
  }

  constructor(private productDataService: ProductDataServerService, private router: Router) {}

  serverPath() {
    return this.productDataService.getServerPath() + 'image/';
  }

  onSearch() {
    this.productDataService.findProduct(this.search)
      .subscribe(products => this.products = products);

  }

  showDetail(product: Product) {
    this.router.navigate(['/detail', product.id]);
  }

  rating(product: Product, rating: number) {
    if (product.rating >= rating) {
      return 'glyphicon glyphicon-star';
    }else {
      return 'glyphicon glyphicon-star-empty';
    }
  }


}
