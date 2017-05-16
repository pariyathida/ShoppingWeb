import {Component, ElementRef, ViewChild} from '@angular/core';
import {Product} from '../product';
import {ProductDataServerService} from '../../service/product-data-server.service';
import {Router} from "@angular/router";
@Component({
  selector: 'addProducts',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class addProductsComponent {
  products: Product[];
  product: Product = new Product();
  file: null;

  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private productDataService: ProductDataServerService, private router: Router) {
  }

  ngOnInit() {
    this.productDataService.getProductsData().subscribe((res) => this.products = res);
  }
  addProduct() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    this.productDataService.addProduct(this.product, inputEl.files.item(0)).subscribe((res) => {
      console.log(res)
      if (res != null) {
        this.router.navigate(['/list']);
      }else {
        alert('Error in adding the student');
      }
    });
  }

  saveFileName(image) {
    this.product.pictures = image.target.files[0].name;
    this.saveFile(image);
  }
  saveFile(image) {
    this.file = image.target.files[0];
  }

}
