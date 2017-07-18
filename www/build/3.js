webpackJsonp([3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__begin_begin__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_common_util__ = __webpack_require__(94);
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
    function RecommendationPage(navCtrl, store, recommActions, alertCtrl, recommendationService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.recommActions = recommActions;
        this.alertCtrl = alertCtrl;
        this.recommendationService = recommendationService;
        this.loadingCtrl = loadingCtrl;
        this.questions = [];
        this.colsQuestions = [];
        this.questionsValue = [];
        this.divider = 2;
        this.selected = [];
        this.loadQuestions("tempat wisata");
    }
    RecommendationPage.prototype.findIndex = function (name) {
        return this.questionsValue.findIndex(function (obj) { return obj.name == name; });
    };
    RecommendationPage.prototype.filterZero = function (questionsValue) {
        return questionsValue.filter(function (q) { return q.pref > 0; });
    };
    RecommendationPage.prototype.changeValue = function (name, value) {
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
    RecommendationPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Failed',
            message: 'Please set preference value at least on one category',
            buttons: ['OK']
        });
        alert.present();
    };
    RecommendationPage.prototype.loadQuestions = function (node) {
        var _this = this;
        this.questions = [];
        this.presentLoading();
        var i = 0;
        this.recommendationService.getChildren(node).subscribe(function (questions) {
            _this.colsQuestions = [];
            questions.forEach(function (question) {
                _this.selected.push(question.name);
                if (i % _this.divider == 0) {
                    _this.questions = [];
                    for (var j = i; j < i + _this.divider; j++) {
                        if (questions[j])
                            _this.questions.push({ name: questions[j].name, image: questions[j].image });
                    }
                    _this.colsQuestions.push({ cols: _this.questions });
                }
                i += 1;
            });
            _this.stopLoading();
            if (_this.colsQuestions.length == 0) {
                _this.store.dispatch(_this.recommActions.selectRootClass(_this.selected));
                _this.navigate();
            }
        });
    };
    RecommendationPage.prototype.navigate = function () {
        var passed = false;
        var questionsValue = this.filterZero(this.questionsValue);
        if (__WEBPACK_IMPORTED_MODULE_6__utils_common_util__["b" /* isFormFilled */]({ selected: questionsValue })) {
            var value_1 = 0;
            questionsValue.forEach(function (node) {
                value_1 += node.pref;
            });
            if (value_1 > 0) {
                passed = true;
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__begin_begin__["a" /* BeginPage */], { selected: questionsValue });
            }
        }
        if (!passed)
            this.showAlert();
    };
    RecommendationPage.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    RecommendationPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    return RecommendationPage;
}());
RecommendationPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        selector: 'page-recommendation',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Recommender</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">Set your preference value for each category</h6>\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card>\n              <img style=\"width: 100%;\" [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n              <div class=\"card-subtitle\" *ngIf=\"findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0\">{{questionsValue[findIndex(col.name)].pref * 100}}</div>\n              <ion-range \n                step=\"10\" \n                style=\"top: 30% !important\" \n                class=\"card-title\" \n                (ionChange)=\"changeValue(col.name, $event)\" \n                color=\"danger\" \n                pin=\"true\">\n              </ion-range>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </ion-content> \n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Next</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]) === "function" && _f || Object])
], RecommendationPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=recommendation.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recommendation_recommendation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_util__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, userService, loadingCtrl, navParams, alertCtrl, store) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.store = store;
        this.rating = navParams.get("rate");
    }
    FeedbackPage.prototype.showAlert = function (title, message) {
        if (title === void 0) { title = "Failed"; }
        if (message === void 0) { message = "Please fill all required field first"; }
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: ['OK']
        });
        alert.present();
    };
    FeedbackPage.prototype.navigate = function () {
        var _this = this;
        this.ip = __WEBPACK_IMPORTED_MODULE_5__utils_common_util__["a" /* captureState */](this.store).user.ipApi.ip;
        if (!this.ip)
            this.ip = "-";
        var params = {
            id: 0,
            user_agent: navigator.userAgent,
            platform: navigator.platform,
            ip: this.ip,
            city: this.city,
            name: this.name,
            gender: this.gender,
            age: Number(this.age),
            profession: this.profession,
            univ: this.univ,
            majors: this.majors,
            rating: this.rating
        };
        if (__WEBPACK_IMPORTED_MODULE_5__utils_common_util__["b" /* isFormFilled */](params)) {
            this.presentLoading();
            this.userService.addFeedback(params).subscribe(function (feedback) {
                _this.stopLoading();
                _this.showAlert("Thank You", "Thank you " + params.name + " for participating this survey, have a good day!");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__recommendation_recommendation__["a" /* RecommendationPage */]);
            });
        }
        else
            this.showAlert();
    };
    FeedbackPage.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    FeedbackPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    return FeedbackPage;
}());
FeedbackPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"]({
        selector: 'page-feedback',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Feedback</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n            <ion-list>\n                <ion-item [(ngModel)]=\"name\">\n                    <ion-label color=\"primary\" stacked>Name</ion-label>\n                    <ion-input placeholder=\"Full name\"></ion-input>\n                </ion-item>\n            </ion-list>\n            <ion-card>\n                <ion-list radio-group [(ngModel)]=\"gender\">\n                    <ion-list-header>\n                        Gender\n                    </ion-list-header>\n                    <ion-item>\n                        <ion-label>Male</ion-label>\n                        <ion-radio value=\"male\"></ion-radio>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Female</ion-label>\n                        <ion-radio value=\"female\"></ion-radio>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n            <ion-list>\n                <ion-item [(ngModel)]=\"city\">\n                    <ion-label color=\"primary\" stacked>City</ion-label>\n                    <ion-input placeholder=\"e.g. Bandung\"></ion-input>\n                </ion-item>\n                <ion-item [(ngModel)]=\"age\">\n                    <ion-label color=\"primary\" stacked>Age</ion-label>\n                    <ion-input type=\"number\" placeholder=\"e.g. 17\"></ion-input>\n                </ion-item>\n                <ion-item [(ngModel)]=\"profession\">\n                    <ion-label color=\"primary\" stacked>Profession</ion-label>\n                    <ion-input placeholder=\"e.g. Software engineer\"></ion-input>\n                </ion-item>\n                <ion-item [(ngModel)]=\"univ\">\n                    <ion-label color=\"primary\" stacked>University</ion-label>\n                    <ion-input placeholder=\"e.g. Telkom University\"></ion-input>\n                </ion-item>\n                <ion-item [(ngModel)]=\"majors\">\n                    <ion-label color=\"primary\" stacked>Majors</ion-label>\n                    <ion-input placeholder=\"e.g. Computer Science\"></ion-input>\n                </ion-item>\n            </ion-list>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">        \n        <button style=\"height: 100%;\" ion-button block color=\"fire\" (click)=navigate() >Submit</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feedback__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedbackPageModule = (function () {
    function FeedbackPageModule() {
    }
    return FeedbackPageModule;
}());
FeedbackPageModule = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"]({
        declarations: [__WEBPACK_IMPORTED_MODULE_0__feedback__["a" /* FeedbackPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__feedback__["a" /* FeedbackPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_0__feedback__["a" /* FeedbackPage */]]
    })
], FeedbackPageModule);

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isFormFilled;
/* unused harmony export objStatus */
/* unused harmony export removeDuplicates */
/* unused harmony export isEmptyObject */
/* harmony export (immutable) */ __webpack_exports__["a"] = captureState;
/* unused harmony export appendState */
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
//# sourceMappingURL=common.util.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_recomm_actions__ = __webpack_require__(22);
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
    function BeginPage(navCtrl, store, recommActions, alertCtrl, navParams, recommendationService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.recommActions = recommActions;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.recommendationService = recommendationService;
        this.loadingCtrl = loadingCtrl;
        this.questions = [];
        this.colsQuestions = [];
        this.divider = 2;
        this.counter = 0;
        this.questionsValue = [];
        this.selected = [];
        this.lastPage = false;
        this.consoleObject = function (str, obj) { return console.log(str, JSON.parse(JSON.stringify(obj))); };
        this.questionsValue = this.navParams.get("selected");
        console.log("DATA", this.questionsValue);
        this.loadQuestions();
    }
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
    };
    BeginPage.prototype.loadQuestions = function () {
        var _this = this;
        this.questions = [];
        this.presentLoading();
        var i = 0;
        this.recommendationService.downPropagation(this.questionsValue).subscribe(function (questions) {
            _this.colsQuestions = [];
            var askedNodes = questions.askedNodes;
            askedNodes.forEach(function (question) {
                _this.selected.push(question.name);
                if (i % _this.divider == 0) {
                    _this.questions = [];
                    for (var j = i; j < i + _this.divider; j++) {
                        if (askedNodes[j])
                            _this.questions.push({ name: askedNodes[j].name, image: askedNodes[j].image });
                    }
                    _this.colsQuestions.push({ cols: _this.questions });
                }
                i += 1;
            });
            _this.stopLoading();
            if (_this.colsQuestions.length == 0) {
                _this.store.dispatch(_this.recommActions.setUpdatedClass(_this.questionsValue));
                // this.navigate();
            }
        });
    };
    BeginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Failed',
            message: 'Please at least select one type',
            buttons: ['OK']
        });
        alert.present();
    };
    BeginPage.prototype.navigate = function () {
    };
    BeginPage.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    BeginPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    return BeginPage;
}());
BeginPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-begin',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <ion-title>Recommender</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">Update your preference</h6>\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card>\n              <img style=\"width: 100%;\" [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n              <div class=\"card-subtitle\" *ngIf=\"findIndex(col.name) != -1\">{{questionsValue[findIndex(col.name)].pref * 100}}</div>\n              <ion-range \n                step=\"10\" \n                style=\"top: 30% !important\" \n                class=\"card-title\" \n                (ionChange)=\"changeValue(col.name, $event)\" \n                color=\"danger\" \n                pin=\"true\">\n              </ion-range>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </ion-content> \n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Next</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__actions_recomm_actions__["a" /* RecommActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__actions_recomm_actions__["a" /* RecommActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__["a" /* RecommendationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__["a" /* RecommendationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _g || Object])
], BeginPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=begin.js.map

/***/ })

});
//# sourceMappingURL=3.js.map