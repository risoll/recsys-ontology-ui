webpackJsonp([7],{

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/details/details.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_common_util__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsPage = (function () {
    function DetailsPage(store, navCtrl) {
        this.store = store;
        this.navCtrl = navCtrl;
        this.place = __WEBPACK_IMPORTED_MODULE_3__utils_common_util__["a" /* captureState */](this.store).attractions.selectedPlace;
        this.schedules = [
            { name: "Monday", schedule: this.place.monday },
            { name: "Tuesday", schedule: this.place.tuesday },
            { name: "Wednesday", schedule: this.place.wednesday },
            { name: "Thursday", schedule: this.place.thursday },
            { name: "Friday", schedule: this.place.friday },
            { name: "Saturday", schedule: this.place.saturday },
            { name: "Sunday", schedule: this.place.sunday },
        ];
    }
    return DetailsPage;
}());
DetailsPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"]({
        selector: 'page-details',
        template: "\n    <img style=\"width: 100%\" [src]=\"place.photo\"/>\n    <ion-card-content>\n        <ion-card-title>\n            {{place.name}}\n        </ion-card-title>\n        <h6 ion-text color=\"primary\" style=\"font-size: small\">Address</h6>\n\n        <p>\n            {{place.formatted_address}}\n        </p>\n        <h6 ion-text color=\"primary\" style=\"font-size: small\">Phone</h6>\n\n        <p>\n            {{place.phone}}\n        </p>\n        <hr>\n        <h6 ion-text color=\"primary\">Open and Close Hours</h6>\n        <table>\n            <tr *ngFor=\"let schedule of schedules\">\n                <td>{{schedule.name}}</td>\n                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                <td>{{schedule.schedule}}</td>\n            </tr>\n        </table>\n\n        \n    </ion-card-content>\n    \n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]])
], DetailsPage);

//# sourceMappingURL=details.js.map
// CONCATENATED MODULE: ./src/pages/details/details.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var details_module___WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var details_module___WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var details_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = (function () {
    function DetailsPageModule() {
    }
    return DetailsPageModule;
}());
DetailsPageModule = details_module___decorate([
    details_module___WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"]({
        declarations: [DetailsPage],
        imports: [details_module___WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(DetailsPage)],
        entryComponents: [DetailsPage],
        exports: [
            DetailsPage
        ]
    })
], DetailsPageModule);

//# sourceMappingURL=details.module.js.map

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

/***/ })

});
//# sourceMappingURL=7.js.map