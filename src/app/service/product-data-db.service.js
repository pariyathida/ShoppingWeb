"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ProductDataService = (function () {
    function ProductDataService() {
        this.products = [];
    }
    ProductDataService.prototype.getProductsData = function () {
        return this.products;
    };
    ProductDataService.prototype.getProduct = function (id) {
        var product = this.products.find(function (p) { return p.id === +id; });
        return product;
    };
    ProductDataService.prototype.addProduct = function (product) {
        console.log(product);
        product.id = this.products.length + 1;
        this.products.push(product);
        console.log(this.products);
    };
    return ProductDataService;
}());
ProductDataService = __decorate([
    core_1.Injectable()
], ProductDataService);
exports.ProductDataService = ProductDataService;
//# sourceMappingURL=product-data-db.service.js.map