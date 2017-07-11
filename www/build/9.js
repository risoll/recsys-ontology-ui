webpackJsonp([9],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacePage = (function () {
    function PlacePage() {
        this.type = "details";
    }
    return PlacePage;
}());
PlacePage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        template: "\n    <ion-header>\n        <ion-navbar color=\"sky\">\n          <button ion-button menuToggle>\n            <ion-icon name=\"menu\"></ion-icon>\n          </button>\n          <ion-title>Place</ion-title>\n        </ion-navbar>\n        <ion-toolbar no-border-top>\n          <ion-segment [(ngModel)]=\"type\">\n            <ion-segment-button value=\"details\">\n              Details\n            </ion-segment-button>\n            <ion-segment-button value=\"maps\">\n              Maps\n            </ion-segment-button>\n          </ion-segment>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div [ngSwitch]=\"type\">\n        <page-details *ngSwitchCase=\"'details'\"></page-details>\n        <page-maps *ngSwitchCase=\"'maps'\"></page-maps>\n      </div>\n    </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [])
], PlacePage);

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/attractions/attractions.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__place_place__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_place_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_attractions_actions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AttractionsPage = (function () {
    function AttractionsPage(attractionsActions, store, loadingCtrl, navCtrl, placeService, app) {
        this.attractionsActions = attractionsActions;
        this.store = store;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.app = app;
        this.places = [];
        this.limit = 15;
        this.offset = 0;
        this.presentLoading();
        this.loadMore();
    }
    AttractionsPage.prototype.details = function (place) {
        this.store.dispatch(this.attractionsActions.selectPlace(place));
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_0__place_place__["a" /* PlacePage */]);
    };
    AttractionsPage.prototype.getPlaces = function (pagination) {
        var _this = this;
        this.placeService.getPlaces(pagination).subscribe(function (places) {
            _this.places = _this.places.concat(places);
            _this.store.dispatch(_this.attractionsActions.setAttractionsLoadStatus("loaded"));
            _this.stopLoading();
        });
    };
    AttractionsPage.prototype.loadMore = function () {
        var pagination = {
            limit: 15,
            offset: this.offset
        };
        this.getPlaces(pagination);
        this.offset += 15;
    };
    AttractionsPage.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    AttractionsPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    return AttractionsPage;
}());
AttractionsPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"]({
        selector: 'page-attractions',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Browse</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-grid fixed>\n        <ion-list>\n          <button (click)=\"details(place)\" ion-item *ngFor=\"let place of places\">\n            <ion-row>\n              <ion-col col-3>\n                  <ion-avatar item-start>\n                    <img [src]=\"place.photo\">\n                  </ion-avatar>\n              </ion-col>\n              <ion-col col-9>\n                  <h2>{{place.name}}</h2>\n                  <p>{{place.formatted_address}}</p>\n              </ion-col>\n            </ion-row>\n          </button>\n        </ion-list>\n      </ion-grid>\n      <button color=\"fire\" ion-button block style=\"height: 10%;\" (click)=\"loadMore()\">Load More</button> \n    </ion-content>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__actions_attractions_actions__["a" /* AttractionsActions */],
        __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_place_service__["a" /* PlaceService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */]])
], AttractionsPage);

//# sourceMappingURL=attractions.js.map
// CONCATENATED MODULE: ./src/pages/attractions/attractions.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractionsPageModule", function() { return AttractionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var attractions_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AttractionsPageModule = (function () {
    function AttractionsPageModule() {
    }
    return AttractionsPageModule;
}());
AttractionsPageModule = attractions_module___decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [AttractionsPage],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(AttractionsPage)],
        entryComponents: [AttractionsPage]
    })
], AttractionsPageModule);

//# sourceMappingURL=attractions.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map