webpackJsonp([7],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_common_util__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExplanationPage = (function () {
    function ExplanationPage(platform, params, viewCtrl, loadingCtrl, store) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.zoom = 12;
        this.explanation = params.get("explanation");
        this.defaultLocation = __WEBPACK_IMPORTED_MODULE_2__utils_common_util__["a" /* captureState */](this.store).user.defaultLocation;
    }
    ExplanationPage.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    ExplanationPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    ExplanationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ExplanationPage;
}());
ExplanationPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-explanation',
        template: "\n    <ion-header>\n        <ion-toolbar color=\"sky\">\n            <ion-title>\n            Penjelasan\n            </ion-title>\n            <ion-buttons start>\n            <button ion-button (click)=\"dismiss()\">\n                <span ion-text color=\"light\" showWhen=\"ios\">Tutup</span>\n                <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n            </button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <p style=\"padding: 10px\">\n        Sistem akan mendeteksi secara otomatis lokasi anda sekarang. Jika anda tidak sedang berada\n        di sekitar Bandung, maka sistem akan menganggap lokasi anda adalah\n        di pusat kota Bandung. Sehingga sistem akan tetap bisa memberikan rekomendasi.\n      </p>\n      <p style=\"text-align: center\">Titik Pusat Bandung</p>\n      <sebm-google-map [zoom]=\"zoom\" [latitude]=\"defaultLocation.lat\" [longitude]=\"defaultLocation.lng\">\n        <sebm-google-map-marker [latitude]=\"defaultLocation.lat\" [longitude]=\"defaultLocation.lng\"></sebm-google-map-marker>\n      </sebm-google-map>\n    </ion-content>\n  ",
        styles: ["\n    .sebm-google-map-container {\n      height: 500px;\n      width: 100%;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
], ExplanationPage);

