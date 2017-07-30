webpackJsonp([5],{

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

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_common_util__ = __webpack_require__(101);
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
        this.rating = navParams.get("rate");
    }
    FeedbackPage.prototype.navigate = function () {
        var _this = this;
        this.ip = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["a" /* captureState */](this.store).user.ipApi.ip;
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
        if (__WEBPACK_IMPORTED_MODULE_4__utils_common_util__["d" /* isFormFilled */](params)) {
            this.loadingService.presentLoading();
            this.userService.addFeedback(params).subscribe(function (feedback) {
                _this.loadingService.stopLoading();
                _this.alertService.presentAlert("Terimakasih", params.name + ", \n        saya sangat berterimakasih karena anda sudah berpartisipasi dalam survey tugas akhir ini");
                var currentMode = __WEBPACK_IMPORTED_MODULE_4__utils_common_util__["a" /* captureState */](_this.store).recomm.mode;
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
    };
    return FeedbackPage;
}());
FeedbackPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        selector: 'page-feedback',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Survei Pengguna</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item [(ngModel)]=\"name\">\n          <ion-label color=\"primary\" stacked>Nama</ion-label>\n          <ion-input placeholder=\"Nama Lengkap\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-card>\n        <ion-list radio-group [(ngModel)]=\"gender\">\n          <ion-list-header>\n            Jenis Kelamin\n          </ion-list-header>\n          <ion-item>\n            <ion-label>Laki-laki</ion-label>\n            <ion-radio value=\"male\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Perempuan</ion-label>\n            <ion-radio value=\"female\"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n      <ion-list>\n        <ion-item [(ngModel)]=\"city\">\n          <ion-label color=\"primary\" stacked>Kota Domisili</ion-label>\n          <ion-input placeholder=\"contoh: Bandung\"></ion-input>\n        </ion-item>\n        <ion-item [(ngModel)]=\"age\">\n          <ion-label color=\"primary\" stacked>Umur</ion-label>\n          <ion-input type=\"number\" placeholder=\"contoh: 17\"></ion-input>\n        </ion-item>\n        <ion-item [(ngModel)]=\"profession\">\n          <ion-label color=\"primary\" stacked>Profesi</ion-label>\n          <ion-input placeholder=\"contoh: Mahasiswa\"></ion-input>\n        </ion-item>\n        <ion-item [(ngModel)]=\"univ\">\n          <ion-label color=\"primary\" stacked>Universitas</ion-label>\n          <ion-input placeholder=\"contoh: Telkom University\"></ion-input>\n        </ion-item>\n        <ion-item [(ngModel)]=\"majors\">\n          <ion-label color=\"primary\" stacked>Fakultas</ion-label>\n          <ion-input placeholder=\"contoh: Teknik Informatika\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n    <ion-footer style=\"height: 10%;\">\n      <button style=\"height: 100%;\" ion-button block color=\"fire\" (click)=\"navigate()\">Submit</button>\n    </ion-footer>\n\n  "
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feedback__ = __webpack_require__(115);
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
//# sourceMappingURL=5.js.map