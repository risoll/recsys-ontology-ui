webpackJsonp([12],{

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/details/details.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_common_util__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsPage = (function () {
    function DetailsPage(store, navCtrl) {
        this.store = store;
        this.navCtrl = navCtrl;
        this.place = __WEBPACK_IMPORTED_MODULE_3__utils_common_util__["a" /* captureState */](this.store).attractions.selectedPlace;
        this.schedules = [
            // {name: "Monday", schedule: this.place.monday},
            // {name: "Tuesday", schedule: this.place.tuesday},
            // {name: "Wednesday", schedule: this.place.wednesday},
            // {name: "Thursday", schedule: this.place.thursday},
            // {name: "Friday", schedule: this.place.friday},
            // {name: "Saturday", schedule: this.place.saturday},
            // {name: "Sunday", schedule: this.place.sunday},
            { name: "Senin", schedule: this.place.monday },
            { name: "Selasa", schedule: this.place.tuesday },
            { name: "Rabu", schedule: this.place.wednesday },
            { name: "Kamis", schedule: this.place.thursday },
            { name: "Jumat", schedule: this.place.friday },
            { name: "Sabtu", schedule: this.place.saturday },
            { name: "Minggu", schedule: this.place.sunday },
        ];
    }
    return DetailsPage;
}());
DetailsPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"]({
        selector: 'page-details',
        template: "\n    <img style=\"width: 100%\" [src]=\"place.photo\"/>\n    <ion-card-content>\n        <ion-card-title>\n            {{place.name}}\n        </ion-card-title>\n        \n        <h6 ion-text color=\"primary\" style=\"font-size: small\">Deskripsi</h6>\n        <p>{{place.description}}</p>\n      \n        <h6 ion-text color=\"primary\" style=\"font-size: small\">Alamat</h6>\n        <p>{{place.formatted_address}}</p>\n      \n        <h6 ion-text color=\"primary\" style=\"font-size: small\">Telepon</h6>\n        <p>{{place.phone}}</p>\n        \n        <hr>\n        \n        <h6 ion-text color=\"primary\">Jam Buka dan Jam Tutup</h6>\n        <table>\n            <tr *ngFor=\"let schedule of schedules\">\n                <td>{{schedule.name}}</td>\n                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                <td>{{schedule.schedule}}</td>\n            </tr>\n        </table>\n\n        \n    </ion-card-content>\n    \n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]])
], DetailsPage);

//# sourceMappingURL=details.js.map
// CONCATENATED MODULE: ./src/pages/details/details.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var details_module___WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var details_module___WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var details_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = (function () {
    function DetailsPageModule() {
    }
    return DetailsPageModule;
}());
DetailsPageModule = details_module___decorate([
    details_module___WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"]({
        declarations: [DetailsPage],
        imports: [details_module___WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(DetailsPage)],
        entryComponents: [DetailsPage],
        exports: [
            DetailsPage
        ]
    })
], DetailsPageModule);

//# sourceMappingURL=details.module.js.map

/***/ })

});
//# sourceMappingURL=12.js.map