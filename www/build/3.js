webpackJsonp([3],{

/***/ 114:
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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_common_util__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loading_service__ = __webpack_require__(42);
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
            "Petunjuk/instruksi yang diberikan mudah dimengerti",
            "Saya mengerti dengan sangat baik semua petunjuk yang diberikan",
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
        // answerTypes = [
        //   { label: "Setuju", color: "secondary", value: 1 },
        //   { label: "Tidak Setuju", color: "danger", value: 0 }
        // ];
        this.answers = [];
        this.male = false;
        this.female = false;
        this.answerTypes = [
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
        // console.log("MALE", this.male, "FEMALE", this.female);
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
                rating: this.rating,
                // rating: 0,
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
            // console.log("params", params);
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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_place__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explanation_explanation__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_common_util__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_service__ = __webpack_require__(41);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_place__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_common_util__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_attractions_actions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_place_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_service__ = __webpack_require__(42);
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
        // console.log("PARAMS", this.params);
        var places = this.navParams.get("places");
        // console.log("selected", this.places);
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
                    // console.log("data", data);
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
        // console.log("recomms", this.selectedRecomms);
        // console.log("stored places", this.storedPlaces);
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
            // console.log("FILTERED", filtered);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultSelectionPageModule", function() { return ResultSelectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_selection__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultSelectionPageModule = (function () {
    function ResultSelectionPageModule() {
    }
    return ResultSelectionPageModule;
}());
ResultSelectionPageModule = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__result_selection__["a" /* ResultSelectionPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__result_selection__["a" /* ResultSelectionPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__result_selection__["a" /* ResultSelectionPage */]]
    })
], ResultSelectionPageModule);

//# sourceMappingURL=result.selection.module.js.map

/***/ })

});
//# sourceMappingURL=3.js.map