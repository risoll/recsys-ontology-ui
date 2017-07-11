webpackJsonp([2],{

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
        this.questionsValue = {};
        this.divider = 2;
        this.selected = [];
        this.loadQuestions("tempat wisata");
    }
    RecommendationPage.prototype.updateValue = function (name, value) {
        this.questionsValue[name] = {};
        this.questionsValue[name].pref = value.value / 100;
        this.questionsValue[name].conf = 1;
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
        var _this = this;
        var passed = false;
        if (__WEBPACK_IMPORTED_MODULE_6__utils_common_util__["b" /* isFormFilled */]({ selected: this.questionsValue })) {
            // this.app.getRootNav().push(BeginPage, {selected: [this.selected], loaded: [this.colsQuestions]}, {animate: true, direction: 'forward'});
            var value = 0;
            for (var key in this.questionsValue) {
                value = value + this.questionsValue[key].pref;
            }
            this.selected.forEach(function (selected) {
                if (!_this.questionsValue[selected]) {
                    _this.questionsValue[selected] = {};
                    _this.questionsValue[selected].pref = 0;
                    _this.questionsValue[selected].conf = 1;
                }
            });
            if (value > 0) {
                passed = true;
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__begin_begin__["a" /* BeginPage */], { selected: this.questionsValue });
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
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Recommender</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card>\n              <img style=\"width: 100%;\" [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n              <div class=\"card-subtitle\" *ngIf=\"questionsValue[col.name] && questionsValue[col.name].pref > 0\">{{questionsValue[col.name].pref * 100}}</div>\n              <ion-range \n                step=\"10\" \n                style=\"top: 30% !important\" \n                class=\"card-title\" \n                (ionChange)=\"updateValue(col.name, $event)\" \n                color=\"danger\" \n                pin=\"true\">\n              </ion-range>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n      <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">Set your preference value for each category</h6>\n    </ion-content> \n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Next</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]])
], RecommendationPage);

//# sourceMappingURL=recommendation.js.map

/***/ }),

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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationPage; });
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


var ExplanationPage = (function () {
    function ExplanationPage(platform, params, viewCtrl, loadingCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.explanation = params.get("explanation");
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
        template: "\n    <ion-header>\n        <ion-toolbar color=\"sky\">\n            <ion-title>\n            Explanation\n            </ion-title>\n            <ion-buttons start>\n            <button ion-button (click)=\"dismiss()\">\n                <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n                <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n            </button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <p style=\"padding: 4%;\">\n        {{explanation}}\n        </p>\n    </ion-content>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ExplanationPage);

//# sourceMappingURL=explanation.js.map

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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/result/result.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_place__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explanation_explanation__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_common_util__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResultPage = (function () {
    function ResultPage(navCtrl, store, navParams, attractionsActions, loadingCtrl, alertCtrl, modalCtrl, app) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.navParams = navParams;
        this.attractionsActions = attractionsActions;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.explanation = "This is an explanation page";
        this.place = "Place";
        this.recomm = this.navParams.get("recomm");
    }
    ResultPage.prototype.details = function (place) {
        this.store.dispatch(this.attractionsActions.selectPlace(place));
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__place_place__["a" /* PlacePage */]);
    };
    ResultPage.prototype.explain = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__explanation_explanation__["a" /* ExplanationPage */], {
            explanation: this.explanation
        });
        modal.present();
    };
    ResultPage.prototype.onModelChange = function (value) {
        this.starToText(value);
    };
    ResultPage.prototype.starToText = function (value) {
        if (value == 1)
            this.comment = "Sorry :(";
        else if (value == 2)
            this.comment = "I am not sure";
        else if (value == 3)
            this.comment = "Not bad";
        else if (value == 4)
            this.comment = "I think it's great";
        else
            this.comment = "Awesome!";
    };
    ResultPage.prototype.navigate = function () {
        var check = __WEBPACK_IMPORTED_MODULE_7__utils_common_util__["b" /* isFormFilled */]({ rate: this.rate });
        if (check)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__feedback_feedback__["a" /* FeedbackPage */], {
                rate: this.rate
            });
        else
            this.showAlert();
    };
    ResultPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Failed',
            message: 'Please rate the recommendation',
            buttons: ['OK']
        });
        alert.present();
    };
    ResultPage.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    ResultPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    return ResultPage;
}());
ResultPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"]({
        selector: 'page-result',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Result</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n        <ion-card>\n        <img [src]=\"recomm.photo\"/>\n        <ion-card-content>\n            <ion-card-title>\n                {{recomm.name}}\n            </ion-card-title>\n            <p>{{recomm.formatted_address}}</p>\n            <hr>\n            <ion-row no-padding>\n                <ion-col text-center>\n                    <button (click)=explain() ion-button clear small color=\"danger\" icon-start>\n                    <ion-icon name='help'></ion-icon>\n                    Why this\n                    </button>\n                </ion-col>\n                <ion-col text-right>\n                    <button (click)=details(recomm) ion-button clear small color=\"danger\" icon-start>\n                    <ion-icon name='navigate'></ion-icon>\n                    Details\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n        <ion-card style=\"text-align: center\">\n            <ion-card-header>\n                How was the recommendation?\n            </ion-card-header>\n            <ion-card-content>\n                <rating [(ngModel)]=\"rate\" \n                        readOnly=\"false\"\n                        max=\"5\" \n                        emptyStarIconName=\"star-outline\" \n                        halfStarIconName=\"star-half\"\n                        starIconName=\"star\"\n                        nullable=\"false\"\n                        (ngModelChange)=\"onModelChange($event)\">\n                </rating>\n                {{comment}}\n            </ion-card-content>\n        </ion-card>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">        \n        <button style=\"height: 100%;\" color=\"fire\" ion-button block (click)=navigate() >Next</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__["a" /* AttractionsActions */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */]])
], ResultPage);

