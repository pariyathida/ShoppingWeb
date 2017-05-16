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
var product_data_server_service_1 = require("../../service/product-data-server.service");
var showProductListComponent = (function () {
    function showProductListComponent(productDataService) {
        this.productDataService = productDataService;
    }
    showProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productDataService.getProductsData().subscribe(function (res) { return _this.products = res; });
    };
    showProductListComponent.prototype.showDescription = function (product) {
        if (product.description.length <= 50) {
            return product.description;
        }
        else {
            return product.description.substring(0, 47) + '...';
        }
    };
    showProductListComponent.prototype.alertDetail = function (product) {
        alert('Name : ' + product.name + '\nDescription : ' +
            product.description + '\nPictures : ' + product.pictures +
            '\nPrice : ' + product.price + '\nAmount : ' + product.amount +
            '\nRating : ' + product.rating.toFixed(1));
    };
    return showProductListComponent;
}());
showProductListComponent = __decorate([
    core_1.Component({
        selector: 'showProductList',
        templateUrl: 'app/product/showProductList/showProductList.component.html',
        styleUrls: ['app/product/showProductList/showProductList.component.css']
    }),
    __metadata("design:paramtypes", [product_data_server_service_1.ProductDataServerService])
], showProductListComponent);
exports.showProductListComponent = showProductListComponent;
//# sourceMappingURL=showProductList.component.js.map