webpackJsonp([3],{

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
        this.professions = [
            "Mahasiswa", "Dosen", "Karyawan", "Wiraswasta", "Lainnya"
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
            this.profession = this.staticData.profession;
            if (this.staticData.gender) {
                this.gender = this.staticData.gender;
                // if (this.staticData.gender == "male") {
                //   this.male = true;
                // }
                // else {
                //   this.female = true;
                // }
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
                profession: this.profession,
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
                        age: _this.age,
                        profession: _this.profession
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
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Survei Model {{mode}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item [(ngModel)]=\"name\">\n          <ion-label color=\"primary\" stacked>Nama</ion-label>\n          <ion-input placeholder=\"Nama Lengkap\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-card>\n        <ion-list radio-group [(ngModel)]=\"gender\">\n          <ion-list-header>\n            Jenis Kelamin\n          </ion-list-header>\n          <ion-item>\n            <ion-label>Laki-laki</ion-label>\n            <ion-radio value=\"male\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Perempuan</ion-label>\n            <ion-radio value=\"female\"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n      <ion-card>\n        <ion-list radio-group [(ngModel)]=\"profession\">\n          <ion-list-header>\n            Pekerjaan\n          </ion-list-header>\n          <ion-item *ngFor=\"let p of professions\">\n            <ion-label>{{p}}</ion-label>\n            <ion-radio [value]=\"p\"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n      <ion-list>\n        <ion-item [(ngModel)]=\"age\">\n          <ion-label color=\"primary\" stacked>Umur</ion-label>\n          <ion-input type=\"number\" placeholder=\"contoh: 17\"></ion-input>\n        </ion-item>\n        <ion-item [(ngModel)]=\"city\">\n          <ion-label color=\"primary\" stacked>Kota Domisili</ion-label>\n          <ion-input placeholder=\"contoh: Bandung\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-card *ngFor=\"let q of questions; let index = index\">\n        <ion-list radio-group [(ngModel)]=\"answers[index]\">\n          <ion-list-header [innerHTML]=\"q\">\n          </ion-list-header>\n          <ion-item *ngFor=\"let a of answerTypes\">\n            <ion-label>{{a.label}}</ion-label>\n            <ion-radio [value]=\"a.value\"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">\n      <button style=\"height: 100%;\" ion-button block color=\"fire\" (click)=\"navigate()\">Submit</button>\n    </ion-footer>\n\n\n  "
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_recomm_actions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_place__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_common_util__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_attractions_actions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_place_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_alert_service__ = __webpack_require__(40);
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
        this.mode = 0;
        this.submitText = "";
        this.selectedRecomms = [];
        this.staticTitle = "";
        this.title = "Hasil Rekomendasi";
        this.places = [];
        this.limit = 15;
        this.offset = 0;
        this.loadingService.presentLoading();
        this.params = this.navParams.get("params");
        console.log("PARAMS", this.params);
        var places = this.navParams.get("places");
        console.log("selected", this.places);
        if (places) {
            this.selectedPlaces = places;
            this.mode = 2;
            this.submitText = "Selesai";
            this.title = this.selectedPlaces.length + " Hasil Rekomendasi";
            this.staticTitle = this.title;
            this.loadingService.stopLoading();
        }
        else if (this.params)
            if (this.params.assigned)
                // if (this.params.assigned.length > 0)
                this.recommService.upPropagation(this.params).subscribe(function (data) {
                    _this.mode = 2;
                    _this.submitText = "Lanjut";
                    console.log("data", data);
                    _this.selectedPlaces = data;
                    _this.title = _this.selectedPlaces.length + " Hasil Rekomendasi";
                    _this.staticTitle = _this.title;
                    _this.loadingService.stopLoading();
                });
    }
    ResultSelectionPage.prototype.reset = function () {
        this.navCtrl.setRoot('MethodSelectionPage');
    };
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
            this.title = this.selectedRecomms.length + " Rekomendasi Terpilih";
        else
            this.title = this.staticTitle;
        console.log("recomms", this.selectedRecomms);
        console.log("stored places", this.storedPlaces);
    };
    ResultSelectionPage.prototype.navigate = function () {
        var _this = this;
        var check = __WEBPACK_IMPORTED_MODULE_6__utils_common_util__["d" /* isFormFilled */]({ recomms: this.selectedRecomms });
        if (check) {
            // if (this.selectedRecomms.length > 0) {
            // 	let recomms: Place[];
            // 	for (let i = 0; i < this.selectedPlaces.length; i++) {
            // 		if (this.selectedRecomms[i] == this.selectedPlaces[i].name) {
            // 			recomms.push(this.selectedPlaces[i]);
            // 		}
            // 	}
            // 	this.navCtrl.push(ResultPage, { recomm: recomm });
            // }
            var filtered = this.selectedPlaces.filter(function (place) {
                return _this.selectedRecomms.indexOf(place.name) > -1;
            });
            console.log("FILTERED", filtered);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], { recomms: filtered });
        }
        else {
            this.alertService.presentAlertWithCallback("", "Anda tidak memilih rekomendasi, apakah anda ingin mengulangi proses rekomendasi dari awal?", "Tidak", "Iya, ulangi").then(function (status) {
                if (status)
                    _this.navCtrl.setRoot('MethodSelectionPage');
            });
        }
    };
    ResultSelectionPage.prototype.details = function (place) {
        this.store.dispatch(this.attractionsActions.selectPlace(place));
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__place_place__["a" /* PlacePage */]);
        // this.navCtrl.push(PlacePage);
    };
    return ResultSelectionPage;
}());
ResultSelectionPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"]({
        selector: 'page-result-selection',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>{{title}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <ion-list style=\"padding-bottom: 10%\">\n\n        <ion-item (click)=\"details(place)\" *ngFor=\"let place of selectedPlaces\">\n          <ion-avatar item-start>\n            <img [src]=\"place.photo\">\n          </ion-avatar>\n          <ion-label item-inner>\n            <h2>{{place.name}}</h2>\n            <p>{{place.formatted_address}}</p>\n            <p *ngIf=\"place.utilization\">Utilisasi: {{place.utilization}}</p>\n          </ion-label>\n          <ion-checkbox item-end (ionChange)=\"check($event, place)\" color=\"sky\" checked=\"false\"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n      <div *ngIf=\"selectedPlaces.length == 0\" style=\"text-align: center\">\n        <p>Tidak ditemukan rekomendasi dalam preferensi anda, ingin mengulangi proses rekomendasi dari awal?</p>\n        <button (click)=\"reset()\" color=\"fire\" ion-button icon-left>\n          <ion-icon name=\"refresh\"></ion-icon>\n          Ulangi Proses Rekomendasi\n        </button>\n      </div>\n      <!--<p style=\"text-align: center\" *ngIf=\"mode == 2\">-->\n        <!--Dengan menekan tombol selesai, anda akan mengakhiri proses rekomendasi <br>-->\n        <!--dan dianggap puas dengan hasil rekomendasi yang ada.-->\n      <!--</p>-->\n    </ion-content>\n    <ion-footer *ngIf=\"selectedPlaces.length > 0\" style=\"height: 10%;\">\n      <button color=\"fire\" style=\"height: 100%;\" ion-button block (click)=\"navigate()\">{{submitText}}</button>\n    </ion-footer>\n\n  "
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result_selection_result_selection__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_common_util__ = __webpack_require__(102);
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

/***/ })

});
//# sourceMappingURL=3.js.map