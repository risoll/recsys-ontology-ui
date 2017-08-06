webpackJsonp([16],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_API_KEY; });
/* unused harmony export APP_BASE_URL */
/* unused harmony export APP_BASE_PORT */
/* unused harmony export APP_URL */
/* unused harmony export API_BASE_URL */
/* unused harmony export API_BASE_PORT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/**
 * Created by solehuddien on 26/04/17.
 */
/**
 * Created by solehuddien on 26/04/17.
 */ var GOOGLE_API_KEY = "AIzaSyCJynwIXL7HAnw8p6WzqRKZ4EOgRakuu_o";
var APP_BASE_URL = "http://localhost";
var APP_BASE_PORT = ":8100";
var APP_URL = "" + APP_BASE_URL + APP_BASE_PORT;
// export const API_BASE_URL = "http://localhost";
// export const API_BASE_PORT = ":8085";
var API_BASE_URL = "https://jalan-belakang.herokuapp.com";
var API_BASE_PORT = "";
var API_URL = "" + API_BASE_URL + API_BASE_PORT;
//# sourceMappingURL=constants.js.map

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecommActions = RecommActions_1 = (function () {
    function RecommActions() {
    }
    RecommActions.prototype.selectRootClass = function (node) {
        return {
            type: RecommActions_1.SELECT_ROOT_CLASS,
            payload: node
        };
    };
    RecommActions.prototype.setUpdatedClass = function (nodes) {
        return {
            type: RecommActions_1.SET_UPDATED_CLASS,
            payload: nodes
        };
    };
    RecommActions.prototype.selectClass = function (node) {
        return {
            type: RecommActions_1.SELECT_CLASS,
            payload: node
        };
    };
    RecommActions.prototype.loadClass = function (node) {
        return {
            type: RecommActions_1.LOAD_CLASS,
            payload: node
        };
    };
    RecommActions.prototype.selectPlaces = function (node) {
        return {
            type: RecommActions_1.SELECT_PLACES,
            payload: node
        };
    };
    RecommActions.prototype.setDistance = function (distance) {
        return {
            type: RecommActions_1.SET_DISTANCE,
            payload: distance
        };
    };
    RecommActions.prototype.setMode = function (mode) {
        return {
            type: RecommActions_1.SET_MODE,
            payload: mode
        };
    };
    RecommActions.prototype.setMode1Status = function (status) {
        return {
            type: RecommActions_1.SET_MODE1_STATUS,
            payload: status
        };
    };
    RecommActions.prototype.setMode2Status = function (status) {
        return {
            type: RecommActions_1.SET_MODE2_STATUS,
            payload: status
        };
    };
    RecommActions.prototype.setComparisonStatus = function (status) {
        return {
            type: RecommActions_1.SET_COMPARISON_STATUS,
            payload: status
        };
    };
    RecommActions.prototype.setStatic = function (staticData) {
        return {
            type: RecommActions_1.SET_STATIC,
            payload: staticData
        };
    };
    return RecommActions;
}());
RecommActions.SELECT_ROOT_CLASS = '[Recomm] Select Root Class';
RecommActions.SET_UPDATED_CLASS = '[Recomm] Set Updated Class';
RecommActions.SELECT_CLASS = '[Recomm] Select Class';
RecommActions.LOAD_CLASS = '[Recomm] Load Class';
RecommActions.SELECT_PLACES = '[Recomm] Select Places';
RecommActions.SET_DISTANCE = '[Recomm] Set Distance';
RecommActions.SET_MODE = '[Recomm] Set Mode';
RecommActions.SET_MODE1_STATUS = '[Recomm] Set Mode 1 Status';
RecommActions.SET_MODE2_STATUS = '[Recomm] Set Mode 2 Status';
RecommActions.SET_COMPARISON_STATUS = '[Recomm] Set Comparison Status';
RecommActions.SET_STATIC = '[Recomm] Set Static';
RecommActions = RecommActions_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]()
], RecommActions);

