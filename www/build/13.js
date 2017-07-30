webpackJsonp([13],{

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/intro/intro.ts
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


var IntroPage = (function () {
    function IntroPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            // {
            //   title: "Hello there",
            //   description: "My name is <b>Rizky Solechudin</b>, a (2013) Computer Science student at Telkom University.",
            //   image: "assets/images/intro/1.jpg",
            // },
            // {
            //   title: "Welcome to the Recommender System for Bandung's Tourist Attraction!",
            //   description: "This recommender system is made for <b>My Final Project</b>, for pursuing the Bachelor Degree.",
            //   image: "assets/images/intro/2.jpg",
            // },
            // {
            //   title: "Will you help me?",
            //   description: "You can help me by filling <b>a Survey</b>, by using this app, keep going on the <b>Recommender Page</b>, and you are good to go.",
            //   image: "assets/images/intro/3.jpg",
            // }
            {
                title: "Halo",
                description: "Perkenalkan, saya <b>Rizky Solechudin</b>, mahasiswa S1 Teknik Informatika Telkom University tahun angkatan 2013",
                image: "assets/images/intro/1.jpg",
            },
            {
                title: "Selamat datang!",
                description: "Aplikasi ini merupakan Sistem Rekomendasi Tempat Wisata yang ada di Bandung Raya, sistem ini dibuat sebagai implementasi dari <b>Tugas Akhir</b> yang saya kerjakan.",
                image: "assets/images/intro/2.jpg",
            },
            {
                title: "Bantu saya",
                description: "Anda dapat membantu saya dalam pengerjaan Tugas Akhir ini dengan menggunakan aplikasi ini, terimakasih!",
                image: "assets/images/intro/3.jpg",
            }
        ];
    }
    IntroPage.prototype.goToHome = function () {
        this.navCtrl.setRoot('MethodSelectionPage');
    };
    return IntroPage;
}());
IntroPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-intro',
        template: "\n    <ion-content padding>\n        <ion-slides pager>\n            <ion-slide *ngFor=\"let slide of slides\">\n                <img style=\"width: 60%\" [src]=\"slide.image\" class=\"slide-image\"/>\n                <h2 class=\"slide-title\" [innerHTML]=\"slide.title\"></h2>\n                <p [innerHTML]=\"slide.description\"></p>\n            </ion-slide>\n            <ion-slide>\n                <img src=\"assets/images/intro/4.jpg\" class=\"slide-image\"/>\n                <h2 class=\"slide-title\">Anda siap?</h2>\n                <button (click)=goToHome() ion-button large clear icon-end color=\"primary\">\n                    Lanjut\n                    <ion-icon name=\"arrow-forward\"></ion-icon>\n                </button>\n            </ion-slide>\n        </ion-slides>\n    </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], IntroPage);

//# sourceMappingURL=intro.js.map
// CONCATENATED MODULE: ./src/pages/intro/intro.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var intro_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = (function () {
    function IntroPageModule() {
    }
    return IntroPageModule;
}());
IntroPageModule = intro_module___decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"]({
        declarations: [IntroPage],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(IntroPage)],
        entryComponents: [IntroPage]
    })
], IntroPageModule);

//# sourceMappingURL=intro.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map