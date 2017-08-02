webpackJsonp([13],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/method.selection/method.selection.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_recomm_actions__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MethodSelectionPage = (function () {
    function MethodSelectionPage(navCtrl, store, recommActions) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.recommActions = recommActions;
        this.statusMode1 = "incomplete";
        this.statusMode2 = "incomplete";
        this.incomplete = true;
        this.comparisonCaption = "Mohon jalankan kedua model diatas terlebih dahulu";
        this.model1StatusCaption = "Belum diselesaikan";
        this.model2StatusCaption = "Belum diselesaikan";
        this.statusMode1$ = this.store.select(function (s) { return s.recomm.statusMode1; });
        this.statusMode2$ = this.store.select(function (s) { return s.recomm.statusMode2; });
        this.statusComparison$ = this.store.select(function (s) { return s.recomm.statusComparison; });
    }
    MethodSelectionPage.prototype.navigate = function (mode) {
        if (mode == 3)
            this.navCtrl.push('PostFeedbackPage');
        else {
            this.store.dispatch(this.recommActions.setMode(mode));
            this.navCtrl.push('RecommendationPage', {
                mode: mode
            });
        }
    };
    return MethodSelectionPage;
}());
MethodSelectionPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-method-selection',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>\n          Model Rekomendasi\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <h6 ion-text style=\"padding: 10px; text-align: center; font-size: small;\" color=\"ocean\" class=\"highlight\">\n        Aplikasi ini menggunakan dua model interaksi<br>\n        untuk merekomendasikan destinasi wisata. <br>\n        Mohon kesediannya untuk mencoba <br> \n        kedua model interaksi ini.\n      </h6>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-card>\n              <ion-card-content>\n                Model 1\n              </ion-card-content>\n              <ion-row no-padding>\n                <ion-col text-left>\n                  <button (click)=\"navigate(1)\" color=\"fire\" ion-button icon-right>\n                    Mulai Model 1\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row padding>\n                <ion-col text-left *ngIf=\"(statusMode1$ | async) == 'incomplete'\">\n                  <p class=\"incomplete\"><ion-icon name=\"close-circle\"></ion-icon>\n                  Belum diselesaikan</p>\n                </ion-col>\n                <ion-col text-left *ngIf=\"(statusMode1$ | async) == 'completed'\">\n                  <p class=\"complete\"><ion-icon name=\"checkmark-circle\"></ion-icon>\n                  Sudah diselesaikan</p>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6>\n            <ion-card>\n              <ion-card-content>\n                Model 2\n              </ion-card-content>\n              <ion-row no-padding>\n                <ion-col text-left>\n                  <button (click)=\"navigate(2)\" color=\"fire\" ion-button icon-right>\n                    Mulai Model 2\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row padding>\n                <ion-col text-left *ngIf=\"(statusMode2$ | async) == 'incomplete'\">\n                  <p class=\"incomplete\"><ion-icon name=\"close-circle\"></ion-icon>\n                  Belum diselesaikan</p>\n                </ion-col>\n                <ion-col text-left *ngIf=\"(statusMode2$ | async) == 'completed'\">\n                  <p class=\"complete\"><ion-icon name=\"checkmark-circle\"></ion-icon>\n                  Sudah diselesaikan</p>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-card style=\"text-align: center\">\n              <ion-card-content>\n                  <h6 ion-text style=\"padding: 10px; \n                    text-align: center; \n                    font-size: small;\" \n                    color=\"ocean\" \n                    class=\"highlight\">\n                    Mohon isi survei dibawah ini, survei tentang perbandingan kedua model diatas. <br>\n                    <p *ngIf=\"(statusMode1$ | async) != 'completed' || (statusMode2$ | async) != 'completed'\"><i>Anda harus menjalankan kedua model diatas terlebih dahulu.</i></p>\n                  </h6>\n                  <button [disabled]=\"!((statusMode1$ | async) == 'completed' && (statusMode2$ | async) == 'completed')\" (click)=\"navigate(3)\" color=\"fire\" ion-button icon-right>\n                    Survei Perbandingan Model\n                  </button>\n\n              </ion-card-content>\n\n              <ion-row padding>\n                <ion-col text-left *ngIf=\"(statusComparison$ | async) == 'incomplete'\">\n                  <p style=\"text-align: center\" class=\"incomplete\"><ion-icon name=\"close-circle\"></ion-icon>\n                    Belum diselesaikan</p>\n                </ion-col>\n                <ion-col text-left *ngIf=\"(statusComparison$ | async) == 'completed'\">\n                  <p style=\"text-align: center\" class=\"complete\"><ion-icon name=\"checkmark-circle\"></ion-icon>\n                    Sudah diselesaikan</p>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!--<p style=\"text-align: center; padding: 10px;\" *ngIf=\"(statusMode1$ | async) == 'completed' && (statusMode2$ | async) == 'completed'\">-->\n        <!--Terimakasih karena telah menjalankan dan mengisi survey pada kedua model diatas!-->\n      <!--</p>-->\n    </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_3__actions_recomm_actions__["a" /* RecommActions */]])
], MethodSelectionPage);

//# sourceMappingURL=method.selection.js.map
// CONCATENATED MODULE: ./src/pages/method.selection/method.selection.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodSelectionPageModule", function() { return MethodSelectionPageModule; });
/* harmony import */ var method_selection_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var method_selection_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var method_selection_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MethodSelectionPageModule = (function () {
    function MethodSelectionPageModule() {
    }
    return MethodSelectionPageModule;
}());
MethodSelectionPageModule = method_selection_module___decorate([
    method_selection_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [MethodSelectionPage],
        imports: [method_selection_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(MethodSelectionPage)],
        entryComponents: [MethodSelectionPage]
    })
], MethodSelectionPageModule);

//# sourceMappingURL=method.selection.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map