var RecommActions_1;
//# sourceMappingURL=recomm.actions.js.map

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttractionsActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AttractionsActions = AttractionsActions_1 = (function () {
    function AttractionsActions() {
    }
    AttractionsActions.prototype.setAttractionsLoadStatus = function (status) {
        return {
            type: AttractionsActions_1.SET_ATTRACTIONS_LOAD_STATUS,
            payload: status
        };
    };
    AttractionsActions.prototype.selectPlace = function (place) {
        return {
            type: AttractionsActions_1.SELECT_PLACE,
            payload: place
        };
    };
    return AttractionsActions;
}());
AttractionsActions.SET_ATTRACTIONS_LOAD_STATUS = '[Attractions] Set Attractions Load Status';
AttractionsActions.SELECT_PLACE = '[Attractions] Select Place';
AttractionsActions = AttractionsActions_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]()
], AttractionsActions);

var AttractionsActions_1;
//# sourceMappingURL=attractions.actions.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by solehuddien on 26/04/17.
 */
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.feedbacks = function () {
        var url = __WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* API_URL */] + "/feedback/bulk";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UserService.prototype.ipApi = function () {
        var url = "https://ipapi.co/json";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UserService.prototype.addFeedback = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* API_URL */] + "/feedback/add";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    UserService.prototype.addPostFeedback = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* API_URL */] + "/postfeedback/add";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    return UserService;
}());
UserService = __decorate([
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 34;

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		99,
		15
	],
	"../pages/attractions/attractions.module": [
		98,
		8
	],
	"../pages/begin/begin.module": [
		91,
		13
	],
	"../pages/begin2/begin2.module": [
		100,
		14
	],
	"../pages/details/details.module": [
		87,
		12
	],
	"../pages/enhance/enhance.module": [
		96,
		4
	],
	"../pages/explanation/explanation.module": [
		90,
		1
	],
	"../pages/feedback/feedback.module": [
		93,
		6
	],
	"../pages/intro/intro.module": [
		97,
		11
	],
	"../pages/maps/maps.module": [
		88,
		2
	],
	"../pages/method.selection/method.selection.module": [
		101,
		10
	],
	"../pages/place/place.module": [
		89,
		0
	],
	"../pages/post.feedback/post.feedback.module": [
		102,
		9
	],
	"../pages/recommendation/recommendation.module": [
		92,
		7
	],
	"../pages/result.selection/result.selection.module": [
		95,
		3
	],
	"../pages/result/result.module": [
		94,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 36;

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
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


var AlertService = (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.presentAlert = function (title, message) {
        if (title === void 0) { title = ""; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertService.prototype.presentErrorAlert = function (message) {
        return this.presentAlert("An error has occurred.", message);
    };
    AlertService.prototype.presentAlertWithCallback = function (title, message, text1, text2) {
        var _this = this;
        if (title === void 0) { title = ""; }
        if (text1 === void 0) { text1 = "Tidak"; }
        if (text2 === void 0) { text2 = "Ya"; }
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: text1,
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: text2,
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    return AlertService;
}());
AlertService = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AlertService);

//# sourceMappingURL=alert.service.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.presentLoading = function (message) {
        if (message === void 0) { message = "Mohon tunggu.."; }
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    };
    LoadingService.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    return LoadingService;
}());
LoadingService = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
], LoadingService);

//# sourceMappingURL=loading.service.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by solehuddien on 26/04/17.
 */
var RecommendationService = (function () {
    function RecommendationService(http) {
        this.http = http;
    }
    RecommendationService.prototype.generalQuestions = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/questions/general";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RecommendationService.prototype.getParent = function (node) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/class/parents?node=" + this.parseNode(node);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RecommendationService.prototype.getChildren = function (node) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/class/children?node=" + this.parseNode(node);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RecommendationService.prototype.getBulkChildren = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/class/bulk/children";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    RecommendationService.prototype.getBulkParent = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/class/bulk/parents";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    RecommendationService.prototype.traverseNode = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/individual/traverse/bulk";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    RecommendationService.prototype.downPropagation = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/propagation/downward";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    RecommendationService.prototype.upPropagation = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/propagation/upward";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    RecommendationService.prototype.downPropagationV2 = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/propagation/downwardv2";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    RecommendationService.prototype.upPropagationV2 = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/recomm/propagation/upwardv2";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    RecommendationService.prototype.parseNode = function (node) {
        return node.replace(" ", "%20");
    };
    return RecommendationService;
}());
RecommendationService = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RecommendationService);

//# sourceMappingURL=recommendation.service.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by solehuddien on 26/04/17.
 */
