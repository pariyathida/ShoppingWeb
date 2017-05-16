"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var addProduct_component_1 = require("./product/addProduct/addProduct.component");
var showProduct_component_1 = require("./product/showProduct/showProduct.component");
var showProductList_component_1 = require("./product/showProductList/showProductList.component");
var product_data_db_service_1 = require("./service/product-data-db.service");
var time_component_1 = require("./time/time.component");
var forms_1 = require("@angular/forms");
var menu_component_1 = require("./menu/menu.component");
var product_routing_1 = require("./product/product-routing");
var product_data_server_service_1 = require("./service/product-data-server.service");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent,
            addProduct_component_1.addProductsComponent,
            showProduct_component_1.showProductsComponent,
            showProductList_component_1.showProductListComponent,
            time_component_1.TimeComponent,
            menu_component_1.MenuComponent],
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, product_routing_1.ProductRoutingModule],
        bootstrap: [app_component_1.AppComponent],
        providers: [product_data_db_service_1.ProductDataService, product_data_server_service_1.ProductDataServerService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map