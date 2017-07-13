webpackJsonp([11],{

/***/ 22:
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
    return RecommActions;
}());
RecommActions.SELECT_ROOT_CLASS = '[Recomm] Select Root Class';
RecommActions.SELECT_CLASS = '[Recomm] Select Class';
RecommActions.LOAD_CLASS = '[Recomm] Load Class';
RecommActions.SELECT_PLACES = '[Recomm] Select Places';
RecommActions = RecommActions_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]()
], RecommActions);

var RecommActions_1;
//# sourceMappingURL=recomm.actions.js.map

/***/ }),

/***/ 23:
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

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(8);
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
    return UserService;
}());
UserService = __decorate([
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 32;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		93,
		10
	],
	"../pages/attractions/attractions.module": [
		92,
		9
	],
	"../pages/begin/begin.module": [
		87,
		8
	],
	"../pages/details/details.module": [
		84,
		7
	],
	"../pages/enhance/enhance.module": [
		90,
		2
	],
	"../pages/explanation/explanation.module": [
		86,
		6
	],
	"../pages/feedback/feedback.module": [
		89,
		3
	],
	"../pages/intro/intro.module": [
		91,
		5
	],
	"../pages/maps/maps.module": [
		83,
		1
	],
	"../pages/place/place.module": [
		85,
		0
	],
	"../pages/recommendation/recommendation.module": [
		88,
		4
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
webpackAsyncContext.id = 34;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(19);
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(19);
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
        console.log("params", params);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/reducers/attractions.reducer.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_attractions_actions__ = __webpack_require__(23);

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
    return UserActions;
}());
UserActions.SET_IP_API = '[User] Set IP API';
UserActions = UserActions_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]()
], UserActions);

var UserActions_1;
//# sourceMappingURL=user.actions.js.map
// CONCATENATED MODULE: ./src/reducers/user.reducer.ts

var user_reducer_initialState = {
    ipApi: {}
};
function UserReducer(state, action) {
    if (state === void 0) { state = user_reducer_initialState; }
    switch (action.type) {
        case UserActions.SET_IP_API:
            return Object.assign({}, state, { ipApi: action.payload });
        default:
            return state;
    }
    ;
}
//# sourceMappingURL=user.reducer.js.map
// CONCATENATED MODULE: ./src/reducers/recomm.reducer.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(22);

var recomm_reducer_initialState = {
    selectedRootClass: [],
    selectedClass: [[]],
    loadedClass: [[]],
    selectedPlaces: []
};
function RecommReducer(state, action) {
    if (state === void 0) { state = recomm_reducer_initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SELECT_ROOT_CLASS:
            return Object.assign({}, state, { selectedRootClass: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SELECT_CLASS:
            return Object.assign({}, state, { selectedClass: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].LOAD_CLASS:
            return Object.assign({}, state, { loadedClass: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */].SELECT_PLACES:
            return Object.assign({}, state, { selectedPlaces: action.payload });
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
/* harmony import */ var app_actions___WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_attractions_actions__ = __webpack_require__(23);



var APP_ACTIONS = [
    __WEBPACK_IMPORTED_MODULE_2__actions_attractions_actions__["a" /* AttractionsActions */],
    UserActions,
    app_actions___WEBPACK_IMPORTED_MODULE_0__actions_recomm_actions__["a" /* RecommActions */]
];
//# sourceMappingURL=app.actions.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(21);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(store, userActions, userService, platform, loadingCtrl, storage, splashScreen, statusBar) {
        var _this = this;
        this.store = store;
        this.userActions = userActions;
        this.userService = userService;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.rootPage = 'RecommendationPage';
        // this.presentLoading();
        this.userService.ipApi().subscribe(function (ipApi) {
            _this.store.dispatch(_this.userActions.setIpApi(ipApi));
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Recommender', component: 'RecommendationPage' },
            { title: 'Browse', component: 'AttractionsPage' },
            { title: 'About', component: 'AboutPage' }
            // { title: 'Advanced', component: AdvancedPage },
            // { title: 'Settings', component: SettingsPage },
            // { title: 'Account', component: AccountPage }
        ];
    }
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
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.storage.get('introShown').then(function (result) {
                if (result) {
                    _this.rootPage = 'RecommendationPage';
                }
                else {
                    _this.rootPage = 'IntroPage';
                    _this.storage.set('introShown', true);
                }
            });
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    return MyApp;
}());
app_component___decorate([
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"](__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = app_component___decorate([
    __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"]({
        template: "\n    <ion-menu [content]=\"content\">\n      <ion-header>\n        <ion-toolbar color=\"sky\">\n          <ion-title>Jalan-Jalan</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list>\n          <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n            {{p.title}}\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it's poor UX to combine STGB with side menus -->\n    <ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"false\"></ion-nav>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* Store */],
        UserActions,
        __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
], MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/services/google.service.ts
/* harmony import */ var google_service___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var google_service___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var google_service___metadata = (this && this.__metadata) || function (k, v) {
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
    return GoogleService;
}());
GoogleService = google_service___decorate([
    google_service___WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"](),
    google_service___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GoogleService);

//# sourceMappingURL=google.service.js.map
// CONCATENATED MODULE: ./src/app/app.services.ts
/* harmony import */ var app_services___WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_place_service__ = __webpack_require__(40);




/**
 * Created by solehuddien on 27/04/17.
 */
var APP_SERVICES = [
    GoogleService,
    __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__["a" /* RecommendationService */],
    __WEBPACK_IMPORTED_MODULE_3__services_place_service__["a" /* PlaceService */],
    app_services___WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]
];
//# sourceMappingURL=app.services.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(38);
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
                    { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/explanation/explanation.module#ExplanationPageModule', name: 'ExplanationPage', segment: 'explanation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/begin/begin.module#BeginPageModule', name: 'BeginPage', segment: 'begin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recommendation/recommendation.module#RecommendationPageModule', name: 'RecommendationPage', segment: 'recommendation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enhance/enhance.module#EnhancePageModule', name: 'EnhancePage', segment: 'enhance', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/attractions/attractions.module#AttractionsPageModule', name: 'AttractionsPage', segment: 'attractions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(42);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 8:
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
var API_BASE_URL = "http://jalan-belakang.herokuapp.com";
var API_BASE_PORT = "";
var API_URL = "" + API_BASE_URL + API_BASE_PORT;
//# sourceMappingURL=constants.js.map

/***/ })

},[41]);
//# sourceMappingURL=main.js.map