var PlaceService = (function () {
    function PlaceService(http) {
        this.http = http;
    }
    PlaceService.prototype.getPlaces = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/place/pagination?limit=" + params.limit + "&offset=" + params.offset;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    PlaceService.prototype.getPlacesByCategories = function (params) {
        // console.log("params", params);
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/place/bulk/categories";
        var body = JSON.stringify(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    return PlaceService;
}());
PlaceService = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PlaceService);

//# sourceMappingURL=place.service.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/reducers/attractions.reducer.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__ = __webpack_require__(24);

var initialState = {
    attractionsLoadStatus: "not loaded",
    selectedPlace: {
        "place_id": "ChIJ0aULp8XFaC4RE6iy2ZTjhSo",
        "name": "Kolam Renang Oniba",
        "formatted_address": "Jl. Raya Majalaya - Cicalengka, Cikuya, Cicalengka, Bandung, Jawa Barat 40395, Indonesia",
        "phone": "0812-2184-8265",
        "length_of_visit": "",
        "tariff": 0,
        "photo": "https://lh3.googleusercontent.com/p/AF1QipPrmp6TboGNpQy-PJ9aNiTjZfpwfSxFWNDACFCS=s1600-w200-h200",
        "lat": -6.989376,
        "lng": 107.824867,
        "rating": 3,
        "monday": "8:00 AM - 5:00 PM",
        "tuesday": "8:00 AM - 5:00 PM",
        "wednesday": "8:00 AM - 5:00 PM",
        "thursday": "8:00 AM - 5:00 PM",
        "friday": "8:00 AM - 5:00 PM",
        "saturday": "8:00 AM - 5:00 PM",
        "sunday": "8:00 AM - 5:00 PM"
    }
};
function AttractionsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__["a" /* AttractionsActions */].SET_ATTRACTIONS_LOAD_STATUS:
            return Object.assign({}, state, { attractionsLoadStatus: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__["a" /* AttractionsActions */].SELECT_PLACE:
            return Object.assign({}, state, { selectedPlace: action.payload });
        default:
            return state;
    }
    ;
}
//# sourceMappingURL=attractions.reducer.js.map
// CONCATENATED MODULE: ./src/actions/user.actions.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserActions = UserActions_1 = (function () {
    function UserActions() {
    }
    UserActions.prototype.setIpApi = function (ipApi) {
        return {
            type: UserActions_1.SET_IP_API,
            payload: ipApi
        };
    };
    UserActions.prototype.setLocation = function (location) {
        return {
            type: UserActions_1.SET_LOCATION,
            payload: location
        };
    };
    return UserActions;
}());
UserActions.SET_IP_API = '[User] Set IP API';
UserActions.SET_LOCATION = '[User] Set Location';
UserActions = UserActions_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]()
], UserActions);

var UserActions_1;
//# sourceMappingURL=user.actions.js.map
// CONCATENATED MODULE: ./src/reducers/user.reducer.ts

var user_reducer_initialState = {
    ipApi: {},
    location: {
        lat: -6.917464,
        lng: 107.619123
    },
    defaultLocation: {
        lat: -6.917464,
        lng: 107.619123
    }
};
function UserReducer(state, action) {
    if (state === void 0) { state = user_reducer_initialState; }
    switch (action.type) {
        case UserActions.SET_IP_API:
            return Object.assign({}, state, { ipApi: action.payload });
        case UserActions.SET_LOCATION:
            return Object.assign({}, state, { location: action.payload });
        default:
            return state;
    }
    ;
}
//# sourceMappingURL=user.reducer.js.map
// CONCATENATED MODULE: ./src/reducers/recomm.reducer.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(16);