//# sourceMappingURL=result.js.map
// CONCATENATED MODULE: ./src/pages/result.selection/result.selection.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_place__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__ = __webpack_require__(39);
/* harmony import */ var result_selection___WEBPACK_IMPORTED_MODULE_7__utils_common_util__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_attractions_actions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_place_service__ = __webpack_require__(40);
var result_selection___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var result_selection___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var result_selection_ResultSelectionPage = (function () {
    function ResultSelectionPage(attractionsActions, store, loadingCtrl, navCtrl, placeService, app, navParams, recommActions, alertCtrl, recommService) {
        var _this = this;
        this.attractionsActions = attractionsActions;
        this.store = store;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.app = app;
        this.navParams = navParams;
        this.recommActions = recommActions;
        this.alertCtrl = alertCtrl;
        this.recommService = recommService;
        this.selectedClasses = [];
        this.selectedPlaces = [];
        this.storedPlaces = [];
        this.selectedRecomms = [];
        this.places = [];
        this.limit = 15;
        this.offset = 0;
        this.presentLoading();
        // this.loadMore();
        // let initClasses = this.navParams.get("selectedClass");
        // if (initClasses.length > 0)
        //     initClasses.forEach(element => {
        //         this.selectedClasses = this.selectedClasses.concat(element);
        //     });
        this.selectedClasses = this.navParams.get("selectedClass");
        this.selectedPlaces = this.navParams.get("selectedPlaces");
        if (this.selectedClasses)
            this.placeService.getPlacesByCategories(this.selectedClasses).subscribe(function (data) {
                _this.selectedPlaces = data;
                _this.stopLoading();
            });
        else if (this.selectedPlaces) {
            this.stopLoading();
        }
        else {
            this.selectedPlaces = result_selection___WEBPACK_IMPORTED_MODULE_7__utils_common_util__["a" /* captureState */](this.store).recomm.selectedPlaces;
            this.stopLoading();
        }
    }
    ResultSelectionPage.prototype.check = function (data, value) {
        if (data.checked) {
            this.selectedRecomms.push(value.name);
            this.storedPlaces.push(value);
        }
        else {
            var idx = this.selectedRecomms.indexOf(value.name);
            if (idx > -1)
                this.selectedRecomms.splice(idx, 1);
            var idx2 = this.storedPlaces.indexOf(value);
            if (idx2 > -1)
                this.storedPlaces.splice(idx2, 1);
        }
        console.log("recomms", this.selectedRecomms);
        console.log("stored places", this.storedPlaces);
    };
    ResultSelectionPage.prototype.navigate = function () {
        var check = result_selection___WEBPACK_IMPORTED_MODULE_7__utils_common_util__["b" /* isFormFilled */]({ recomms: this.selectedRecomms });
        if (check) {
            if (this.selectedRecomms.length == 1) {
                var recomm = void 0;
                for (var i = 0; i < this.selectedPlaces.length; i++) {
                    if (this.selectedRecomms[0] == this.selectedPlaces[i].name) {
                        recomm = this.selectedPlaces[i];
                        break;
                    }
                }
                this.navCtrl.push(ResultPage, { recomm: recomm });
            }
            else if (this.selectedRecomms.length > 1) {
                this.showAlert("morethanone");
            }
        }
        else {
            this.showAlert("null");
        }
    };
    ResultSelectionPage.prototype.loadBacktrackedClasses = function () {
        var _this = this;
        this.recommService.traverseNode(this.selectedRecomms).subscribe(function (data) {
            _this.backtrackedClasses = data;
            console.log("backtrack", _this.backtrackedClasses);
        });
    };
    ResultSelectionPage.prototype.details = function (place) {
        this.store.dispatch(this.attractionsActions.selectPlace(place));
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__place_place__["a" /* PlacePage */]);
    };
    ResultSelectionPage.prototype.getPlaces = function (pagination) {
        var _this = this;
        this.placeService.getPlaces(pagination).subscribe(function (places) {
            _this.places = _this.places.concat(places);
            _this.store.dispatch(_this.attractionsActions.setAttractionsLoadStatus("loaded"));
            _this.stopLoading();
        });
    };
    ResultSelectionPage.prototype.loadMore = function () {
        var pagination = {
            limit: 15,
            offset: this.offset
        };
        this.getPlaces(pagination);
        this.offset += 15;
    };
    ResultSelectionPage.prototype.showAlert = function (status) {
        var _this = this;
        if (status == "null")
            this.alert = this.alertCtrl.create({
                title: 'Oops',
                message: "It looks like that you haven't selected any recommendation, wanna go back and change some preference? ",
                buttons: [
                    { text: "No", handler: function () { } },
                    { text: "Yes", handler: function () { return _this.navCtrl.pop(); } }
                ]
            });
        else if (status == "morethanone")
            this.alert = this.alertCtrl.create({
                title: 'Oops',
                message: "You seem to have doubts, wanna enhance your preference?",
                buttons: [
                    { text: "No", handler: function () { } },
                    {
                        text: "Yes", handler: function () {
                            _this.store.dispatch(_this.recommActions.selectPlaces(_this.storedPlaces));
                            _this.navCtrl.push(enhance_EnhancePage, { recomms: _this.selectedRecomms });
                        }
                    }
                ]
            });
        this.alert.present();
    };
    ResultSelectionPage.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    ResultSelectionPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    return ResultSelectionPage;
}());
result_selection_ResultSelectionPage = result_selection___decorate([
    __WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"]({
        selector: 'page-result-selection',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Result Selection</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-grid>\n          <ion-item (click)=\"details(place)\" ion-item *ngFor=\"let place of selectedPlaces\">\n            <ion-row>\n              <ion-col col-2 class=\"col\">\n                  <ion-avatar item-start>\n                    <img [src]=\"place.photo\">\n                  </ion-avatar>\n              </ion-col>\n              <ion-col col-7 class=\"col\">\n                  <h2>{{place.name}}</h2>\n                  <p>{{place.formatted_address}}</p>\n              </ion-col>\n              <ion-col col-1 class=\"checkbox\">\n                <ion-item>\n                  <ion-checkbox (ionChange)=\"check($event, place)\" class=\"item-checkbox-right\" color=\"sky\" checked=\"false\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-grid>\n      </ion-list>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Next</button> \n    </ion-footer>\n\n  "
    }),
    result_selection___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__actions_attractions_actions__["a" /* AttractionsActions */],
        __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__services_place_service__["a" /* PlaceService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */]])
], result_selection_ResultSelectionPage);

