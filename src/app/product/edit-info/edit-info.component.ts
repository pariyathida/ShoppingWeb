import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductDataServerService} from 'app/service/product-data-server.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private productDataServerService: ProductDataServerService, private router: Router) {
  }

  product: Product;
  isNoData: boolean;

  ngOnInit() {
    this.isNoData = false;
    this.route.params
      .switchMap((params: Params) => this.productDataServerService.getProduct(+params['id']))
      .subscribe((product: Product) => {
          if (product !== null) {
            this.product = product;
          }else {
            this.isNoData = true;
          }
        }
      );
  }

  @ViewChild('fileInput') inputEl: ElementRef
  addProduct(product: Product) {
    let result: Product;
    console.log(product)
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    if (inputEl.files.length > 0) {
      this.productDataServerService.addProduct(product, inputEl.files.item(0)).subscribe(resultProduct => {
        result = resultProduct
        if (result != null) {
          this.router.navigate(['/allProduct']);
        } else {
          alert('Error in editing the product');
        }
      });
    } else {
      this.productDataServerService.addProductnoImg(product).subscribe(resultProduct => {
        result = resultProduct
        if (result != null) {
          this.router.navigate(['/allProduct']);
        } else {
          alert('Error in editing the product');
        }
      });
    }
  }

  onFileChange(event, product: any) {
    var filename = event.target.files[0].name;
    console.log(filename);
    product.image = filename;
  }


}
