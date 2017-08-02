webpackJsonp([4],{

/***/ 102:
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

/***/ 104:
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

/***/ 115:
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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_common_util__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loading_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_recomm_actions__ = __webpack_require__(16);
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
    function FeedbackPage(navCtrl, userService, navParams, alertService, loadingService, store, storage, recommActions) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.alertService = alertService;
        this.loadingService = loadingService;
        this.store = store;
        this.storage = storage;
        this.recommActions = recommActions;
        this.questions = [
            "Petunjuk (kalimat dalam model ini) yang diberikan mudah dimengerti",
            "Saya mengerti dengan baik semua petunjuk yang diberikan",
            "Saya dapat melihat rincian informasi suatu destinasi wisata dengan mudah",
            "Secara umum saya kesulitan menemukan destinasi wisata yang saya inginkan",
            "Saya dapat menemukan destinasi wisata yang saya inginkan dengan cepat",
            "Saya sangat menyukai destinasi wisata yang saya pilih",
            "Saya ingin mengunjungi destinasi wisata yang saya pilih suatu saat nanti",
            "Saya tidak suka cara berinteraksi model ini",
            "Saya tidak mempunyai kesulitan menggunakan model ini",
            "Saya akan menggunakan model ini kembali jika suatu saat saya ingin berwisata"
        ];
        this.answerTypes = [
            { label: "Setuju", color: "secondary", value: 1 },
            { label: "Tidak Setuju", color: "danger", value: 0 }
        ];
        this.answers = [];
        this.male = false;
        this.female = false;
        this.likertScales = [
            { label: "Sangat setuju", value: 5 },
            { label: "Setuju", value: 4 },
            { label: "Netral", value: 3 },
            { label: "Tidak setuju", value: 2 },
            { label: "Sangat tidak setuju", value: 1 },
        ];
        this.mode = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["a" /* captureState */](this.store).recomm.mode;
        this.rating = navParams.get("rate");
        this.staticData = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["a" /* captureState */](this.store).recomm.staticData;
        if (this.staticData) {
            this.name = this.staticData.name;
            this.age = this.staticData.age;
            this.city = this.staticData.city;
            if (this.staticData.gender) {
                this.gender = this.staticData.gender;
                if (this.staticData.gender == "male") {
                    this.male = true;
                }
                else {
                    this.female = true;
                }
            }
        }
        console.log("MALE", this.male, "FEMALE", this.female);
    }
    FeedbackPage.prototype.navigate = function () {
        var _this = this;
        var date = new Date();
        if (this.answers.length == this.questions.length) {
            this.ip = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["a" /* captureState */](this.store).user.ipApi.ip;
            if (!this.ip)
                this.ip = "-";
            var params_1 = {
                id: 0,
                user_agent: navigator.userAgent,
                platform: navigator.platform,
                ip: this.ip,
                city: this.city,
                name: this.name,
                gender: this.gender,
                age: Number(this.age),
                // rating: this.rating,
                rating: 0,
                eou: this.answers[0],
                eou2: this.answers[1],
                inf: this.answers[2],
                etu: this.answers[3],
                pe: this.answers[4],
                prq: this.answers[5],
                tr: this.answers[6],
                prq2: this.answers[7],
                etu2: this.answers[8],
                tr2: this.answers[9],
                mode: this.mode,
                time: date.getTime()
            };
            console.log("params", params_1);
            if (__WEBPACK_IMPORTED_MODULE_4__utils_common_util__["d" /* isFormFilled */](params_1)) {
                this.loadingService.presentLoading();
                this.userService.addFeedback(params_1).subscribe(function (feedback) {
                    _this.loadingService.stopLoading();
                    _this.alertService.presentAlert("Terimakasih", params_1.name + ", \n        saya sangat berterimakasih karena anda sudah berpartisipasi dalam survey tugas akhir ini");
                    var currentMode = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["a" /* captureState */](_this.store).recomm.mode;
                    var staticData = {
                        name: _this.name,
                        city: _this.city,
                        gender: _this.gender,
                        age: _this.age
                    };
                    _this.store.dispatch(_this.recommActions.setStatic(staticData));
                    _this.storage.set("staticData", staticData);
                    _this.storage.set("mode" + currentMode + "Status", 'completed');
                    if (currentMode == 1)
                        _this.store.dispatch(_this.recommActions.setMode1Status("completed"));
                    else
                        _this.store.dispatch(_this.recommActions.setMode2Status("completed"));
                    _this.navCtrl.setRoot('MethodSelectionPage');
                });
            }
            else
                this.alertService.presentAlert("", "Mohon isi data dengan lengkap terlebih dahulu");
        }
        else
            this.alertService.presentAlert("", "Mohon isi data dengan lengkap terlebih dahulu");
    };
    return FeedbackPage;
}());
FeedbackPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        selector: 'page-feedback',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Survei Model {{mode}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item [(ngModel)]=\"name\">\n          <ion-label color=\"primary\" stacked>Nama</ion-label>\n          <ion-input placeholder=\"Nama Lengkap\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-card>\n        <ion-list radio-group [(ngModel)]=\"gender\">\n          <ion-list-header>\n            Jenis Kelamin\n          </ion-list-header>\n          <ion-item>\n            <ion-label>Laki-laki</ion-label>\n            <ion-radio value=\"male\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Perempuan</ion-label>\n            <ion-radio value=\"female\"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n      <ion-list>\n        <ion-item [(ngModel)]=\"city\">\n          <ion-label color=\"primary\" stacked>Kota Domisili</ion-label>\n          <ion-input placeholder=\"contoh: Bandung\"></ion-input>\n        </ion-item>\n        <ion-item [(ngModel)]=\"age\">\n          <ion-label color=\"primary\" stacked>Umur</ion-label>\n          <ion-input type=\"number\" placeholder=\"contoh: 17\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-card *ngFor=\"let q of questions; let index = index\">\n        <ion-list radio-group [(ngModel)]=\"answers[index]\">\n          <ion-list-header [innerHTML]=\"q\">\n          </ion-list-header>\n          <ion-item *ngFor=\"let a of answerTypes\">\n            <ion-label [color]=\"a.color\">{{a.label}}</ion-label>\n            <ion-radio [value]=\"a.value\"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">\n      <button style=\"height: 100%;\" ion-button block color=\"fire\" (click)=\"navigate()\">Submit</button>\n    </ion-footer>\n\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_6__services_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__actions_recomm_actions__["a" /* RecommActions */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_place__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explanation_explanation__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_common_util__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_service__ = __webpack_require__(40);
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
    function ResultPage(navCtrl, store, navParams, attractionsActions, alertService, modalCtrl, app) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.navParams = navParams;
        this.attractionsActions = attractionsActions;
        this.alertService = alertService;
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
            this.alertService.presentAlert("", "Harap beri penilaian terhadap hasil rekomendasi terlebih dahulu");
    };
    return ResultPage;
}());
ResultPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"]({
        selector: 'page-result',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Rekomendasi Terpilih</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-card style=\"text-align: center\">\n        <ion-card-header>\n          Berikan penilaian anda terhadap <br>\n          rekomendasi yang dihasilkan\n        </ion-card-header>\n        <ion-card-content>\n          {{comment}}\n          <rating [(ngModel)]=\"rate\"\n                  readOnly=\"false\"\n                  max=\"5\"\n                  emptyStarIconName=\"star-outline\"\n                  halfStarIconName=\"star-half\"\n                  starIconName=\"star\"\n                  nullable=\"false\"\n                  (ngModelChange)=\"onModelChange($event)\">\n          </rating>\n        </ion-card-content>\n      </ion-card>\n      <hr>\n      <div class=\"pins\">\n        <ion-card (click)=\"details(recomm)\" class=\"pin\" *ngFor=\"let recomm of recomms\">\n          <img [src]=\"recomm.photo\"/>\n          <div *ngIf=\"recomm.description\" class=\"post-description\">\n            <small>{{ recomm.description }}</small>\n          </div>\n          <ion-item>\n            <small>{{recomm.name}}</small>\n            <p>\n              <small>{{recomm.formatted_address}}</small>\n            </p>\n          </ion-item>\n        </ion-card>\n      </div>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">\n    <button style=\"height: 100%;\" color=\"fire\" ion-button block (click)=\"navigate()\">Lanjut</button>\n    </ion-footer>\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__["a" /* AttractionsActions */],
        __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */]])
], ResultPage);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result__ = __webpack_require__(124);
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

/***/ })

});
//# sourceMappingURL=4.js.map