webpackJsonp([6],{

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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feedback__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
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

/***/ })

});
//# sourceMappingURL=6.js.map