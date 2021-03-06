webpackJsonp([14],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/begin2/begin2.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_recomm_actions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loading_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_common_util__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Begin2Page = (function () {
    function Begin2Page(navCtrl, store, recommActions, alertService, navParams, recommendationService, loadingService) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.recommActions = recommActions;
        this.alertService = alertService;
        this.navParams = navParams;
        this.recommendationService = recommendationService;
        this.loadingService = loadingService;
        this.questions = [];
        this.colsQuestions = [];
        this.prevColsQuestions = [];
        this.divider = 2;
        this.counter = 0;
        this.questionsValue = [];
        this.totalValue = 0;
        this.old = [];
        this.olds = [[]];
        this.assigned = [];
        this.selected = [];
        this.lastPage = false;
        this.names = [];
        this.places = [];
        this.prevPlaces = [[]];
        this.consoleObject = function (str, obj) { return console.log(str, JSON.parse(JSON.stringify(obj))); };
        this.questionsValue = this.navParams.get("selected");
        this.prevSelected = this.navParams.get("names");
        this.counter = 0;
        // console.log("COUNTER", this.counter, "DATA", this.navParams.get("loaded"));
        this.loadQuestions();
    }
    Begin2Page.prototype.reset = function () {
        this.navCtrl.setRoot('MethodSelectionPage');
    };
    Begin2Page.prototype.showPlaces = function () {
        this.sendData();
    };
    Begin2Page.prototype.next = function () {
        this.navigate();
    };
    Begin2Page.prototype.back = function () {
        this.questionsValue = [];
        // console.log("prevPlace1", this.prevPlaces[this.counter]);
        if (this.counter > 0) {
            this.counter -= 1;
            this.prevColsQuestions.pop();
            this.prevPlaces.pop();
            this.olds.pop();
            // console.log("back counter", this.counter);
            // console.log("prevPlace", this.prevPlaces[this.counter].length);
            this.colsQuestions = this.prevColsQuestions[this.counter];
        }
        else {
            // console.log("BACK TO ROOT");
            this.prevPlaces = [[]];
            this.colsQuestions = [];
            this.olds = [[]];
            this.navCtrl.pop();
        }
    };
    Begin2Page.prototype.findIndex = function (name) {
        return this.questionsValue.findIndex(function (obj) { return obj.name == name; });
    };
    Begin2Page.prototype.changeValue = function (name, value) {
        var realValue = value.value / 100;
        var idx = this.findIndex(name);
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
    Begin2Page.prototype.loadQuestions = function () {
        var _this = this;
        this.questions = [];
        this.loadingService.presentLoading();
        var i = 0;
        this.recommendationService.downPropagationV2(this.questionsValue).subscribe(function (questions) {
            _this.questionsValue = [];
            _this.colsQuestions = [];
            _this.old = questions.data;
            _this.olds[_this.counter] = questions.data;
            var askedNodes = questions.askedNodes;
            askedNodes.forEach(function (question) {
                _this.selected.push(question.name);
                if (i % _this.divider == 0) {
                    _this.questions = [];
                    for (var j = i; j < i + _this.divider; j++) {
                        if (askedNodes[j])
                            _this.questions.push({
                                name: askedNodes[j].name,
                                image: askedNodes[j].image,
                                description: askedNodes[j].description,
                                root: askedNodes[j].root
                            });
                    }
                    _this.colsQuestions.push({ cols: _this.questions });
                }
                i += 1;
            });
            _this.prevPlaces[_this.counter] = [];
            _this.prevColsQuestions.push(_this.colsQuestions);
            _this.loadingService.stopLoading();
            if (_this.colsQuestions.length == 0) {
                _this.store.dispatch(_this.recommActions.setUpdatedClass(_this.questionsValue));
                // this.navigate();
            }
        });
    };
    Begin2Page.prototype.loadUpwardQuestions = function () {
        var _this = this;
        this.questions = [];
        this.loadingService.presentLoading();
        var i = 0;
        var location = __WEBPACK_IMPORTED_MODULE_7__utils_common_util__["a" /* captureState */](this.store).user.location;
        var distance = __WEBPACK_IMPORTED_MODULE_7__utils_common_util__["a" /* captureState */](this.store).recomm.distance;
        var questionsValue = this.filterZero(this.questionsValue);
        var params = {
            // old: this.old,
            old: this.olds[this.counter - 1],
            assigned: questionsValue,
            userLocation: location,
            distance: distance
        };
        this.recommendationService.upPropagationV2(params).subscribe(function (questions) {
            _this.prevPlaces[_this.counter] = [];
            _this.questionsValue = [];
            _this.colsQuestions = [];
            _this.old = questions.old;
            _this.olds[_this.counter] = questions.old;
            _this.prevPlaces[_this.counter] = questions.places;
            // console.log("prevPlaces on next", this.prevPlaces[this.counter], this.prevPlaces.length);
            var askedNodes = questions.askedNodes;
            askedNodes.forEach(function (question) {
                _this.selected.push(question.name);
                if (i % _this.divider == 0) {
                    _this.questions = [];
                    for (var j = i; j < i + _this.divider; j++) {
                        if (askedNodes[j])
                            _this.questions.push({
                                name: askedNodes[j].name,
                                image: askedNodes[j].image,
                                description: askedNodes[j].description,
                                root: askedNodes[j].root
                            });
                    }
                    _this.colsQuestions.push({ cols: _this.questions });
                }
                i += 1;
            });
            _this.prevColsQuestions.push(_this.colsQuestions);
            _this.loadingService.stopLoading();
            // console.log("colsQuestions", this.colsQuestions.length);
            if (_this.colsQuestions.length == 0) {
                _this.store.dispatch(_this.recommActions.setUpdatedClass(_this.questionsValue));
                // this.showPlaces();
            }
            else {
            }
        });
    };
    Begin2Page.prototype.filterZero = function (questionsValue) {
        return questionsValue.filter(function (q) { return q.pref > 0; });
    };
    Begin2Page.prototype.sendData = function () {
        // console.log("SEND DATA", this.prevPlaces[this.counter]);
        this.navCtrl.push('ResultSelectionPage', {
            places: this.prevPlaces[this.counter]
        });
    };
    Begin2Page.prototype.navigate = function () {
        var _this = this;
        var passed = false;
        var questionsValue = this.filterZero(this.questionsValue);
        var value = 0;
        var yes = false;
        questionsValue.forEach(function (node) {
            value += node.pref;
        });
        passed = true;
        var names = questionsValue.map(function (q) { return q.name; });
        var location = __WEBPACK_IMPORTED_MODULE_7__utils_common_util__["a" /* captureState */](this.store).user.location;
        var distance = __WEBPACK_IMPORTED_MODULE_7__utils_common_util__["a" /* captureState */](this.store).recomm.distance;
        var params = {
            old: this.old,
            assigned: questionsValue,
            userLocation: location,
            distance: distance
        };
        // console.log("UP", params);
        // console.log("VALUE", value);
        if (value <= 0) {
            if (this.prevPlaces[this.counter].length > 0) {
                this.alertService.presentAlertWithCallback("", "Anda yakin tidak memperbarui preferensi anda? Hasil rekomendasi akan langsung ditampilkan.", "Tidak Yakin", "Yakin")
                    .then(function (status) {
                    if (status) {
                        _this.sendData();
                    }
                });
            }
            else {
                this.alertService.presentAlert("", "Harap set prioritas minimal pada satu kategori terlebih dahulu untuk mendapatkan rekomendasi.");
            }
        }
        else {
            this.counter += 1;
            // console.log("next counter", this.counter);
            // console.log("next before", this.prevPlaces[this.counter]);
            this.prevPlaces[this.counter] = [];
            this.olds[this.counter] = [];
            // console.log("next after", this.prevPlaces[this.counter]);
            this.loadUpwardQuestions();
        }
    };
    return Begin2Page;
}());
Begin2Page = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-begin2',
        template: "\n    <ion-header>\n      <ion-toolbar color=\"sky\">\n        <ion-title>\n          Model Interaksi 2\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n\n      <div *ngIf=\"prevPlaces[counter].length == 0 && colsQuestions.length == 0\" style=\"text-align: center; padding: 10px\">\n        <p>Tidak ditemukan rekomendasi dalam preferensi anda, ingin mengulangi proses rekomendasi dari awal?</p>\n        <button (click)=\"reset()\" color=\"fire\" ion-button icon-left>\n          <ion-icon name=\"refresh\"></ion-icon>\n          Ulangi Proses Rekomendasi\n        </button>\n      </div>\n      <div *ngIf=\"prevPlaces[counter].length > 0\">\n        <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">\n          <b>{{prevPlaces[counter].length}}</b> Rekomendasi tempat wisata ditemukan\n        </h6>\n        <div style=\"margin: 0 auto; display: flex; justify-content: center;\">\n          <button ion-button color=\"fire\" (click)=\"showPlaces()\">\n            Tampilkan\n          </button>\n        </div>\n        <br>\n        <div class=\"strike\" *ngIf=\"colsQuestions.length > 0\">\n          <span><i>Atau</i></span>\n        </div>\n      </div>\n      <div *ngIf=\"colsQuestions.length > 0\">\n        <h6 *ngIf=\"prevPlaces[counter].length > 0\" ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">\n          Jika hasil rekomendasi masih belum sesuai, <br> \n          perbarui lagi tingkat prioritas anda <br> \n          pada kategori dibawah ini\n        </h6>\n        <h6 *ngIf=\"prevPlaces[counter].length == 0\" ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">\n          Perbarui lagi tingkat prioritas anda <br> \n          pada kategori dibawah ini\n        </h6>\n        <ion-grid>\n          <ion-row *ngFor=\"let cols of colsQuestions\">\n            <ion-col col-6 *ngFor=\"let col of cols.cols\">\n              <ion-card>\n                <img style=\"width: 100%;\" [src]=\"col.image\">\n                <div class=\"card-title\">{{col.name}}</div>\n                <div class=\"card-subtitle\"\n                     *ngIf=\"findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0\">\n                  {{questionsValue[findIndex(col.name)].pref * 100}}\n                </div>\n                <ion-range\n                  step=\"10\"\n                  style=\"top: 15% !important\"\n                  class=\"card-title\"\n                  (ionChange)=\"changeValue(col.name, $event)\"\n                  color=\"danger\"\n                  pin=\"true\">\n                </ion-range>\n                <button style=\"font-size: smaller\"\n                        (click)=\"col.showDesc = !col.showDesc\"\n                        ion-button clear small\n                        color=\"fire\" icon-start>\n                  <ion-icon *ngIf=\"!col.showDesc\" name='arrow-dropdown'></ion-icon>\n                  <ion-icon *ngIf=\"col.showDesc\" name='arrow-dropup'></ion-icon>\n                  Deskripsi\n                </button>\n              </ion-card>\n              <ion-card *ngIf=\"col.showDesc\">\n                <p style=\"padding: 10px; font-size: smaller;\">\n                  {{col.description}}\n                </p>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button block outline color=\"fire\" (click)=\"back()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n              &nbsp;Sebelumnya\n            </button>\n          </ion-col>\n          <ion-col col-6>\n            <button *ngIf=\"colsQuestions.length > 0\" full ion-button color=\"fire\" (click)=\"next()\">\n              Lanjut&nbsp;\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </button>\n            <button *ngIf=\"colsQuestions.length <= 0\" disabled full ion-button color=\"fire\" (click)=\"next()\">\n              Lanjut&nbsp;\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </button>\n            <!--<button full ion-button color=\"fire\" (click)=\"next()\">-->\n              <!--Lanjut&nbsp;-->\n              <!--<ion-icon name=\"arrow-forward\"></ion-icon>-->\n            <!--</button>-->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_3__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_6__services_loading_service__["a" /* LoadingService */]])
], Begin2Page);

//# sourceMappingURL=begin2.js.map
// CONCATENATED MODULE: ./src/pages/begin2/begin2.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Begin2PageModule", function() { return Begin2PageModule; });
/* harmony import */ var begin2_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var begin2_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var begin2_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Begin2PageModule = (function () {
    function Begin2PageModule() {
    }
    return Begin2PageModule;
}());
Begin2PageModule = begin2_module___decorate([
    begin2_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [Begin2Page],
        imports: [begin2_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(Begin2Page)],
        entryComponents: [Begin2Page]
    })
], Begin2PageModule);

//# sourceMappingURL=begin2.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map