//# sourceMappingURL=result.selection.js.map
// CONCATENATED MODULE: ./src/pages/enhance/enhance.ts
/* harmony import */ var enhance___WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_util__ = __webpack_require__(94);
var enhance___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var enhance___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var enhance_EnhancePage = (function () {
    function EnhancePage(navCtrl, store, alertCtrl, navParams, recommendationService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.store = store;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.recommendationService = recommendationService;
        this.loadingCtrl = loadingCtrl;
        this.questions = [];
        this.colsQuestions = [];
        this.prevColsQuestions = [];
        this.needInherit = true;
        this.needAlert = false;
        this.divider = 2;
        this.counter = 0;
        this.prevSelected = [];
        this.selected = [];
        this.selectedIdx = 0;
        this.lastPage = false;
        this.consoleObject = function (str, obj) { return console.log(str, JSON.parse(JSON.stringify(obj))); };
        this.recommendationService.traverseNode(this.navParams.get("recomms")).subscribe(function (data) {
            _this.backtracks = data;
            console.log("DATA", _this.backtracks);
            _this.findMinLength();
            for (var i = _this.minLength - 1; i >= 0; i--) {
                if (_this.needInherit) {
                    _this.loadBacktrack(i);
                    // this.next();
                    _this.selectedIdx = i;
                }
            }
            ;
            console.log("selectedIdx", _this.selectedIdx);
        });
    }
    // checkDuplicate(target: string, exists: string[]): boolean{
    //   let duplicated = false;
    //   for(let i = 0; i < exists.length; i++){
    //     if(exists)
    //   }
    //   return duplicated;
    // }
    EnhancePage.prototype.findMinLength = function () {
        var _this = this;
        this.minLength = this.backtracks[0].parents.length;
        this.backtracks.forEach(function (backtrack) {
            if (_this.minLength > backtrack.parents.length)
                _this.minLength = backtrack.parents.length;
        });
    };
    EnhancePage.prototype.loadBacktrack = function (idx) {
        var _this = this;
        this.needInherit = false;
        var i = 0;
        var existQuestions = [];
        this.questions = [];
        this.colsQuestions = [];
        this.backtracks.forEach(function (backtrack) {
            if (i % _this.divider == 0) {
                _this.questions = [];
                for (var j = i; j < i + _this.divider; j++) {
                    if (_this.backtracks[j]) {
                        var name_1 = _this.backtracks[j].parents[idx].child;
                        var image = _this.backtracks[j].parents[idx].image;
                        var question = {
                            name: name_1,
                            image: image
                        };
                        if (existQuestions.indexOf(name_1) == -1)
                            _this.questions.push(question);
                        existQuestions.push(name_1);
                    }
                }
                _this.colsQuestions.push({ cols: _this.questions });
            }
            i += 1;
        });
        if (this.colsQuestions.length < 2 && this.colsQuestions[0].cols.length < 2)
            this.needInherit = true;
        this.counter += 1;
        console.log(this.colsQuestions);
    };
    EnhancePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Failed',
            message: 'Please at least select one type',
            buttons: ['OK']
        });
        alert.present();
    };
    EnhancePage.prototype.selectClass = function (value) {
        // let idx = this.selected.indexOf(value);
        // if(idx > -1) this.selected.splice(idx, 1);
        // else this.selected.push(value);
        if (this.selected.length > 0) {
            this.selected.pop();
            this.selected.push(value);
        }
        else
            this.selected.push(value);
    };
    EnhancePage.prototype.back = function () {
        this.direction = "back";
        if (this.lastPage)
            this.removeLastSelection();
        else
            this.removeCurrentSelection();
        this.loadPrevQuestions();
        console.log("counter", this.counter);
    };
    EnhancePage.prototype.next = function () {
        var _this = this;
        this.direction = "next";
        var check = __WEBPACK_IMPORTED_MODULE_5__utils_common_util__["b" /* isFormFilled */]({ node: this.selected });
        console.log("cek", check, this.selected);
        if (!check) {
            this.needAlert = true;
        }
        else
            this.needAlert = false;
        if (this.needAlert)
            this.showAlert();
        else {
            var places_1 = __WEBPACK_IMPORTED_MODULE_5__utils_common_util__["a" /* captureState */](this.store).recomm.selectedPlaces;
            // let newPlaces: Place[] = [];
            console.log("PLACE BEFORE", places_1);
            var name_2 = "";
            var child_1 = "";
            this.backtracks.forEach(function (backtrack) {
                child_1 = backtrack.parents[_this.selectedIdx].child;
                name_2 = backtrack.name;
                if (child_1 == _this.selected[0])
                    places_1 = places_1.filter(function (place) {
                        console.log("compare name", place.name, name_2);
                        return place.name == name_2;
                    });
            });
            console.log("PLACE AFTER", places_1);
            // this.store.dispatch(this.recommActions.selectPlaces(places));
            this.navCtrl.push(result_selection_ResultSelectionPage, { selectedPlaces: places_1 });
            // this.loadBacktrack(this.selectedIdx);
        }
        console.log("counter", this.counter);
    };
    EnhancePage.prototype.loadPrevQuestions = function () {
        // console.log("before", this.prevColsQuestions);
        var idx = this.prevColsQuestions.indexOf(this.colsQuestions);
        if (idx > -1)
            this.prevColsQuestions.splice(idx, 1);
        // console.log("after", this.prevColsQuestions);
        var length = this.prevColsQuestions.length;
        if (length <= 1)
            this.navCtrl.pop();
        this.colsQuestions = this.prevColsQuestions[length - 1];
        // this.selected = [];
    };
    EnhancePage.prototype.removeLastSelection = function () {
        this.counter -= 2;
        this.selected = this.prevSelected[this.prevSelected.length - 1];
        if (!this.selected)
            this.selected = [];
        console.log("on last remove selected", this.selected);
        this.consoleObject("on last remove prevSelected", this.prevSelected);
        // strange behavior, need to remove 2 idx all at once
        // let length = this.prevSelected.length;
        // this.prevSelected.splice(length - 2, length - 1);
        // this.prevSelected.pop();
        this.prevSelected.pop();
        console.log("after last remove prevSelected", this.prevSelected);
    };
    EnhancePage.prototype.removeCurrentSelection = function () {
        this.counter -= 1;
        this.selected = this.prevSelected[this.prevSelected.length - 1];
        if (!this.selected)
            this.selected = [];
        console.log("on remove selected", this.selected);
        this.consoleObject("on remove prevSelected", this.prevSelected);
        // strange behavior, need to remove 2 idx all at once
        this.prevSelected.splice(this.prevSelected.length - 1, 2);
        console.log("after remove prevSelected", this.prevSelected);
    };
    return EnhancePage;
}());
enhance_EnhancePage = enhance___decorate([
    __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        selector: 'page-enhance',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Enchance</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card\n              [ngClass]=\"{'selected': selected.indexOf(col.name) > -1}\"\n              (click)=selectClass(col.name)>\n              <img [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n    <ion-footer>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>        \n            <button ion-button block outline color=\"fire\" (click)=back()>\n              <ion-icon name=\"arrow-back\"></ion-icon>\n              &nbsp;Previous\n            </button> \n          </ion-col>\n          <ion-col col-6>\n            <button full ion-button color=\"fire\" (click)=next()>\n              Next&nbsp;\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </button> \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n\n  "
    }),
    enhance___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        enhance___WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]])
], enhance_EnhancePage);

