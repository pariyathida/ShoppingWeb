import {Injectable} from '@angular/core';
import {Product} from '../product/product';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AuthenticationService} from './authentication.service';


@Injectable()
export class ProductDataServerService {
  constructor(private http: Http, private authenticationService: AuthenticationService) {
  }
  carts: Product[]=[];

  private headers = new Headers({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
  });

  //serverPath = 'http://52.10.46.47:8080/assignment3-server/product/';
  serverPath = 'http://localhost:8080/product/';

  getServerPath() {
    return this.serverPath;
  }

  getProductsData() {
    // let productArray: Product[];
    return this.http.get(this.serverPath)
      .map(res => res.json());

  }

  getProduct(id: number) {
    // let product: Product;
    return this.http.get(this.serverPath + id)
      .map((res: Response) => {
        if (res) {
          if (res.status === 200) {
            return res.json();
          }
          if (res.status === 204) {
            return null;
          }
        }
      })
      .catch((error: any) => {
        if (error.status === 500) {
          return Observable.throw(new Error(error.status));
        } else if (error.status === 400) {
          return Observable.throw(new Error(error.status));
        } else if (error.status === 409) {
          return Observable.throw(new Error(error.status));
        } else if (error.status === 406) {
          return Observable.throw(new Error(error.status));
        }
        return error;
      })
      ;


  }

  addProduct(product: Product, file: any) {
    let formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.serverPath+'image/', formData)
      .flatMap(filename => {
        product.pictures = filename.text();
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'post'});
        let body = JSON.stringify(product);
        return this.http.post(this.serverPath, body, options)
          .map(res => {
            return res.json();
          })
          .catch((error: any) => {
            return Observable.throw(new Error(error.status));
          });
      });
  }

  addProductnoImg(product: Product) {
    let headers = new Headers({'Content-Type' : 'application/json'})
    let options = new RequestOptions({headers : headers, method : 'post'})
    let body = JSON.stringify(product)
    return this.http.post('http://localhost:8080/product', body , options).map(res => res.json()).catch((error: any) => Observable.throw(new Error(error.status)))
  }

  findProduct(search: string) {
    // let product: Product;
    // let params: URLSearchParams = new URLSearchParams();
    // params.set('search', search);
    return this.http.get('http://localhost:8080/products?search=' + search)
      .map(res => res.json());
  }

  getCart() {
    return JSON.parse(localStorage.getItem('currentCart'));
  }

  deleteCart(id) {
    this.carts = this.carts.filter(product => product.id !== id);

    localStorage.setItem('currentCart', JSON.stringify(this.carts));
  }


  addCart(product: Product) {
    product.id = this.carts.length + 1;
    this.carts.push(product);
    localStorage.setItem('currentCart', JSON.stringify(this.carts));
  }


  clearCart() {
    while (this.carts.length !== 0) {
      this.carts.pop();
    }
    localStorage.setItem('currentCart', JSON.stringify(this.carts));
  }

  addPurchase(product: Product) {
    let headers = new Headers({'Content-Type' : 'application/json'})
    let options = new RequestOptions({headers : headers, method : 'post'})
    let body = JSON.stringify(product)
    return this.http.post('http://localhost:8080/purches', body , options).map(res => res.json()).catch((error: any) => Observable.throw(new Error(error.status)))
  }
}
