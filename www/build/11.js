webpackJsonp([11],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        template: "\n    <ion-header>\n        <ion-navbar color=\"sky\">\n          <button ion-button menuToggle>\n            <ion-icon name=\"menu\"></ion-icon>\n          </button>\n          <ion-title>Tempat Wisata</ion-title>\n        </ion-navbar>\n        <ion-toolbar no-border-top>\n          <ion-segment [(ngModel)]=\"type\">\n            <ion-segment-button value=\"details\">\n              Rincian\n            </ion-segment-button>\n            <ion-segment-button value=\"maps\">\n              Peta\n            </ion-segment-button>\n          </ion-segment>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div [ngSwitch]=\"type\">\n        <page-details *ngSwitchCase=\"'details'\"></page-details>\n        <page-maps *ngSwitchCase=\"'maps'\"></page-maps>\n      </div>\n    </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [])
], PlacePage);

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/attractions/attractions.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__place_place__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_attractions_actions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
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
    function AttractionsPage(attractionsActions, store, loadingService, navCtrl, placeService, app) {
        this.attractionsActions = attractionsActions;
        this.store = store;
        this.loadingService = loadingService;
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.app = app;
        this.places = [];
        this.limit = 15;
        this.offset = 0;
        this.loadingService.presentLoading();
        this.loadMore();
    }
    AttractionsPage.prototype.details = function (place) {
        this.store.dispatch(this.attractionsActions.selectPlace(place));
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_1__place_place__["a" /* PlacePage */]);
    };
    AttractionsPage.prototype.getPlaces = function (pagination) {
        var _this = this;
        this.placeService.getPlaces(pagination).subscribe(function (places) {
            _this.places = _this.places.concat(places);
            _this.store.dispatch(_this.attractionsActions.setAttractionsLoadStatus("loaded"));
            _this.loadingService.stopLoading();
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
    return AttractionsPage;
}());
AttractionsPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"]({
        selector: 'page-attractions',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Jelajah</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n\t\t\t\t<ion-item (click)=\"details(place)\" *ngFor=\"let place of places\">\n\t\t\t\t\t<ion-avatar item-start>\n\t\t\t\t\t\t<img [src]=\"place.photo\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<h2>{{place.name}}</h2>\n\t\t\t\t\t<p>{{place.formatted_address}}</p>\n\t\t\t\t</ion-item>\n      </ion-list>\n      <button color=\"fire\" ion-button block style=\"height: 10%;\" (click)=\"loadMore()\">Tampilkan lebih banyak</button> \n    </ion-content>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__actions_attractions_actions__["a" /* AttractionsActions */],
        __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */]])
], AttractionsPage);

//# sourceMappingURL=attractions.js.map
// CONCATENATED MODULE: ./src/pages/attractions/attractions.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractionsPageModule", function() { return AttractionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
//# sourceMappingURL=11.js.map