//# sourceMappingURL=enhance.js.map
// CONCATENATED MODULE: ./src/pages/enhance/enhance.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancePageModule", function() { return EnhancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var enhance_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EnhancePageModule = (function () {
    function EnhancePageModule() {
    }
    return EnhancePageModule;
}());
EnhancePageModule = enhance_module___decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"]({
        declarations: [enhance_EnhancePage],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(enhance_EnhancePage)],
        entryComponents: [enhance_EnhancePage]
    })
], EnhancePageModule);

//# sourceMappingURL=enhance.module.js.map

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
    function BeginPage(navCtrl, alertCtrl, navParams, recommendationService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.recommendationService = recommendationService;
        this.loadingCtrl = loadingCtrl;
        this.questions = [];
        this.colsQuestions = [];
        this.divider = 2;
        this.counter = 0;
        this.questionsValue = {};
        this.selected = [];
        this.lastPage = false;
        this.consoleObject = function (str, obj) { return console.log(str, JSON.parse(JSON.stringify(obj))); };
        this.questionsValue = this.navParams.get("selected");
        console.log("DATA", this.questionsValue);
    }
    BeginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Failed',
            message: 'Please at least select one type',
            buttons: ['OK']
        });
        alert.present();
    };
    BeginPage.prototype.navigate = function (page, params) {
        if (params === void 0) { params = {}; }
        // this.app.getRootNav().push(page, params, {animate: true, direction: 'forward'});
        this.navCtrl.push(page, params);
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
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <ion-title>Recommender</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n     \n    </ion-content>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], BeginPage);

//# sourceMappingURL=begin.js.map

/***/ })

});
//# sourceMappingURL=2.js.map