webpackJsonp([10],{

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/begin/begin.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recommendation_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_common_util__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_recomm_actions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_alert_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BeginPage = (function () {
    function BeginPage(navCtrl, store, recommActions, alertService, navParams, recommendationService, loadingService) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.recommActions = recommActions;
        this.alertService = alertService;
        this.navParams = navParams;
        this.recommendationService = recommendationService;
        this.loadingService = loadingService;
        this.questions = [];
        this.colsQuestions = [];
        this.divider = 2;
        this.counter = 0;
        this.questionsValue = [];
        this.totalValue = 0;
        this.old = [];
        this.assigned = [];
        this.selected = [];
        this.lastPage = false;
        this.names = [];
        this.consoleObject = function (str, obj) { return console.log(str, JSON.parse(JSON.stringify(obj))); };
        this.questionsValue = this.navParams.get("selected");
        this.prevSelected = this.navParams.get("names");
        console.log("DATA", this.navParams.get("loaded"));
        this.loadQuestions();
    }
    BeginPage.prototype.next = function () { };
    BeginPage.prototype.back = function () { };
    BeginPage.prototype.findIndex = function (name) {
        return this.questionsValue.findIndex(function (obj) { return obj.name == name; });
    };
    BeginPage.prototype.changeValue = function (name, value) {
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
        ;
    };
    BeginPage.prototype.loadQuestions = function () {
        var _this = this;
        this.questions = [];
        this.loadingService.presentLoading();
        var i = 0;
        this.recommendationService.downPropagation(this.questionsValue).subscribe(function (questions) {
            _this.questionsValue = [];
            _this.colsQuestions = [];
            _this.old = questions.data;
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
            _this.loadingService.stopLoading();
            if (_this.colsQuestions.length == 0) {
                _this.store.dispatch(_this.recommActions.setUpdatedClass(_this.questionsValue));
                // this.navigate();
            }
        });
    };
    BeginPage.prototype.filterZero = function (questionsValue) {
        return questionsValue.filter(function (q) { return q.pref > 0; });
    };
    BeginPage.prototype.sendData = function (params) {
        console.log("SEND DATA", params);
        this.navCtrl.push('ResultSelectionPage', {
            params: params
        });
    };
    BeginPage.prototype.navigate = function () {
        var _this = this;
        var passed = false;
        var questionsValue = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["b" /* filterZero */](this.questionsValue, "pref");
        var value = 0;
        var yes = false;
        questionsValue.forEach(function (node) {
            value += node.pref;
        });
        passed = true;
        var names = questionsValue.map(function (q) { return q.name; });
        var location = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["a" /* captureState */](this.store).user.location;
        var distance = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["a" /* captureState */](this.store).recomm.distance;
        var params = {
            old: this.old,
            assigned: questionsValue,
            userLocation: location,
            distance: distance
        };
        console.log("UP", params);
        if (value <= 0) {
            this.alertService.presentAlertWithCallback("", "Anda yakin tidak memperbarui preferensi anda?", "Tidak Yakin", "Yakin")
                .then(function (status) {
                if (status) {
                    _this.sendData(params);
                }
            });
        }
        else {
            this.sendData(params);
        }
    };
    return BeginPage;
}());
BeginPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"]({
        selector: 'page-begin',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <ion-title>Rekomendasi</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">\n        Perbarui tingkat prioritas anda <br> pada kategori dibawah ini\n      </h6>\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card>\n              <img style=\"width: 100%;\" [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n              <div class=\"card-subtitle\" *ngIf=\"findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0\">{{questionsValue[findIndex(col.name)].pref * 100}}</div>\n              <ion-range \n                step=\"10\" \n                style=\"top: 15% !important\" \n                class=\"card-title\" \n                (ionChange)=\"changeValue(col.name, $event)\" \n                color=\"danger\" \n                pin=\"true\">\n              </ion-range>\n              <button style=\"font-size: smaller\" (click)=\"col.showDesc = !col.showDesc\" ion-button clear small color=\"fire\" icon-start>\n                <ion-icon *ngIf=\"!col.showDesc\" name='arrow-dropdown'></ion-icon>\n                <ion-icon *ngIf=\"col.showDesc\" name='arrow-dropup'></ion-icon>\n                Deskripsi\n              </button>\n            </ion-card>\n            <ion-card *ngIf=\"col.showDesc\">\n              <p style=\"padding: 10px; font-size: smaller;\">\n                {{col.description}}\n              </p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </ion-content> \n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">\n        <p>Lanjut</p>\n      </button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_6__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_7__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */]])
], BeginPage);

//# sourceMappingURL=begin.js.map
// CONCATENATED MODULE: ./src/pages/begin/begin.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginPageModule", function() { return BeginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var begin_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BeginPageModule = (function () {
    function BeginPageModule() {
    }
    return BeginPageModule;
}());
BeginPageModule = begin_module___decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [BeginPage],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(BeginPage)],
        entryComponents: [BeginPage]
    })
], BeginPageModule);

//# sourceMappingURL=begin.module.js.map

/***/ }),

/***/ 99:
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

/***/ })

});
//# sourceMappingURL=10.js.map