var recomm_reducer_initialState = {
    selectedRootClass: [],
    selectedClass: [[]],
    updatedClass: [],
    loadedClass: [[]],
    selectedPlaces: [],
    distance: 5,
    mode: 1,
    statusMode1: "incomplete",
    statusMode2: "incomplete",
    statusComparison: "incomplete",
    staticData: {}
};
function RecommReducer(state, action) {
    if (state === void 0) { state = recomm_reducer_initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SELECT_ROOT_CLASS:
            return Object.assign({}, state, { selectedRootClass: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SELECT_CLASS:
            return Object.assign({}, state, { selectedClass: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SET_UPDATED_CLASS:
            return Object.assign({}, state, { updatedClass: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].LOAD_CLASS:
            return Object.assign({}, state, { loadedClass: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SELECT_PLACES:
            return Object.assign({}, state, { selectedPlaces: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SET_DISTANCE:
            return Object.assign({}, state, { distance: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SET_MODE:
            return Object.assign({}, state, { mode: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SET_MODE1_STATUS:
            return Object.assign({}, state, { statusMode1: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SET_MODE2_STATUS:
            return Object.assign({}, state, { statusMode2: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SET_COMPARISON_STATUS:
            return Object.assign({}, state, { statusComparison: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SET_STATIC:
            return Object.assign({}, state, { staticData: action.payload });
        default:
            return state;
    }
    ;
}
//# sourceMappingURL=recomm.reducer.js.map
// CONCATENATED MODULE: ./src/app/app.reducers.ts



var APP_REDUCERS = {
    attractions: AttractionsReducer,
    user: UserReducer,
    recomm: RecommReducer
};
//# sourceMappingURL=app.reducers.js.map
// CONCATENATED MODULE: ./src/app/app.actions.ts
/* harmony import */ var app_actions___WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_attractions_actions__ = __webpack_require__(24);



var APP_ACTIONS = [
    __WEBPACK_IMPORTED_MODULE_2__actions_attractions_actions__["a" /* AttractionsActions */],
    UserActions,
    app_actions___WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */]
];
//# sourceMappingURL=app.actions.js.map
// CONCATENATED MODULE: ./src/services/google.service.ts
/* harmony import */ var google_service___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var google_service___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by solehuddien on 26/04/17.
 */
var GoogleService = (function () {
    function GoogleService(http) {
        this.http = http;
    }
    GoogleService.prototype.getPhotos = function (params) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/google/photos?lat=" + params.lat + "&lng=" + params.lng + "&radius=" + params.radius + "&maxWidth=" + params.maxWidth + "&maxHeight=" + params.maxHeight;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GoogleService.prototype.getDistance = function (origins, destinations) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* API_URL */] + "/google/distance?defaultLat=" + origins.lat + "&defaultLng=" + origins.lng + "&lat=" + destinations.lat + "&lng=" + destinations.lng;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return GoogleService;
}());
GoogleService = google_service___decorate([
    google_service___WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GoogleService);

//# sourceMappingURL=google.service.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_recomm_actions__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_common_util__ = __webpack_require__(40);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(store, userActions, userService, platform, loadingCtrl, storage, splashScreen, recommActions, statusBar, googleService) {
        var _this = this;
        this.store = store;
        this.userActions = userActions;
        this.userService = userService;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.recommActions = recommActions;
        this.statusBar = statusBar;
        this.googleService = googleService;
        this.rootPage = 'IntroPage';
        // this.presentLoading();
        this.userService.ipApi().subscribe(function (ipApi) {
            _this.store.dispatch(_this.userActions.setIpApi(ipApi));
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Rekomendasi', component: 'MethodSelectionPage' },
            { title: 'Jelajah', component: 'AttractionsPage' },
            { title: 'Tentang', component: 'AboutPage' }
            // { title: 'Advanced', component: AdvancedPage },
            // { title: 'Settings', component: SettingsPage },
            // { title: 'Account', component: AccountPage }
        ];
    }
    MyApp.prototype.resetStatus = function () {
        var _this = this;
        var mode1Status = this.storage.get('mode1Status');
        var mode2Status = this.storage.get('mode2Status');
        var comparisonStatus = this.storage.get("comparisonStatus");
        var staticData = this.storage.get("staticData");
        if (staticData) {
            staticData.then(function (data) {
                // console.log("static data", data);
                _this.store.dispatch(_this.recommActions.setStatic(data));
            });
        }
        if (mode1Status) {
            mode1Status.then(function (status) {
                // console.log("1 Status", status);
                if (status == "completed") {
                    _this.store.dispatch(_this.recommActions.setMode1Status("completed"));
                }
            });
        }
        if (comparisonStatus) {
            comparisonStatus.then(function (status) {
                // console.log("comparison status", status);
                if (status == "completed") {
                    _this.store.dispatch(_this.recommActions.setComparisonStatus("completed"));
                }
            });
        }
        if (mode2Status) {
            mode2Status.then(function (status) {
                // console.log("2 Status", status);
                if (status == "completed") {
                    _this.store.dispatch(_this.recommActions.setMode2Status("completed"));
                }
            });
        }
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    };
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // console.log("POSITION", position.coords);
                var defaultLocation = __WEBPACK_IMPORTED_MODULE_10__utils_common_util__["a" /* captureState */](_this.store).user.defaultLocation;
                var currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                //cek apakah user disekitar bandung, jika tidak maka set paksa user ke lokasi titik 0 kota bandung
                _this.googleService.getDistance(defaultLocation, currentLocation).subscribe(function (data) {
                    // console.log("distance", data.distance);
                    if (data.distance < 100000) {
                        // console.log("yes");
                        _this.store.dispatch(_this.userActions.setLocation(currentLocation));
                    }
                });
            }),
                function (error) {
                    // console.log("ERROR");
                },
                {
                    maximumAge: 0,
                    timeout: 5000
                };
        }
        else {
            // console.log("FAILED");
        }
        this.resetStatus();
    };
    MyApp.prototype.colorLog = function (message, color) {
        if (color === void 0) { color = ""; }
        color = color || "black";
        switch (color) {
            case "success":
                color = "Green";
                break;
            case "info":
                color = "DodgerBlue";
                break;
            case "error":
                color = "Red";
                break;
            case "warning":
                color = "Orange";
                break;
            default:
                color = color;
        }
        console.log("%c" + message, "color:" + color);
    };
    MyApp.prototype.showLog = function () {
        console.clear();
        this.colorLog("Hi, I'm Rizky Solechudin", "success");
        this.colorLog("Currently working at Braincode Solution");
        this.colorLog("as Scala and Angular Developer", "warning");
        this.colorLog("For business inquiries you can contact me at");
        this.colorLog("rizky.solechudin@gmail.com", "info");
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.storage.get('introShown').then(function (result) {
                if (result) {
                    _this.rootPage = 'MethodSelectionPage';
                    // this.rootPage = 'PostFeedbackPage';
                    // this.rootPage = 'FeedbackPage';
                }
                else {
                    _this.rootPage = 'IntroPage';
                    _this.storage.set('introShown', true);
                }
            });
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.showLog();
        });
    };
    return MyApp;
}());
app_component___decorate([
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"](__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */]),
    app_component___metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = app_component___decorate([
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        template: "\n    <ion-menu [content]=\"content\">\n      <ion-header>\n        <ion-toolbar color=\"sky\">\n          <ion-title>Jalan-Jalan</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list>\n          <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n            {{p.title}}\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it's poor UX to combine STGB with side menus -->\n    <ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"false\"></ion-nav>\n  "
    }),
    app_component___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* Store */],
        UserActions,
        __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__actions_recomm_actions__["a" /* RecommActions */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        GoogleService])
], MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.services.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recommendation_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_place_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(41);






/**
 * Created by solehuddien on 27/04/17.
 */
var APP_SERVICES = [
    GoogleService,
    __WEBPACK_IMPORTED_MODULE_3__services_recommendation_service__["a" /* RecommendationService */],
    __WEBPACK_IMPORTED_MODULE_4__services_place_service__["a" /* PlaceService */],
    __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */],
    __WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */]
];
//# sourceMappingURL=app.services.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(26);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    app_module___WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"]({
        declarations: [MyApp],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["b" /* StoreModule */].provideStore(APP_REDUCERS),
            app_module___WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(MyApp, {
                preloadModules: true
            }, {
                links: [
                    { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/explanation/explanation.module#ExplanationPageModule', name: 'ExplanationPage', segment: 'explanation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/begin/begin.module#BeginPageModule', name: 'BeginPage', segment: 'begin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recommendation/recommendation.module#RecommendationPageModule', name: 'RecommendationPage', segment: 'recommendation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/result.selection/result.selection.module#ResultSelectionPageModule', name: 'ResultSelectionPage', segment: 'result.selection', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enhance/enhance.module#EnhancePageModule', name: 'EnhancePage', segment: 'enhance', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/attractions/attractions.module#AttractionsPageModule', name: 'AttractionsPage', segment: 'attractions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/begin2/begin2.module#Begin2PageModule', name: 'Begin2Page', segment: 'begin2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/method.selection/method.selection.module#MethodSelectionPageModule', name: 'MethodSelectionPage', segment: 'method.selection', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/post.feedback/post.feedback.module#PostFeedbackPageModule', name: 'PostFeedbackPage', segment: 'post.feedback', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [app_module___WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [MyApp],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: app_module___WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: app_module___WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }, APP_SERVICES, APP_ACTIONS
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(46);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })
],[45]);
//# sourceMappingURL=main.js.map