//# sourceMappingURL=explanation.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/recommendation/recommendation.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_util__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_alert_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loading_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__explanation_explanation__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RecommendationPage = (function () {
    function RecommendationPage(navCtrl, store, recommActions, navParams, recommendationService, alertService, loadingService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.recommActions = recommActions;
        this.navParams = navParams;
        this.recommendationService = recommendationService;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.modalCtrl = modalCtrl;
        this.questions = [];
        this.colsQuestions = [];
        this.questionsValue = [];
        this.distance = 35;
        this.mode = 1;
        this.divider = 2;
        this.selected = [];
        this.mode = this.navParams.get("mode");
        // console.log("MODE", this.mode);
        this.loadQuestions("tempat wisata");
    }
    RecommendationPage.prototype.findIndex = function (name) {
        return this.questionsValue.findIndex(function (obj) { return obj.name == name; });
    };
    RecommendationPage.prototype.explain = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__explanation_explanation__["a" /* ExplanationPage */], {
            explanation: {}
        });
        modal.present();
    };
    RecommendationPage.prototype.changeValue = function (name, value) {
        var realValue = value.value / 100;
        var idx = __WEBPACK_IMPORTED_MODULE_5__utils_common_util__["c" /* findIndex */](this.questionsValue, "name", name);
        if (idx != -1)
            this.questionsValue[idx].pref = realValue;
        else {
            this.questionsValue.push({
                name: name,
                pref: realValue,
                conf: 1
            });
        }
    };
    RecommendationPage.prototype.loadQuestions = function (node) {
        var _this = this;
        this.questions = [];
        this.loadingService.presentLoading();
        var i = 0;
        this.recommendationService.getChildren(node).subscribe(function (questions) {
            _this.colsQuestions = [];
            questions.forEach(function (question) {
                _this.selected.push(question.name);
                if (i % _this.divider == 0) {
                    _this.questions = [];
                    for (var j = i; j < i + _this.divider; j++) {
                        if (questions[j])
                            _this.questions.push({
                                name: questions[j].name, image: questions[j].image,
                                description: questions[j].description, root: questions[j].root,
                                showDesc: false
                            });
                    }
                    _this.colsQuestions.push({ cols: _this.questions });
                }
                i += 1;
            });
            _this.loadingService.stopLoading();
            if (_this.colsQuestions.length == 0) {
                _this.store.dispatch(_this.recommActions.selectRootClass(_this.selected));
                _this.navigate();
            }
        });
    };
    RecommendationPage.prototype.navigate = function () {
        var passed = false;
        var questionsValue = __WEBPACK_IMPORTED_MODULE_5__utils_common_util__["b" /* filterZero */](this.questionsValue, "pref");
        if (__WEBPACK_IMPORTED_MODULE_5__utils_common_util__["d" /* isFormFilled */]({ selected: questionsValue })) {
            var value_1 = 0;
            questionsValue.forEach(function (node) {
                value_1 += node.pref;
            });
            if (value_1 > 0) {
                passed = true;
                var names = questionsValue.map(function (q) { return q.name; });
                this.store.dispatch(this.recommActions.setDistance(this.distance));
                var page = '';
                if (this.mode == 1)
                    page = 'BeginPage';
                else
                    page = 'Begin2Page';
                this.navCtrl.push(page, {
                    selected: questionsValue,
                    names: [names],
                    loaded: this.colsQuestions
                });
            }
        }
        if (!passed)
            this.alertService.presentAlert("", "Harap tentukan tingkat prioritas minimal pada satu kategori");
    };
    return RecommendationPage;
}());
RecommendationPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        selector: 'page-recommendation',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Model Interaksi {{mode}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">\n        Tentukan tingkat prioritas anda pada<br>\n        kategori tempat wisata dibawah ini dengan skala 1-100\n      </h6>\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card>\n              <img style=\"width: 100%;\" [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n              <div class=\"card-subtitle\"\n                   *ngIf=\"findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0\">\n                {{questionsValue[findIndex(col.name)].pref * 100}}\n              </div>\n              <ion-range\n                step=\"10\"\n                style=\"top: 15% !important\"\n                class=\"card-title\"\n                (ionChange)=\"changeValue(col.name, $event)\"\n                color=\"danger\"\n                pin=\"true\">\n              </ion-range>\n              <button style=\"font-size: smaller\" (click)=\"col.showDesc = !col.showDesc\" ion-button clear small\n                      color=\"fire\" icon-start>\n                <ion-icon *ngIf=\"!col.showDesc\" name='arrow-dropdown'></ion-icon>\n                <ion-icon *ngIf=\"col.showDesc\" name='arrow-dropup'></ion-icon>\n                Deskripsi\n              </button>\n            </ion-card>\n            <ion-card *ngIf=\"col.showDesc\">\n              <p style=\"padding: 10px; font-size: smaller;\">\n                {{col.description}}\n              </p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <!--<ion-card>-->\n              <!--<ion-card-content>-->\n                <!--<p style=\"text-align: center\">-->\n                  <!--Sistem akan mendeteksi apakah anda berada di area sekitar Bandung atau tidak,-->\n                  <!--<button ion-button color=\"fire\" clear>selengkapnya</button>-->\n                <!--</p>-->\n              <!--</ion-card-content>-->\n            <!--</ion-card>-->\n            <ion-item>\n              <p style=\"text-align: center\">\n                Jarak maksimal anda dengan tempat wisata\n                <button (click)=\"explain()\" clear ion-button color=\"fire\" icon-only>\n                  <ion-icon name=\"help-circle\"></ion-icon>\n                </button>\n                <br> {{distance}} Km\n\n              </p>\n\n            </ion-item>\n            <ion-item>\n              <ion-range step=\"5\" min=\"5\" [(ngModel)]=\"distance\">\n                <ion-icon range-left name=\"people\"></ion-icon>\n                <ion-icon range-right name=\"flag\"></ion-icon>\n              </ion-range>\n            </ion-item>\n            <!--<ion-item>-->\n            <!--<p style=\"text-align: center\">{{distance}} Km</p>-->\n            <!--</ion-item>-->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">\n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Lanjut</button>\n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_6__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_7__services_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]])
], RecommendationPage);

//# sourceMappingURL=recommendation.js.map
// CONCATENATED MODULE: ./src/pages/recommendation/recommendation.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationPageModule", function() { return RecommendationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var recommendation_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecommendationPageModule = (function () {
    function RecommendationPageModule() {
    }
    return RecommendationPageModule;
}());
RecommendationPageModule = recommendation_module___decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [RecommendationPage],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(RecommendationPage)
        ],
        entryComponents: [RecommendationPage]
    })
], RecommendationPageModule);

//# sourceMappingURL=recommendation.module.js.map

/***/ })

});
//# sourceMappingURL=7.js.map