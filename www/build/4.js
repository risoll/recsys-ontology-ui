webpackJsonp([4],{

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
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Rekomendasi</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content *ngIf=\"questions\" class=\"card-background-page\">\n      <h6 ion-text style=\"font-size: small;\" color=\"ocean\" class=\"highlight\">\n        Tentukan tingkat prioritas anda pada<br>\n        kategori tempat wisata dibawah ini dengan skala 1-100\n      </h6>\n      <ion-grid>\n        <ion-row *ngFor=\"let cols of colsQuestions\">\n          <ion-col col-6 *ngFor=\"let col of cols.cols\">\n            <ion-card>\n              <img style=\"width: 100%;\" [src]=\"col.image\">\n              <div class=\"card-title\">{{col.name}}</div>\n              <div class=\"card-subtitle\" *ngIf=\"findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0\">{{questionsValue[findIndex(col.name)].pref * 100}}</div>\n              <ion-range \n                step=\"10\" \n                style=\"top: 15% !important\" \n                class=\"card-title\" \n                (ionChange)=\"changeValue(col.name, $event)\" \n                color=\"danger\" \n                pin=\"true\">\n              </ion-range>\n              <button style=\"font-size: smaller\" (click)=\"col.showDesc = !col.showDesc\" ion-button clear small color=\"fire\" icon-start>\n                <ion-icon *ngIf=\"!col.showDesc\" name='arrow-dropdown'></ion-icon>\n                <ion-icon *ngIf=\"col.showDesc\" name='arrow-dropup'></ion-icon>\n                Deskripsi\n              </button>\n            </ion-card>\n            <ion-card *ngIf=\"col.showDesc\">\n              <p style=\"padding: 10px; font-size: smaller;\">\n                {{col.description}}\n              </p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <p style=\"text-align: center\">Jarak maksimal anda dengan tempat wisata <br> {{distance}} Km</p>\n            </ion-item>\n            <ion-item>\n              <ion-range step=\"5\" min=\"5\" [(ngModel)]=\"distance\">\n                <ion-icon range-left name=\"people\"></ion-icon>\n                <ion-icon range-right name=\"flag\"></ion-icon>\n              </ion-range>\n            </ion-item>\n            <!--<ion-item>-->\n              <!--<p style=\"text-align: center\">{{distance}} Km</p>-->\n            <!--</ion-item>-->\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </ion-content> \n    <ion-footer style=\"height: 10%;\">        \n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">Lanjut</button> \n    </ion-footer>\n\n  "
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
        this.recomms = this.navParams.get("recomms");
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
    return ResultPage;
}());
ResultPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"]({
        selector: 'page-result',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Rekomendasi Terpilih</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-card style=\"text-align: center\">\n        <ion-card-header>\n          Berikan penilaian anda terhadap <br>\n          rekomendasi yang dihasilkan\n        </ion-card-header>\n        <ion-card-content>\n          {{comment}}\n          <rating [(ngModel)]=\"rate\"\n                  readOnly=\"false\"\n                  max=\"5\"\n                  emptyStarIconName=\"star-outline\"\n                  halfStarIconName=\"star-half\"\n                  starIconName=\"star\"\n                  nullable=\"false\"\n                  (ngModelChange)=\"onModelChange($event)\">\n          </rating>\n        </ion-card-content>\n      </ion-card>\n      <hr>\n      <div class=\"pins\">\n        <ion-card (click)=\"details(recomm)\" class=\"pin\" *ngFor=\"let recomm of recomms\">\n          <img [src]=\"recomm.photo\"/>\n          <div *ngIf=\"recomm.description\" class=\"post-description\">\n            <small>{{ recomm.description }}</small>\n          </div>\n          <ion-item>\n            <small>{{recomm.name}}</small>\n            <p>\n              <small>{{recomm.formatted_address}}</small>\n            </p>\n          </ion-item>\n        </ion-card>\n      </div>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">\n    <button style=\"height: 100%;\" color=\"fire\" ion-button block (click)=\"navigate()\">Lanjut</button>\n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__["a" /* AttractionsActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__["a" /* AttractionsActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */]) === "function" && _h || Object])
], ResultPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=result.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/ionic2-rating/dist/ionic2-rating.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"](function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map
// CONCATENATED MODULE: ./node_modules/ionic2-rating/dist/ionic2-rating.module.js
/* harmony import */ var ionic2_rating_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);




var ionic2_rating_module_Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: ionic2_rating_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        Ionic2Rating
                    ],
                    exports: [
                        Ionic2Rating
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]
                    ],
                    schemas: [
                        ionic2_rating_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map
// CONCATENATED MODULE: ./node_modules/ionic2-rating/dist/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./src/pages/result/result.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var result_module___WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResultPageModule = (function () {
    function ResultPageModule() {
    }
    return ResultPageModule;
}());
ResultPageModule = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"]({
        declarations: [__WEBPACK_IMPORTED_MODULE_0__result__["a" /* ResultPage */]],
        imports: [result_module___WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__result__["a" /* ResultPage */]), ionic2_rating_module_Ionic2RatingModule],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_0__result__["a" /* ResultPage */]]
    })
], ResultPageModule);

//# sourceMappingURL=result.module.js.map

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
//# sourceMappingURL=4.js.map