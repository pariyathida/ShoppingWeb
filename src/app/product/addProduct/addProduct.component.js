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
var product_1 = require("../product");
var product_data_server_service_1 = require("../../service/product-data-server.service");
var router_1 = require("@angular/router");
var addProductsComponent = (function () {
    function addProductsComponent(productDataService, router) {
        this.productDataService = productDataService;
        this.router = router;
        this.product = new product_1.Product();
    }
    addProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productDataService.getProductsData().subscribe(function (res) { return _this.products = res; });
    };
    addProductsComponent.prototype.addProduct = function () {
        var _this = this;
        var inputEl = this.inputEl.nativeElement;
        this.productDataService.addProduct(this.product, inputEl.files.item(0)).subscribe(function (res) {
            console.log(res);
            if (res != null) {
                _this.router.navigate(['/list']);
            }
            else {
                alert('Error in adding the student');
            }
        });
    };
    addProductsComponent.prototype.saveFileName = function (image) {
        this.product.pictures = image.target.files[0].name;
        this.saveFile(image);
    };
    addProductsComponent.prototype.saveFile = function (image) {
        this.file = image.target.files[0];
    };
    return addProductsComponent;
}());
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", core_1.ElementRef)
], addProductsComponent.prototype, "inputEl", void 0);
addProductsComponent = __decorate([
    core_1.Component({
        selector: 'addProducts',
        templateUrl: 'app/product/addProduct/addProduct.component.html',
        styleUrls: ['app/product/addProduct/addProduct.component.css']
    }),
    __metadata("design:paramtypes", [product_data_server_service_1.ProductDataServerService, router_1.Router])
], addProductsComponent);
exports.addProductsComponent = addProductsComponent;
//# sourceMappingURL=addProduct.component.js.map