"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var ProductDataServerService = (function () {
    function ProductDataServerService(http) {
        this.http = http;
        this.serverPath = 'http://52.10.46.47:8080/assignment3-server/product/';
    }
    ProductDataServerService.prototype.getServerPath = function () {
        return this.serverPath;
    };
    ProductDataServerService.prototype.getProductsData = function () {
        // let productArray: Product[];
        return this.http.get(this.serverPath)
            .map(function (res) { return res.json(); });
    };
    ProductDataServerService.prototype.getProduct = function (id) {
        // let product: Product;
        return this.http.get(this.serverPath + id)
            .map(function (res) {
            if (res) {
                if (res.status === 200) {
                    return res.json();
                }
                if (res.status === 204) {
                    return null;
                }
            }
        })
            .catch(function (error) {
            if (error.status === 500) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 400) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 409) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 406) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            return error;
        });
    };
    ProductDataServerService.prototype.addProduct = function (product, file) {
        var _this = this;
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post(this.serverPath + 'image/', formData)
            .flatMap(function (filename) {
            product.pictures = filename.text();
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
            var body = JSON.stringify(product);
            return _this.http.post(_this.serverPath, body, options)
                .map(function (res) {
                return res.json();
            })
                .catch(function (error) {
                return Rx_1.Observable.throw(new Error(error.status));
            });
        });
    };
    return ProductDataServerService;
}());
ProductDataServerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductDataServerService);
exports.ProductDataServerService = ProductDataServerService;
//# sourceMappingURL=product-data-server.service.js.map