webpackJsonp([3],{

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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_util__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_alert_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loading_service__ = __webpack_require__(40);
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
    function RecommendationPage(navCtrl, store, recommActions, alertCtrl, recommendationService, alertService, loadingService) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.recommActions = recommActions;
        this.alertCtrl = alertCtrl;
        this.recommendationService = recommendationService;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.questions = [];
        this.colsQuestions = [];
        this.questionsValue = [];
        this.distance = 35;
        this.divider = 2;
        this.selected = [];
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
                this.navCtrl.push('BeginPage', {
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
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Rekomendasi</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">\n        Tentukan tingkat prioritas anda pada<br>\n        kategori tempat wisata dibawah ini dengan skala 1-100\n      </h6>\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card>\n              <img style=\"width: 100%;\" [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n              <div class=\"card-subtitle\" *ngIf=\"findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0\">{{questionsValue[findIndex(col.name)].pref * 100}}</div>\n              <ion-range \n                step=\"10\" \n                style=\"top: 15% !important\" \n                class=\"card-title\" \n                (ionChange)=\"changeValue(col.name, $event)\" \n                color=\"danger\" \n                pin=\"true\">\n              </ion-range>\n              <button style=\"font-size: smaller\" (click)=\"col.showDesc = !col.showDesc\" ion-button clear small color=\"fire\" icon-start>\n                <ion-icon *ngIf=\"!col.showDesc\" name='arrow-dropdown'></ion-icon>\n                <ion-icon *ngIf=\"col.showDesc\" name='arrow-dropup'></ion-icon>\n                Deskripsi\n              </button>\n            </ion-card>\n            <ion-card *ngIf=\"col.showDesc\">\n              <p style=\"padding: 10px; font-size: smaller;\">\n                {{col.description}}\n              </p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <p style=\"text-align: center\">Jarak maksimal anda dengan tempat wisata</p>\n            </ion-item>\n            <ion-item>\n              <ion-range step=\"5\" min=\"5\" [(ngModel)]=\"distance\">\n                <ion-icon range-left name=\"people\"></ion-icon>\n                <ion-icon range-right name=\"flag\"></ion-icon>\n              </ion-range>\n            </ion-item>\n            <ion-item>\n              <p style=\"text-align: center\">{{distance}} Km</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </ion-content> \n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Lanjut</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_6__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_7__services_loading_service__["a" /* LoadingService */]])
], RecommendationPage);

//# sourceMappingURL=recommendation.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationPage; });
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recommendation_recommendation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_util__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_alert_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loading_service__ = __webpack_require__(40);
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
    function FeedbackPage(navCtrl, userService, navParams, alertService, loadingService, store) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.store = store;
        this.rating = navParams.get("rate");
    }
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
        if (__WEBPACK_IMPORTED_MODULE_5__utils_common_util__["d" /* isFormFilled */](params)) {
            this.loadingService.presentLoading();
            this.userService.addFeedback(params).subscribe(function (feedback) {
                _this.loadingService.stopLoading();
                _this.alertService.presentAlert("Terimakasih", params.name + ", saya sangat berterimakasih karena anda sudah berpartisipasi dalam survey tugas akhir ini");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__recommendation_recommendation__["a" /* RecommendationPage */]);
            });
        }
        else
            this.alertService.presentAlert("", "Mohon isi data dengan lengkap terlebih dahulu");
    };
    return FeedbackPage;
}());
FeedbackPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"]({
        selector: 'page-feedback',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Feedback</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n            <ion-list>\n                <ion-item [(ngModel)]=\"name\">\n                    <ion-label color=\"primary\" stacked>Nama</ion-label>\n                    <ion-input placeholder=\"Nama Lengkap\"></ion-input>\n                </ion-item>\n            </ion-list>\n            <ion-card>\n                <ion-list radio-group [(ngModel)]=\"gender\">\n                    <ion-list-header>\n                        Jenis Kelamin\n                    </ion-list-header>\n                    <ion-item>\n                        <ion-label>Laki-laki</ion-label>\n                        <ion-radio value=\"male\"></ion-radio>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Perempuan</ion-label>\n                        <ion-radio value=\"female\"></ion-radio>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n            <ion-list>\n                <ion-item [(ngModel)]=\"city\">\n                    <ion-label color=\"primary\" stacked>Kota Domisili</ion-label>\n                    <ion-input placeholder=\"contoh: Bandung\"></ion-input>\n                </ion-item>\n                <ion-item [(ngModel)]=\"age\">\n                    <ion-label color=\"primary\" stacked>Umur</ion-label>\n                    <ion-input type=\"number\" placeholder=\"contoh: 17\"></ion-input>\n                </ion-item>\n                <ion-item [(ngModel)]=\"profession\">\n                    <ion-label color=\"primary\" stacked>Profesi</ion-label>\n                    <ion-input placeholder=\"contoh: Mahasiswa\"></ion-input>\n                </ion-item>\n                <ion-item [(ngModel)]=\"univ\">\n                    <ion-label color=\"primary\" stacked>Universitas</ion-label>\n                    <ion-input placeholder=\"contoh: Telkom University\"></ion-input>\n                </ion-item>\n                <ion-item [(ngModel)]=\"majors\">\n                    <ion-label color=\"primary\" stacked>Fakultas</ion-label>\n                    <ion-input placeholder=\"contoh: Teknik Informatika\"></ion-input>\n                </ion-item>\n            </ion-list>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">        \n        <button style=\"height: 100%;\" ion-button block color=\"fire\" (click)=\"navigate()\">Submit</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_7__services_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_place__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explanation_explanation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_common_util__ = __webpack_require__(99);
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
            this.comment = "Sangat Buruk";
        else if (value == 2)
            this.comment = "Buruk";
        else if (value == 3)
            this.comment = "Cukup";
        else if (value == 4)
            this.comment = "Baik";
        else
            this.comment = "Sangat Baik";
    };
    ResultPage.prototype.navigate = function () {
        var check = __WEBPACK_IMPORTED_MODULE_7__utils_common_util__["d" /* isFormFilled */]({ rate: this.rate });
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
    __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"]({
        selector: 'page-result',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Rekomendasi Terpilih</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n        <ion-card>\n        <img [src]=\"recomm.photo\"/>\n        <ion-card-content>\n            <ion-card-title>\n                {{recomm.name}}\n            </ion-card-title>\n            <p>{{recomm.formatted_address}}</p>\n            <hr>\n            <ion-row no-padding>\n                <ion-col text-right>\n                    <button (click)=details(recomm) ion-button small color=\"danger\" icon-start>\n                    <ion-icon name='navigate'></ion-icon>\n                    Details\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n        <ion-card style=\"text-align: center\">\n            <ion-card-header>\n                Berikan penilaian anda terhadap <br> \n                rekomendasi yang dihasilkan\n            </ion-card-header>\n            <ion-card-content>\n                <rating [(ngModel)]=\"rate\" \n                        readOnly=\"false\"\n                        max=\"5\" \n                        emptyStarIconName=\"star-outline\" \n                        halfStarIconName=\"star-half\"\n                        starIconName=\"star\"\n                        nullable=\"false\"\n                        (ngModelChange)=\"onModelChange($event)\">\n                </rating>\n                {{comment}}\n            </ion-card-content>\n        </ion-card>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">        \n        <button style=\"height: 100%;\" color=\"fire\" ion-button block (click)=\"navigate()\">Lanjut</button> \n    </ion-footer>\n\n  "
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

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_recomm_actions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_place__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_common_util__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_attractions_actions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_place_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_alert_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ResultSelectionPage = (function () {
    function ResultSelectionPage(attractionsActions, store, navCtrl, placeService, app, navParams, recommActions, recommService, loadingService, alertService) {
        var _this = this;
        this.attractionsActions = attractionsActions;
        this.store = store;
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.app = app;
        this.navParams = navParams;
        this.recommActions = recommActions;
        this.recommService = recommService;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.selectedClasses = [];
        this.selectedPlaces = [];
        this.storedPlaces = [];
        this.selectedRecomms = [];
        this.title = "Hasil Rekomendasi";
        this.places = [];
        this.limit = 15;
        this.offset = 0;
        this.loadingService.presentLoading();
        this.params = this.navParams.get("params");
        console.log("PARAMS", this.params);
        if (this.params)
            if (this.params.assigned)
                // if (this.params.assigned.length > 0)
                this.recommService.upPropagation(this.params).subscribe(function (data) {
                    console.log("data", data);
                    _this.selectedPlaces = data;
                    _this.loadingService.stopLoading();
                });
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
        if (this.selectedRecomms.length > 0)
            this.title = this.selectedRecomms.length + " Item Terpilih";
        else
            this.title = "Hasil Rekomendasi";
        console.log("recomms", this.selectedRecomms);
        console.log("stored places", this.storedPlaces);
    };
    ResultSelectionPage.prototype.navigate = function () {
        var _this = this;
        var check = __WEBPACK_IMPORTED_MODULE_6__utils_common_util__["d" /* isFormFilled */]({ recomms: this.selectedRecomms });
        if (check) {
            if (this.selectedRecomms.length > 0) {
                var recomm = void 0;
                for (var i = 0; i < this.selectedPlaces.length; i++) {
                    if (this.selectedRecomms[0] == this.selectedPlaces[i].name) {
                        recomm = this.selectedPlaces[i];
                        break;
                    }
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], { recomm: recomm });
            }
        }
        else {
            this.alertService.presentAlertWithCallback("", "Anda tidak memilih rekomendasi, apakah anda ingin mengulangi proses rekomendasi?", "Tidak", "Iya, ulangi").then(function (status) {
                if (status)
                    _this.navCtrl.setRoot('RecommendationPage');
            });
        }
    };
    ResultSelectionPage.prototype.details = function (place) {
        this.store.dispatch(this.attractionsActions.selectPlace(place));
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__place_place__["a" /* PlacePage */]);
    };
    return ResultSelectionPage;
}());
ResultSelectionPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"]({
        selector: 'page-result-selection',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>{{title}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n\t\t\t\n\t\t\t\t<ion-item (click)=\"details(place)\" *ngFor=\"let place of selectedPlaces\">\n\t\t\t\t\t<ion-avatar item-start>\n\t\t\t\t\t\t<img [src]=\"place.photo\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label item-inner>\n\t\t\t\t\t\t<h2>{{place.name}}</h2>\n\t\t\t\t\t\t<p>{{place.formatted_address}}</p>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-checkbox item-end (ionChange)=\"check($event, place)\" color=\"sky\" checked=\"false\"></ion-checkbox>\n\t\t\t\t\t\n\t\t\t\t</ion-item>\n\t\t\t\n      </ion-list>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Lanjut</button> \n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__actions_attractions_actions__["a" /* AttractionsActions */],
        __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__services_place_service__["a" /* PlaceService */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_10__services_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_11__services_alert_service__["a" /* AlertService */]])
], ResultSelectionPage);

