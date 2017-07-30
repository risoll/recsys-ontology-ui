webpackJsonp([6],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = isFormFilled;
/* unused harmony export objStatus */
/* unused harmony export removeDuplicates */
/* unused harmony export isEmptyObject */
/* harmony export (immutable) */ __webpack_exports__["a"] = captureState;
/* unused harmony export appendState */
/* harmony export (immutable) */ __webpack_exports__["c"] = findIndex;
/* harmony export (immutable) */ __webpack_exports__["b"] = filterZero;
function isFormFilled(obj) {
    var tmpStatus = true;
    if (obj instanceof Object) {
        for (var attr in obj) {
            tmpStatus = objStatus(obj[attr]);
            if (!tmpStatus)
                return false;
        }
    }
    return true;
}
function objStatus(obj) {
    // Handle the 3 simple types, and null or undefined
    if (obj === undefined) {
        return false;
    }
    if (obj.toString() === "NaN")
        return false;
    if (null == obj || "object" != typeof obj) {
        if (typeof obj == "string") {
            if (obj.length == 0)
                return false;
        }
        return true;
    }
    if (obj instanceof String) {
        return (obj.length > 0);
    }
    if (obj instanceof Number) {
        return true;
    }
    // Handle Array
    if (obj instanceof Array) {
        return (obj.length > 0);
    }
    // Handle Object
    if (obj instanceof Object) {
        return (isEmptyObject(obj) == false);
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}
function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};
    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}
function isEmptyObject(obj) {
    return (Object.keys(obj).length === 0);
}
function captureState(state$) {
    var state;
    var subs = state$.select(function (state) { return state; }).subscribe(function (x) { return state = x; });
    subs.unsubscribe();
    return state;
}
function appendState(state, data) {
    var tmp = state.slice();
    tmp.push(data);
    return tmp;
}
function findIndex(array, colName, value) {
    return array.findIndex(function (obj) { return obj[colName] == value; });
}
function filterZero(array, colName) {
    return array.filter(function (a) { return a[colName] > 0; });
}
//# sourceMappingURL=common.util.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/recommendation/recommendation.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_util__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_alert_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loading_service__ = __webpack_require__(41);
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
    function RecommendationPage(navCtrl, store, recommActions, navParams, recommendationService, alertService, loadingService) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.recommActions = recommActions;
        this.navParams = navParams;
        this.recommendationService = recommendationService;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.questions = [];
        this.colsQuestions = [];
        this.questionsValue = [];
        this.distance = 35;
        this.mode = 1;
        this.divider = 2;
        this.selected = [];
        this.mode = this.navParams.get("mode");
        console.log("MODE", this.mode);
        this.loadQuestions("tempat wisata");
    }
    RecommendationPage.prototype.findIndex = function (name) {
        return this.questionsValue.findIndex(function (obj) { return obj.name == name; });
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
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Rekomendasi Mode {{mode}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">\n        Tentukan tingkat prioritas anda pada<br>\n        kategori tempat wisata dibawah ini dengan skala 1-100\n      </h6>\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card>\n              <img style=\"width: 100%;\" [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n              <div class=\"card-subtitle\" *ngIf=\"findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0\">{{questionsValue[findIndex(col.name)].pref * 100}}</div>\n              <ion-range \n                step=\"10\" \n                style=\"top: 15% !important\" \n                class=\"card-title\" \n                (ionChange)=\"changeValue(col.name, $event)\" \n                color=\"danger\" \n                pin=\"true\">\n              </ion-range>\n              <button style=\"font-size: smaller\" (click)=\"col.showDesc = !col.showDesc\" ion-button clear small color=\"fire\" icon-start>\n                <ion-icon *ngIf=\"!col.showDesc\" name='arrow-dropdown'></ion-icon>\n                <ion-icon *ngIf=\"col.showDesc\" name='arrow-dropup'></ion-icon>\n                Deskripsi\n              </button>\n            </ion-card>\n            <ion-card *ngIf=\"col.showDesc\">\n              <p style=\"padding: 10px; font-size: smaller;\">\n                {{col.description}}\n              </p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <p style=\"text-align: center\">Jarak maksimal anda dengan tempat wisata <br> {{distance}} Km</p>\n            </ion-item>\n            <ion-item>\n              <ion-range step=\"5\" min=\"5\" [(ngModel)]=\"distance\">\n                <ion-icon range-left name=\"people\"></ion-icon>\n                <ion-icon range-right name=\"flag\"></ion-icon>\n              </ion-range>\n            </ion-item>\n            <!--<ion-item>-->\n              <!--<p style=\"text-align: center\">{{distance}} Km</p>-->\n            <!--</ion-item>-->\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </ion-content> \n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Lanjut</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_6__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_7__services_loading_service__["a" /* LoadingService */]])
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
//# sourceMappingURL=6.js.map