//# sourceMappingURL=result.selection.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/enhance/enhance.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result_selection_result_selection__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_util__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnhancePage = (function () {
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
        var check = __WEBPACK_IMPORTED_MODULE_5__utils_common_util__["d" /* isFormFilled */]({ node: this.selected });
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__result_selection_result_selection__["a" /* ResultSelectionPage */], { selectedPlaces: places_1 });
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
EnhancePage = __decorate([
    __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        selector: 'page-enhance',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Enchance</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card\n              [ngClass]=\"{'selected': selected.indexOf(col.name) > -1}\"\n              (click)=selectClass(col.name)>\n              <img [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n    <ion-footer>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>        \n            <button ion-button block outline color=\"fire\" (click)=back()>\n              <ion-icon name=\"arrow-back\"></ion-icon>\n              &nbsp;Previous\n            </button> \n          </ion-col>\n          <ion-col col-6>\n            <button full ion-button color=\"fire\" (click)=next()>\n              Next&nbsp;\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </button> \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]])
], EnhancePage);

//# sourceMappingURL=enhance.js.map
// CONCATENATED MODULE: ./src/pages/enhance/enhance.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancePageModule", function() { return EnhancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
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
        declarations: [EnhancePage],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(EnhancePage)],
        entryComponents: [EnhancePage]
    })
], EnhancePageModule);

//# sourceMappingURL=enhance.module.js.map

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
//# sourceMappingURL=3.js.map